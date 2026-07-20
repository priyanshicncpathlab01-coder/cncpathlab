'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import {
    TestTube,
    ShieldCheck,
    TrendingUp,
    Microscope,
    CheckCircle2,
    FlaskConical,
    Gauge,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const genomicsImg = '/assets/genomics.webp';
// Faint biotech decoration rendered inside each glass card (DNA helix,
// glowing molecular nodes and connecting lines) — kept at very low opacity.
const CardDecoration = () => (
    <svg
        aria-hidden="true"
        className="rtpcr-drift pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 text-teal-300/50"
        viewBox="0 0 160 160"
        fill="none"
    >
        {/* DNA helix */}
        <path d="M50 8 C90 40 30 72 70 104 C90 120 60 140 60 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M78 8 C38 40 98 72 58 104 C38 120 68 140 68 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        {[20, 44, 68, 92, 116].map((y, i) => (
            <line key={i} x1="52" y1={y} x2="76" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.5" />
        ))}
        {/* molecular nodes + connections */}
        <line x1="118" y1="40" x2="140" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="140" y1="70" x2="120" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="118" cy="40" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="140" cy="70" r="2.4" fill="currentColor" opacity="0.8" />
        <circle cx="120" cy="100" r="3.2" fill="currentColor" opacity="0.8" />
    </svg>
);

