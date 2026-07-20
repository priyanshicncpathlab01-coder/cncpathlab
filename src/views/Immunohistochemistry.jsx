'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import {
    Microscope,
    ScanLine,
    Palette,
    Boxes,
    Layers,
    Crosshair,
    Target,
    ShieldCheck,
    Cpu,
    CheckCircle2,
    Users,
    Inbox,
    Scissors,
    Stethoscope,
    Dna,
    SearchCheck,
    Monitor,
    BarChart3,
    Gauge,
    FlaskConical,
    Pipette,
    Clock,
    Workflow as WorkflowIcon,
    Handshake,
    Network,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
const bgVideo = '/assets/bgvideo.mp4';
const labImg = '/assets/ihc.webp';
const bioimageImg = '/assets/bioimage.webp';
const diagnosticsImg = '/assets/diagnostics.jpg';
// Faint biotech decoration rendered inside each capability card (DNA helix,
// glowing molecular nodes and connecting lines) — kept at very low opacity.
const CardDecoration = () => (
    <svg
        aria-hidden="true"
        className="ihc-cap-drift pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 text-teal-300/50"
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

// Premium, cursor-reactive glassmorphism card — mirrors the mIF Capabilities design.
const GlassCapabilityCard = ({ icon: Icon, title, description, index, className = '' }) => {
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
            <div className="ihc-cap-breathe pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.35),rgba(6,182,212,0.15)_55%,transparent_75%)] blur-2xl" />

            <motion.div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ y: -11, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full"
            >
                {/* animated shimmering gradient border */}
                <div className="ihc-cap-border pointer-events-none absolute -inset-px rounded-[27px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

                {/* glass body */}
                <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.08] backdrop-blur-xl backdrop-saturate-150 p-8 shadow-[0_18px_50px_-12px_rgba(13,148,136,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-400 group-hover:bg-white/[0.05]">
                    {/* top-edge reflection */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    {/* soft inner + cyan radial highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(120%_80%_at_15%_0%,rgba(45,212,191,0.16),transparent_45%)]" />
                    {/* cursor-following light */}
                    <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {/* periodic shine sweep */}
                    <div className="ihc-cap-shine pointer-events-none absolute inset-0" />
                    {/* faint biotech decoration */}
                    <CardDecoration />

                    {/* content lifted forward in 3D */}
                    <div className="relative" style={{ transform: 'translateZ(45px)' }}>
                        <div className="relative mb-6 inline-flex">
                            {/* rotating glow behind badge */}
                            <span className="ihc-cap-spin-slow pointer-events-none absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(45,212,191,0.7),rgba(34,211,238,0.1),rgba(52,211,153,0.7),rgba(34,211,238,0.1),rgba(45,212,191,0.7))] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="ihc-cap-float relative flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/30 bg-white/10 text-teal-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm">
                                <Icon className="h-7 w-7" />
                            </span>
                        </div>
                        <h3 className="text-xl font-bold leading-snug text-[#1A1A1A] mb-2">{title}</h3>
                        <p className="text-base font-medium leading-[1.75] text-[#111111]">{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

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

const capabilities = [
    { title: 'Biomarker Detection & Validation', description: 'Localize and confirm protein targets in situ, with rigorously validated antibodies that deliver specific, reproducible staining across cohorts.', icon: Crosshair },
    { title: 'Chromogenic & Fluorescent IHC', description: 'Both brightfield chromogenic (DAB) and immunofluorescent detection, matched to the biology, sensitivity, and readout your study requires.', icon: Palette },
    { title: 'Manual & Automated Staining', description: 'Hand-optimized protocols for novel targets alongside fully automated platforms that ensure batch-to-batch consistency at scale.', icon: Boxes },
    { title: 'Single-plex & Multiplex Assays', description: 'Classic single-marker staining through to multiplex panels that resolve several biomarkers on one section while preserving tissue.', icon: Layers },
    { title: 'Digital Pathology Integration', description: 'Every slide is scanned to a high-resolution whole-slide image, enabling remote review, annotation, and fully digital workflows.', icon: Monitor },
    { title: 'Quantitative Image Analysis', description: 'Objective, software-driven scoring of intensity, positivity, and cell density replaces subjective estimation for defensible data.', icon: BarChart3 },
    { title: 'High-Throughput Tissue Analysis', description: 'Tissue microarrays and streamlined pipelines process large sample sets efficiently without compromising staining quality.', icon: Gauge },
    { title: 'Assay Optimization & Validation', description: 'Fit-for-purpose development, titration, and validation to establish accurate, robust assays aligned to your endpoints.', icon: ShieldCheck },
];

const workflowSteps = [
    { step: '01', title: 'Sample Receipt', description: 'FFPE blocks, slides, and tissue microarrays are logged, inspected, and tracked under controlled conditions on arrival.', icon: Inbox },
    { step: '02', title: 'Tissue Preparation', description: 'Sections are cut to precise thickness, mounted, and processed through deparaffinization and antigen retrieval.', icon: Scissors },
    { step: '03', title: 'Antibody Optimization', description: 'Antibodies are titrated and conditions tuned to achieve specific signal with minimal background for each target.', icon: Pipette },
    { step: '04', title: 'Staining', description: 'Validated chromogenic or fluorescent protocols are applied on manual or automated platforms for consistent labeling.', icon: Palette },
    { step: '05', title: 'Digital Slide Scanning', description: 'Stained slides are digitized at high resolution into whole-slide images ready for analysis and archiving.', icon: ScanLine },
    { step: '06', title: 'AI-Powered Image Analysis', description: 'Machine-learning models assist cell detection, tissue classification, and marker quantification under expert oversight.', icon: Cpu },
    { step: '07', title: 'Quantitative Reporting', description: 'Standardized scoring metrics and datasets are compiled into clear, reproducible, decision-ready reports.', icon: BarChart3 },
    { step: '08', title: 'Final Interpretation', description: 'Board-certified pathologists review and contextualize results to ensure accurate, biologically sound conclusions.', icon: Stethoscope },
];

const applications = [
    { title: 'Oncology Research', description: 'Characterize tumor biology, marker expression, and heterogeneity directly within intact tissue context.', icon: Microscope },
    { title: 'Immuno-Oncology', description: 'Profile immune infiltration and checkpoint markers such as PD-L1 to inform response and resistance.', icon: ShieldCheck },
    { title: 'Biomarker Validation', description: 'Confirm candidate biomarkers with specific, spatially resolved protein-level evidence.', icon: SearchCheck },
    { title: 'Drug Development', description: 'Demonstrate target engagement and pharmacodynamic effects across preclinical and clinical phases.', icon: FlaskConical },
    { title: 'Translational Medicine', description: 'Bridge molecular findings and tissue pathology to strengthen study design and decision-making.', icon: Dna },
    { title: 'Companion Diagnostics', description: 'Support the development of tissue-based assays that guide patient selection and stratification.', icon: Target },
    { title: 'Tissue Characterization', description: 'Define cell lineages, structures, and compartments to map the composition of complex tissue.', icon: Layers },
    { title: 'Precision Medicine', description: 'Provide spatially anchored evidence that supports individualized, biomarker-driven treatment strategy.', icon: Crosshair },
];

const technologies = [
    { title: 'Automated Staining Platforms', description: 'High-throughput autostainers deliver standardized, reproducible IHC across large slide volumes.', icon: Boxes },
    { title: 'Whole-Slide Imaging', description: 'Digital scanners capture entire sections at high magnification for complete, review-ready images.', icon: ScanLine },
    { title: 'Digital Pathology', description: 'Fully digital workflows enable annotation, collaboration, and secure archiving of every case.', icon: Monitor },
    { title: 'AI-Assisted Image Analysis', description: 'Deep-learning models accelerate segmentation, classification, and marker quantification.', icon: Cpu },
    { title: 'Quantitative Pathology', description: 'Objective algorithms convert stained tissue into precise, reproducible numerical readouts.', icon: BarChart3 },
    { title: 'Biomarker Scoring', description: 'Standardized scoring frameworks translate expression into consistent, comparable results.', icon: Gauge },
];

const whyChooseUs = [
    { title: 'Experienced Scientific Team', description: 'Scientists and board-certified pathologists with deep expertise in tissue-based biomarker assays.', icon: Users },
    { title: 'High-Quality Laboratory Workflows', description: 'Standardized, validated protocols engineered for consistent, dependable results at any scale.', icon: WorkflowIcon },
    { title: 'AI-Driven Digital Pathology', description: 'Advanced image analysis and machine learning for objective, quantitative interpretation.', icon: Cpu },
    { title: 'Robust Quality Control', description: 'Multi-stage checkpoints and controls safeguard data integrity from receipt to final report.', icon: ShieldCheck },
    { title: 'Fast Turnaround Times', description: 'Efficient, well-orchestrated operations keep your program moving without sacrificing quality.', icon: Clock },
    { title: 'Flexible Research Support', description: 'Adaptable study designs and custom assays tailored to the biology and goals of your project.', icon: Handshake },
    { title: 'End-to-End Biomarker Solutions', description: 'A single partner from assay development through digital analysis and expert interpretation.', icon: Network },
];

// Premium interactive biotech showcase for the IHC image: mouse-parallax tilt,
// floating motion, pulsing multi-color glow, animated gradient border, frosted
// glass card, particles, low-opacity scientific background, and a scanning beam.
// Purely a visual wrapper around the existing ihc.webp — no content/layout change.
const IhcShowcaseImage = ({ src, alt }) => {
    const tiltRef = useRef(null);
    const showcaseRef = useRef(null);

    // Advanced scroll parallax — the image tracks scroll at ~0.75x with a gentle
    // zoom (1.0 → 1.08), giving an Apple/Adobe-style depth shift. Springed so the
    // motion stays buttery, and driven by translate3d/scale for GPU acceleration.
    const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ['start end', 'end start'] });
    const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [56, -56]), { stiffness: 90, damping: 22, restDelta: 0.001 });
    const parallaxScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.03]), { stiffness: 90, damping: 22, restDelta: 0.001 });

    // Normalized cursor position (0–1) across the card, springed for smooth motion.
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);
    const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

    const handleMove = (e) => {
        const rect = tiltRef.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
    };
    const handleLeave = () => {
        px.set(0.5);
        py.set(0.5);
    };

    // Elegant floating particles — fewer render on small screens for performance.
    const particles = [
        { top: '8%', left: '12%', size: 7, dx: '10px', dy: '-22px', dur: 7, delay: 0, hideSm: false },
        { top: '18%', left: '88%', size: 5, dx: '-12px', dy: '-18px', dur: 8, delay: 1.2, hideSm: false },
        { top: '72%', left: '6%', size: 6, dx: '14px', dy: '-16px', dur: 9, delay: 0.6, hideSm: false },
        { top: '86%', left: '80%', size: 5, dx: '-10px', dy: '-24px', dur: 7.5, delay: 2, hideSm: false },
        { top: '40%', left: '94%', size: 4, dx: '-8px', dy: '-20px', dur: 8.5, delay: 1.6, hideSm: true },
        { top: '55%', left: '2%', size: 4, dx: '10px', dy: '-18px', dur: 9.5, delay: 0.9, hideSm: true },
        { top: '4%', left: '55%', size: 5, dx: '6px', dy: '-22px', dur: 8, delay: 2.4, hideSm: true },
        { top: '92%', left: '40%', size: 6, dx: '-6px', dy: '-20px', dur: 7, delay: 1.4, hideSm: true },
    ];

    return (
        <div ref={showcaseRef} className="ihc-showcase relative" style={{ perspective: '1200px' }}>
            <style>{`
                @property --ihc-img-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes ihc-img-border-spin { to { --ihc-img-angle: 360deg; } }
                /* Cinematic float: up/down + gentle left-right drift + very subtle rotation */
                @keyframes ihc-img-float {
                    0%, 100% { transform: translate3d(0, 0, 0) rotate(-1.2deg); }
                    25% { transform: translate3d(6px, -6px, 0) rotate(0.4deg); }
                    50% { transform: translate3d(0, -10px, 0) rotate(1.4deg); }
                    75% { transform: translate3d(-6px, -6px, 0) rotate(0.4deg); }
                }
                @keyframes ihc-img-glow-pulse { 0%, 100% { opacity: .4; transform: scale(1); } 50% { opacity: .75; transform: scale(1.05); } }
                @keyframes ihc-img-scan { 0% { transform: translateY(-130%); opacity: 0; } 12% { opacity: .85; } 60% { opacity: .85; } 80%, 100% { transform: translateY(130%); opacity: 0; } }
                @keyframes ihc-img-particle { 0%, 100% { transform: translate(0, 0); opacity: .2; } 50% { transform: translate(var(--dx, 8px), var(--dy, -20px)); opacity: .7; } }
                @keyframes ihc-img-ring-spin { to { transform: rotate(360deg); } }
                @keyframes ihc-img-ring-spin-rev { to { transform: rotate(-360deg); } }
                /* Energy rings gently expand & contract while emitting a faint blue glow */
                @keyframes ihc-img-ring-breathe { 0%, 100% { transform: scale(0.94); opacity: .22; } 50% { transform: scale(1.08); opacity: .5; } }
                @keyframes ihc-img-sweep-move { 0% { transform: translateX(-160%) skewX(-18deg); opacity: 0; } 22% { opacity: .55; } 100% { transform: translateX(190%) skewX(-18deg); opacity: 0; } }
                /* Dynamic biotech color shift — subtle hue rotation (±12deg) + gentle saturation/brightness */
                @keyframes ihc-img-tint {
                    0%, 100% { filter: hue-rotate(0deg) saturate(1) brightness(1); }
                    20% { filter: hue-rotate(-8deg) saturate(1.06) brightness(1.02); }
                    40% { filter: hue-rotate(6deg) saturate(1.09) brightness(1.03); }
                    60% { filter: hue-rotate(12deg) saturate(1.1) brightness(1.02); }
                    80% { filter: hue-rotate(4deg) saturate(1.06) brightness(1.02); }
                }
                /* Slowly drifting cyan→aqua→sky→teal gradient wash over the image */
                @keyframes ihc-img-tint-overlay { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                /* Outer glow hue shift, kept on the same 15s cadence as the tint for sync */
                @keyframes ihc-img-glow-hue { 0%, 100% { filter: hue-rotate(0deg); } 20% { filter: hue-rotate(-8deg); } 40% { filter: hue-rotate(6deg); } 60% { filter: hue-rotate(12deg); } 80% { filter: hue-rotate(4deg); } }

                .ihc-img-border {
                    padding: 2px;
                    border-radius: 28px;
                    background: conic-gradient(from var(--ihc-img-angle), #22d3ee, #38bdf8, #5eead4, #2dd4bf, #67e8f9, #22d3ee);
                    animation: ihc-img-border-spin 9s linear infinite;
                    transition: filter 400ms ease;
                }
                .group:hover .ihc-img-border { animation-duration: 3.5s; }
                .ihc-img-float { animation: ihc-img-float 9s ease-in-out infinite; }
                .ihc-img-ring-a { animation: ihc-img-ring-spin 34s linear infinite; }
                .ihc-img-ring-b { animation: ihc-img-ring-spin-rev 46s linear infinite; }
                .ihc-img-ring-breathe { animation: ihc-img-ring-breathe 7s ease-in-out infinite; }
                .ihc-img-glass {
                    border-radius: 26px;
                    background: linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(224,247,255,0.34) 55%, rgba(204,245,240,0.3) 100%);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.5);
                    box-shadow: 0 20px 55px -20px rgba(13,148,136,0.4);
                    transition: box-shadow 400ms ease;
                }
                .group:hover .ihc-img-glass { box-shadow: 0 34px 80px -22px rgba(13,148,136,0.55), 0 0 40px -6px rgba(34,211,238,0.4); }
                .ihc-img-glow { animation: ihc-img-glow-pulse 6s ease-in-out infinite; transition: opacity 400ms ease; }
                .group:hover .ihc-img-glow { opacity: .9; }
                .ihc-img-scan { animation: ihc-img-scan 6.5s ease-in-out infinite; }
                .ihc-img-ring { animation: ihc-img-ring-spin 26s linear infinite; transform-origin: center; }
                .ihc-img-particle { animation: ihc-img-particle var(--dur, 8s) ease-in-out infinite; }
                .group:hover .ihc-img-sweep { animation: ihc-img-sweep-move .9s ease-out; }
                .ihc-img-tint { animation: ihc-img-tint 15s ease-in-out infinite; }
                .group:hover .ihc-img-tint { animation-play-state: paused; filter: brightness(1.1) saturate(1.12) !important; }
                .ihc-img-tint-overlay {
                    background: linear-gradient(115deg, rgba(34,211,238,0.55), rgba(94,234,212,0.45), rgba(56,189,248,0.55), rgba(45,212,191,0.45));
                    background-size: 300% 300%;
                    mix-blend-mode: soft-light;
                    opacity: .12;
                    animation: ihc-img-tint-overlay 16s ease-in-out infinite;
                }
                .group:hover .ihc-img-tint-overlay { animation-play-state: paused; opacity: .16; }
                .ihc-img-glow-sync { animation: ihc-img-glow-hue 15s ease-in-out infinite; }
                .group:hover .ihc-img-glow-sync { animation-play-state: paused; }

                @media (prefers-reduced-motion: reduce) {
                    .ihc-img-border, .ihc-img-float, .ihc-img-glow, .ihc-img-scan, .ihc-img-ring, .ihc-img-particle,
                    .ihc-img-ring-a, .ihc-img-ring-b, .ihc-img-ring-breathe,
                    .ihc-img-tint, .ihc-img-tint-overlay, .ihc-img-glow-sync { animation: none !important; }
                }
            `}</style>

            {/* Low-opacity scientific background: DNA helix, hex molecular grid, scanning rings, network lines */}
            <svg className="pointer-events-none absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] opacity-[0.06] -z-10" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <path d="M60,20 C160,70 -40,120 60,170 C160,220 -40,270 60,320 C160,370 -40,400 60,420" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M140,20 C40,70 240,120 140,170 C40,220 240,270 140,320 C40,370 240,400 140,420" stroke="#14b8a6" strokeWidth="2" />
                {Array.from({ length: 9 }).map((_, i) => (
                    <line key={i} x1="60" y1={20 + i * 44} x2="140" y2={20 + i * 44} stroke="#22d3ee" strokeWidth="1.5" />
                ))}
                <g stroke="#38bdf8" strokeWidth="1.5">
                    <polygon points="300,40 330,58 330,94 300,112 270,94 270,58" fill="none" />
                    <polygon points="352,70 382,88 382,124 352,142 322,124 322,88" fill="none" />
                    <polygon points="300,124 330,142 330,178 300,196 270,178 270,142" fill="none" />
                </g>
                <g className="ihc-img-ring" style={{ transformBox: 'fill-box' }}>
                    <circle cx="320" cy="300" r="60" stroke="#2dd4bf" strokeWidth="1.5" fill="none" />
                    <circle cx="320" cy="300" r="40" stroke="#22d3ee" strokeWidth="1" fill="none" strokeDasharray="6 10" />
                </g>
                <g stroke="#5eead4" strokeWidth="1.2">
                    <line x1="40" y1="360" x2="120" y2="330" />
                    <line x1="120" y1="330" x2="180" y2="380" />
                    <circle cx="40" cy="360" r="3" fill="#5eead4" stroke="none" />
                    <circle cx="120" cy="330" r="3" fill="#5eead4" stroke="none" />
                    <circle cx="180" cy="380" r="3" fill="#5eead4" stroke="none" />
                </g>
            </svg>

            {/* Floating particles (fewer on small screens) */}
            {particles.map((p, i) => (
                <span
                    key={i}
                    className={`ihc-img-particle pointer-events-none absolute rounded-full bg-cyan-300/60 blur-[1px] ${p.hideSm ? 'hidden md:block' : ''}`}
                    style={{ top: p.top, left: p.left, width: p.size, height: p.size, '--dx': p.dx, '--dy': p.dy, '--dur': `${p.dur}s`, animationDelay: `${p.delay}s` }}
                    aria-hidden="true"
                />
            ))}

            {/* Animated energy rings — molecular-scanner feel: rotate + gently breathe with a faint blue glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center" aria-hidden="true">
                <div className="ihc-img-ring-breathe" style={{ gridArea: '1 / 1' }}>
                    <div className="ihc-img-ring-a aspect-square rounded-full border border-cyan-300/40" style={{ width: '38rem', maxWidth: '92vw', boxShadow: '0 0 60px rgba(34,211,238,0.15), inset 0 0 40px rgba(56,189,248,0.1)' }} />
                </div>
                <div className="ihc-img-ring-b aspect-square rounded-full border border-dashed border-teal-300/30" style={{ gridArea: '1 / 1', width: '30rem', maxWidth: '80vw', boxShadow: '0 0 40px rgba(45,212,191,0.12)' }} />
            </div>

            {/* Tilt + hover group */}
            <motion.div
                ref={tiltRef}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="group relative"
            >
                {/* Pulsing multi-color glow layers (cyan / sky / aqua / sea green), hue-synced to the image tint */}
                <div className="ihc-img-glow-sync pointer-events-none absolute inset-0" aria-hidden="true">
                    <div className="ihc-img-glow pointer-events-none absolute -inset-5 rounded-[36px] bg-cyan-300/40 blur-2xl" style={{ animationDelay: '0s' }} />
                    <div className="ihc-img-glow pointer-events-none absolute -inset-6 rounded-[38px] bg-sky-300/35 blur-3xl" style={{ animationDelay: '1.5s' }} />
                    <div className="ihc-img-glow pointer-events-none absolute -inset-4 rounded-[34px] bg-teal-300/35 blur-2xl hidden sm:block" style={{ animationDelay: '2.4s' }} />
                    <div className="ihc-img-glow pointer-events-none absolute -inset-6 rounded-[38px] bg-emerald-300/30 blur-3xl hidden sm:block" style={{ animationDelay: '3.3s' }} />
                </div>

                {/* Scroll parallax layer — slower-than-page vertical shift + subtle zoom (GPU transforms) */}
                <motion.div style={{ y: parallaxY, scale: parallaxScale }} className="will-change-transform">
                    {/* Animated gradient border */}
                    <div className="ihc-img-border relative">
                        {/* Frosted glass card — image floats inside */}
                        <div className="ihc-img-glass relative overflow-hidden p-2.5">
                            <div className="ihc-img-float rounded-[20px] overflow-hidden relative">
                                <img
                                    src={src}
                                    alt={alt}
                                    loading="lazy"
                                    className="ihc-img-tint w-full h-auto md:h-[560px] object-cover rounded-[20px] transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]"
                                />
                                {/* Existing tonal overlay preserved */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                                {/* Animated biotech gradient wash (soft-light) — keeps image details visible */}
                                <div className="ihc-img-tint-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
                                {/* Cyan scan beam sweeping vertically */}
                                <div className="ihc-img-scan pointer-events-none absolute inset-x-0 top-0 h-1/3" style={{ background: 'linear-gradient(180deg, transparent, rgba(34,211,238,0.28), rgba(94,234,212,0.18), transparent)' }} aria-hidden="true" />
                                {/* Light reflection sweep on hover */}
                                <div className="ihc-img-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0" style={{ background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent)' }} aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Immunohistochemistry = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 pointer-events-none" />

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <Microscope className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Immunohistochemistry <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                (IHC)
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Protein-level biomarker detection in preserved tissue — specific, spatially resolved, and fully quantified.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Immunohistochemistry remains a cornerstone of tissue biomarker analysis and precision medicine. At CNC Path Lab, validated antibodies, automated staining, and AI-driven digital pathology turn a stained section into accurate, reproducible, decision-ready data.
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
                                    Understanding IHC
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Protein Expression in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Native Tissue Context</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Immunohistochemistry (IHC) uses antibodies that bind specific protein antigens to reveal exactly where a target is expressed within a tissue section. A visible chromogenic or fluorescent signal marks each positive site, so protein presence, abundance, and localization can be assessed without disrupting the surrounding morphology.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Because IHC preserves tissue architecture, it links molecular information directly to histology — showing not only whether a biomarker is present, but in which cells and structures. That spatial context makes IHC indispensable across biomarker discovery, translational research, and clinical development, from early target evaluation through companion diagnostic support.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Detect and localize protein biomarkers directly within intact tissue.',
                                    'Preserve morphology so results stay anchored to histology.',
                                    'Quantify expression objectively with digital image analysis.',
                                    'Scale from single markers to validated multiplex panels.',
                                    'Pair automated staining with expert pathologist review.',
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
                            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(12px)' }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex-1 w-full relative"
                        >
                            <IhcShowcaseImage
                                src={labImg}
                                alt="Immunohistochemistry laboratory staining and analysis"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comprehensive IHC Capabilities */}
            <section className="ihc-cap-section relative z-10 overflow-hidden border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
                <style>{`
                    @property --ihc-cap-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                    @keyframes ihc-cap-border-spin { to { --ihc-cap-angle: 360deg; } }
                    @keyframes ihc-cap-shine {
                        0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                        18% { opacity: 1; }
                        45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                    }
                    @keyframes ihc-cap-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                    @keyframes ihc-cap-spin-slow { to { transform: rotate(360deg); } }
                    @keyframes ihc-cap-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                    @keyframes ihc-cap-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                    @keyframes ihc-cap-bg-pan { 0% { background-position: 0 0; } 100% { background-position: 240px 140px; } }
                    @keyframes ihc-cap-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }

                    .ihc-cap-border {
                        background: conic-gradient(from var(--ihc-cap-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                        animation: ihc-cap-border-spin 7s linear infinite;
                    }
                    .ihc-cap-shine::before {
                        content: '';
                        position: absolute;
                        top: 0; bottom: 0; left: 0;
                        width: 45%;
                        background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
                        animation: ihc-cap-shine 6s ease-in-out infinite;
                    }
                    .ihc-cap-float { animation: ihc-cap-float 5s ease-in-out infinite; }
                    .ihc-cap-spin-slow { animation: ihc-cap-spin-slow 9s linear infinite; }
                    .ihc-cap-breathe { animation: ihc-cap-breathe 6s ease-in-out infinite; }
                    .ihc-cap-drift { animation: ihc-cap-drift 11s ease-in-out infinite; }
                    .ihc-cap-hexgrid { animation: ihc-cap-bg-pan 40s linear infinite; }
                    .ihc-cap-particle { animation: ihc-cap-particle 9s ease-in-out infinite; }

                    @media (prefers-reduced-motion: reduce) {
                        .ihc-cap-border, .ihc-cap-shine::before, .ihc-cap-float, .ihc-cap-spin-slow,
                        .ihc-cap-breathe, .ihc-cap-drift, .ihc-cap-hexgrid, .ihc-cap-particle {
                            animation: none !important;
                        }
                    }
                `}</style>

                {/* Faint animated biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="ihc-cap-hexgrid absolute inset-0 opacity-[0.06]"
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
                            className="ihc-cap-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Comprehensive IHC Capabilities"
                        subtitle="A complete, quality-driven immunohistochemistry service spanning assay development, staining, digital pathology, and quantitative analysis."
                        className="[&_h2]:text-white [&_h2]:drop-shadow-[0_0_24px_rgba(45,212,191,0.25)] [&_p]:text-slate-300"
                    />
                    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                        {capabilities.map((item, index) => (
                            <GlassCapabilityCard key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 relative z-10 overflow-hidden bg-white border-t border-slate-100">
                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided IHC Workflow"
                        subtitle="From sample receipt to final interpretation, every step is tracked, optimized, and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 4) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bioimageImg} alt="Digital pathology and imaging platforms" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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
                                Platforms & Technology
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Automated Staining, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Digital Analysis</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Reproducible IHC depends on the right instrumentation. Automated staining platforms standardize every run, whole-slide scanners digitize each section, and AI-assisted analysis converts stained tissue into objective, quantitative results.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Together, these technologies deliver consistent, defensible biomarker data across cohorts of any size — with expert pathology review keeping interpretation anchored to the biology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                            {technologies.map((tech, idx) => {
                                const TechIcon = tech.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08, duration: 0.5 }}
                                        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                                        className="group relative rounded-2xl bg-slate-800/50 p-6 backdrop-blur-md border border-slate-700/50 hover:border-primary-400/40 shadow-xl transition-all duration-400 overflow-hidden"
                                    >
                                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                                            <TechIcon className="w-6 h-6" />
                                        </div>
                                        <h4 className="relative text-lg font-bold text-white mb-1.5">{tech.title}</h4>
                                        <p className="relative text-sm text-slate-400 leading-relaxed">{tech.description}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Precision Medicine"
                        subtitle="Protein-level, spatially resolved insight supports discovery, translational, and clinical goals across a wide range of therapeutic areas."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((item, index) => (
                            <ApplicationCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional context strip */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm border border-teal-200">
                                Quality & Rigor
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                Validated Assays, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Reproducible Data</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Every IHC assay is optimized and validated for specificity, sensitivity, and reproducibility before it touches your study samples. Appropriate positive and negative controls, standardized scoring, and pathologist oversight ensure that results are accurate, comparable, and ready to support critical decisions.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Antibody titration and specificity confirmation for each target.',
                                    'Standardized controls run alongside every batch.',
                                    'Objective, reproducible scoring via quantitative image analysis.',
                                    'Expert pathologist review of all final interpretations.',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                                    alt="Quantitative analysis of immunostained tissue"
                                    loading="lazy"
                                    className="w-full h-auto md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted, end-to-end partner for immunohistochemistry and tissue-based biomarker programs of every scale."
                items={whyChooseUs}
            />

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default Immunohistochemistry;
