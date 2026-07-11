import { useEffect, useRef, useState, Fragment } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
    useInView,
} from 'framer-motion';
import {
    Dna,
    Microscope,
    FlaskConical,
    Brain,
    ScanLine,
    Monitor,
    Cpu,
    Search,
    SearchCheck,
    TestTube,
    Stethoscope,
    Crosshair,
    Users,
    Globe,
    ClipboardList,
    Sparkles,
    ArrowRight,
} from 'lucide-react';

const stats = [
    { icon: FlaskConical, value: 500, suffix: '+', label: 'Research Projects' },
    { icon: Dna, value: 1200, suffix: '+', label: 'Biomarkers Supported' },
    { icon: Microscope, value: 40, suffix: '+', label: 'Laboratory Technologies' },
    { icon: Globe, value: 75, suffix: '+', label: 'Global Collaborations' },
    { icon: Users, value: 120, suffix: '+', label: 'Scientific Experts' },
    { icon: ClipboardList, value: 300, suffix: '+', label: 'Clinical Studies' },
];

const timeline = [
    { icon: Search, label: 'Research' },
    { icon: TestTube, label: 'Sample Processing' },
    { icon: Dna, label: 'Biomarker Analysis' },
    { icon: Cpu, label: 'AI Image Analysis' },
    { icon: Stethoscope, label: 'Scientific Interpretation' },
    { icon: Sparkles, label: 'Final Insights' },
];

const trustItems = [
    { icon: Crosshair, label: 'Precision Diagnostics' },
    { icon: ScanLine, label: 'Advanced Imaging' },
    { icon: Monitor, label: 'Digital Pathology' },
    { icon: SearchCheck, label: 'Biomarker Discovery' },
    { icon: Dna, label: 'Translational Research' },
    { icon: Brain, label: 'AI-powered Analysis' },
];

// Faint biotech decoration rendered inside each feature card.
const CardDecoration = () => (
    <svg
        aria-hidden="true"
        className="wc-drift pointer-events-none absolute -bottom-6 -right-4 w-36 h-36 text-teal-300/40"
        viewBox="0 0 160 160"
        fill="none"
    >
        <path d="M50 8 C90 40 30 72 70 104 C90 120 60 140 60 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M78 8 C38 40 98 72 58 104 C38 120 68 140 68 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        {[20, 44, 68, 92, 116].map((y, i) => (
            <line key={i} x1="52" y1={y} x2="76" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.5" />
        ))}
    </svg>
);

