'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import {
    Dna,
    Microscope,
    Palette,
    Copy,
    Minus,
    Shuffle,
    GitMerge,
    Layers,
    ShieldCheck,
    FileCheck,
    Grid3x3,
    BarChart3,
    ScanLine,
    Monitor,
    Cpu,
    Brain,
    CheckCircle2,
    Inbox,
    Scissors,
    Crosshair,
    Droplets,
    Camera,
    Stethoscope,
    FileText,
    Activity,
    Boxes,
    SearchCheck,
    Network,
    Target,
    ClipboardList,
    Pill,
    Users,
    Building2,
    Zap,
    Workflow,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
const bgVideo = '/assets/bgvideo.mp4';
const fishImage = '/assets/fish.webp';
const diagnosticsImg = '/assets/diagnostics.jpg';
// Light premium biotech palette cycled across the application cards.
const appAccents = [
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F5FAFF 100%)', iconGradient: 'linear-gradient(135deg,#38bdf8,#22d3ee)', glow: 'rgba(56,189,248,0.30)', glare: 'rgba(56,189,248,0.20)', accent: 'text-sky-600', ring: 'group-hover:ring-sky-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F0FFF8 100%)', iconGradient: 'linear-gradient(135deg,#34d399,#2dd4bf)', glow: 'rgba(52,211,153,0.30)', glare: 'rgba(45,212,191,0.20)', accent: 'text-emerald-600', ring: 'group-hover:ring-emerald-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#EFFCFF 100%)', iconGradient: 'linear-gradient(135deg,#22d3ee,#06b6d4)', glow: 'rgba(34,211,238,0.30)', glare: 'rgba(34,211,238,0.20)', accent: 'text-cyan-600', ring: 'group-hover:ring-cyan-300/60' },
    { surface: 'linear-gradient(155deg,#FFFFFF 0%,#F4F2FF 100%)', iconGradient: 'linear-gradient(135deg,#a78bfa,#818cf8)', glow: 'rgba(167,139,250,0.28)', glare: 'rgba(167,139,250,0.18)', accent: 'text-violet-600', ring: 'group-hover:ring-violet-300/60' },
];

// Faint decorative scientific corner element for each application card.
const AppCornerDecoration = () => (
    <svg aria-hidden="true" className="fish-drift pointer-events-none absolute -top-3 -right-3 w-24 h-24 opacity-[0.14]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.35" />
        <circle cx="66" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
        <circle cx="38" cy="62" r="2.4" fill="currentColor" fillOpacity="0.5" />
    </svg>
);

// ── Applications card (light glassmorphism, cursor-reactive 3D tilt) ────
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
            {/* soft pastel glow halo */}
            <div className="fish-breathe pointer-events-none absolute -inset-2.5 rounded-[30px] opacity-70 blur-2xl" style={{ background: `radial-gradient(circle at 50% 40%, ${accent.glow}, transparent 72%)` }} />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                {/* animated gradient border */}
                <div className="fish-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div
                    className={`relative flex h-full flex-col items-center text-center overflow-hidden rounded-[26px] border border-white/70 p-8 shadow-[0_14px_40px_-16px_rgba(30,64,175,0.22)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-400 ring-0 ring-inset ${accent.ring} group-hover:ring-2 group-hover:shadow-[0_28px_60px_-20px_rgba(13,148,136,0.4)]`}
                    style={{ background: accent.surface }}
                >
                    {/* top-edge glass reflection */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                    {/* soft corner sheen */}
                    <div className="pointer-events-none absolute -top-14 -left-10 h-40 w-52 rounded-full opacity-60" style={{ background: 'radial-gradient(60% 60% at 42% 42%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)' }} />
                    {/* mouse-follow light reflection */}
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {/* decorative scientific element */}
                    <span className={accent.accent}><AppCornerDecoration /></span>

                    <div className="relative flex h-full flex-col items-center" style={{ transform: 'translateZ(40px)' }}>
                        {/* glowing circular icon */}
                        <div className="relative mb-6 inline-flex">
                            <span className="fish-breathe pointer-events-none absolute -inset-2 rounded-full blur-md" style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }} />
                            <span
                                className="fish-float relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-400 group-hover:rotate-6 group-hover:scale-110"
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

// ── Workflow step card (light background) ─────────────────────────────
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

