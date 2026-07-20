'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import {
    Layers,
    Microscope,
    ScanLine,
    Camera,
    Boxes,
    Palette,
    Focus,
    Grid3x3,
    Network,
    Crosshair,
    Target,
    ShieldCheck,
    Cpu,
    FileCheck,
    CheckCircle2,
    Lock,
    Users,
    Inbox,
    Scissors,
    Stethoscope,
    Brain,
    Dna,
    SearchCheck,
    Sparkles,
    Activity,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
const bgVideo = '/assets/bgvideo.mp4';
const tissueImg = '/assets/tissue.webp';
const bioimageImg = '/assets/bioimage.webp';
const diagnosticsImg = '/assets/diagnostics.jpg';
const ApplicationCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full"
    >
        <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary-500/40 to-teal-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 h-full p-8 rounded-[1.75rem] bg-gradient-to-br from-slate-800/60 via-slate-800/30 to-white/5 backdrop-blur-2xl border border-slate-700/40 group-hover:border-primary-400/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border bg-primary-500/20 border-primary-400/30 text-primary-200 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-slate-300 leading-relaxed font-medium">{description}</p>
        </div>
    </motion.div>
);

const WorkflowStepCard = ({ step, title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, ease: 'easeOut' }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full"
    >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-300/30 via-teal-300/20 to-primary-300/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative h-full bg-white/50 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.08)] group-hover:border-primary-200/70 group-hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-primary-500" />
            <span className="absolute top-4 right-5 text-4xl font-black text-slate-900/5 select-none">{step}</span>
            <div className="relative p-7 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-primary-50/80 backdrop-blur-sm text-primary-600 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    </motion.div>
);