// Premium, cursor-reactive glass feature card.
const FeatureCard = ({ icon: Icon, title, description, index }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(480px circle at ${glareX} ${glareY}, rgba(45,212,191,0.20), transparent 55%)`;

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
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (index % 3) * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-full [perspective:1400px]"
        >
            <div className="wc-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.32),rgba(6,182,212,0.14)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                <div className="wc-card-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/25 bg-[linear-gradient(135deg,rgba(245,247,250,0.9),rgba(219,225,231,0.86))] backdrop-blur-xl backdrop-saturate-150 p-8 shadow-[0_18px_50px_-12px_rgba(13,148,136,0.35),inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors duration-400 group-hover:bg-[linear-gradient(135deg,rgba(250,251,253,0.95),rgba(226,231,236,0.9))]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.16),transparent_45%)]" />
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="wc-shine pointer-events-none absolute inset-0" />
                    <CardDecoration />

                    <div className="relative flex h-full flex-col" style={{ transform: 'translateZ(40px)' }}>
                        <div className="relative mb-6 inline-flex">
                            <span className="wc-spin-slow pointer-events-none absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,rgba(45,212,191,0.75),rgba(34,211,238,0.1),rgba(52,211,153,0.75),rgba(34,211,238,0.1),rgba(45,212,191,0.75))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="wc-float relative flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/30 bg-white/10 text-teal-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm group-hover:text-teal-100 transition-colors duration-300">
                                <Icon className="h-8 w-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-[#1a1a1a] mb-3">{title}</h3>
                        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mb-4 origin-left transition-all duration-400 group-hover:w-16" />
                        <p className="text-[15px] leading-relaxed text-slate-700 flex-grow">{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const StatCounter = ({ icon: Icon, value, suffix, label, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf;
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
            className="group flex flex-col items-center text-center"
        >
            <div className="relative mb-4">
                <span className="wc-spin-slow pointer-events-none absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,rgba(45,212,191,0.6),transparent,rgba(34,211,238,0.6),transparent,rgba(45,212,191,0.6))] blur-[5px] opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-teal-300/25 bg-white/[0.06] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_30px_-8px_rgba(13,148,136,0.5)] group-hover:scale-105 transition-transform duration-400">
                    <div className="flex flex-col items-center">
                        <Icon className="mb-0.5 h-5 w-5 text-teal-300" />
                        <span className="text-xl font-black text-white tabular-nums">
                            {display.toLocaleString()}{suffix}
                        </span>
                    </div>
                </div>
            </div>
            <span className="text-sm font-medium text-slate-300 max-w-[9rem]">{label}</span>
        </motion.div>
    );
};

const WhyChooseSection = ({ subtitle, items = [] }) => {
    return (
        <section className="wc-section relative z-10 overflow-hidden bg-[#060d1a] py-24 md:py-28 text-white border-t border-slate-800/60">
            <style>{`
                @property --wc-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes wc-border-spin { to { --wc-angle: 360deg; } }
                @keyframes wc-shine {
                    0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                    18% { opacity: 1; }
                    45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                }
                @keyframes wc-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes wc-spin-slow { to { transform: rotate(360deg); } }
                @keyframes wc-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                @keyframes wc-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                @keyframes wc-hex-pan { 0% { background-position: 0 0; } 100% { background-position: 240px 140px; } }
                @keyframes wc-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-26px); opacity: 1; } }
                @keyframes wc-gradient-move { 0%, 100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(4%,-3%,0) scale(1.08); } }
                @keyframes wc-beam { 0% { transform: translateX(-30%) rotate(8deg); opacity: 0; } 40% { opacity: .5; } 100% { transform: translateX(60%) rotate(8deg); opacity: 0; } }
                @keyframes wc-line-flow { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }

                .wc-card-border {
                    background: conic-gradient(from var(--wc-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                    animation: wc-border-spin 7s linear infinite;
                }
                .wc-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    width: 45%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
                    animation: wc-shine 6s ease-in-out infinite;
                }
                .wc-float { animation: wc-float 5s ease-in-out infinite; }
                .wc-spin-slow { animation: wc-spin-slow 9s linear infinite; }
                .wc-breathe { animation: wc-breathe 6s ease-in-out infinite; }
                .wc-drift { animation: wc-drift 11s ease-in-out infinite; }
                .wc-hexgrid { animation: wc-hex-pan 40s linear infinite; }
                .wc-particle { animation: wc-particle 9s ease-in-out infinite; }
                .wc-blob { animation: wc-gradient-move 18s ease-in-out infinite; }
                .wc-beam { animation: wc-beam 12s ease-in-out infinite; }
                .wc-line {
                    background-image: linear-gradient(90deg, rgba(45,212,191,0.15), rgba(45,212,191,0.7), rgba(34,211,238,0.7), rgba(45,212,191,0.15));
                    background-size: 200% 100%;
                    animation: wc-line-flow 4s linear infinite;
                }
                .wc-btn-shine::after {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    width: 40%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent);
                    transform: translateX(-150%) skewX(-18deg);
                    animation: wc-shine 4.5s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .wc-card-border, .wc-shine::before, .wc-float, .wc-spin-slow, .wc-breathe, .wc-drift,
                    .wc-hexgrid, .wc-particle, .wc-blob, .wc-beam, .wc-line, .wc-btn-shine::after {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* Animated biotech background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* soft radial gradient blobs */}
                <div className="wc-blob absolute -left-[10%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-teal-500/15 blur-[120px]" />
                <div className="wc-blob absolute right-[-8%] top-[30%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/15 blur-[120px]" style={{ animationDelay: '3s' }} />
                <div className="wc-blob absolute bottom-[-6%] left-[35%] h-[24rem] w-[24rem] rounded-full bg-emerald-500/12 blur-[120px]" style={{ animationDelay: '6s' }} />

                {/* hexagonal scientific grid */}
                <div
                    className="wc-hexgrid absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cpath d='M30 0 L60 17 L60 52 L30 69 L0 52 L0 17 Z M30 69 L60 86 L60 104 M30 69 L0 86 L0 104 M30 0 L30 -17' fill='none' stroke='%232dd4bf' stroke-width='1'/%3E%3C/svg%3E\")",
                        backgroundSize: '60px 104px',
                    }}
                />

                {/* DNA helices + molecular network */}
                <svg className="wc-drift absolute left-[4%] top-[14%] w-28 h-56 text-teal-300/[0.10]" viewBox="0 0 80 200" fill="none" aria-hidden="true">
                    <path d="M20 0 C60 25 -10 55 30 80 C60 100 -10 130 30 160 C55 180 25 195 25 200" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M50 0 C10 25 80 55 40 80 C10 100 80 130 40 160 C15 180 45 195 45 200" stroke="currentColor" strokeWidth="1.5" />
                    {[16, 44, 72, 100, 128, 156].map((y, i) => (
                        <line key={i} x1="24" y1={y} x2="46" y2={y} stroke="currentColor" strokeWidth="1.2" />
                    ))}
                </svg>
                <svg className="wc-drift absolute right-[6%] bottom-[12%] w-40 h-40 text-cyan-300/[0.10]" viewBox="0 0 160 160" fill="none" aria-hidden="true" style={{ animationDelay: '2s' }}>
                    <line x1="20" y1="30" x2="70" y2="60" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="70" y1="60" x2="130" y2="40" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="70" y1="60" x2="90" y2="120" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="90" y1="120" x2="140" y2="130" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="20" y1="30" x2="40" y2="110" stroke="currentColor" strokeWidth="1.2" />
                    {[[20, 30], [70, 60], [130, 40], [90, 120], [140, 130], [40, 110]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3.5" fill="currentColor" />
                    ))}
                </svg>

                {/* soft moving light beams */}
                <div className="wc-beam absolute -top-1/4 left-1/4 h-[150%] w-40 bg-gradient-to-b from-transparent via-teal-300/10 to-transparent blur-2xl" />
                <div className="wc-beam absolute -top-1/4 left-2/3 h-[150%] w-32 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent blur-2xl" style={{ animationDelay: '5s' }} />

                {/* floating microscopic particles */}
                {[
                    { left: '10%', top: '26%', d: '0s' },
                    { left: '84%', top: '18%', d: '1.2s' },
                    { left: '66%', top: '72%', d: '2.4s' },
                    { left: '24%', top: '80%', d: '3.2s' },
                    { left: '46%', top: '12%', d: '1.8s' },
                    { left: '92%', top: '54%', d: '2.9s' },
                ].map((p, i) => (
                    <span
                        key={i}
                        className="wc-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                        style={{ left: p.left, top: p.top, animationDelay: p.d }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-300 mb-6">
                        <Sparkles className="h-4 w-4" />
                        The CNC Path Lab Advantage
                    </div>
                    <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_24px_rgba(45,212,191,0.25)]">
                        <Dna className="hidden sm:block h-9 w-9 text-teal-300 wc-float" />
                        Why Choose CNC Path Lab
                    </h2>
                    <div className="mx-auto mt-6 flex flex-col items-center gap-2">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                        />
                        <div className="h-px w-40 bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
                    </div>
                    {subtitle && (
                        <p className="mt-6 text-lg leading-relaxed text-slate-300">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Feature cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <FeatureCard key={index} {...item} index={index} />
                    ))}
                </div>

                {/* Animated statistics */}
                <div className="mt-24">
                    <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-6">
                        {stats.map((stat, index) => (
                            <StatCounter key={index} {...stat} index={index} />
                        ))}
                    </div>
                </div>

                {/* Interactive workflow timeline */}
                <div className="mt-24">
                    <h3 className="mb-12 text-center text-2xl font-bold text-white">From Sample to Scientific Insight</h3>
                    <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-start md:gap-2">
                        {timeline.map((step, i) => {
                            const StepIcon = step.icon;
                            return (
                                <Fragment key={i}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                                        className="group flex flex-1 flex-col items-center text-center"
                                    >
                                        <div className="relative">
                                            <span className="wc-spin-slow pointer-events-none absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,rgba(45,212,191,0.6),transparent,rgba(34,211,238,0.6),transparent,rgba(45,212,191,0.6))] blur-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-300/25 bg-white/[0.06] text-teal-200 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:border-teal-300/60 group-hover:text-white group-hover:shadow-[0_14px_30px_-10px_rgba(13,148,136,0.6)]">
                                                <StepIcon className="h-7 w-7" />
                                            </div>
                                            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-[11px] font-black text-slate-900">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <span className="mt-4 text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 max-w-[8rem]">
                                            {step.label}
                                        </span>
                                    </motion.div>
                                    {i < timeline.length - 1 && (
                                        <div className="flex items-center justify-center md:mt-8 md:flex-1">
                                            <div className="wc-line h-10 w-px rounded-full md:h-px md:w-full md:min-w-[16px]" />
                                        </div>
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* Trust banner */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        {trustItems.map((item, i) => {
                            const TrustIcon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    className="group flex items-center gap-2.5 rounded-full border border-teal-300/20 bg-white/[0.05] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/50 hover:bg-white/[0.09] hover:shadow-[0_10px_24px_-10px_rgba(13,148,136,0.6)]"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/15 text-teal-300 group-hover:scale-110 transition-transform duration-300">
                                        <TrustIcon className="h-4 w-4" />
                                    </span>
                                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">{item.label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 md:p-14 text-center backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(13,148,136,0.5)]"
                >
                    <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
                    <Dna className="wc-float pointer-events-none absolute left-8 top-8 hidden h-10 w-10 text-teal-300/20 md:block" />
                    <Microscope className="wc-float pointer-events-none absolute bottom-8 right-10 hidden h-10 w-10 text-cyan-300/20 md:block" style={{ animationDelay: '1.5s' }} />

                    <div className="relative">
                        <h3 className="mx-auto max-w-2xl text-2xl md:text-4xl font-black leading-tight text-white">
                            Partner with a world-class <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">precision diagnostics</span> team
                        </h3>
                        <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-slate-300">
                            From biomarker discovery to AI-powered digital pathology, CNC Path Lab delivers rigorous, translational science that moves your program forward.
                        </p>
                        <button
                            type="button"
                            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                            className="wc-btn-shine group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-4 text-base font-bold text-slate-900 shadow-[0_10px_30px_-8px_rgba(45,212,191,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(45,212,191,0.9)]"
                        >
                            <span className="relative z-10">Contact Our Scientific Team</span>
                            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