// Faint biotech decoration rendered inside each capability card.
const CardDecoration = () => (
    <svg
        aria-hidden="true"
        className="fish-drift pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 text-teal-300/50"
        viewBox="0 0 160 160"
        fill="none"
    >
        <path d="M50 8 C90 40 30 72 70 104 C90 120 60 140 60 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M78 8 C38 40 98 72 58 104 C38 120 68 140 68 152" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        {[20, 44, 68, 92, 116].map((y, i) => (
            <line key={i} x1="52" y1={y} x2="76" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.5" />
        ))}
        <line x1="118" y1="40" x2="140" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="140" y1="70" x2="120" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="118" cy="40" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="140" cy="70" r="2.4" fill="currentColor" opacity="0.8" />
        <circle cx="120" cy="100" r="3.2" fill="currentColor" opacity="0.8" />
    </svg>
);

// Premium, cursor-reactive glassmorphism capability card.
const CapabilityGlassCard = ({ icon: Icon, title, description, index }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

    const glareX = useTransform(mx, (v) => `${v * 100}%`);
    const glareY = useTransform(my, (v) => `${v * 100}%`);
    const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(45,212,191,0.22), transparent 55%)`;

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
            {/* breathing sea-green halo */}
            <div className="fish-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.35),rgba(6,182,212,0.15)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                {/* animated shimmering gradient border */}
                <div className="fish-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                {/* glass body */}
                <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.08] backdrop-blur-xl backdrop-saturate-150 p-8 shadow-[0_18px_50px_-12px_rgba(13,148,136,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-400 group-hover:bg-white/[0.05]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.16),transparent_45%)]" />
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="fish-shine pointer-events-none absolute inset-0" />
                    <CardDecoration />

                    <div className="relative" style={{ transform: 'translateZ(45px)' }}>
                        <div className="relative mb-6 inline-flex">
                            <span className="fish-spin-slow pointer-events-none absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(45,212,191,0.7),rgba(34,211,238,0.1),rgba(52,211,153,0.7),rgba(34,211,238,0.1),rgba(45,212,191,0.7))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="fish-float relative flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/30 bg-white/10 text-teal-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm">
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

const overviewCards = [
    {
        icon: Dna,
        eyebrow: 'What They Are',
        body: (
            <p>
                <strong>Fluorescence In Situ Hybridization (FISH)</strong> and <strong>In Situ Hybridization (ISH)</strong> are molecular cytogenetic techniques that use labeled nucleic acid probes to bind specific <strong>DNA or RNA sequences</strong> directly within intact cells and tissue sections, revealing genetic information exactly where it occurs in the specimen.
            </p>
        ),
    },
    {
        icon: Microscope,
        eyebrow: 'Detecting DNA & RNA in Context',
        body: (
            <p>
                By hybridizing complementary probes to their targets, these assays pinpoint <strong>gene amplifications, deletions, rearrangements, and fusion transcripts</strong> without disrupting the surrounding morphology. Fluorescent or chromogenic detection then makes each signal visible under microscopy while <strong>preserving tissue architecture</strong>.
            </p>
        ),
    },
    {
        icon: Target,
        eyebrow: 'A Cornerstone of Molecular Pathology',
        body: (
            <p>
                At CNC Path Lab, FISH and ISH underpin <strong>molecular pathology, biomarker analysis, oncology research, translational medicine, and precision diagnostics</strong> — linking genetic abnormalities to their spatial and cellular context so results remain both quantitative and clinically meaningful.
            </p>
        ),
    },
];

const overviewHighlights = [
    'Single-cell detection of DNA and RNA targets within intact tissue.',
    'Genetic abnormalities identified without sacrificing morphology.',
    'Fluorescent and chromogenic signals for flexible visualization.',
    'Results anchored to tissue architecture for defensible interpretation.',
];

const capabilities = [
    { icon: Dna, title: 'DNA & RNA In Situ Hybridization', description: 'Probe-based detection of both DNA loci and RNA transcripts directly within preserved cells and tissue sections.' },
    { icon: Palette, title: 'Fluorescence & Chromogenic Detection', description: 'Flexible FISH and CISH readouts, from multi-color fluorescence to brightfield chromogenic signals reviewable alongside morphology.' },
    { icon: Copy, title: 'Gene Amplification Analysis', description: 'Accurate quantification of gene copy-number gains such as HER2 and MYCN to inform biomarker and therapy decisions.' },
    { icon: Minus, title: 'Gene Deletion Studies', description: 'Detection of losses and microdeletions, including tumor-suppressor and hemizygous deletions, with locus-specific probes.' },
    { icon: Shuffle, title: 'Chromosomal Rearrangement Detection', description: 'Break-apart and dual-fusion strategies resolve translocations and structural rearrangements at single-cell resolution.' },
    { icon: GitMerge, title: 'Fusion Gene Identification', description: 'Confident identification of clinically relevant fusions such as ALK, ROS1, and BCR-ABL1 driving oncogenic signaling.' },
    { icon: BarChart3, title: 'Copy Number Variation Analysis', description: 'Objective, quantitative CNV assessment across target loci for stratification and biomarker characterization.' },
    { icon: ShieldCheck, title: 'Biomarker Validation', description: 'Rigorously optimized and controlled assays that validate candidate biomarkers for research and clinical programs.' },
    { icon: FileCheck, title: 'Companion Diagnostic Support', description: 'Fit-for-purpose FISH/ISH workflows that support companion diagnostic development and regulated study endpoints.' },
    { icon: Layers, title: 'High-Throughput Tissue Analysis', description: 'Scalable processing of tissue microarrays and large cohorts with consistent, reproducible signal quality.' },
    { icon: Grid3x3, title: 'Multiplex Probe Assays', description: 'Multiple probes combined in a single assay to interrogate several loci or targets within one tissue section.' },
    { icon: ScanLine, title: 'Quantitative Image Analysis', description: 'Whole-slide imaging paired with validated digital algorithms for objective signal enumeration and scoring.' },
];

const workflowSteps = [
    { step: '01', title: 'Sample Receipt', description: 'FFPE blocks, slides, and cytology specimens are accessioned, inspected, and tracked under controlled conditions on arrival.', icon: Inbox },
    { step: '02', title: 'Tissue Preparation', description: 'Sections are cut to precise thickness, mounted, deparaffinized, and pretreated to expose target nucleic acids.', icon: Scissors },
    { step: '03', title: 'Probe Selection & Optimization', description: 'Locus-specific, break-apart, or fusion probes are selected and optimized for each target and specimen type.', icon: Crosshair },
    { step: '04', title: 'Hybridization', description: 'Denatured probes hybridize to complementary DNA or RNA sequences under tightly controlled temperature and timing.', icon: Dna },
    { step: '05', title: 'Washing & Signal Detection', description: 'Stringency washes remove unbound probe, then fluorescent or chromogenic detection renders each signal visible.', icon: Droplets },
    { step: '06', title: 'Whole-Slide Imaging', description: 'Slides are digitized across every relevant channel on high-resolution scanners for complete, reviewable images.', icon: Camera },
    { step: '07', title: 'Digital Image Analysis', description: 'Validated algorithms enumerate signals, assess ratios, and quantify amplification, deletion, or rearrangement status.', icon: Cpu },
    { step: '08', title: 'Expert Interpretation', description: 'Experienced scientists and pathologists review every case against defined criteria and morphological context.', icon: Stethoscope },
    { step: '09', title: 'Final Reporting', description: 'Clear, quantitative reports with images and interpretation are delivered securely to support your decisions.', icon: FileText },
];

const applications = [
    { title: 'Oncology', description: 'Detect driver alterations and actionable biomarkers to guide research and therapeutic strategy across tumor types.', icon: ShieldCheck },
    { title: 'Hematologic Malignancies', description: 'Resolve translocations and copy-number changes central to leukemia and lymphoma classification and monitoring.', icon: Activity },
    { title: 'Solid Tumors', description: 'Characterize amplifications, deletions, and fusions in carcinomas, sarcomas, and other solid malignancies.', icon: Boxes },
    { title: 'Companion Diagnostics', description: 'Support biomarker-driven therapy selection with validated, fit-for-purpose FISH and ISH assays.', icon: FileCheck },
    { title: 'Translational Research', description: 'Connect genomic findings to tissue pathology to strengthen study design and biomarker strategy.', icon: Dna },
    { title: 'Biomarker Validation', description: 'Confirm and quantify candidate biomarkers with spatially anchored, single-cell resolution.', icon: SearchCheck },
    { title: 'Cytogenetics', description: 'Map structural and numerical chromosomal abnormalities directly within cells and tissue.', icon: Network },
    { title: 'Precision Medicine', description: 'Enable patient stratification and targeted-therapy matching with genetically informed evidence.', icon: Target },
    { title: 'Clinical Trials', description: 'Deliver standardized, reproducible molecular endpoints across multi-site and longitudinal studies.', icon: ClipboardList },
    { title: 'Drug Development', description: 'Demonstrate target engagement and mechanism with tissue-level genomic readouts for pipeline programs.', icon: Pill },
];

const technologies = [
    { title: 'Fluorescence Microscopy', description: 'High-sensitivity multi-channel imaging resolves closely spaced FISH signals with clarity and precision.', icon: Microscope },
    { title: 'Whole-Slide Imaging', description: 'Automated scanners digitize entire sections across every channel for fully reviewable, archival images.', icon: ScanLine },
    { title: 'Digital Pathology', description: 'End-to-end digital workflows enable remote review, collaboration, and secure long-term data management.', icon: Monitor },
    { title: 'Automated Image Analysis', description: 'Validated algorithms enumerate signals and score ratios objectively for reproducible, defensible results.', icon: Cpu },
    { title: 'AI-Assisted Interpretation', description: 'Machine-learning models accelerate detection and scoring under expert scientific supervision.', icon: Brain },
    { title: 'Multiplex Hybridization Platforms', description: 'Multi-probe assays interrogate several loci or targets simultaneously within a single tissue section.', icon: Layers },
];

const whyChooseUs = [
    { title: 'Expert Molecular Pathology Team', description: 'Scientists and board-certified pathologists with deep experience in cytogenetics and in situ hybridization.', icon: Users },
    { title: 'Advanced Laboratory Infrastructure', description: 'Validated hybridization, imaging, and digital pathology platforms engineered for consistency at scale.', icon: Building2 },
    { title: 'High Analytical Accuracy', description: 'Optimized probes and stringent controls deliver sensitive, specific, and reproducible signal detection.', icon: Crosshair },
    { title: 'Robust Quality Control', description: 'Standardized protocols and multi-stage checkpoints safeguard data integrity from receipt to report.', icon: ShieldCheck },
    { title: 'AI-Powered Digital Pathology', description: 'Whole-slide imaging and algorithmic analysis add objectivity and speed to signal enumeration and scoring.', icon: Cpu },
    { title: 'Fast Turnaround Times', description: 'Efficient, well-orchestrated workflows return high-quality results within timelines your program can rely on.', icon: Zap },
    { title: 'End-to-End Biomarker Solutions', description: 'From probe selection to reporting, we support the full biomarker journey under one roof.', icon: Workflow },
    { title: 'Research & Clinical Support', description: 'Flexible services spanning discovery, translational research, and clinical-grade study requirements.', icon: Stethoscope },
];

const FishIsh = () => {
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
                @property --fish-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes fish-border-spin { to { --fish-angle: 360deg; } }
                @keyframes fish-hero-float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-6px,0); } }
                @keyframes fish-img-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                @keyframes fish-img-breathe { 0%, 100% { opacity: .25; transform: scale(1); } 50% { opacity: .45; transform: scale(1.03); } }
                @keyframes fish-shine {
                    0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                    18% { opacity: 1; }
                    45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                }
                @keyframes fish-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes fish-spin-slow { to { transform: rotate(360deg); } }
                @keyframes fish-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                @keyframes fish-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                @keyframes fish-bg-pan { 0% { background-position: 0 0; } 100% { background-position: 240px 140px; } }
                @keyframes fish-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }
                @keyframes fish-dash { to { stroke-dashoffset: -1000; } }

                .fish-hero-float { animation: fish-hero-float 7s ease-in-out infinite; will-change: transform; }
                .fish-img-float { animation: fish-img-float 6s ease-in-out infinite; will-change: transform; }
                .fish-img-breathe { animation: fish-img-breathe 5.5s ease-in-out infinite; will-change: opacity, transform; }
                .fish-cap-border {
                    background: conic-gradient(from var(--fish-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                    animation: fish-border-spin 7s linear infinite;
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    mask-composite: exclude;
                    padding: 1.5px;
                }
                .fish-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    width: 45%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
                    animation: fish-shine 6s ease-in-out infinite;
                }
                .fish-float { animation: fish-float 5s ease-in-out infinite; }
                .fish-spin-slow { animation: fish-spin-slow 9s linear infinite; }
                .fish-breathe { animation: fish-breathe 6s ease-in-out infinite; }
                .fish-drift { animation: fish-drift 11s ease-in-out infinite; }
                .fish-hexgrid { animation: fish-bg-pan 40s linear infinite; }
                .fish-particle { animation: fish-particle 9s ease-in-out infinite; }
                .fish-dash { stroke-dasharray: 7 11; animation: fish-dash 22s linear infinite; }

                /* Selective blue/cyan FISH-signal enhancement (SVG channel boost) + smooth hover */
                .fish-blue-cells { filter: url(#fish-blue-boost); transition: transform 400ms ease, filter 400ms ease; }
                .group:hover .fish-blue-cells { filter: url(#fish-blue-boost) brightness(1.07) contrast(1.05) saturate(1.08); }

                /* Soft fluorescence halo over the blue signals (screen blend, gently pulsing) */
                @keyframes fish-cell-glow-pulse { 0%, 100% { opacity: .1; } 50% { opacity: .22; } }
                .fish-cell-glow { mix-blend-mode: screen; opacity: .12; animation: fish-cell-glow-pulse 5.5s ease-in-out infinite; }
                .group:hover .fish-cell-glow { animation-duration: 3.2s; }

                /* Slow blue microscopy scan beam */
                @keyframes fish-cell-scan { 0% { transform: translateY(-120%); opacity: 0; } 12% { opacity: .5; } 60% { opacity: .5; } 82%, 100% { transform: translateY(120%); opacity: 0; } }
                .fish-cell-scan { animation: fish-cell-scan 7s ease-in-out infinite; }
                .group:hover .fish-cell-scan { animation-duration: 3.4s; }

                /* Reflective scanning light on hover */
                @keyframes fish-cell-sweep { 0% { transform: translateX(-160%) skewX(-18deg); opacity: 0; } 22% { opacity: .5; } 100% { transform: translateX(190%) skewX(-18deg); opacity: 0; } }
                .group:hover .fish-cell-sweep { animation: fish-cell-sweep .9s ease-out; }

                @media (prefers-reduced-motion: reduce) {
                    .fish-hero-float, .fish-img-float, .fish-img-breathe, .fish-cap-border, .fish-shine::before,
                    .fish-float, .fish-spin-slow, .fish-breathe, .fish-drift, .fish-hexgrid, .fish-particle, .fish-dash,
                    .fish-cell-glow, .fish-cell-scan, .fish-cell-sweep {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* 1. Hero Section */}
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
                        className="fish-hero-float w-full h-full object-cover"
                        style={{ filter: 'brightness(0.72) saturate(1.08) contrast(1.05)' }}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </motion.div>

                {/* Balanced cinematic overlays — medium-dark, video stays visible */}
                {/* soft navy vignette: darker at edges, lighter behind the text area */}
                <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(15,23,42,0.12), rgba(15,23,42,0.55) 100%)' }} />
                {/* gentle top-to-bottom navy/blue tint (~25–40%) */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/35 via-slate-900/20 to-slate-900/45 pointer-events-none" />
                {/* very low-opacity scientific glow, gently drifting */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                    <div className="fish-drift absolute -top-16 left-[12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="fish-drift absolute bottom-[-3rem] right-[14%] h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" style={{ animationDelay: '3s' }} />
                </div>

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-950/25 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <Dna className="w-4 h-4" />
                            Molecular Cytogenetics
                        </div>
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.55)' }}
                        >
                            Fluorescence In Situ Hybridization (FISH) <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                &amp; In Situ Hybridization (ISH)
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-[#E2E8F0] mb-6" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                            Advanced molecular pathology and genomic analysis for detecting DNA and RNA alterations directly within preserved tissue.
                        </p>
                        <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                            CNC Path Lab combines optimized probe based assays, high resolution imaging, and expert interpretation to identify gene amplifications, deletions, rearrangements, and fusion events at the single cell level while preserving the natural tissue architecture. This approach provides accurate spatial information and reliable molecular insights to support research and clinical decision making.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Overview */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Genetic Insight, In Native Context"
                        subtitle="FISH and ISH detect DNA and RNA targets exactly where they occur — turning preserved tissue into precise, spatially resolved molecular data."
                    />

                    <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 grid grid-cols-1 gap-6 w-full">
                            {overviewCards.map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary-300/30 via-teal-300/25 to-primary-300/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <div className="relative rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-8 shadow-[0_10px_36px_-12px_rgba(13,148,136,0.28)] group-hover:border-teal-300/60 group-hover:shadow-[0_22px_50px_-16px_rgba(13,148,136,0.4)] transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-teal-500 text-white shadow-[0_8px_20px_rgba(13,148,136,0.35)]">
                                                <card.icon className="h-6 w-6" />
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">{card.eyebrow}</span>
                                        </div>
                                        <div className="text-[17px] leading-[1.8] text-[#1A1A1A] [&_strong]:font-semibold [&_strong]:text-[#0F172A]">
                                            {card.body}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative group lg:sticky lg:top-28"
                        >
                            <div className="fish-img-breathe pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(20,184,166,0.4),rgba(6,182,212,0.18)_58%,transparent_75%)] blur-2xl" />

                            <div
                                ref={overviewImgRef}
                                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-[transform,box-shadow,border-color] duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:border-teal-300/70 group-hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.5),0_0_40px_-8px_rgba(34,211,238,0.4)]"
                            >
                                {/* Selective blue/cyan channel boost — highlights FISH signals without editing the file */}
                                <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
                                    <filter id="fish-blue-boost" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
                                        <feColorMatrix
                                            type="matrix"
                                            values="1.02 0    0    0 0
                                                    0    1.0  0    0 0
                                                    0    0.06 1.18 0 0
                                                    0    0    0    1 0"
                                        />
                                        <feColorMatrix type="saturate" values="1.14" />
                                    </filter>
                                </svg>

                                <motion.div style={{ y: overviewImgY, scale: overviewImgScale }} className="will-change-transform">
                                    <div className="fish-img-float">
                                        <img
                                            src={fishImage}
                                            alt="Fluorescence in situ hybridization signals in tissue"
                                            loading="lazy"
                                            className="fish-blue-cells w-full h-auto md:h-[560px] object-cover ease-out group-hover:scale-[1.05]"
                                        />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/25 to-transparent" />

                                {/* Fluorescence halo over blue signals (screen blend) — extra layer only on larger screens */}
                                <div className="fish-cell-glow pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(58% 55% at 50% 46%, rgba(34,211,238,0.5), rgba(56,189,248,0.24) 46%, transparent 72%)' }} aria-hidden="true" />
                                <div className="fish-cell-glow pointer-events-none absolute inset-0 hidden sm:block" style={{ background: 'radial-gradient(46% 42% at 42% 38%, rgba(94,234,212,0.45), transparent 68%)', animationDelay: '1.6s' }} aria-hidden="true" />

                                {/* Slow blue microscopy scan beam */}
                                <div className="fish-cell-scan pointer-events-none absolute inset-x-0 top-0 h-1/3" style={{ background: 'linear-gradient(180deg, transparent, rgba(56,189,248,0.22), rgba(34,211,238,0.14), transparent)' }} aria-hidden="true" />

                                {/* Reflective scanning light on hover */}
                                <div className="fish-cell-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0" style={{ background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.3), transparent)' }} aria-hidden="true" />

                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-inset ring-teal-400/0 group-hover:ring-2 group-hover:ring-teal-400/60 transition-all duration-[400ms]" />
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 mb-4">Why It Matters</h4>
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

            {/* 3. Comprehensive FISH / ISH Capabilities */}
            <section className="relative z-10 overflow-hidden border-t border-slate-800/60 bg-gradient-to-b from-blue-50 via-cyan-50 to-white py-24">
                {/* Faint animated biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="fish-hexgrid absolute inset-0 opacity-[0.06]"
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
                            className="fish-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Comprehensive FISH / ISH Capabilities"
                        subtitle="A complete in situ hybridization menu — from copy-number and rearrangement analysis to multiplex, quantitative, high-throughput workflows."
                        className="[&_h2]:text-[#0F172A] [&_h2]:drop-shadow-[0_0_24px_rgba(45,212,191,0.25)] [&_p]:text-[#1A1A1A]"
                    />
                    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((cap, idx) => (
                            <CapabilityGlassCard key={idx} icon={cap.icon} title={cap.title} description={cap.description} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Workflow */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided FISH / ISH Workflow"
                        subtitle="From sample receipt to final reporting, every step is optimized, tracked, and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 3) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Applications */}
            <section
                className="relative z-10 overflow-hidden border-t border-slate-100 py-24"
                style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5FAFF 34%, #EFFCFF 66%, #F0FFF8 100%)' }}
            >
                {/* Light biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* soft glowing circles */}
                    <div className="fish-drift absolute -top-16 right-[8%] h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
                    <div className="fish-drift absolute bottom-[-3rem] left-[6%] h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" style={{ animationDelay: '3s' }} />
                    <div className="fish-drift absolute top-[38%] left-[44%] h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" style={{ animationDelay: '5s' }} />

                    {/* minimal molecular grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.5]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)',
                            backgroundSize: '46px 46px',
                            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 40%, transparent 100%)',
                        }}
                    />

                    {/* low-opacity DNA strands */}
                    <svg className="absolute -right-8 top-14 w-[220px] h-[440px] opacity-[0.06] hidden lg:block" viewBox="0 0 200 600" fill="none">
                        <path d="M50 0 C160 60 -40 120 70 180 C160 240 -40 300 70 360 C160 420 -40 480 70 540 C130 570 90 600 90 600" stroke="#0ea5e9" strokeWidth="3" />
                        <path d="M150 0 C40 60 240 120 130 180 C40 240 240 300 130 360 C40 420 240 480 130 540 C70 570 110 600 110 600" stroke="#14b8a6" strokeWidth="3" />
                        {Array.from({ length: 11 }).map((_, i) => (
                            <line key={i} x1="60" y1={i * 55 + 20} x2="140" y2={i * 55 + 20} stroke="#22d3ee" strokeWidth="2" />
                        ))}
                    </svg>

                    {/* floating scientific particles */}
                    {[
                        { left: '14%', top: '22%', d: '0s', c: 'bg-sky-400/40' },
                        { left: '86%', top: '28%', d: '1.2s', c: 'bg-teal-400/40' },
                        { left: '74%', top: '68%', d: '2.4s', c: 'bg-cyan-400/40' },
                        { left: '24%', top: '76%', d: '3.1s', c: 'bg-violet-400/40' },
                        { left: '52%', top: '12%', d: '1.8s', c: 'bg-cyan-400/40' },
                    ].map((p, i) => (
                        <span
                            key={i}
                            className={`fish-particle absolute h-2 w-2 rounded-full ${p.c} shadow-[0_0_10px_2px_rgba(45,212,191,0.3)]`}
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    {/* Enhanced heading — text unchanged */}
                    <div className="relative mx-auto max-w-3xl text-center">
                        {/* soft scientific glow behind heading */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-40 w-[28rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),rgba(56,189,248,0.10)_55%,transparent_75%)] blur-2xl" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative mx-auto mb-6 inline-flex"
                        >
                            <span className="fish-breathe pointer-events-none absolute -inset-1.5 rounded-2xl bg-[radial-gradient(circle,rgba(45,212,191,0.5),transparent_70%)] blur-md" />
                            <span className="fish-float relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-teal-400 text-white shadow-[0_10px_24px_-8px_rgba(13,148,136,0.5),inset_0_1px_0_rgba(255,255,255,0.5)]">
                                <Dna className="h-7 w-7" />
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
                        >
                            Applications Across Research &amp;{' '}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500">Precision Medicine</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute -bottom-1.5 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400"
                                />
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.18 }}
                            className="mt-6 text-lg leading-relaxed text-slate-600"
                        >
                            Genetically informed, spatially resolved insight supports discovery, translational, and clinical goals across therapeutic areas.
                        </motion.p>
                    </div>

                    {/* Connecting scientific lines behind the grid (desktop) */}
                    <div className="relative mt-16">
                        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 hidden h-full w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
                            <path className="fish-dash" d="M150 150 H1050 M150 450 H1050" stroke="#2dd4bf" strokeWidth="1.2" strokeOpacity="0.3" />
                            <path className="fish-dash" d="M150 90 C450 260 750 -20 1050 150" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.22" style={{ animationDelay: '3s' }} />
                        </svg>

                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {applications.map((item, index) => (
                                <ApplicationCard key={index} {...item} index={index} delay={0.28 + (index % 4) * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technologies */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={diagnosticsImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Imaging & Analysis Technologies"
                        subtitle="Validated platforms that turn hybridized signals into objective, reproducible, and reviewable molecular data."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {technologies.map((tech, index) => {
                            const TechIcon = tech.icon;
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
                                            <TechIcon className="w-7 h-7" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{tech.title}</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{tech.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted partner for FISH and ISH programs of every scale — from biomarker discovery to clinical-grade molecular pathology."
                items={whyChooseUs}
            />

            {/* 8. CTA Section */}
            <CTASection />

        </div>
    );
};

export default FishIsh;
