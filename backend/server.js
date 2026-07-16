import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import pool from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Trust the first proxy hop so the client's real IP (via X-Forwarded-For) is used
// for rate limiting when deployed behind Render/Railway/Vercel/Nginx/Cloudflare.
app.set('trust proxy', 1);

// Global rate limiter: cap each IP to 100 requests per 15-minute window to
// protect all API routes from abuse, brute-force attempts, and excessive traffic.
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 3, // limit each IP to 100 requests per window
    standardHeaders: true, // expose limit info via the standard `RateLimit-*` headers
    legacyHeaders: false, // disable the deprecated `X-RateLimit-*` headers
    // Custom 429 handler so clients receive a consistent JSON error shape.
    handler: (_req, res) => {
        res.status(429).json({
            success: false,
            message: 'Too many requests. Please wait a minutes.',
        });
    },
});

app.use(cors());
app.use(express.json());

// Apply the rate limiter globally so it covers every current and future API route.
app.use(apiLimiter);

const REQUIRED_FIELDS = ['firstName', 'lastName', 'company', 'email', 'phone', 'country', 'message'];

app.post('/api/contact', async (req, res) => {
    const body = req.body || {};
    const { firstName, lastName, jobTitle, company, email, phone, country, message } = body;

    const missing = REQUIRED_FIELDS.filter((field) => !String(body[field] ?? '').trim());
    if (missing.length > 0) {
        return res.status(400).json({ error: `Missing required field(s): ${missing.join(', ')}` });
    }

    try {
        const result = await pool.query(
            `INSERT INTO contacts (first_name, last_name, job_title, company, email, phone, country, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
             RETURNING *`,
            [
                firstName.trim(),
                lastName.trim(),
                jobTitle?.trim() || null,
                company.trim(),
                email.trim(),
                phone.trim(),
                country.trim(),
                message.trim(),
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error inserting contact:', err);
        res.status(500).json({ error: 'Failed to save your submission. Please try again.' });
    }
});

app.get('/api/contact', async (_req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching contacts:', err);
        res.status(500).json({ error: 'Failed to fetch submissions.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
