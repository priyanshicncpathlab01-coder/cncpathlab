import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import {
    Microscope,
    Search,
    Layers,
    ScanLine,
    Cpu,
    Brain,
    Monitor,
    FileCheck,
    CheckCircle2,
    ShieldCheck,
    Stethoscope,
    Dna,
    FlaskConical,
    SearchCheck,
    Target,
    ClipboardList,
    Pill,
    Users,
    Building2,
    Layers3,
    Workflow,
    BarChart3,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
import bgVideo from '../assets/bgvideo.mp4';
import tissueImg from '../assets/tissue.webp';
import diagnosticsImg from '../assets/diagnostics.jpg';

// Light premium biotech palette cycled across the application cards.
const appAccents = [
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F5FAFF 100%)', iconGradient: 'linear-gradient(135deg,#38bdf8,#22d3ee)', glow: 'rgba(56,189,248,0.30)', glare: 'rgba(56,189,248,0.20)', accent: 'text-sky-600', ring: 'group-hover:ring-sky-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F0FFF8 100%)', iconGradient: 'linear-gradient(135deg,#34d399,#2dd4bf)', glow: 'rgba(52,211,153,0.30)', glare: 'rgba(45,212,191,0.20)', accent: 'text-emerald-600', ring: 'group-hover:ring-emerald-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#EFFCFF 100%)', iconGradient: 'linear-gradient(135deg,#22d3ee,#06b6d4)', glow: 'rgba(34,211,238,0.30)', glare: 'rgba(34,211,238,0.20)', accent: 'text-cyan-600', ring: 'group-hover:ring-cyan-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F4F2FF 100%)', iconGradient: 'linear-gradient(135deg,#a78bfa,#818cf8)', glow: 'rgba(167,139,250,0.28)', glare: 'rgba(167,139,250,0.18)', accent: 'text-violet-600', ring: 'group-hover:ring-violet-300/60' },
];

// Faint decorative scientific corner element for each application card.
const AppCornerDecoration = () => (
    <svg aria-hidden="true" className="path-drift pointer-events-none absolute -top-3 -right-3 w-24 h-24 opacity-[0.14]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.35" />
        <circle cx="66" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
        <circle cx="38" cy="62" r="2.4" fill="currentColor" fillOpacity="0.5" />
    </svg>
);

// ── Application card (light glassmorphism, cursor-reactive 3D tilt) ────
const ApplicationCard = ({ title, description, icon: Icon, delay, index }) => {
    const accent = appAccents[index % appAccents.length];
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(320px circle at ${glareX} ${glareY}, ${accent.glare}, transparent 55%)`;

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
            initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-full [perspective:1400px]"
        >
            <div className="path-breathe pointer-events-none absolute -inset-2.5 rounded-[30px] opacity-70 blur-2xl" style={{ background: `radial-gradient(circle at 50% 40%, ${accent.glow}, transparent 72%)` }} />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                <div className="path-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div
                    className={`relative flex h-full flex-col items-center text-center overflow-hidden rounded-[26px] border border-white/70 p-8 shadow-[0_14px_40px_-16px_rgba(30,64,175,0.22)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-400 ring-0 ring-inset ${accent.ring} group-hover:ring-2 group-hover:shadow-[0_28px_60px_-20px_rgba(13,148,136,0.4)]`}
                    style={{ background: accent.surface }}
                >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                    <div className="pointer-events-none absolute -top-14 -left-10 h-40 w-52 rounded-full opacity-60" style={{ background: 'radial-gradient(60% 60% at 42% 42%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)' }} />
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className={accent.accent}><AppCornerDecoration /></span>

                    <div className="relative flex h-full flex-col items-center" style={{ transform: 'translateZ(40px)' }}>
                        <div className="relative mb-6 inline-flex">
                            <span className="path-breathe pointer-events-none absolute -inset-2 rounded-full blur-md" style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }} />
                            <span
                                className="path-float relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-400 group-hover:rotate-6 group-hover:scale-110"
                                style={{ background: accent.iconGradient }}
                            >
                                <Icon className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Faint biotech decoration rendered inside each capability card.
const CardDecoration = () => (
    <svg aria-hidden="true" className="path-drift pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 text-teal-500/30" viewBox="0 0 160 160" fill="none">
        <path d="M50 8 C90 40 30 72 70 104 C90 120 60 140 60 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M78 8 C38 40 98 72 58 104 C38 120 68 140 68 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        {[20, 44, 68, 92, 116].map((y, i) => (
            <line key={i} x1="52" y1={y} x2="76" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.5" />
        ))}
        <circle cx="118" cy="40" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="140" cy="70" r="2.4" fill="currentColor" opacity="0.7" />
        <circle cx="120" cy="100" r="3.2" fill="currentColor" opacity="0.7" />
    </svg>
);

// Premium, cursor-reactive light glass capability card (dark readable text).
const CapabilityGlassCard = ({ icon: Icon, title, description, index }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(45,212,191,0.18), transparent 55%)`;

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
            transition={{ delay: (index % 3) * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-full [perspective:1400px]"
        >
            <div className="path-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.22),rgba(6,182,212,0.10)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                <div className="path-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative h-full overflow-hidden rounded-[26px] border border-white/70 bg-white/70 backdrop-blur-xl backdrop-saturate-150 p-8 shadow-[0_14px_44px_-16px_rgba(13,148,136,0.28)] transition-colors duration-400 group-hover:bg-white/80">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.12),transparent_45%)]" />
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <CardDecoration />

                    <div className="relative" style={{ transform: 'translateZ(45px)' }}>
                        <div className="relative mb-6 inline-flex">
                            <span className="path-spin-slow pointer-events-none absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(45,212,191,0.7),rgba(34,211,238,0.1),rgba(52,211,153,0.7),rgba(34,211,238,0.1),rgba(45,212,191,0.7))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="path-float relative flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/60 bg-gradient-to-br from-primary-500 to-teal-500 text-white shadow-[0_8px_20px_rgba(13,148,136,0.35)]">
                                <Icon className="h-7 w-7" />
                            </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-[#111111] mb-3">{title}</h3>
                        <p className="text-[15px] font-medium leading-[1.7] text-[#1A1A1A]">{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const overviewHighlights = [
    'Board-certified pathologists reviewing every case against defined criteria.',
    'Morphology anchored to molecular and biomarker context.',
    'Whole-slide imaging and digital review for objective, reproducible reads.',
    'Support spanning discovery, translational research, and clinical trials.',
];

const capabilities = [
    { icon: Microscope, title: 'Histopathology Evaluation', description: 'Expert microscopic review of tissue sections to characterize disease, grade, and architecture with diagnostic precision.' },
    { icon: Layers3, title: 'Tissue Morphology Assessment', description: 'Detailed evaluation of cellular and structural features to define tissue quality, viability, and pathological change.' },
    { icon: FlaskConical, title: 'H&E Staining & Interpretation', description: 'High-quality hematoxylin and eosin staining with expert interpretation as the foundation for accurate diagnosis.' },
    { icon: Layers, title: 'Immunohistochemistry (IHC) Support', description: 'Antigen localization and protein expression analysis to complement morphology and refine biomarker readouts.' },
    { icon: Target, title: 'Biomarker Assessment', description: 'Objective scoring of tissue-based biomarkers to support stratification, response evaluation, and endpoint analysis.' },
    { icon: Monitor, title: 'Digital Pathology Review', description: 'Fully digital slide review enabling remote collaboration, consistency, and secure long-term data management.' },
    { icon: ScanLine, title: 'Whole-Slide Image Analysis', description: 'Quantitative analysis of digitized slides for reproducible measurement of cells, regions, and expression patterns.' },
    { icon: Stethoscope, title: 'Expert Pathology Consultation', description: 'Access to experienced pathologists for second review, complex cases, and study-specific interpretive guidance.' },
    { icon: Dna, title: 'Translational Research Support', description: 'Bridging tissue morphology with molecular findings to strengthen study design and biomarker strategy.' },
    { icon: ClipboardList, title: 'Clinical Trial Pathology Services', description: 'Standardized, protocol-driven pathology endpoints delivered reliably across multi-site and longitudinal studies.' },
];

const digitalFeatures = [
    { title: 'Whole-Slide Imaging', description: 'High-resolution scanners digitize entire sections into fully reviewable, archival digital slides.', icon: ScanLine },
    { title: 'Digital Slide Review', description: 'Pathologists review, annotate, and collaborate on cases remotely through secure digital workflows.', icon: Monitor },
    { title: 'Quantitative Image Analysis', description: 'Validated algorithms measure cell populations, regions, and expression objectively and reproducibly.', icon: BarChart3 },
    { title: 'AI-Assisted Workflows', description: 'Machine-learning models accelerate detection, segmentation, and scoring under expert supervision.', icon: Brain },
    { title: 'Data-Driven Interpretation', description: 'Structured, quantitative outputs turn tissue review into defensible, analyzable datasets.', icon: Cpu },
    { title: 'Integrated Reporting', description: 'Images, measurements, and pathologist interpretation are delivered together through secure channels.', icon: FileCheck },
];

const applications = [
    { title: 'Oncology Research', description: 'Characterize tumor morphology and biomarker expression to advance cancer research programs.', icon: ShieldCheck },
    { title: 'Drug Development', description: 'Provide tissue-level evidence of target engagement, efficacy, and safety across pipeline stages.', icon: Pill },
    { title: 'Biomarker Validation', description: 'Confirm and quantify tissue-based biomarkers with morphology-anchored, expert interpretation.', icon: SearchCheck },
    { title: 'Translational Medicine', description: 'Connect molecular findings to tissue pathology to bridge discovery and clinical application.', icon: Dna },
    { title: 'Clinical Trials', description: 'Deliver standardized, reproducible pathology endpoints across multi-site and longitudinal studies.', icon: ClipboardList },
    { title: 'Precision Diagnostics', description: 'Support patient stratification and therapy selection with accurate, integrated tissue interpretation.', icon: Target },
];

const whyChooseUs = [
    { title: 'Experienced Pathology Experts', description: 'Board-certified pathologists with deep expertise across histopathology, IHC, and digital review.', icon: Users },
    { title: 'Advanced Laboratory Infrastructure', description: 'Validated staining, imaging, and digital pathology platforms engineered for consistency at scale.', icon: Building2 },
    { title: 'High-Quality Tissue Analysis', description: 'Rigorous protocols and quality control safeguard accuracy from sample receipt through reporting.', icon: ShieldCheck },
    { title: 'Integrated Molecular & Digital Pathology', description: 'Morphology, IHC, and molecular data combined into a single, coherent interpretive picture.', icon: Layers },
    { title: 'Reliable Scientific Interpretation', description: 'Objective, defensible reads with expert oversight you can build research and clinical decisions on.', icon: Stethoscope },
    { title: 'End-to-End Pathology Solutions', description: 'From accessioning to reporting, a complete pathology service delivered under one roof.', icon: Workflow },
];

const PathologyServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hero video parallax — video drifts slower than the page for depth.
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroVideoY = useTransform(heroScroll, [0, 1], ['0%', '8%']);
    const heroVideoScale = useTransform(heroScroll, [0, 1], [1, 1.05]);

    // Overview image parallax.
    const overviewImgRef = useRef(null);
    const { scrollYProgress: overviewScroll } = useScroll({ target: overviewImgRef, offset: ['start end', 'end start'] });
    const overviewImgY = useTransform(overviewScroll, [0, 1], ['-4%', '4%']);
    const overviewImgScale = useTransform(overviewScroll, [0, 1], [1.1, 1.16]);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            <style>{`
                @property --path-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes path-border-spin { to { --path-angle: 360deg; } }
                @keyframes path-hero-float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-6px,0); } }
                @keyframes path-img-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                @keyframes path-img-breathe { 0%, 100% { opacity: .25; transform: scale(1); } 50% { opacity: .45; transform: scale(1.03); } }
                @keyframes path-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes path-spin-slow { to { transform: rotate(360deg); } }
                @keyframes path-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                @keyframes path-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                @keyframes path-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }
                @keyframes path-dash { to { stroke-dashoffset: -1000; } }

                .path-hero-float { animation: path-hero-float 7s ease-in-out infinite; will-change: transform; }
                .path-img-float { animation: path-img-float 6s ease-in-out infinite; will-change: transform; }
                .path-img-breathe { animation: path-img-breathe 5.5s ease-in-out infinite; will-change: opacity, transform; }
                .path-cap-border {
                    background: conic-gradient(from var(--path-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                    animation: path-border-spin 7s linear infinite;
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    mask-composite: exclude;
                    padding: 1.5px;
                }
                .path-float { animation: path-float 5s ease-in-out infinite; }
                .path-spin-slow { animation: path-spin-slow 9s linear infinite; }
                .path-breathe { animation: path-breathe 6s ease-in-out infinite; }
                .path-drift { animation: path-drift 11s ease-in-out infinite; }
                .path-particle { animation: path-particle 9s ease-in-out infinite; }
                .path-dash { stroke-dasharray: 7 11; animation: path-dash 22s linear infinite; }

                @media (prefers-reduced-motion: reduce) {
                    .path-hero-float, .path-img-float, .path-img-breathe, .path-cap-border,
                    .path-float, .path-spin-slow, .path-breathe, .path-drift, .path-particle, .path-dash {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-900">
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
                        className="path-hero-float w-full h-full object-cover"
                        style={{ filter: 'brightness(0.72) saturate(1.08) contrast(1.05)' }}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </motion.div>

                {/* Balanced cinematic overlays */}
                <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(15,23,42,0.12), rgba(15,23,42,0.55) 100%)' }} />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/35 via-slate-900/20 to-slate-900/45 pointer-events-none" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                    <div className="path-drift absolute -top-16 left-[12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="path-drift absolute bottom-[-3rem] right-[14%] h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" style={{ animationDelay: '3s' }} />
                </div>

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-950/25 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <Search className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.55)' }}
                        >
                            Advanced{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Pathology Services
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-[#E2E8F0] mb-6" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                            Expert tissue interpretation, morphology assessment, and pathology-driven insight for research and precision medicine.
                        </p>
                        <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                            CNC Path Lab pairs board-certified pathologists with advanced digital and molecular pathology to deliver accurate, reproducible, and defensible tissue interpretation — anchoring every biomarker and molecular finding to its morphological context.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm mb-4 border border-teal-200">
                                    The Role of Pathology
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Where Morphology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Molecular Insight</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Pathology remains the foundation of modern diagnostics and translational research. Expert interpretation of tissue architecture and cellular morphology provides the essential context in which molecular and biomarker data become meaningful — turning individual measurements into confident, evidence-based conclusions.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    At CNC Path Lab, board-certified pathologists work alongside advanced digital and analytical technologies to support biomarker discovery, clinical studies, and precision medicine. By integrating classical morphology, immunohistochemistry, and quantitative whole-slide analysis, we deliver interpretation that is accurate, reproducible, and ready for research and clinical decision-making.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {overviewHighlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative group"
                        >
                            <div className="path-img-breathe pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(20,184,166,0.4),rgba(6,182,212,0.18)_58%,transparent_75%)] blur-2xl" />

                            <div
                                ref={overviewImgRef}
                                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-[transform,box-shadow,border-color] duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:border-teal-300/70 group-hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.5),0_0_40px_-8px_rgba(34,211,238,0.4)]"
                            >
                                <motion.div style={{ y: overviewImgY, scale: overviewImgScale }} className="will-change-transform">
                                    <div className="path-img-float">
                                        <img
                                            src={tissueImg}
                                            alt="Pathologist reviewing stained tissue morphology"
                                            loading="lazy"
                                            className="w-full h-auto md:h-[600px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
                                        />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/25 to-transparent" />
                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-inset ring-teal-400/0 group-hover:ring-2 group-hover:ring-teal-400/60 transition-all duration-[400ms]" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Pathology Capabilities */}
            <section
                className="relative z-10 overflow-hidden border-t border-slate-100 py-24"
                style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5FAFF 34%, #EFFCFF 66%, #F0FFF8 100%)' }}
            >
                {/* Light biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="path-drift absolute -top-16 right-[8%] h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
                    <div className="path-drift absolute bottom-[-3rem] left-[6%] h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" style={{ animationDelay: '3s' }} />
                    <div
                        className="absolute inset-0 opacity-[0.5]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)',
                            backgroundSize: '46px 46px',
                            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 40%, transparent 100%)',
                        }}
                    />
                    {[
                        { left: '14%', top: '22%', d: '0s', c: 'bg-sky-400/40' },
                        { left: '86%', top: '28%', d: '1.2s', c: 'bg-teal-400/40' },
                        { left: '74%', top: '68%', d: '2.4s', c: 'bg-cyan-400/40' },
                        { left: '24%', top: '76%', d: '3.1s', c: 'bg-violet-400/40' },
                        { left: '52%', top: '12%', d: '1.8s', c: 'bg-cyan-400/40' },
                    ].map((p, i) => (
                        <span
                            key={i}
                            className={`path-particle absolute h-2 w-2 rounded-full ${p.c} shadow-[0_0_10px_2px_rgba(45,212,191,0.3)]`}
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Comprehensive Pathology Capabilities"
                        subtitle="A complete tissue-analysis service — from H&E and histopathology to IHC, biomarker scoring, and quantitative digital review."
                    />
                    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((cap, idx) => (
                            <CapabilityGlassCard key={idx} icon={cap.icon} title={cap.title} description={cap.description} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Pathology & Image Analysis */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={diagnosticsImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Digital Pathology & Image Analysis"
                        subtitle="Whole-slide imaging, quantitative analysis, and AI-assisted workflows turn tissue review into objective, data-driven interpretation."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {digitalFeatures.map((feat, index) => {
                            const FeatIcon = feat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: 'easeOut' }}
                                    whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                                    className="group relative h-full"
                                >
                                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-400/30 via-teal-400/20 to-primary-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md p-7 shadow-2xl transition-all duration-500 group-hover:border-teal-400/40 flex flex-col">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 text-white flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(14,165,233,0.3)]">
                                            <FeatIcon className="w-7 h-7" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{feat.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section
                className="relative z-10 overflow-hidden border-t border-slate-100 py-24"
                style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5FAFF 34%, #EFFCFF 66%, #F0FFF8 100%)' }}
            >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="path-drift absolute -top-16 left-[10%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
                    <div className="path-drift absolute bottom-[-3rem] right-[12%] h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" style={{ animationDelay: '3s' }} />
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Applications Across Research & Precision Medicine"
                        subtitle="Expert, integrated pathology supports discovery, translational, and clinical goals across therapeutic areas."
                    />
                    <div className="relative mt-16">
                        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 hidden h-full w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1200 400" fill="none">
                            <path className="path-dash" d="M150 130 H1050 M150 270 H1050" stroke="#2dd4bf" strokeWidth="1.2" strokeOpacity="0.3" />
                        </svg>
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {applications.map((item, index) => (
                                <ApplicationCard key={index} {...item} index={index} delay={0.1 + (index % 3) * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted partner for pathology programs of every scale — from biomarker discovery to clinical-grade tissue interpretation."
                items={whyChooseUs}
            />

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default PathologyServices;
