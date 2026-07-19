import { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import {
    Dna,
    Microscope,
    Cpu,
    Layers,
    Target,
    Crosshair,
    ShieldCheck,
    ShieldPlus,
    Gauge,
    FileCheck,
    ClipboardCheck,
    ClipboardList,
    Inbox,
    Beaker,
    ScanLine,
    SearchCheck,
    Activity,
    TrendingUp,
    Wrench,
    RefreshCw,
    Network,
    Stethoscope,
    Clock,
    Award,
    Zap,
    CheckCircle2,
    Pill,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
import bgVideo from '../assets/bgvideo.mp4';
import genomicsImg from '../assets/genomics.webp';
import diagnosticsImg from '../assets/diagnostics.jpg';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const overviewHighlights = [
    'Consolidate SNVs, indels, CNVs, and fusions into a single tissue-sparing assay.',
    'Detect low-frequency driver and resistance variants with high analytical sensitivity.',
    'Match patients to targeted therapies, immunotherapy, and open clinical trials.',
    'Deliver pathologist-reviewed, clinically actionable genomic reports.',
];

// Cancer panel kits shown in the Capabilities section (name + rich description).
const solidTumorPanels = [
    {
        name: 'CDCap™ Comprehensive Cancer Panel Kit',
        description: (
            <>
                Hybridization capture-based NGS assay designed to detect <strong>SNVs, indels, CNVs, and gene fusions</strong> across <strong>641 cancer-associated genes</strong>. Integrates important biomarkers including <strong>TMB, MSI, and MMR</strong> for immunotherapy response prediction and treatment insights. Optimized with <strong>UMI technology</strong> for enhanced sensitivity in liquid biopsy applications.
            </>
        ),
    },
    {
        name: 'CDCap™ Solid Tumor Mid Panel Kit',
        description: (
            <>
                Uses advanced hybrid capture technology to profile <strong>122 cancer-related genes</strong> and detect <strong>SNVs, indels, gene fusions, MSI (19 loci), and 219 chemotherapy-associated markers</strong> across multiple tumor types.
            </>
        ),
    },
    {
        name: 'CDCap™ Solid Tumor HotSpot Panel Kit',
        description: (
            <>
                A hybrid capture-based NGS panel designed to analyze hotspot mutations across <strong>49 cancer genes</strong>, enabling detection of <strong>SNVs, indels, CNVs, and gene fusions</strong> for comprehensive solid tumor genomic analysis.
            </>
        ),
    },
    {
        name: 'CDCap™ Solid Tumor Fusion RNA Panel Kit',
        description: (
            <>
                Utilizes targeted RNA sequencing technology to analyze <strong>105 genes</strong> for gene fusions, mutations, and expression profiles, enabling sensitive fusion detection in solid tumor research applications.
            </>
        ),
    },
    {
        name: 'CDCap™ Lung Cancer Panel Kit',
        description: (
            <>
                A hybrid capture NGS assay designed to detect <strong>SNVs, indels, CNVs, and gene fusions</strong> across <strong>23 NSCLC driver genes</strong> including full exon regions and key fusion regions, supporting comprehensive lung cancer genomic profiling.
            </>
        ),
    },
    {
        name: 'CDAmp™ Colorectal/Gastric Cancer Panel',
        description: (
            <>
                A multiplex PCR-based NGS panel designed to analyze <strong>35 NCCN-recommended genes</strong> and detect key driver mutations including <strong>SNVs and indels</strong> with sensitivity down to <strong>1% VAF</strong> for molecular classification and precision oncology research in colorectal cancer, gastric cancer, and GIST studies.
            </>
        ),
    },
    {
        name: 'CDAmp™ Glioma Panel Kit',
        description: (
            <>
                A PCR-based targeted sequencing panel designed to detect important glioma-associated alterations including <strong>IDH1/2 mutations, TERT promoter hotspots, BRAF hotspots, and large CNV deletions involving 1p/19q/10q regions</strong>. Supports low-input samples and rapid molecular profiling workflows.
            </>
        ),
    },
    {
        name: 'CDCap™ HotSpot Panel',
        description: (
            <>
                A targeted cancer panel designed to detect <strong>SNVs, indels, CNVs, and gene fusions</strong> across <strong>49 key cancer genes</strong>. Suitable for genomic analysis of <strong>FFPE tissue and plasma samples</strong>.
            </>
        ),
    },
];

const workflowSteps = [
    { step: '01', title: 'Sample Collection', description: 'Tumor tissue or biopsy specimens are received, accessioned, and tracked under controlled, chain-of-custody conditions.', icon: Inbox },
    { step: '02', title: 'DNA Extraction', description: 'Genomic DNA is isolated from FFPE, fresh, or frozen tissue using protocols tuned for maximal yield and purity.', icon: Beaker },
    { step: '03', title: 'Library Preparation', description: 'Sequencing libraries are constructed and barcoded with strict quality control at every checkpoint.', icon: Layers },
    { step: '04', title: 'Target Enrichment', description: 'Hybridization-based capture enriches the curated cancer gene panel for deep, focused sequencing.', icon: Crosshair },
    { step: '05', title: 'Next-Generation Sequencing', description: 'High-throughput parallel sequencing generates deep, uniform coverage across all targeted regions.', icon: ScanLine },
    { step: '06', title: 'Bioinformatics Analysis', description: 'Reads are aligned and variants called and annotated through our validated, reproducible pipeline.', icon: Cpu },
    { step: '07', title: 'Variant Interpretation', description: 'Molecular experts classify variants by clinical significance and therapeutic relevance.', icon: SearchCheck },
    { step: '08', title: 'Comprehensive Clinical Report', description: 'A clear, pathologist-reviewed report is delivered with actionable findings and interpretive context.', icon: FileCheck },
];

const applications = [
    { title: 'Precision Oncology', description: 'Resolve the molecular drivers of each tumor to guide evidence-based, genomically informed treatment decisions.', icon: Target },
    { title: 'Personalized Cancer Therapy', description: 'Tailor treatment strategies to a patient’s unique tumor genomic profile rather than a one-size-fits-all approach.', icon: Pill },
    { title: 'Targeted Therapy Selection', description: 'Identify actionable alterations that predict response to approved and investigational targeted agents.', icon: Crosshair },
    { title: 'Clinical Trial Enrollment', description: 'Match patients to biomarker-driven clinical trials by uncovering eligibility-defining genomic alterations.', icon: ClipboardList },
    { title: 'Biomarker Discovery', description: 'Surface and validate candidate biomarkers that advance research and future diagnostic development.', icon: SearchCheck },
    { title: 'Disease Monitoring', description: 'Track molecular changes over the course of disease to inform ongoing management strategies.', icon: Activity },
    { title: 'Prognostic Assessment', description: 'Leverage genomic signatures that refine risk stratification and prognostic evaluation.', icon: TrendingUp },
    { title: 'Translational Research', description: 'Bridge molecular findings and clinical insight to accelerate discovery-to-bedside programs.', icon: Dna },
];

const geneCategories = [
    { title: 'Oncogenes', description: 'Genes whose activating alterations drive uncontrolled proliferation and represent key therapeutic targets.', icon: Zap },
    { title: 'Tumor Suppressor Genes', description: 'Guardian genes whose loss-of-function removes critical brakes on tumor growth and genome stability.', icon: ShieldPlus },
    { title: 'DNA Repair Genes', description: 'Genes governing genome integrity whose defects create vulnerabilities exploitable by targeted therapy.', icon: Wrench },
    { title: 'Cell Cycle Regulation Genes', description: 'Regulators of cell division that, when disrupted, enable unchecked tumor cell replication.', icon: RefreshCw },
    { title: 'Signaling Pathway Genes', description: 'Components of oncogenic signaling cascades that shape tumor behavior and treatment response.', icon: Network },
    { title: 'Actionable Biomarkers', description: 'Alterations linked to approved therapies, immunotherapy eligibility, and clinical decision-making.', icon: Target },
];

const whyChooseUs = [
    { title: 'Advanced NGS Technology', description: 'State-of-the-art next-generation sequencing platforms delivering deep, uniform coverage and high-fidelity data.', icon: ScanLine },
    { title: 'High Sensitivity & Specificity', description: 'Rigorously validated assays that detect low-frequency variants while minimizing false positives.', icon: Gauge },
    { title: 'Molecular Pathology Expertise', description: 'An experienced team of molecular scientists and pathologists guiding interpretation and reporting.', icon: Stethoscope },
    { title: 'Comprehensive Bioinformatics', description: 'A robust, quality-controlled analysis pipeline from raw reads to annotated, curated variants.', icon: Cpu },
    { title: 'Actionable Reporting', description: 'Clear, guideline-aligned reports that translate complex genomic data into clinical decisions.', icon: ClipboardCheck },
    { title: 'Quality-Controlled Workflows', description: 'Standardized protocols and multi-stage checkpoints that safeguard integrity from sample to report.', icon: ShieldCheck },
    { title: 'Fast Turnaround Time', description: 'Efficient, streamlined workflows that deliver dependable results within clinically meaningful timelines.', icon: Clock },
    { title: 'Precision Oncology Focus', description: 'Deep domain expertise dedicated to advancing personalized, genomically guided cancer care.', icon: Award },
];

// ---------------------------------------------------------------------------
// Cards
// ---------------------------------------------------------------------------

// Premium interactive card for Clinical Applications (dark section).
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

// Light glass workflow step card.
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

// Light glass gene-category card with subtle icon.
const GeneCategoryCard = ({ title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: 'easeOut' }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full"
    >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-300/30 via-teal-300/20 to-primary-300/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative h-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.08)] group-hover:border-primary-200/70 group-hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500 p-7 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 text-white flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const SolidTumorPanel = () => {
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
                @property --stp-cap-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes stp-cap-border-spin { to { --stp-cap-angle: 360deg; } }
                @keyframes stp-hero-float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-6px,0); } }
                @keyframes stp-img-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                @keyframes stp-img-breathe { 0%, 100% { opacity: .25; transform: scale(1); } 50% { opacity: .45; transform: scale(1.03); } }
                @keyframes stp-cap-shine {
                    0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
                    18% { opacity: 1; }
                    45%, 100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
                }
                @keyframes stp-cap-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes stp-cap-spin-slow { to { transform: rotate(360deg); } }
                @keyframes stp-cap-breathe { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .55; transform: scale(1.04); } }
                @keyframes stp-cap-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
                @keyframes stp-cap-bg-pan { 0% { background-position: 0 0; } 100% { background-position: 240px 140px; } }
                @keyframes stp-cap-particle { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-24px); opacity: 1; } }

                .stp-hero-float { animation: stp-hero-float 7s ease-in-out infinite; will-change: transform; }
                .stp-img-float { animation: stp-img-float 6s ease-in-out infinite; will-change: transform; }
                .stp-img-breathe { animation: stp-img-breathe 5.5s ease-in-out infinite; will-change: opacity, transform; }
                .stp-cap-border {
                    background: conic-gradient(from var(--stp-cap-angle), #2dd4bf, #22d3ee, #34d399, #06b6d4, #5eead4, #2dd4bf);
                    animation: stp-cap-border-spin 7s linear infinite;
                }
                .stp-cap-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    width: 45%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
                    animation: stp-cap-shine 6s ease-in-out infinite;
                }
                .stp-cap-float { animation: stp-cap-float 5s ease-in-out infinite; }
                .stp-cap-spin-slow { animation: stp-cap-spin-slow 9s linear infinite; }
                .stp-cap-breathe { animation: stp-cap-breathe 6s ease-in-out infinite; }
                .stp-cap-drift { animation: stp-cap-drift 11s ease-in-out infinite; }
                .stp-cap-hexgrid { animation: stp-cap-bg-pan 40s linear infinite; }
                .stp-cap-particle { animation: stp-cap-particle 9s ease-in-out infinite; }

                @media (prefers-reduced-motion: reduce) {
                    .stp-hero-float, .stp-img-float, .stp-img-breathe, .stp-cap-border, .stp-cap-shine::before,
                    .stp-cap-float, .stp-cap-spin-slow, .stp-cap-breathe, .stp-cap-drift, .stp-cap-hexgrid, .stp-cap-particle {
                        animation: none !important;
                    }
                }
            `}</style>

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ y: heroVideoY, scale: heroVideoScale }}
                    className="absolute -inset-[12%] z-0 will-change-transform"
                >
                    <video autoPlay muted loop playsInline className="stp-hero-float w-full h-full object-cover">
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
                            <Dna className="w-4 h-4" />
                            Genomics & Precision Oncology
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Solid Tumor{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Panel
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Comprehensive genomic profiling for solid tumors — powering precision oncology with a single, tissue-sparing NGS assay.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            CNC Path Lab’s Solid Tumor Panel interrogates clinically relevant cancer genes to detect the mutations, copy number changes, and fusions that drive disease — turning complex tumor genomics into clear, actionable insight for personalized treatment decisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Overview */}
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
                                    Understanding the Solid Tumor Panel
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Comprehensive Genomic Profiling for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Solid Tumors</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    A Solid Tumor Panel is a targeted next-generation sequencing (NGS) assay that simultaneously analyzes a curated set of cancer-associated genes from a single tumor specimen. In one tissue-sparing test, it captures the diverse alterations that drive solid tumors — from lung and colorectal to breast, melanoma, and beyond.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Because solid tumors are molecularly heterogeneous and often harbor several coexisting drivers, comprehensive genomic profiling is essential to accurate diagnosis and treatment. By consolidating single nucleotide variants, indels, copy number changes, and gene fusions into one report, CNC Path Lab conserves precious tissue while accelerating clinically meaningful answers.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Next-generation sequencing sits at the heart of this approach: its high-throughput, deep-coverage design detects even low-frequency variants with confidence, revealing driver mutations, resistance markers, and therapy-defining biomarkers. The result is a genomic foundation for precision medicine — guiding targeted therapy, immunotherapy eligibility, clinical trial matching, and personalized treatment decisions.
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
                            <div className="stp-img-breathe pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(20,184,166,0.4),rgba(6,182,212,0.18)_58%,transparent_75%)] blur-2xl" />

                            <div
                                ref={overviewImgRef}
                                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-[transform,box-shadow,border-color] duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:border-teal-300/70 group-hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.5),0_0_40px_-8px_rgba(34,211,238,0.4)]"
                            >
                                <motion.div style={{ y: overviewImgY, scale: overviewImgScale }} className="will-change-transform">
                                    <div className="stp-img-float">
                                        <img
                                            src={genomicsImg}
                                            alt="Next-generation sequencing genomic profiling of solid tumors"
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

            {/* 3. Comprehensive Solid Tumor Panel Capabilities */}
            <section className="relative z-10 overflow-hidden border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
                {/* Faint animated biotech background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="stp-cap-hexgrid absolute inset-0 opacity-[0.06]"
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
                            className="stp-cap-particle absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_10px_2px_rgba(34,211,238,0.35)]"
                            style={{ left: p.left, top: p.top, animationDelay: p.d }}
                        />
                    ))}
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Comprehensive Solid Tumor Panel Capabilities"
                        subtitle="Every clinically relevant class of genomic alteration — detected, quantified, and interpreted within a single high-depth NGS workflow."
                        className="[&_h2]:text-white [&_h2]:drop-shadow-[0_0_24px_rgba(45,212,191,0.25)] [&_p]:text-slate-300"
                    />
                    <div className="mx-auto mt-16 max-w-6xl">
                        {/* Column headers (desktop/tablet only — rows stack on mobile) */}
                        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-8 px-7 pb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-teal-300">Panel Name</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-teal-300">Description</span>
                        </div>

                        <div className="space-y-5">
                            {solidTumorPanels.map((panel, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.55, delay: (idx % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                    className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-3 md:gap-8 rounded-2xl border border-white/60 bg-gradient-to-br from-white/95 to-sky-50/90 p-6 md:p-7 shadow-[0_10px_36px_-14px_rgba(13,148,136,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_22px_50px_-16px_rgba(13,148,136,0.45),0_0_28px_-10px_rgba(34,211,238,0.5)]"
                                >
                                    {/* Column 1: Panel name */}
                                    <div className="md:border-r md:border-slate-200/80 md:pr-6">
                                        <h3 className="flex items-start gap-2.5 text-[17px] font-extrabold leading-snug tracking-tight text-[#0F172A]">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                                            {panel.name}
                                        </h3>
                                    </div>

                                    {/* Column 2: Description */}
                                    <p className="text-[15px] leading-[1.75] text-[#334155] [&_strong]:font-semibold [&_strong]:text-[#0F172A]">
                                        {panel.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Workflow */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Solid Tumor Sequencing Workflow"
                        subtitle="From sample collection to a comprehensive clinical report, every step is tracked and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 4) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Clinical Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Clinical Applications"
                        subtitle="Genomically informed insight that supports decisions across the precision oncology continuum."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((item, index) => (
                            <ApplicationCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Gene Categories */}
            <section className="py-24 relative z-10 overflow-hidden border-t border-slate-100 bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Gene Categories Analyzed"
                        subtitle="Our curated panel spans the functional gene classes that define solid tumor biology and therapeutic opportunity."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                        {geneCategories.map((cat, index) => (
                            <GeneCategoryCard key={index} {...cat} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Precision Medicine feature band */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={diagnosticsImg} alt="Molecular diagnostics laboratory" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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
                                Precision Medicine
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                From Tumor Genome to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Personalized Treatment</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Comprehensive genomic profiling transforms how solid tumors are understood and treated. By revealing the specific alterations driving each tumor, the Solid Tumor Panel helps clinicians move beyond broad, empirical approaches toward therapy matched to a patient’s individual molecular profile.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Each report pairs high-fidelity sequencing data with expert molecular interpretation, connecting genomic findings to targeted therapy options, immunotherapy biomarkers, and relevant clinical trials — so results translate directly into confident, personalized care decisions.
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
                                    {[
                                        { title: 'Actionable Genomic Insight', description: 'Driver alterations and resistance markers surfaced with clinical context for immediate decision-making.', icon: Target },
                                        { title: 'Immunotherapy Biomarkers', description: 'Genomic signals that inform immunotherapy eligibility alongside targeted treatment options.', icon: ShieldCheck },
                                        { title: 'Expert Interpretation', description: 'Molecular pathologists translate complex variant data into clear, guideline-aligned reporting.', icon: Microscope },
                                    ].map((item, idx) => {
                                        const ItemIcon = item.icon;
                                        const accents = ['bg-primary-500/20 text-primary-400', 'bg-teal-500/20 text-teal-400', 'bg-blue-500/20 text-blue-400'];
                                        return (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className={`${accents[idx % accents.length]} p-3 rounded-lg mt-1`}>
                                                    <ItemIcon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-slate-400">{item.description}</p>
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

            {/* 7. Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted molecular diagnostics partner for comprehensive solid tumor genomic profiling and precision oncology."
                items={whyChooseUs}
            />

            {/* 8. Call-to-Action */}
            <CTASection />

        </div>
    );
};

export default SolidTumorPanel;