// Faint biotech decoration rendered inside each capability card (DNA helix,
// glowing molecular nodes and connecting lines) — kept at very low opacity.
const CardDecoration = () => (
    <svg
        aria-hidden="true"
        className="mif-cap-drift pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 text-teal-300/50"
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

// Premium, cursor-reactive glassmorphism card used only in the mIF Capabilities section.
const CapabilityGlassCard = ({ icon: Icon, children, index, className = '' }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(520px circle at ${glareX} ${glareY}, rgba(45,212,191,0.22), transparent 55%)`;

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
            <div className="mif-cap-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.35),rgba(6,182,212,0.15)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                {/* animated shimmering gradient border */}
                <div className="mif-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                {/* glass body */}
                <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.08] backdrop-blur-xl backdrop-saturate-150 p-8 shadow-[0_18px_50px_-12px_rgba(13,148,136,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-400 group-hover:bg-white/[0.05]">
                    {/* top-edge reflection */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    {/* soft inner + cyan radial highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.16),transparent_45%)]" />
                    {/* cursor-following light */}
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {/* periodic shine sweep */}
                    <div className="mif-cap-shine pointer-events-none absolute inset-0" />
                    {/* faint biotech decoration */}
                    <CardDecoration />

                    {/* content lifted forward in 3D */}
                    <div className="relative" style={{ transform: 'translateZ(45px)' }}>
                        <div className="relative mb-6 inline-flex">
                            {/* rotating glow behind badge */}
                            <span className="mif-cap-spin-slow pointer-events-none absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(45,212,191,0.7),rgba(34,211,238,0.1),rgba(52,211,153,0.7),rgba(34,211,238,0.1),rgba(45,212,191,0.7))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="mif-cap-float relative flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/30 bg-white/10 text-teal-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm">
                                <Icon className="h-7 w-7" />
                            </span>
                        </div>
                        <p className="text-lg font-medium leading-[1.75] text-[#111111] [&_strong]:font-semibold [&_strong]:text-[#1A1A1A]">
                            {children}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const capabilityCards = [
    {
        icon: Dna,
        body: (
            <>CNC Path Lab provides advanced <strong>Multiplex Immunofluorescence (mIF)</strong> solutions designed to deliver comprehensive spatial and cellular insights from tissue and liquid biopsy samples. Our mIF workflow can simultaneously detect and visualize <strong>up to eight biomarkers</strong> within a single tissue section and supports <strong>high-dimensional whole-slide phenotyping</strong> using panels of <strong>60+ biomarkers</strong>.</>
        ),
    },
    {
        icon: Microscope,
        body: (
            <>By preserving tissue architecture while analyzing multiple biomarkers in parallel, our platform generates detailed spatial information about the tumor microenvironment and tissue organization. It enables visualization of protein expression and localization at the <strong>single-cell level</strong>, providing valuable insights into <strong>pharmacodynamic (PD) responses</strong>, <strong>mechanisms of action</strong>, <strong>immune interactions</strong>, and <strong>disease progression</strong>.</>
        ),
    },
    {
        icon: Boxes,
        body: (
            <>CNC Path Lab offers <strong>high-throughput, quantitative multiplex immunofluorescence</strong> for a wide range of specimen types, including <strong>fresh tissue, FFPE (archival) tissue</strong>, and <strong>cells isolated from liquid biopsies</strong>, such as <strong>circulating tumor cells (CTCs)</strong> enriched using <strong>ApoStream®</strong> technology.</>
        ),
    },
    {
        icon: Cpu,
        body: (
            <>To maximize data quality and biological interpretation, we integrate <strong>AI-powered image analysis</strong> using industry-leading platforms such as <strong>inForm®</strong> and <strong>HALO®</strong>. These advanced tools enable accurate visualization, quantification, and phenotyping of both abundant and rare cell populations, while providing precise analysis of <strong>subcellular protein localization</strong>, including <strong>nuclear and cytoplasmic expression</strong>, at single-cell resolution.</>
        ),
    },
    {
        icon: FileCheck,
        body: (
            <>To meet diverse research and clinical requirements, CNC Path Lab also offers <strong>tiered assay qualification and validation services</strong>, with support for workflows that comply with <strong>CLIA-regulated laboratory standards</strong> when required.</>
        ),
    },
];

const platforms = [
    {
        title: 'Multispectral Whole-Slide Imaging',
        description: 'Automated multispectral scanners capture entire sections across many fluorescence channels for fully digital review.',
        icon: ScanLine,
    },
    {
        title: 'Spectral Unmixing',
        description: 'Advanced unmixing cleanly separates overlapping fluorophores and tissue autofluorescence to enable dense marker panels without cross-talk.',
        icon: Camera,
    },
    {
        title: 'Automated Multiplex Staining',
        description: 'Validated, tyramide-based staining platforms deliver balanced, reproducible signal across every marker and every slide.',
        icon: Boxes,
    },
];

const mifCapabilities = [
    'Measure per-cell marker intensity and positivity across the full antibody panel.',
    'Phenotype cells into tumor, immune, and stromal subpopulations with single-cell precision.',
    'Quantify immune-cell density, penetration, and infiltration relative to tumor regions.',
    'Perform nearest-neighbor and proximity analysis to reveal cell-to-cell interactions.',
    'Classify tumors as immune-inflamed, immune-excluded, or immune-desert phenotypes.',
    'Preserve tissue architecture so every readout stays anchored to morphology.',
];

const biomarkerPanels = [
    { title: 'Immuno-Oncology Panels', description: 'Core targets such as CD3, CD8, CD68, FoxP3, PD-1, PD-L1, and pan-cytokeratin to profile the immune contexture of tumors.', icon: ShieldCheck },
    { title: 'Tumor & Epithelial Markers', description: 'Lineage and proliferation markers including pan-CK, Ki-67, and tissue-specific antigens to delineate malignant compartments.', icon: Crosshair },
    { title: 'Immune Cell Lineage', description: 'T-cell, B-cell, macrophage, and NK-cell markers to resolve the composition of the immune infiltrate in fine detail.', icon: Users },
    { title: 'Custom Assay Development', description: 'Fit-for-purpose panels designed, optimized, and validated around the specific biology and endpoints of your program.', icon: Sparkles },
];

const analyticalFeatures = [
    { title: 'AI-Assisted Analysis', description: 'Machine-learning models accelerate cell segmentation, tissue classification, and phenotyping under expert supervision.', icon: Cpu },
    { title: 'Cell Phenotyping', description: 'Objective assignment of every cell to a defined population based on multi-marker signal, not manual estimation.', icon: Grid3x3 },
    { title: 'Spatial Analytics', description: 'Neighborhood, proximity, and infiltration metrics reveal how populations organize within the microenvironment.', icon: Network },
    { title: 'Pathologist Oversight', description: 'Board-certified pathologists review and validate every analysis to ensure accurate, defensible conclusions.', icon: Stethoscope },
];

const applications = [
    { title: 'Immuno-Oncology', description: 'Map immune infiltration and checkpoint expression to understand response and resistance within the tumor microenvironment.', icon: ShieldCheck },
    { title: 'Oncology Research', description: 'Characterize tumor heterogeneity and biomarker co-expression directly within intact tissue context.', icon: Microscope },
    { title: 'Autoimmune & Inflammation', description: 'Visualize inflammatory infiltrates and cellular remodeling in conditions such as psoriasis, lupus, and dermatitis.', icon: Crosshair },
    { title: 'Translational Research', description: 'Bridge molecular findings and tissue pathology to strengthen study design and biomarker strategy.', icon: Dna },
    { title: 'Precision Medicine', description: 'Support patient stratification and companion biomarker development with spatially resolved evidence.', icon: Target },
    { title: 'Pharmacodynamics', description: 'Demonstrate target engagement and mechanism of action with tissue-level, quantitative readouts.', icon: Activity },
    { title: 'Biomarker Discovery', description: 'Localize and validate candidate biomarkers with single-cell, spatially anchored quantification.', icon: SearchCheck },
    { title: 'Neuroscience', description: 'Resolve marker expression across neural structures and cell populations in intact tissue.', icon: Brain },
];

const workflowSteps = [
    { step: '01', title: 'Sample Accessioning', description: 'FFPE blocks, tissue microarrays, and slides are logged, inspected, and tracked under controlled conditions on receipt.', icon: Inbox },
    { step: '02', title: 'Sectioning & Preparation', description: 'Tissue is sectioned to precise thickness and mounted, ready for antigen retrieval and multiplex staining.', icon: Scissors },
    { step: '03', title: 'Multiplex Staining', description: 'Sequential, tyramide-based labeling builds a balanced multi-marker panel on a single section.', icon: Palette },
    { step: '04', title: 'Multispectral Imaging', description: 'Whole slides are scanned across every fluorescence channel and spectrally unmixed into clean signal.', icon: ScanLine },
    { step: '05', title: 'Image Quality Control', description: 'Each scan is checked for focus, staining balance, and completeness before analysis begins.', icon: CheckCircle2 },
    { step: '06', title: 'Cell Segmentation & Phenotyping', description: 'Cells are segmented and assigned to populations using per-cell, multi-marker measurements.', icon: Grid3x3 },
    { step: '07', title: 'Spatial Analysis', description: 'Density, proximity, and infiltration metrics quantify how populations interact across the tissue.', icon: Network },
    { step: '08', title: 'Reporting & Delivery', description: 'Images, quantitative datasets, and pathologist-reviewed interpretation are delivered through secure channels.', icon: FileCheck },
];

const whyChooseUs = [
    { title: 'Deep Multiplex Expertise', description: 'Scientists and board-certified pathologists with extensive experience designing and running high-plex mIF assays.', icon: Users },
    { title: 'Validated Imaging Platforms', description: 'Multispectral scanners and staining systems validated for accuracy and reproducibility across large cohorts.', icon: ScanLine },
    { title: 'Quantitative Spatial Analysis', description: 'Objective single-cell phenotyping and spatial analytics with expert oversight for consistent, defensible results.', icon: Focus },
    { title: 'Fit-for-Purpose Assays', description: 'Custom panels developed and qualified against the biology and endpoints that matter to your program.', icon: Sparkles },
    { title: 'Rigorous Quality Standards', description: 'Standardized protocols and multi-stage checkpoints safeguard data integrity from receipt to report.', icon: ShieldCheck },
    { title: 'Secure Data Management', description: 'Confidential handling of tissue, images, and results across storage, transfer, and delivery.', icon: Lock },
];

const MultiplexImmunofluorescence = () => {
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
                @keyframes mif-hero-float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-6px,0); } }
                @keyframes mif-img-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                @keyframes mif-img-breathe { 0%, 100% { opacity: .25; transform: scale(1); } 50% { opacity: .45; transform: scale(1.03); } }
                @keyframes mif-img-sweep {
                    0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
                    12% { opacity: 1; }
                    38%, 100% { transform: translateX(280%) skewX(-18deg); opacity: 0; }
                }
                .mif-hero-float { animation: mif-hero-float 7s ease-in-out infinite; will-change: transform; }
                .mif-img-float { animation: mif-img-float 6s ease-in-out infinite; will-change: transform; }
                .mif-img-breathe { animation: mif-img-breathe 5.5s ease-in-out infinite; will-change: opacity, transform; }
                .mif-img-sweep::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    width: 40%;
                    height: 100%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.28), transparent);
                    animation: mif-img-sweep 7s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .mif-hero-float, .mif-img-float, .mif-img-breathe, .mif-img-sweep::before { animation: none !important; }
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
                        className="mif-hero-float w-full h-full object-cover"
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
                            <Layers className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Multiplex <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Immunofluorescence
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Single-cell and spatial biology from a single tissue section — many biomarkers, fully quantified, in native context.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Our quantitative multiplex immunofluorescence service visualizes multiple protein targets at once, phenotypes every cell, and maps how populations interact across the tissue microenvironment — pairing advanced multispectral imaging with expert pathology review.
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
                                    Understanding Multiplex IF
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Many Biomarkers, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">One Section</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Multiplex immunofluorescence (mIF) detects several protein biomarkers simultaneously within a single tissue section, revealing not only which markers are present but exactly where each cell sits and how it relates to its neighbors. Where conventional single-marker staining consumes tissue one target at a time, mIF preserves the specimen and delivers a far richer, spatially resolved picture.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    At CNC Path Lab, we combine expertly optimized multiplex panels with high-resolution multispectral imaging and single-cell analysis to turn one stained section into quantitative, defensible data. Every result is reviewed by board-certified pathologists to keep interpretation anchored to tissue morphology.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Detect multiple protein targets at once without exhausting precious tissue.',
                                    'Phenotype every cell using per-cell, multi-marker measurements.',
                                    'Map spatial relationships between tumor, immune, and stromal populations.',
                                    'Quantify immune infiltration to classify the tumor microenvironment.',
                                    'Pair algorithmic analysis with expert pathologist review.',
                                ].map((item, idx) => (
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
                            {/* idle breathing sea-green / cyan glow */}
                            <div className="mif-img-breathe pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(20,184,166,0.4),rgba(6,182,212,0.18)_58%,transparent_75%)] blur-2xl" />

                            <div
                                ref={overviewImgRef}
                                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-[transform,box-shadow,border-color] duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:border-teal-300/70 group-hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.5),0_0_40px_-8px_rgba(34,211,238,0.4)]"
                            >
                                {/* parallax + subtle scroll zoom */}
                                <motion.div style={{ y: overviewImgY, scale: overviewImgScale }} className="will-change-transform">
                                    <div className="mif-img-float">
                                        <img
                                            src={tissueImg}
                                            alt="Multiplex immunofluorescence stained tissue section"
                                            loading="lazy"
                                            className="w-full h-auto md:h-[600px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
                                        />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                                {/* top-edge glass reflection */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/25 to-transparent" />
                                {/* periodic light sweep */}
                                <div className="mif-img-sweep pointer-events-none absolute inset-0 overflow-hidden" />
                                {/* sea-green glowing border on hover */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-inset ring-teal-400/0 group-hover:ring-2 group-hover:ring-teal-400/60 transition-all duration-[400ms]" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Advanced mIF Capabilities */}
            <section className="mif-cap-section relative z-10 overflow-hidden border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
                <style>{`
                    @property --mif-cap-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                    @keyframes mif-cap-border-spin { to { --mif-cap-angle: 360deg; } }
                    @keyframes mif-cap-shine {
                        0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                        18% { opacity: 1; }
                        45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                    }
                    @keyframes mif-cap-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                    @keyframes mif-cap-spin-slow { to { transform: rotate(360deg); } }
                    @keyframes mif-cap-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                    @keyframes mif-cap-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                    @keyframes mif-cap-bg-pan { 0% { background-position: 0 0; } 100% { background-position: 240px 140px; } }
                    @keyframes mif-cap-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }

                    .mif-cap-border {
                        background: conic-gradient(from var(--mif-cap-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                        animation: mif-cap-border-spin 7s linear infinite;
                    }
                    .mif-cap-shine::before {
                        content: '';
                        position: absolute;
                        top: 0; bottom: 0; left: 0;
                        width: 45%;
                        background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
                        animation: mif-cap-shine 6s ease-in-out infinite;
                    }
                    .mif-cap-float { animation: mif-cap-float 5s ease-in-out infinite; }
                    .mif-cap-spin-slow { animation: mif-cap-spin-slow 9s linear infinite; }
                    .mif-cap-breathe { animation: mif-cap-breathe 6s ease-in-out infinite; }
                    .mif-cap-drift { animation: mif-cap-drift 11s ease-in-out infinite; }
                    .mif-cap-hexgrid { animation: mif-cap-bg-pan 40s linear infinite; }
                    .mif-cap-particle { animation: mif-cap-particle 9s ease-in-out infinite; }

                    @media (prefers-reduced-motion: reduce) {
                        .mif-cap-border, .mif-cap-shine::before, .mif-cap-float, .mif-cap-spin-slow,
                        .mif-cap-breathe, .mif-cap-drift, .mif-cap-hexgrid, .mif-cap-particle {
                            animation: none !important;
                        }
                    }
                `}</style>

                {/* Faint animated biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="mif-cap-hexgrid absolute inset-0 opacity-[0.06]"
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
                            className="mif-cap-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Advanced Multiplex Immunofluorescence (mIF) Capabilities"
                        subtitle="Comprehensive spatial and cellular insight from tissue and liquid biopsy samples — high-plex, quantitative, and single-cell resolved."
                        className="[&_h2]:text-white [&_h2]:drop-shadow-[0_0_24px_rgba(45,212,191,0.25)] [&_p]:text-slate-300"
                    />
                    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                        {capabilityCards.map((card, idx) => (
                            <CapabilityGlassCard
                                key={idx}
                                icon={card.icon}
                                index={idx}
                                className={idx === capabilityCards.length - 1 ? 'md:col-span-2' : ''}
                            >
                                {card.body}
                            </CapabilityGlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Biomarkers & Assay Capabilities */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm mb-4 border border-teal-200">
                                    Biomarkers & Assays
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Target the Markers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Matter to Your Trial</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    From established immuno-oncology panels to fully custom assays, our multiplex menu is built around the biomarkers that drive your study. Each panel is optimized and validated for balanced signal, so every marker performs reliably alongside the others.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                {biomarkerPanels.map((panel, idx) => {
                                    const PanelIcon = panel.icon;
                                    return (
                                        <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                                            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary-500 to-teal-500 text-white flex items-center justify-center mb-3">
                                                <PanelIcon className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-1.5">{panel.title}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{panel.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                                <img
                                    src={diagnosticsImg}
                                    alt="Quantitative biomarker analysis of multiplexed tissue"
                                    loading="lazy"
                                    className="w-full h-auto md:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Imaging Technologies & Analysis */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bioimageImg} alt="Multispectral imaging platforms" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary-500/20 text-primary-300 font-semibold text-sm mb-2 border border-primary-500/30">
                                Imaging & Analysis
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Multispectral Imaging, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Single-Cell Analysis</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Dense marker panels demand imaging that can tell closely overlapping fluorophores apart. Our multispectral platforms scan whole slides across every channel, then unmix signal from autofluorescence to keep each marker clean and quantifiable.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Validated image-analysis software segments every cell, assigns it to a phenotype, and measures the spatial relationships between populations — delivering objective, reproducible data across cohorts of any size.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-3xl bg-slate-800/50 p-8 overflow-hidden backdrop-blur-md border border-slate-700/50 shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />

                                <div className="relative z-10 space-y-6">
                                    {platforms.map((platform, idx) => {
                                        const PlatformIcon = platform.icon;
                                        const accents = ['bg-primary-500/20 text-primary-400', 'bg-teal-500/20 text-teal-400', 'bg-blue-500/20 text-blue-400'];
                                        return (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className={`${accents[idx % accents.length]} p-3 rounded-lg mt-1`}>
                                                    <PlatformIcon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{platform.title}</h4>
                                                    <p className="text-slate-400">{platform.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Analytical Capabilities */}
            <section className="py-24 relative z-10 overflow-hidden border-t border-slate-100 bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm border border-teal-200">
                                Quantitative Insight
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                From Stained Section to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Spatial Data</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Multiplex analysis captures not just whether a biomarker is present, but how much, on which cells, and in relation to which neighbors — the spatial context that increasingly defines response to therapy.
                            </p>
                            <ul className="space-y-4">
                                {mifCapabilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {analyticalFeatures.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                                        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                                        className="group relative h-full"
                                    >
                                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-300/30 via-teal-300/20 to-primary-300/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <div className="relative h-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.08)] group-hover:border-primary-200/70 group-hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500 p-7 flex flex-col">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 text-white flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(14,165,233,0.3)]">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Precision Medicine"
                        subtitle="Spatially resolved, single-cell insight supports discovery and translational goals across a wide range of therapeutic areas."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((item, index) => (
                            <ApplicationCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <style>{`
                    @keyframes mif-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(12px, -16px, 0); }
                    }
                    @keyframes mif-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-14px, 14px, 0) rotate(7deg); }
                    }
                    .mif-float-a { animation: mif-float-a 10s ease-in-out infinite; will-change: transform; }
                    .mif-float-b { animation: mif-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .mif-float-a, .mif-float-b { animation: none !important; }
                    }
                `}</style>
                <Layers aria-hidden="true" className="mif-float-a hidden sm:block absolute top-12 right-[8%] w-14 h-14 text-primary-400/20 pointer-events-none" />
                <Microscope aria-hidden="true" className="mif-float-b hidden sm:block absolute bottom-16 right-[16%] w-12 h-12 text-teal-400/20 pointer-events-none" />
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Multiplex IF Workflow"
                        subtitle="From sample accessioning to secure delivery, every step is tracked and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 4) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted partner for multiplex immunofluorescence projects of every scale."
                items={whyChooseUs}
            />

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default MultiplexImmunofluorescence;
