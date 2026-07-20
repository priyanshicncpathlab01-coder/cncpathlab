'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Dna,
    Crosshair,
    Microscope,
    Zap,
    Layers,
    BarChart3,
    Eye,
    FileCheck,
    Brain,
    ShieldCheck,
    Baby,
    Search,
    FlaskConical,
    Network,
    Target,
    Scissors,
    Camera,
    Cpu,
    Database,
    Map,
    FileText,
    Image as ImageIcon,
    ClipboardCheck,
    SearchCheck,
    Users,
    Headset,
    ChevronDown,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const specialtyLabImg = '/assets/specialty_lab.png';
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

const DeliverableCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_28px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.16)] hover:border-primary-200/70 transition-all duration-300"
    >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-[0_6px_18px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const WhyChooseCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
    >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white bg-gradient-to-br from-primary-500 to-teal-500 shadow-[0_8px_20px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
);

const heroParticles = [
    { top: '18%', left: '12%', size: '6px', delay: '0s' },
    { top: '28%', left: '82%', size: '5px', delay: '1s' },
    { top: '62%', left: '8%', size: '4px', delay: '2s' },
    { top: '72%', left: '90%', size: '6px', delay: '0.6s' },
    { top: '45%', left: '48%', size: '4px', delay: '1.6s' },
    { top: '15%', left: '55%', size: '5px', delay: '2.4s' },
    { top: '82%', left: '35%', size: '5px', delay: '0.3s' },
];

const keyBenefits = [
    { title: 'Ultra-High Spatial Resolution', description: 'Continuous, high-density capture areas resolve gene expression at a scale that approaches individual cells within intact tissue.', icon: Crosshair },
    { title: 'Whole-Transcriptome Profiling', description: 'Capture the full transcriptome from every tissue section instead of a pre-selected panel of targets.', icon: Dna },
    { title: 'Single-Cell Level Insights', description: 'Fine-grained bin sizing reveals expression differences between neighboring cells within the same tissue compartment.', icon: Microscope },
    { title: 'High Sensitivity', description: 'Optimized chemistry captures low-abundance transcripts alongside highly expressed genes with confidence.', icon: Zap },
    { title: 'Preserved Tissue Morphology', description: 'The tissue section remains intact throughout the workflow, keeping structural landmarks fully visible.', icon: Layers },
    { title: 'Comprehensive Gene Expression Analysis', description: 'Full transcriptomic coverage supports discovery-driven exploration alongside hypothesis-led questions.', icon: BarChart3 },
    { title: 'Advanced Visualization', description: 'Expression data overlays directly onto histology imagery for intuitive interpretation of spatial patterns.', icon: Eye },
    { title: 'Research-Ready Data', description: 'Structured outputs and annotated files are ready to drop into established spatial analysis pipelines.', icon: FileCheck },
];

const applications = [
    { title: 'Oncology Research', description: 'Map tumor heterogeneity, immune infiltration, and invasive margins directly within the tissue context.', icon: Microscope },
    { title: 'Neuroscience', description: 'Resolve gene expression across cortical layers, nuclei, and cellular neighborhoods in neural tissue.', icon: Brain },
    { title: 'Immunology', description: 'Characterize immune cell organization and signaling niches within lymphoid and inflamed tissues.', icon: ShieldCheck },
    { title: 'Developmental Biology', description: 'Track spatial gene expression programs that guide tissue patterning across developmental stages.', icon: Baby },
    { title: 'Biomarker Discovery', description: 'Localize candidate biomarkers to specific tissue regions to strengthen confidence before validation.', icon: Search },
    { title: 'Drug Discovery', description: 'Assess spatial response to treatment and identify tissue-level mechanisms of drug action.', icon: FlaskConical },
    { title: 'Translational Research', description: 'Bridge molecular findings and tissue pathology to support translational study designs.', icon: Network },
    { title: 'Precision Medicine', description: 'Build spatially resolved expression profiles that inform individualized research strategies.', icon: Target },
];

const workflowSteps = [
    { step: '01', title: 'Tissue Preparation', description: 'Fresh-frozen or FFPE tissue is processed and sectioned under strict quality-controlled conditions.', icon: Scissors },
    { step: '02', title: 'Tissue Section Placement', description: 'Sections are mounted onto the capture area, preserving native spatial orientation.', icon: Layers },
    { step: '03', title: 'Histological Imaging', description: 'High-resolution brightfield or fluorescence imaging captures the tissue morphology for downstream overlay.', icon: Camera },
    { step: '04', title: 'RNA Capture', description: 'Transcripts are captured directly from the tissue section across a continuous, high-density array.', icon: Dna },
    { step: '05', title: 'Library Preparation', description: 'Captured transcripts are converted into sequencing-ready libraries under optimized chemistry.', icon: FlaskConical },
    { step: '06', title: 'Sequencing', description: 'Libraries are sequenced at depth sufficient to resolve whole-transcriptome spatial expression.', icon: Cpu },
    { step: '07', title: 'Bioinformatics Analysis', description: 'Reads are aligned, binned, and quantified against their originating spatial coordinates.', icon: Database },
    { step: '08', title: 'Spatial Visualization', description: 'Expression data is mapped back onto the tissue image for exploration and interpretation.', icon: Map },
    { step: '09', title: 'Final Data Delivery', description: 'Complete datasets, images, and reports are delivered through your secure client portal.', icon: FileCheck },
];

const deliverables = [
    { title: 'Raw Sequencing Data', description: 'Unprocessed reads provided for full transparency and independent reanalysis.', icon: FileText },
    { title: 'Spatial Gene Expression Matrix', description: 'Binned expression counts mapped to their precise spatial coordinates within the tissue.', icon: Database },
    { title: 'High-Resolution Tissue Images', description: 'Full-resolution histology imagery aligned to the spatial expression data.', icon: ImageIcon },
    { title: 'Quality Control Report', description: 'Coverage, capture efficiency, and imaging metrics summarized in a clear, reviewable format.', icon: ClipboardCheck },
    { title: 'Bioinformatics Analysis', description: 'Processed clustering, spatial pattern, and differential expression results for your tissue.', icon: SearchCheck },
    { title: 'Interactive Visualization Files', description: 'Ready-to-explore visualization outputs for reviewing spatial expression alongside tissue morphology.', icon: Eye },
];

const whyChooseUs = [
    { title: 'Certified Genomics Experts', description: 'A scientific team experienced in spatial transcriptomics study design and execution.', icon: Users },
    { title: 'Advanced Sequencing Platforms', description: 'Modern instrumentation validated for high-depth, high-resolution spatial workflows.', icon: Cpu },
    { title: 'Spatial Biology Expertise', description: 'Deep familiarity with tissue handling, imaging, and spatial data interpretation.', icon: Layers },
    { title: 'Reliable Quality Standards', description: 'Standardized protocols and multi-stage checkpoints protect data integrity at every step.', icon: ShieldCheck },
    { title: 'Fast Turnaround Time', description: 'Efficient pipelines built to keep pace with active research and publication timelines.', icon: Zap },
    { title: 'Dedicated Scientific Support', description: 'Responsive guidance available from project consultation through final data delivery.', icon: Headset },
];

const faqs = [
    {
        question: 'What tissue types are compatible with Visium HD Spatial Gene Expression?',
        answer: 'Both fresh-frozen and formalin-fixed paraffin-embedded (FFPE) tissue sections are supported. Our team can advise on optimal fixation, sectioning thickness, and RNA quality thresholds for your specific tissue type.',
    },
    {
        question: 'What are the sample requirements for a spatial gene expression project?',
        answer: 'Tissue should meet minimum RNA integrity thresholds and be sectioned to a thickness compatible with the capture workflow. We provide detailed submission guidelines and can review pilot sections before a full project begins.',
    },
    {
        question: 'How long does a typical Visium HD project take?',
        answer: 'Timelines vary with sample number and analysis scope, but most projects move from tissue receipt to final data delivery within several weeks. Expedited scheduling is available for time-sensitive studies.',
    },
    {
        question: 'What sequencing depth is used for spatial gene expression studies?',
        answer: 'Depth is configured to your tissue type and research goals, targeting sufficient coverage to resolve whole-transcriptome expression at high spatial resolution across the entire capture area.',
    },
    {
        question: 'What file formats and data will I receive?',
        answer: 'Standard deliverables include raw sequencing reads, spatial gene expression matrices, high-resolution tissue images, and interactive visualization files compatible with common spatial analysis tools.',
    },
    {
        question: 'What quality control steps are performed during the project?',
        answer: 'Tissue RNA quality, section morphology, imaging fidelity, and capture efficiency are all assessed at defined checkpoints throughout the workflow before data is finalized.',
    },
    {
        question: 'Do you provide bioinformatics support beyond raw data delivery?',
        answer: 'Yes. Our bioinformatics team offers clustering, spatial pattern analysis, and differential expression support, along with custom analysis tailored to your research questions.',
    },
    {
        question: 'Can I consult with your team before starting a project?',
        answer: 'Yes. We offer project consultations to review your tissue, study design, and analysis goals so your experiment is scoped correctly from the outset.',
    },
];

const VisiumHD = () => {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
                <style>{`
                    @keyframes vhd-particle-drift {
                        0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.7; }
                        50% { transform: translate3d(0, -26px, 0); opacity: 0.15; }
                    }
                    @keyframes vhd-sweep {
                        0% { transform: translateX(-30%) rotate(8deg); }
                        100% { transform: translateX(30%) rotate(8deg); }
                    }
                    .vhd-particle { animation: vhd-particle-drift 6s ease-in-out infinite; will-change: transform, opacity; }
                    .vhd-sweep { animation: vhd-sweep 10s ease-in-out infinite alternate; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .vhd-particle, .vhd-sweep { animation: none !important; }
                    }
                `}</style>
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

                {/* Gradient light sweep */}
                <div className="vhd-sweep absolute -inset-y-1/2 left-0 z-[1] w-1/2 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent pointer-events-none" />

                {/* Gentle floating particles */}
                {heroParticles.map((p, i) => (
                    <span
                        key={i}
                        className="vhd-particle absolute z-[1] rounded-full bg-teal-300/70 shadow-[0_0_12px_rgba(45,212,191,0.6)] pointer-events-none"
                        style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
                    />
                ))}

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <Layers className="w-4 h-4" />
                            Spatial Genomics
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            10x Genomics Visium HD <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Spatial Gene Expression
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Map whole-transcriptome gene expression directly onto intact tissue architecture at near single-cell resolution.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                            Visium HD Spatial Gene Expression profiling reveals where genes are active within the tissue itself, preserving structural context that dissociation-based methods leave behind — built for oncology, neuroscience, immunology, and translational research programs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-semibold shadow-lg shadow-teal-500/20 active:scale-95 transition-all duration-300"
                                onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                            >
                                Request a Quote
                            </Button>
                            <Button
                                size="lg"
                                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold transition-all duration-300"
                                onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                            >
                                Contact Our Experts
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What is Visium HD */}
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
                                    Understanding Spatial Expression
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Visium HD?</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Visium HD is a high-definition spatial gene expression platform that reads transcripts directly from an intact tissue section, mapping each measurement back to the precise location it came from within the tissue.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Conventional RNA sequencing typically requires dissociating tissue into individual cells or processing bulk homogenate, which discards the spatial relationships between them. Spatial gene expression instead keeps the tissue section whole throughout the workflow, capturing whole-transcriptome data across a continuous, high-density grid so expression can be resolved at a scale approaching individual cells.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Because tissue architecture is preserved, researchers can overlay gene expression directly onto histology imagery — revealing how activity varies across cell neighborhoods, tissue compartments, and structural boundaries that would otherwise be invisible to dissociation-based methods.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Maps whole-transcriptome expression to precise coordinates within the tissue.',
                                    'Preserves native tissue architecture throughout the entire workflow.',
                                    'Resolves expression differences at a scale approaching single cells.',
                                    'Overlays expression data directly onto histology imagery for intuitive review.',
                                    'Supports both fresh-frozen and FFPE tissue sections.',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                            <FileCheck className="w-4 h-4" />
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
                                    src={specialtyLabImg}
                                    alt="Scientist reviewing tissue histology imagery in the laboratory"
                                    loading="lazy"
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

            {/* Key Benefits */}
            <section className="py-24 bg-white relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Key Benefits"
                        subtitle="A next-generation spatial platform built for depth, resolution, and clarity."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {keyBenefits.map((item, index) => (
                            <FeatureCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research Domains"
                        subtitle="Spatial context supports discovery and translational goals across a broad range of tissue-based research."
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
                    @keyframes vhd-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(12px, -16px, 0); }
                    }
                    @keyframes vhd-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-14px, 14px, 0) rotate(7deg); }
                    }
                    .vhd-float-a { animation: vhd-float-a 10s ease-in-out infinite; will-change: transform; }
                    .vhd-float-b { animation: vhd-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .vhd-float-a, .vhd-float-b { animation: none !important; }
                    }
                `}</style>

                {/* Decorative tissue-grid pattern */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none select-none"
                    viewBox="0 0 800 800"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line key={`v-${i}`} x1={i * 70} y1="0" x2={i * 70} y2="800" stroke="#0f172a" strokeWidth="2" />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 70} x2="800" y2={i * 70} stroke="#0f172a" strokeWidth="2" />
                    ))}
                </svg>
                <Dna aria-hidden="true" className="vhd-float-a hidden sm:block absolute top-12 right-[8%] w-14 h-14 text-primary-400/20 pointer-events-none" />
                <Microscope aria-hidden="true" className="vhd-float-b hidden sm:block absolute bottom-16 right-[16%] w-12 h-12 text-teal-400/20 pointer-events-none" />
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Spatial Gene Expression Workflow"
                        subtitle="From tissue preparation to final data delivery, every step is tracked and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 3) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Receive */}
            <section className="py-24 relative z-10 border-t border-slate-100 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/70 to-teal-50">
                <svg
                    className="absolute -left-24 top-0 h-full w-[480px] opacity-[0.05] blur-[1px] pointer-events-none select-none hidden md:block"
                    viewBox="0 0 400 800"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <path d="M100,0 C260,100 -60,200 100,300 C260,400 -60,500 100,600 C260,700 -60,750 100,800" fill="none" stroke="#0EA5E9" strokeWidth="6" />
                    <path d="M260,0 C100,100 420,200 260,300 C100,400 420,500 260,600 C100,700 420,750 260,800" fill="none" stroke="#2563EB" strokeWidth="6" />
                </svg>
                <div className="absolute top-10 right-[8%] w-64 h-64 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="What You Receive"
                        subtitle="Complete, well-organized deliverables designed for downstream spatial analysis."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {deliverables.map((item, index) => (
                            <DeliverableCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Laboratory */}
            <section className="py-24 bg-white relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Why Choose Our Laboratory"
                        subtitle="A trusted partner for spatial gene expression projects of every scale."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                        {whyChooseUs.map((item, index) => (
                            <WhyChooseCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-100">
                <div className="container-custom max-w-4xl mx-auto">
                    <SectionHeader title="Frequently Asked Questions" />
                    <div className="space-y-4 mt-12">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default VisiumHD;
