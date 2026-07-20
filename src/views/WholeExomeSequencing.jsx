'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
    Dna,
    Fingerprint,
    Microscope,
    Target,
    Stethoscope,
    Network,
    Search,
    TestTube,
    Layers,
    Crosshair,
    Cpu,
    Database,
    SearchCheck,
    FileCheck,
    CheckCircle2,
    Zap,
    ShieldCheck,
    SlidersHorizontal,
    FileText,
    ClipboardList,
    ClipboardCheck,
    Users,
    Lock,
    TrendingUp,
    Headset,
    ChevronDown,
    Atom,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const diagnosticsImg = '/assets/diagnostics.jpg';
const genomicsImg = '/assets/genomics.webp';
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 tracking-tight">{title}</h3>
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
        <div className="relative h-full bg-white/40 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.08)] group-hover:border-primary-200/70 group-hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-primary-500" />
            <span className="absolute top-4 right-5 text-4xl font-black text-slate-100 select-none">{step}</span>
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

const FeatureCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="relative group h-full cursor-pointer"
    >
        <div className="absolute inset-0 bg-teal-200 from-primary-500/20 via-teal-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
        <div className="relative h-full p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 group-hover:border-primary-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col overflow-hidden z-10">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-primary-200 group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-teal-50 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-primary-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="w-7 h-7 text-primary-600 group-hover:text-primary-700 group-hover:scale-110 transition-transform duration-500 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">{description}</p>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-teal-50/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    </motion.div>
);

const useMotionCapabilities = () => {
    const [canTilt, setCanTilt] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateHover = () => setCanTilt(hoverQuery.matches);
        const updateMotion = () => setReducedMotion(motionQuery.matches);

        updateHover();
        updateMotion();

        hoverQuery.addEventListener('change', updateHover);
        motionQuery.addEventListener('change', updateMotion);
        return () => {
            hoverQuery.removeEventListener('change', updateHover);
            motionQuery.removeEventListener('change', updateMotion);
        };
    }, []);

    return { canTilt, reducedMotion };
};