// Premium, cursor-reactive glassmorphism card — light frosted glass, dark readable
// typography, sea-green/cyan glowing border, 3D tilt and cursor-following light.
const GlassCard = ({ icon: Icon, eyebrow, children, index, className = '' }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(520px circle at ${glareX} ${glareY}, rgba(20,184,166,0.20), transparent 55%)`;

    const handleMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - rect.left) / rect.width);
        my.set((e.clientY - rect.top) / rect.height);
    };
    const handleLeave = () => {
        mx.set(0.5);
        my.set(0.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 44, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative h-full [perspective:1400px] ${className}`}
        >
            {/* breathing sea-green halo */}
            <div className="rtpcr-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.30),rgba(6,182,212,0.12)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                {/* animated shimmering gradient border */}
                <div className="rtpcr-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                {/* frosted glass body — light gray, dark readable text */}
                <div className="relative h-full overflow-hidden rounded-[26px] border border-white/60 bg-white/70 backdrop-blur-xl backdrop-saturate-150 p-8 md:p-10 shadow-[0_18px_50px_-12px_rgba(13,148,136,0.30),inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors duration-400 group-hover:bg-white/80">
                    {/* top-edge reflection */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                    {/* soft inner cyan radial highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.12),transparent_45%)]" />
                    {/* cursor-following light */}
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {/* periodic shine sweep */}
                    <div className="rtpcr-shine pointer-events-none absolute inset-0" />
                    {/* faint biotech decoration */}
                    <CardDecoration />

                    {/* content lifted forward in 3D */}
                    <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative inline-flex shrink-0">
                                {/* rotating glow behind badge */}
                                <span className="rtpcr-spin-slow pointer-events-none absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(45,212,191,0.7),rgba(34,211,238,0.1),rgba(52,211,153,0.7),rgba(34,211,238,0.1),rgba(45,212,191,0.7))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                                <span className="rtpcr-float relative flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/60 bg-gradient-to-br from-primary-500 to-teal-500 text-white shadow-[0_8px_20px_rgba(13,148,136,0.35)]">
                                    <Icon className="h-7 w-7" />
                                </span>
                            </div>
                            {eyebrow && (
                                <span className="text-xs font-bold uppercase tracking-widest text-teal-700">{eyebrow}</span>
                            )}
                        </div>
                        <div className="text-lg font-medium leading-[1.8] text-[#1A1A1A] [&_strong]:font-semibold [&_strong]:text-[#0F172A] space-y-4">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const overviewCards = [
    {
        icon: TrendingUp,
        eyebrow: 'The Clinical Need',
        body: (
            <p>
                Cancer continues to be a growing public health concern in India. According to the Indian Council of Medical Research–National Cancer Registry Programme (ICMR-NCRP), the number of cancer cases is projected to increase from approximately <strong>1.46 million in 2022</strong> to <strong>1.57 million by 2025</strong>.
            </p>
        ),
    },
    {
        icon: Microscope,
        eyebrow: 'A Molecular Breakthrough',
        body: (
            <p>
                Early and accurate diagnosis is essential for improving patient outcomes. Advances in molecular diagnostic technologies, particularly <strong>Real-Time Polymerase Chain Reaction (RT-PCR Test)</strong>, have transformed the detection and monitoring of cancer. RT-PCR is a highly sensitive and specific molecular technique capable of identifying cancer-associated genetic alterations and detecting <strong>Minimal Residual Disease (MRD)</strong> with exceptional accuracy.
            </p>
        ),
    },
    {
        icon: ShieldCheck,
        eyebrow: 'Precision Oncology',
        body: (
            <p>
                By detecting known fusion transcripts and other disease-associated genetic markers, RT-PCR supports early diagnosis, treatment monitoring, therapeutic decision-making, and relapse risk assessment, making it an indispensable tool in modern precision oncology.
            </p>
        ),
    },
];

const overviewHighlights = [
    'Highly sensitive, specific detection of cancer-associated genetic alterations.',
    'Minimal Residual Disease (MRD) monitoring with exceptional accuracy.',
    'Detection of known fusion transcripts and disease-associated markers.',
    'Support for treatment monitoring and relapse risk assessment.',
];

const RTPCR = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hero video parallax — video drifts slower than the page for depth.
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroVideoY = useTransform(heroScroll, [0, 1], ['0%', '8%']);
    const heroVideoScale = useTransform(heroScroll, [0, 1], [1, 1.05]);

    // Overview image parallax — image glides independently within its frame.
    const overviewImgRef = useRef(null);
    const { scrollYProgress: overviewScroll } = useScroll({ target: overviewImgRef, offset: ['start end', 'end start'] });
    const overviewImgY = useTransform(overviewScroll, [0, 1], ['-4%', '4%']);
    const overviewImgScale = useTransform(overviewScroll, [0, 1], [1.1, 1.16]);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            <style>{`
                @property --rtpcr-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes rtpcr-border-spin { to { --rtpcr-angle: 360deg; } }
                @keyframes rtpcr-hero-float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-6px,0); } }
                @keyframes rtpcr-img-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                @keyframes rtpcr-img-breathe { 0%, 100% { opacity: .25; transform: scale(1); } 50% { opacity: .45; transform: scale(1.03); } }
                @keyframes rtpcr-shine {
                    0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                    18% { opacity: 1; }
                    45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                }
                @keyframes rtpcr-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes rtpcr-spin-slow { to { transform: rotate(360deg); } }
                @keyframes rtpcr-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                @keyframes rtpcr-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                @keyframes rtpcr-cap-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }

                .rtpcr-hero-float { animation: rtpcr-hero-float 7s ease-in-out infinite; will-change: transform; }
                .rtpcr-img-float { animation: rtpcr-img-float 6s ease-in-out infinite; will-change: transform; }
                .rtpcr-img-breathe { animation: rtpcr-img-breathe 5.5s ease-in-out infinite; will-change: opacity, transform; }
                .rtpcr-border {
                    background: conic-gradient(from var(--rtpcr-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                    animation: rtpcr-border-spin 7s linear infinite;
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    mask-composite: exclude;
                    padding: 1.5px;
                }
                .rtpcr-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    width: 45%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent);
                    animation: rtpcr-shine 6s ease-in-out infinite;
                }
                .rtpcr-float { animation: rtpcr-float 5s ease-in-out infinite; }
                .rtpcr-spin-slow { animation: rtpcr-spin-slow 9s linear infinite; }
                .rtpcr-breathe { animation: rtpcr-breathe 6s ease-in-out infinite; }
                .rtpcr-drift { animation: rtpcr-drift 11s ease-in-out infinite; }
                .rtpcr-cap-particle { animation: rtpcr-cap-particle 9s ease-in-out infinite; }

                @media (prefers-reduced-motion: reduce) {
                    .rtpcr-hero-float, .rtpcr-img-float, .rtpcr-img-breathe, .rtpcr-border, .rtpcr-shine::before,
                    .rtpcr-float, .rtpcr-spin-slow, .rtpcr-breathe, .rtpcr-drift, .rtpcr-cap-particle {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ y: heroVideoY, scale: heroVideoScale }}
                    className="absolute -inset-[12%] z-0 will-change-transform"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="rtpcr-hero-float w-full h-full object-cover"
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </motion.div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 pointer-events-none" />

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <TestTube className="w-4 h-4" />
                            Molecular Diagnostics
                        </div>
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Real-Time Polymerase Chain Reaction <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                (RT-PCR Test)
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Highly sensitive molecular diagnostics for precision oncology — detecting fusion transcripts and Minimal Residual Disease with exceptional accuracy.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Our RT-PCR service identifies cancer-associated genetic alterations directly from blood and bone marrow, supporting early diagnosis, treatment monitoring, and relapse risk assessment across modern precision oncology programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Cancer Diagnosis and the Role of RT-PCR Test"
                        subtitle="A highly sensitive and specific molecular technique that has transformed the detection and monitoring of cancer."
                    />

                    <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 grid grid-cols-1 gap-6">
                            {overviewCards.map((card, idx) => (
                                <GlassCard key={idx} icon={card.icon} eyebrow={card.eyebrow} index={idx}>
                                    {card.body}
                                </GlassCard>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative group lg:sticky lg:top-28"
                        >
                            {/* idle breathing sea-green / cyan glow */}
                            <div className="rtpcr-img-breathe pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(20,184,166,0.4),rgba(6,182,212,0.18)_58%,transparent_75%)] blur-2xl" />

                            <div
                                ref={overviewImgRef}
                                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-[transform,box-shadow,border-color] duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:border-teal-300/70 group-hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.5),0_0_40px_-8px_rgba(34,211,238,0.4)]"
                            >
                                {/* parallax + subtle scroll zoom */}
                                <motion.div style={{ y: overviewImgY, scale: overviewImgScale }} className="will-change-transform">
                                    <div className="rtpcr-img-float">
                                        <img
                                            src={genomicsImg}
                                            alt="Real-time PCR molecular diagnostics laboratory"
                                            loading="lazy"
                                            className="w-full h-auto md:h-[560px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
                                        />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                                {/* top-edge glass reflection */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/25 to-transparent" />
                                {/* sea-green glowing border on hover */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-inset ring-teal-400/0 group-hover:ring-2 group-hover:ring-teal-400/60 transition-all duration-[400ms]" />
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4">Why RT-PCR</h4>
                                <ul className="space-y-3">
                                    {overviewHighlights.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PML-RARA Kits — premium frosted glass on dark biotech backdrop */}
            <section className="relative z-10 overflow-hidden border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
                {/* Faint animated biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cpath d='M30 0 L60 17 L60 52 L30 69 L0 52 L0 17 Z M30 69 L60 86 L60 104 M30 69 L0 86 L0 104 M30 0 L30 -17' fill='none' stroke='%232dd4bf' stroke-width='1'/%3E%3C/svg%3E\")",
                            backgroundSize: '60px 104px',
                        }}
                    />
                    <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
                    <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
                    {[
                        { left: '12%', top: '30%', d: '0s' },
                        { left: '82%', top: '22%', d: '1.4s' },
                        { left: '68%', top: '68%', d: '2.6s' },
                        { left: '28%', top: '78%', d: '3.4s' },
                        { left: '48%', top: '18%', d: '2s' },
                    ].map((p, i) => (
                        <span
                            key={i}
                            className="rtpcr-cap-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="PML-RARA Real-Time PCR Kits"
                        subtitle="Multiplex, one-step RT-PCR assays for the diagnosis and molecular monitoring of Acute Promyelocytic Leukemia (APL)."
                        className="[&_h2]:text-white [&_h2]:drop-shadow-[0_0_24px_rgba(45,212,191,0.25)] [&_p]:text-slate-300"
                    />

                    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
                        {/* Qualitative Kit */}
                        <GlassCard icon={FlaskConical} eyebrow="Qualitative Detection" index={0}>
                            <h3 className="text-2xl font-black tracking-tight text-[#0F172A] mb-2">PML-RARA Qualitative Real-Time PCR Kit</h3>
                            <p>
                                The <strong>PML-RARA Qualitative Real-Time PCR Kit</strong> is an <strong>in vitro</strong>, multiplex, one-step RT-PCR assay developed for the qualitative detection of <strong>PML-RARA fusion transcripts (bcr1, bcr2, and bcr3)</strong> from RNA extracted from <strong>human peripheral blood</strong> or <strong>bone marrow aspirate</strong> samples.
                            </p>
                            <p>
                                The assay simultaneously amplifies the <strong>ABL1</strong> internal control within a single reaction, ensuring reliable assessment of sample quality and accurate identification of PML-RARA fusion transcripts. It supports the diagnosis and molecular evaluation of <strong>Acute Promyelocytic Leukemia (APL)</strong> by providing dependable qualitative detection of disease-associated genetic alterations.
                            </p>
                        </GlassCard>

                        {/* Quantitative Kit */}
                        <GlassCard icon={Gauge} eyebrow="Quantitative Detection" index={1}>
                            <h3 className="text-2xl font-black tracking-tight text-[#0F172A] mb-2">PML-RARA Quantitative Real-Time PCR Kit</h3>
                            <p>
                                The <strong>PML-RARA Quantitative Real-Time PCR Kit</strong> is an <strong>in vitro</strong>, multiplex, one-step RT-PCR assay designed for the <strong>specific differentiation and quantitative detection</strong> of <strong>PML-RARA fusion transcripts</strong>, including <strong>bcr1 (long)/bcr2 (variant)</strong> and <strong>bcr3 (short)</strong>, from RNA extracted from <strong>human peripheral blood</strong> or <strong>bone marrow aspirate</strong> samples.
                            </p>
                            <p>
                                The assay simultaneously amplifies the <strong>ABL1</strong> internal control within the same reaction, providing robust quality assurance and accurate quantification of PML-RARA transcripts. It supports the diagnosis and long-term molecular monitoring of <strong>Acute Promyelocytic Leukemia (APL)</strong> by enabling highly sensitive measurement of disease-associated fusion transcripts.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default RTPCR;
