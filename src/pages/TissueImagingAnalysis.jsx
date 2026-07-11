import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Image as ImageIcon,
    Microscope,
    Layers,
    Dna,
    ScanLine,
    Palette,
    Focus,
    Grid3x3,
    Camera,
    Boxes,
    Eye,
    Crosshair,
    Target,
    ShieldCheck,
    Cpu,
    FileCheck,
    CheckCircle2,
    Lock,
    Headset,
    Users,
    Inbox,
    Scissors,
    SearchCheck,
    Stethoscope,
    Brain,
    Network,
    ChevronDown,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
import bgVideo from '../assets/bgvideo.mp4';
import specialtyLabImg from '../assets/bioanalysis.webp';
import bioimageImg from '../assets/bioimage.webp';
import diagnosticsImg from '../assets/diagnostics.jpg';

const ServiceCard = ({ title, description, icon: Icon, delay }) => (
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

const services = [
    { title: 'Immunohistochemistry (IHC)', description: 'Antibody-based detection and localization of protein targets within tissue sections, validated for research and diagnostic workflows.', icon: Microscope },
    { title: 'Multiplex Immunofluorescence', description: 'Simultaneous visualization of multiple biomarkers in a single section to reveal spatial relationships between cell populations.', icon: Layers },
    { title: 'In Situ Hybridization (ISH / FISH)', description: 'Direct detection of DNA and RNA targets in tissue to resolve gene rearrangements, amplification, and expression in context.', icon: Dna },
    { title: 'Histology & Special Stains', description: 'Expertly prepared sections with H&E and a broad menu of special stains to highlight tissue structures and features.', icon: Palette },
    { title: 'Whole-Slide Imaging', description: 'High-resolution digital scanning converts glass slides into richly detailed images ready for review and analysis.', icon: ScanLine },
    { title: 'Quantitative Image Analysis', description: 'Automated, reproducible scoring of staining intensity, positivity, and spatial distribution across whole tissue sections.', icon: Focus },
];

const platforms = [
    {
        title: 'Whole-Slide Scanners',
        description: 'Brightfield and fluorescence scanning capture entire sections at high magnification for fully digital review.',
        icon: ScanLine,
    },
    {
        title: 'Multispectral Imaging',
        description: 'Spectral unmixing separates overlapping fluorophores to enable high-plex marker panels without cross-talk.',
        icon: Camera,
    },
    {
        title: 'Automated Staining Systems',
        description: 'Standardized, high-throughput staining platforms deliver consistent, reproducible results across large cohorts.',
        icon: Boxes,
    },
];

const tissueCapabilities = [
    'Quantify biomarker expression by intensity, percent positivity, and H-score across whole sections.',
    'Map spatial phenotypes and cell-to-cell interactions within the tissue microenvironment.',
    'Perform single-cell segmentation and classification directly on tissue imagery.',
    'Assess marker colocalization and co-expression across multiplexed panels.',
    'Characterize the tumor microenvironment, including immune infiltration and stromal context.',
    'Preserve tissue architecture so molecular readouts remain anchored to morphology.',
];

const digitalPathologyFeatures = [
    { title: 'AI-Assisted Analysis', description: 'Machine-learning models accelerate tissue segmentation, cell detection, and region annotation with expert oversight.', icon: Cpu },
    { title: 'Quantitative Scoring', description: 'Objective, reproducible quantification replaces manual estimation for consistent results across studies.', icon: Grid3x3 },
    { title: 'Spatial Analysis', description: 'Neighborhood and proximity analytics reveal how cell populations organize within their tissue context.', icon: Network },
    { title: 'Pathologist Oversight', description: 'Board-certified pathologists review and validate every analysis to ensure accurate, defensible conclusions.', icon: Stethoscope },
];

const applications = [
    { title: 'Oncology Research', description: 'Characterize tumor morphology, biomarker expression, and heterogeneity directly within the tissue context.', icon: Microscope },
    { title: 'Immuno-Oncology', description: 'Map immune infiltration and checkpoint marker expression to understand response within the microenvironment.', icon: ShieldCheck },
    { title: 'Neuroscience', description: 'Resolve marker expression across neural structures and cell populations in intact brain tissue.', icon: Brain },
    { title: 'Autoimmune & Inflammation', description: 'Visualize inflammatory infiltrates and tissue remodeling to understand disease activity in situ.', icon: Crosshair },
    { title: 'Biomarker Discovery', description: 'Localize and validate candidate tissue biomarkers with spatially resolved, quantitative readouts.', icon: SearchCheck },
    { title: 'Drug Development', description: 'Support target validation and pharmacodynamic assessment with tissue-level evidence of activity.', icon: Target },
    { title: 'Toxicologic Pathology', description: 'Evaluate tissue-level safety signals and morphologic changes throughout preclinical development.', icon: Eye },
    { title: 'Translational Research', description: 'Bridge molecular findings and tissue pathology to strengthen translational study designs.', icon: Dna },
];

const workflowSteps = [
    { step: '01', title: 'Sample Accessioning', description: 'Tissue and blocks are logged, inspected, and tracked under controlled conditions on receipt.', icon: Inbox },
    { step: '02', title: 'Sectioning & Preparation', description: 'FFPE or frozen tissue is sectioned to precise thickness and mounted for downstream staining.', icon: Scissors },
    { step: '03', title: 'Staining & Labeling', description: 'Sections are stained via IHC, multiplex IF, ISH, or special stains on validated platforms.', icon: Palette },
    { step: '04', title: 'Whole-Slide Scanning', description: 'Stained slides are digitized at high resolution into review-ready whole-slide images.', icon: ScanLine },
    { step: '05', title: 'Image Quality Control', description: 'Each scan is checked for focus, staining quality, and completeness before analysis.', icon: CheckCircle2 },
    { step: '06', title: 'Image Analysis', description: 'Quantitative algorithms measure expression, positivity, and spatial distribution across the section.', icon: Focus },
    { step: '07', title: 'Pathologist Review', description: 'Board-certified pathologists interpret and validate findings within the morphologic context.', icon: Stethoscope },
    { step: '08', title: 'Reporting & Delivery', description: 'Results, images, and datasets are compiled and delivered through secure, access-controlled channels.', icon: FileCheck },
];

const whyChooseUs = [
    { title: 'Expert Pathology Team', description: 'Board-certified pathologists and histotechnologists with deep experience in tissue-based analysis.', icon: Users },
    { title: 'Advanced Imaging Platforms', description: 'Whole-slide scanners and multispectral systems validated for accuracy and reproducibility.', icon: ScanLine },
    { title: 'Quantitative Image Analysis', description: 'Objective, algorithm-driven scoring with expert oversight for consistent, defensible results.', icon: Focus },
    { title: 'Rigorous Quality Standards', description: 'Standardized protocols and multi-stage checkpoints safeguard data integrity at every step.', icon: ShieldCheck },
    { title: 'Secure Data Management', description: 'Confidential handling of tissue, images, and results across storage, transfer, and delivery.', icon: Lock },
    { title: 'Responsive Scientific Support', description: 'Guidance available from study design through execution and final reporting.', icon: Headset },
];

const faqs = [
    {
        question: 'What tissue types and formats do you accept?',
        answer: 'We routinely work with formalin-fixed paraffin-embedded (FFPE) and fresh-frozen tissue, as blocks, unstained slides, or sections. Our team can advise on the best format and handling for your specific study.',
    },
    {
        question: 'Which staining methods are available?',
        answer: 'Our menu includes H&E, a broad range of special stains, single- and multiplex immunohistochemistry, multiplex immunofluorescence, and in situ hybridization (ISH/FISH), configured to your target panel.',
    },
    {
        question: 'How is quantitative image analysis performed?',
        answer: 'Whole-slide images are analyzed with validated algorithms that measure staining intensity, percent positivity, and spatial distribution. Board-certified pathologists review and validate every analysis.',
    },
    {
        question: 'Can you measure multiple biomarkers on a single section?',
        answer: 'Yes. Multiplex immunofluorescence and multispectral imaging allow simultaneous detection of several markers in one section, preserving the spatial relationships between cell populations.',
    },
    {
        question: 'What is a typical turnaround time?',
        answer: 'Turnaround depends on cohort size, staining complexity, and analysis scope. Most projects move from sample receipt to final report within a few weeks, with expedited options for time-sensitive studies.',
    },
    {
        question: 'What deliverables will I receive?',
        answer: 'Deliverables typically include high-resolution whole-slide images, quantitative analysis data, quality control metrics, and a structured report with pathologist interpretation and full traceability.',
    },
    {
        question: 'Do you support regulated or GLP-aligned studies?',
        answer: 'Yes. Methods can be developed and executed fit-for-purpose to align with applicable quality and regulatory expectations across both exploratory and regulated programs.',
    },
    {
        question: 'Can tissue imaging be combined with your other specialty services?',
        answer: 'Absolutely. Tissue imaging and analysis integrates with our genomics, cytokine profiling, and biomarker validation services to build a comprehensive, multi-modal picture of your study.',
    },
];

const TissueImagingAnalysis = () => {
    const [openFaq, setOpenFaq] = useState(null);

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
                            <ImageIcon className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Tissue Imaging <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                & Analysis
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Spatially resolved biomarker detection that keeps molecular insight anchored to tissue architecture.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            From immunohistochemistry and multiplex immunofluorescence to whole-slide imaging and quantitative digital pathology, our tissue imaging and analysis services reveal where biomarkers live within the tissue — combining expert histology with advanced image analysis.
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
                                    Understanding Tissue Analysis
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Molecular Insight, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">in Spatial Context</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Tissue imaging and analysis provides a comprehensive view of biomarker expression within intact tissue, preserving the spatial context that is often lost with molecular-only approaches. This enables a deeper understanding of cellular organization, tissue architecture, and the interactions that drive disease biology and treatment outcomes.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    By combining expertly prepared and stained tissue sections with high-resolution whole-slide imaging and advanced analysis, we turn microscope slides into clear, measurable data. Every result is reviewed by board-certified pathologists to ensure accurate interpretation based on tissue morphology.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Localize protein and nucleic-acid targets directly within tissue.',
                                    'Preserve architecture so readouts stay anchored to morphology.',
                                    'Quantify expression objectively across whole sections.',
                                    'Resolve multiple biomarkers and their spatial relationships at once.',
                                    'Combine algorithmic analysis with expert pathologist review.',
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
                                    src={specialtyLabImg}
                                    alt="Pathologist reviewing tissue histology at the microscope"
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

            {/* Tissue Imaging & Analysis Services */}
            <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Tissue Imaging & Analysis Services"
                        subtitle="A comprehensive suite of histology, staining, and imaging services built to reveal biomarker biology in situ."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {services.map((item, index) => (
                            <ServiceCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies & Platforms Deep Dive */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bioimageImg} alt="Imaging platforms" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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
                                Technologies & Platforms
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Imaging Built for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Depth & Resolution</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Reliable tissue analysis begins with the right instrumentation. Our imaging and staining platforms are validated for consistency across large sample sets, so results remain reproducible from the first slide to the last.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                From brightfield and fluorescence whole-slide scanning to multispectral imaging and automated staining, each technology is matched to your markers, tissue, and study goals.
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

            {/* Biomarker & Tissue Analysis Capabilities */}
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
                                    Biomarker & Tissue Analysis
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    From Stained Section to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Quantitative Data</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Our analysis capabilities turn richly stained tissue into objective, reproducible measurements — capturing not just whether a biomarker is present, but how much, where, and in relation to which cells.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {tissueCapabilities.map((item, idx) => (
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
                                    alt="Quantitative tissue biomarker analysis"
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

            {/* Digital Pathology & Image Analysis */}
            <section className="py-24 relative z-10 overflow-hidden border-t border-slate-100 bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Digital Pathology & Image Analysis"
                        subtitle="Whole-slide imaging and algorithm-driven analysis deliver objective, reproducible results — with expert pathologists in the loop."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {digitalPathologyFeatures.map((item, index) => {
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
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Clinical Programs"
                        subtitle="Tissue-level insight supports discovery, safety, and translational goals across a wide range of therapeutic areas."
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
                    @keyframes tia-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(12px, -16px, 0); }
                    }
                    @keyframes tia-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-14px, 14px, 0) rotate(7deg); }
                    }
                    .tia-float-a { animation: tia-float-a 10s ease-in-out infinite; will-change: transform; }
                    .tia-float-b { animation: tia-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .tia-float-a, .tia-float-b { animation: none !important; }
                    }
                `}</style>
                <Microscope aria-hidden="true" className="tia-float-a hidden sm:block absolute top-12 right-[8%] w-14 h-14 text-primary-400/20 pointer-events-none" />
                <ImageIcon aria-hidden="true" className="tia-float-b hidden sm:block absolute bottom-16 right-[16%] w-12 h-12 text-teal-400/20 pointer-events-none" />
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Tissue Analysis Workflow"
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
                subtitle="A trusted partner for tissue imaging and analysis projects of every scale."
                items={whyChooseUs}
            />

            {/* FAQ Section */}
            
            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default TissueImagingAnalysis;