const DeliverableCard = ({ title, description, icon: Icon, delay, canTilt, reducedMotion }) => {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 22 });
    const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 22 });

    const handleMouseMove = (e) => {
        if (!canTilt || reducedMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        rotateY.set((px - 0.5) * 12);
        rotateX.set((0.5 - py) * 12);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: 'easeOut' }}
            style={{ perspective: 1000 }}
            className="group relative h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
                style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
                className="wes-shimmer-shell relative h-full rounded-[22px] p-[1.5px] overflow-hidden"
            >
                {!reducedMotion && (
                    <span className="wes-shimmer-rotate absolute inset-0 pointer-events-none" aria-hidden="true" />
                )}
                <div className="relative z-10 h-full flex items-start gap-4 p-6 rounded-[20.5px] bg-white/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 shadow-[0_8px_32px_rgba(15,23,42,0.08)] group-hover:shadow-[0_25px_55px_rgba(37,99,235,0.2)] transition-shadow duration-500">
                    <div className="absolute inset-0 rounded-[20.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.3), 0 0 36px rgba(56,189,248,0.28)' }} />
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const WhyChooseCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group text-center flex flex-col items-center p-9 rounded-[20px] bg-white/75 backdrop-blur-md border border-white/60 shadow-[0_8px_28px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.2)] hover:border-[#0EA5E9]/50 transition-all duration-300 cursor-pointer"
    >
        <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-6 text-white bg-gradient-to-br from-[#0EA5E9] to-[#2563EB] shadow-[0_8px_24px_rgba(14,165,233,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-[26px] font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-[17px] leading-[1.8] text-slate-600">{description}</p>
    </motion.div>
);

const applications = [
    { title: 'Rare Disease Research', description: 'Pinpoint causal variants in unsolved inherited conditions by concentrating sequencing depth on the coding regions where most pathogenic mutations arise.', icon: Fingerprint },
    { title: 'Cancer Genomics', description: 'Profile somatic and germline coding mutations that drive tumor development, supporting biomarker discovery and therapeutic target identification.', icon: Microscope },
    { title: 'Precision Medicine', description: 'Build patient-specific coding variant profiles that inform personalized treatment strategies and long-term risk stratification.', icon: Target },
    { title: 'Clinical Research', description: 'Generate exome-wide variant data to support translational studies, cohort screening, and hypothesis-driven investigations.', icon: Stethoscope },
    { title: 'Population Genetics', description: 'Compare coding-region variation across populations to study inheritance patterns, ancestry, and disease prevalence at scale.', icon: Network },
    { title: 'Gene Discovery', description: 'Identify novel candidate genes and functional variants underlying complex traits and previously uncharacterized phenotypes.', icon: Search },
];

const workflowSteps = [
    { step: '01', title: 'Sample Collection', description: 'Genomic material is collected under standardized protocols to preserve DNA integrity from the outset.', icon: TestTube },
    { step: '02', title: 'DNA Extraction', description: 'High-quality genomic DNA is isolated and purified to meet strict input and purity thresholds.', icon: Dna },
    { step: '03', title: 'Library Preparation', description: 'Fragmented DNA is end-repaired, adapter-ligated, and amplified into sequencing-ready libraries.', icon: Layers },
    { step: '04', title: 'Exome Capture', description: 'Targeted probes hybridize to and enrich the protein-coding exome from the whole-genome library.', icon: Crosshair },
    { step: '05', title: 'Next-Generation Sequencing', description: 'Captured libraries are sequenced at high depth on modern short-read sequencing platforms.', icon: Cpu },
    { step: '06', title: 'Bioinformatics Analysis', description: 'Raw reads are aligned, quality-filtered, and processed through validated variant-calling pipelines.', icon: Database },
    { step: '07', title: 'Variant Interpretation', description: 'Called variants are annotated, filtered, and prioritized against clinical and population reference databases.', icon: SearchCheck },
    { step: '08', title: 'Final Report', description: 'Findings are compiled into a clear, structured report ready for research or clinical review.', icon: FileCheck },
];

const features = [
    { title: 'High Coverage', description: 'Deep, uniform coverage across coding regions supports confident calling of both common and rare variants.', icon: Layers },
    { title: 'Accurate Variant Detection', description: 'Rigorous alignment and calling pipelines are tuned to minimize both false positives and false negatives.', icon: CheckCircle2 },
    { title: 'Fast Turnaround Time', description: 'Streamlined laboratory and analysis pipelines deliver results promptly without compromising data quality.', icon: Zap },
    { title: 'Advanced Bioinformatics', description: 'Configurable analysis pipelines scale smoothly from single samples to large cohort studies.', icon: Cpu },
    { title: 'Quality Control', description: 'Multi-stage QC checkpoints validate sample integrity, library quality, and sequencing metrics throughout.', icon: ShieldCheck },
    { title: 'Flexible Project Support', description: 'Custom capture panels, coverage targets, and analysis tiers are tailored to your specific study design.', icon: SlidersHorizontal },
];

const deliverableParticles = [
    { top: '8%', left: '15%', size: '8px', opacity: 0.35, delay: '0s' },
    { top: '18%', left: '85%', size: '6px', opacity: 0.25, delay: '1.2s' },
    { top: '38%', left: '6%', size: '5px', opacity: 0.3, delay: '2.1s' },
    { top: '55%', left: '92%', size: '7px', opacity: 0.3, delay: '0.6s' },
    { top: '70%', left: '20%', size: '6px', opacity: 0.25, delay: '2.8s' },
    { top: '85%', left: '78%', size: '8px', opacity: 0.35, delay: '1.6s' },
    { top: '25%', left: '50%', size: '5px', opacity: 0.22, delay: '3.4s' },
    { top: '65%', left: '55%', size: '6px', opacity: 0.28, delay: '0.9s' },
];

const deliverables = [
    { title: 'Raw FASTQ Files', description: 'Unprocessed sequencing reads provided for full pipeline transparency and reanalysis flexibility.', icon: FileText },
    { title: 'BAM Files', description: 'Aligned, sorted read files ready for downstream variant calling or custom workflows.', icon: Database },
    { title: 'VCF Files', description: 'Standardized variant call files listing SNPs, indels, and other coding-region variants.', icon: FileCheck },
    { title: 'Variant Annotation', description: 'Functional and clinical context layered onto each variant, including gene, effect, and frequency data.', icon: ClipboardList },
    { title: 'QC Reports', description: 'Detailed metrics on coverage, depth, mapping quality, and sample concordance.', icon: ClipboardCheck },
    { title: 'Optional Customized Analysis', description: 'Additional filtering, pathway analysis, or comparative study design available on request.', icon: SlidersHorizontal },
];

const whyChooseUs = [
    { title: 'Experienced Genomics Team', description: 'Scientists and bioinformaticians with deep expertise across research and clinical exome projects.', icon: Users },
    { title: 'Modern Sequencing Platforms', description: 'High-throughput instrumentation validated for accuracy, depth, and reproducibility.', icon: Cpu },
    { title: 'Robust Quality Standards', description: 'Standardized protocols and multi-stage checkpoints safeguard data integrity at every step.', icon: ShieldCheck },
    { title: 'Secure Data Handling', description: 'Confidential handling of sample and sequencing data across storage, transfer, and delivery.', icon: Lock },
    { title: 'Scalable Research Solutions', description: 'Project designs that flex from single-sample studies to large multi-cohort programs.', icon: TrendingUp },
    { title: 'Reliable Technical Support', description: 'Responsive scientific guidance available throughout study design, execution, and reporting.', icon: Headset },
];

const faqs = [
    {
        question: 'What is Whole Exome Sequencing and how does it differ from Whole Genome Sequencing?',
        answer: 'Whole Exome Sequencing focuses on the protein-coding exons that make up roughly 1–2% of the genome, while Whole Genome Sequencing captures the entire genome including non-coding regions. Because most known disease-associated variants occur in exons, WES delivers highly relevant coding-region data at a lower cost and with faster turnaround than WGS.',
    },
    {
        question: 'Why sequence only the exome instead of the whole genome?',
        answer: 'Concentrating sequencing depth on coding regions allows for greater coverage per base at a fraction of the cost, produces smaller and more manageable datasets, and simplifies downstream interpretation — all while still capturing the majority of variants known to cause inherited disease.',
    },
    {
        question: 'What sample types are accepted for exome sequencing?',
        answer: 'We accept whole blood, saliva, buccal swabs, fresh or frozen tissue, and previously extracted genomic DNA. Our team can advise on the most suitable sample type and collection method for your specific study.',
    },
    {
        question: 'What sequencing depth is used for WES projects?',
        answer: 'Standard projects target high mean coverage across the captured exome to support confident variant calling, with depth fully configurable based on your research or clinical objectives.',
    },
    {
        question: 'How long does a typical WES project take?',
        answer: 'Turnaround time depends on cohort size and the analysis tier selected. Most projects move from sample receipt to final report within a few weeks, with expedited options available for time-sensitive studies.',
    },
    {
        question: 'What file formats and reports will I receive?',
        answer: 'Standard deliverables include raw FASTQ files, aligned BAM files, annotated VCF files, and comprehensive QC reports. Customized analysis reports can be added based on your study requirements.',
    },
    {
        question: 'Can WES detect structural variants or copy number variants?',
        answer: 'WES is optimized primarily for detecting single-nucleotide variants and small insertions/deletions within coding regions. Copy number variant detection is possible with specialized analysis, though with some limitations compared to whole genome approaches.',
    },
    {
        question: 'Is WES suitable for large population-scale studies?',
        answer: 'Yes. Its lower per-sample cost and smaller data footprint make WES a practical choice for scaling across large cohorts while retaining strong resolution of coding-region variation.',
    },
];

const WholeExomeSequencing = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const { canTilt, reducedMotion } = useMotionCapabilities();

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
                            <Dna className="w-4 h-4" />
                            Genomics Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Whole Exome <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Sequencing (WES)
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Focused, high-depth analysis of the protein-coding genome to accelerate variant discovery.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
Whole Exome Sequencing (WES) selectively sequences these coding regions, enabling researchers and clinicians to identify clinically significant genetic variants with high accuracy. By focusing on the most biologically relevant portion of the genome, WES offers a cost-effective, high-depth, and efficient solution for disease research, precision medicine, rare disease diagnosis, and clinical genomics.                     </p>
                    </motion.div>
                </div>
            </section>

            {/* What is WES */}
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
                                    Understanding WES
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Whole Exome Sequencing?</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
The exome consists of all the protein-coding regions (called exons) within the human genome. Although these regions represent only about 1–2% of the genome, they contain most known genetic variants associated with inherited disorders and many cancers.                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Because the vast majority of known disease-causing variants occur within coding sequence, this targeted approach delivers highly relevant data at greater depth, lower cost, and faster turnaround than sequencing the full genome.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Higher effective coverage on coding regions supports more confident variant calls.',
                                    'Smaller, more manageable data volumes simplify storage, transfer, and interpretation.',
                                    'Sequencing effort is concentrated where most known Mendelian disease variants occur.',
                                    'Faster project turnaround for time-sensitive research and diagnostic questions.',
                                    'Cost-efficient scaling across large sample cohorts without sacrificing coding-region resolution.',
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
                            className="flex-1 w-full relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                                <img
                                    src={diagnosticsImg}
                                    alt="Genomic sequencing laboratory analysis"
                                    className="w-full h-auto md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Clinical Domains"
                        subtitle="Coding-region resolution supports discovery and diagnostic goals across a wide range of genomics applications."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((item, index) => (
                            <ApplicationCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 bg-slate-50 relative z-10 overflow-hidden">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Whole-Exome Sequencing Best Practices"
                       
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 4) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Features & Benefits"
                        subtitle="A dependable exome sequencing service built for accuracy, speed, and flexibility."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {features.map((item, index) => (
                            <FeatureCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-24 relative z-10 border-t border-slate-100 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/70 to-teal-50">
                <style>{`
                    @keyframes wes-shimmer-spin {
                        to { transform: rotate(360deg); }
                    }
                    @keyframes wes-float-slow {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(14px, -18px, 0); }
                    }
                    @keyframes wes-float-slower {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-16px, 16px, 0) rotate(8deg); }
                    }
                    @keyframes wes-particle-drift {
                        0%, 100% { transform: translate3d(0, 0, 0); opacity: var(--wes-particle-op, 0.3); }
                        50% { transform: translate3d(10px, -22px, 0); opacity: calc(var(--wes-particle-op, 0.3) * 0.4); }
                    }
                    .wes-shimmer-rotate {
                        background: conic-gradient(from 0deg, rgba(56,189,248,0) 0deg, rgba(56,189,248,0.9) 35deg, rgba(20,184,166,0.75) 70deg, rgba(56,189,248,0) 130deg, rgba(56,189,248,0) 360deg);
                        animation: wes-shimmer-spin 6s linear infinite;
                        will-change: transform;
                    }
                    .wes-float-icon-a { animation: wes-float-slow 9s ease-in-out infinite; will-change: transform; }
                    .wes-float-icon-b { animation: wes-float-slower 11s ease-in-out infinite; will-change: transform; }
                    .wes-float-icon-c { animation: wes-float-slow 13s ease-in-out infinite; will-change: transform; }
                    .wes-particle { animation: wes-particle-drift 7s ease-in-out infinite; will-change: transform, opacity; }
                    @media (prefers-reduced-motion: reduce) {
                        .wes-shimmer-rotate,
                        .wes-float-icon-a,
                        .wes-float-icon-b,
                        .wes-float-icon-c,
                        .wes-particle {
                            animation: none !important;
                        }
                    }
                `}</style>

                {/* Large DNA helix background pattern */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none select-none"
                    viewBox="0 0 800 800"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <path d="M120,0 C280,100 -40,200 120,300 C280,400 -40,500 120,600 C280,700 -40,750 120,800" fill="none" stroke="#0f172a" strokeWidth="6" />
                    <path d="M280,0 C120,100 440,200 280,300 C120,400 440,500 280,600 C120,700 440,750 280,800" fill="none" stroke="#0f172a" strokeWidth="6" />
                    {Array.from({ length: 17 }).map((_, i) => (
                        <line key={i} x1="120" y1={i * 50} x2="280" y2={i * 50} stroke="#0f172a" strokeWidth="4" />
                    ))}
                    <path d="M600,50 C760,150 440,250 600,350 C760,450 440,550 600,650 C760,750 440,780 600,800" fill="none" stroke="#0f172a" strokeWidth="6" />
                    <path d="M760,50 C600,150 920,250 760,350 C600,450 920,550 760,650 C600,750 920,780 760,800" fill="none" stroke="#0f172a" strokeWidth="6" />
                    {Array.from({ length: 16 }).map((_, i) => (
                        <line key={`b-${i}`} x1="600" y1={50 + i * 50} x2="760" y2={50 + i * 50} stroke="#0f172a" strokeWidth="4" />
                    ))}
                </svg>

                {/* Soft floating glowing scientific icons */}
                <Dna aria-hidden="true" className="wes-float-icon-a hidden sm:block absolute top-10 left-[6%] w-16 h-16 text-primary-400/25 pointer-events-none" />
                <Atom aria-hidden="true" className="wes-float-icon-b hidden sm:block absolute top-24 right-[10%] w-14 h-14 text-teal-400/25 pointer-events-none" />
                <Microscope aria-hidden="true" className="wes-float-icon-c hidden sm:block absolute bottom-16 left-[12%] w-14 h-14 text-primary-400/25 pointer-events-none" />
                <Database aria-hidden="true" className="wes-float-icon-a hidden sm:block absolute bottom-10 right-[8%] w-16 h-16 text-teal-400/25 pointer-events-none" />
                <Cpu aria-hidden="true" className="wes-float-icon-b hidden lg:block absolute top-1/2 left-[3%] w-10 h-10 text-primary-400/20 pointer-events-none" />

                {/* Soft floating background particles */}
                {deliverableParticles.map((p, i) => (
                    <span
                        key={i}
                        className="wes-particle absolute rounded-full bg-primary-400/60 blur-[1px] pointer-events-none"
                        style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay, '--wes-particle-op': p.opacity }}
                    />
                ))}

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="What You Receive"
                        subtitle="Complete, well-organized deliverables designed for downstream research or clinical use."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {deliverables.map((item, index) => (
                            <DeliverableCard key={index} {...item} delay={index * 0.08} canTilt={canTilt} reducedMotion={reducedMotion} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Laboratory */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 border-t border-slate-100 overflow-hidden py-[120px]"
                style={{ background: 'linear-gradient(180deg, #f8fcff 0%, #ffffff 100%)' }}
            >
                <style>{`
                    @keyframes whylab-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(10px, -14px, 0); }
                    }
                    @keyframes whylab-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-12px, 12px, 0) rotate(6deg); }
                    }
                    .whylab-float-a { animation: whylab-float-a 10s ease-in-out infinite; will-change: transform; }
                    .whylab-float-b { animation: whylab-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .whylab-float-a, .whylab-float-b { animation: none !important; }
                    }
                `}</style>

                {/* Decorative DNA helix */}
                <svg
                    className="absolute -right-24 top-0 h-full w-[520px] opacity-[0.05] blur-[1px] pointer-events-none select-none hidden md:block"
                    viewBox="0 0 400 800"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <path d="M100,0 C260,100 -60,200 100,300 C260,400 -60,500 100,600 C260,700 -60,750 100,800" fill="none" stroke="#0EA5E9" strokeWidth="6" />
                    <path d="M260,0 C100,100 420,200 260,300 C100,400 420,500 260,600 C100,700 420,750 260,800" fill="none" stroke="#2563EB" strokeWidth="6" />
                    {Array.from({ length: 17 }).map((_, i) => (
                        <line key={i} x1="100" y1={i * 50} x2="260" y2={i * 50} stroke="#0EA5E9" strokeWidth="4" />
                    ))}
                </svg>

                {/* Floating molecule icons */}
                <Atom aria-hidden="true" className="whylab-float-a hidden sm:block absolute top-16 left-[8%] w-12 h-12 text-[#0EA5E9] opacity-[0.06] pointer-events-none" />
                <Dna aria-hidden="true" className="whylab-float-b hidden sm:block absolute bottom-20 left-[4%] w-14 h-14 text-[#2563EB] opacity-[0.06] pointer-events-none" />
                <Atom aria-hidden="true" className="whylab-float-b hidden lg:block absolute bottom-10 right-[38%] w-10 h-10 text-[#38BDF8] opacity-[0.06] pointer-events-none" />

                {/* Soft radial gradient circles */}
                <div className="absolute top-0 left-[15%] w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                        {/* Left column - heading */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="w-full lg:w-[40%] lg:max-w-[450px] lg:self-center"
                        >
                            <h2 className="text-[34px] md:text-[42px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#0F172A]">
                                Why Choose Our Laboratory
                            </h2>
                            <p className="text-[20px] font-medium leading-relaxed text-[#5b6577] mt-5 max-w-[500px]">
                                A trusted partner for exome sequencing projects of every scale.
                            </p>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                                style={{ transformOrigin: 'left' }}
                                className="h-1 w-20 rounded-full mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#2563EB]"
                            />
                        </motion.div>

                        {/* Right column - image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="w-full lg:w-[60%]"
                        >
                            <div className="group relative rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.14)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.2)] transition-shadow duration-500 aspect-[4/3]">
                                <img
                                    src={genomicsImg}
                                    alt="Laboratory scientist performing molecular diagnostics and DNA analysis"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/15 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-[60px]">
                        {whyChooseUs.map((item, index) => (
                            <WhyChooseCard key={index} {...item} delay={(index + 1) * 0.1} />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            
            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default WholeExomeSequencing;
