import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Waves,
    Droplets,
    Grid3x3,
    Layers,
    Microscope,
    Target,
    ShieldCheck,
    Cpu,
    BarChart3,
    FileCheck,
    CheckCircle2,
    Zap,
    Lock,
    Headset,
    Users,
    Inbox,
    SearchCheck,
    ClipboardCheck,
    HeartPulse,
    Syringe,
    Stethoscope,
    Dna,
    Activity,
    ChevronDown,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
import bgVideo from '../assets/bgvideo.mp4';
import cytokineImg from '../assets/cytokine.webp';
import bioanalysisImg from '../assets/bioanalysis.webp';

const CapabilityCard = ({ title, description, icon: Icon, delay }) => (
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

const capabilities = [
    { title: 'Luminex', description: 'Bead-based multiplex immunoassays that quantify dozens of cytokines and proteins from a single low-volume sample with high throughput.', icon: Grid3x3 },
    { title: 'Olink Proteomics', description: 'Proximity extension assay technology delivering high-plex, highly specific protein measurement for deep proteomic profiling.', icon: Layers },
    { title: 'Meso Scale Discovery (MSD)', description: 'Electrochemiluminescence detection offering a wide dynamic range and low background for precise, sensitive analyte quantification.', icon: Zap },
    { title: 'ELISA', description: 'Validated single-analyte plate-based immunoassays for accurate, reproducible measurement of individual cytokines and soluble proteins.', icon: Droplets },
];

const comparisonColumns = ['Feature', 'Luminex', 'Olink Proteomics', 'Meso Scale Discovery (MSD)', 'ELISA'];

const comparisonRows = [
    { feature: 'Sensitivity', values: ['pg/mL', 'pg/mL', 'pg/mL', 'ng/mL – pg/mL'] },
    { feature: 'Dynamic Range', values: ['>4 logs', '3–4 logs', '>4 logs', '2 logs'] },
    { feature: 'Multiplex Capabilities', values: ['50–100', '45/92', '10', '1'] },
    { feature: 'Sample Volume', values: ['50 µL', '1 µL', '25 µL', '50–100 µL'] },
    { feature: 'Best Use', values: ['Early Stages', 'All Stages', 'All Stages', 'All Stages'] },
];

const applications = [
    { title: 'Immuno-Oncology', description: 'Track immune activation, cytokine release, and pharmacodynamic response to checkpoint inhibitors and cell therapies.', icon: Target },
    { title: 'Autoimmune & Inflammation', description: 'Characterize inflammatory signatures to understand disease activity and monitor anti-inflammatory interventions.', icon: HeartPulse },
    { title: 'Vaccine Development', description: 'Measure cytokine and antibody responses to evaluate immunogenicity across preclinical and clinical stages.', icon: Syringe },
    { title: 'Cytokine Release Assessment', description: 'Quantify release profiles to support safety evaluation and cytokine release syndrome monitoring for biologics.', icon: Activity },
    { title: 'Infectious Disease', description: 'Profile host immune responses to pathogens to inform therapeutic and diagnostic research programs.', icon: ShieldCheck },
    { title: 'Biomarker Discovery', description: 'Identify and validate soluble protein biomarkers that stratify patients and predict therapeutic response.', icon: SearchCheck },
    { title: 'Translational Research', description: 'Bridge mechanistic findings and clinical endpoints with harmonized, reproducible protein measurements.', icon: Dna },
    { title: 'Toxicology & Safety', description: 'Assess immune-mediated toxicity signals to support risk evaluation throughout development.', icon: Stethoscope },
];

const workflowSteps = [
    { step: '01', title: 'Study Consultation', description: 'We align on analytes, matrix, sensitivity needs, and regulatory context to design the right assay strategy.', icon: Users },
    { step: '02', title: 'Sample Receipt & QC', description: 'Samples are logged, inspected, and quality-checked under controlled cold-chain conditions on arrival.', icon: Inbox },
    { step: '03', title: 'Assay Setup & Validation', description: 'Panels are configured and methods validated for accuracy, precision, and linearity ahead of sample testing.', icon: ClipboardCheck },
    { step: '04', title: 'Sample Analysis', description: 'Specimens are run on the selected platform with standards and controls to ensure reliable quantification.', icon: Microscope },
    { step: '05', title: 'Data Processing', description: 'Raw signals are curve-fit, normalized, and quality-reviewed by our scientific team for confident results.', icon: Cpu },
    { step: '06', title: 'Biostatistical Analysis', description: 'Concentration data is analyzed for trends, comparisons, and endpoint-relevant statistical interpretation.', icon: BarChart3 },
    { step: '07', title: 'Reporting', description: 'Findings are compiled into a clear, structured report with full traceability and methodology detail.', icon: FileCheck },
    { step: '08', title: 'Secure Delivery', description: 'Results and datasets are delivered through encrypted, access-controlled channels for downstream use.', icon: Lock },
];

const whyChooseUs = [
    { title: 'Experienced Immunoassay Team', description: 'Scientists with deep expertise in cytokine, chemokine, and soluble protein measurement across study phases.', icon: Users },
    { title: 'Multi-Platform Flexibility', description: 'Single-plex to high-plex and ultrasensitive platforms matched to your analytes and sensitivity requirements.', icon: Cpu },
    { title: 'Rigorous Quality Standards', description: 'Validated methods and multi-stage checkpoints safeguard data integrity and reproducibility at every step.', icon: ShieldCheck },
    { title: 'Fit-for-Purpose Validation', description: 'Assays developed and qualified to match your study objectives and applicable regulatory expectations.', icon: FileCheck },
    { title: 'Secure Data Handling', description: 'Confidential management of samples and results across storage, transfer, and delivery.', icon: Lock },
    { title: 'Responsive Scientific Support', description: 'Guidance available from study design through execution and final reporting.', icon: Headset },
];

const faqs = [
    {
        question: 'What sample types can be used for cytokine and protein analysis?',
        answer: 'We routinely test serum, plasma, cell culture supernatants, and other biological fluids. Our team can advise on the optimal sample type, collection method, and handling for your specific analytes.',
    },
    {
        question: 'How many analytes can be measured from a single sample?',
        answer: 'Multiplex panels allow simultaneous measurement of anywhere from a handful to several dozen analytes from a single low-volume sample, which helps conserve precious or limited specimens.',
    },
    {
        question: 'How sensitive are your cytokine assays?',
        answer: 'Sensitivity depends on the analyte and platform selected. Our ultrasensitive single-molecule and electrochemiluminescence platforms can resolve very low-abundance cytokines that fall below the detection limits of conventional assays.',
    },
    {
        question: 'Can you develop a custom assay for a novel or non-standard target?',
        answer: 'Yes. We offer fit-for-purpose custom assay development, including method design, optimization, and validation tailored to your analytes, sample matrix, and study requirements.',
    },
    {
        question: 'What is a typical turnaround time for a cytokine profiling project?',
        answer: 'Turnaround depends on panel size, sample number, and validation scope. Most projects move from sample receipt to final report within a few weeks, with expedited options for time-sensitive studies.',
    },
    {
        question: 'Are your assays validated for regulated studies?',
        answer: 'Assays can be developed and validated fit-for-purpose to align with applicable quality and regulatory standards, supporting both exploratory research and regulated program needs.',
    },
    {
        question: 'What deliverables will I receive at the end of a project?',
        answer: 'You receive quantified concentration data, quality control metrics, biostatistical analysis where applicable, and a structured report detailing methodology and results with full traceability.',
    },
    {
        question: 'Can cytokine profiling be combined with your other specialty services?',
        answer: 'Yes. Cytokine and protein analysis integrates readily with our immune monitoring, genomics, and biomarker validation services to build a comprehensive picture of your study.',
    },
];

const CytokineProfiling = () => {
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
                            <Waves className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Cytokine Profiling <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                & Protein Analysis
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Precise, sensitive measurement of cytokines, chemokines, and soluble proteins to illuminate immune and inflammatory biology.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            From single-analyte immunoassays to high-plex and ultrasensitive platforms, our cytokine and protein analysis services quantify the signaling molecules that drive immune response, inflammation, and therapeutic activity across research and clinical programs.
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
                                    Understanding Cytokine Analysis
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Reading the Language of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Immune System</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Cytokines and chemokines are key signaling molecules that enable communication between immune cells. Their expression levels change rapidly in response to infection, inflammation, and therapeutic interventions, providing valuable insights into immune function and biological processes.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    Because many of these mediators circulate at extremely low concentrations, accurate quantification demands carefully validated assays and the right analytical platform. Our team matches each project to the most appropriate method, balancing sensitivity, breadth, sample volume, and regulatory context to deliver dependable data.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Quantify individual analytes or broad multiplex signatures from a single sample.',
                                    'Resolve low-abundance mediators with ultrasensitive detection technologies.',
                                    'Conserve precious specimens through low-volume, high-plex assays.',
                                    'Support exploratory research through regulated program requirements.',
                                    'Integrate seamlessly with immune monitoring and biomarker workflows.',
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
                                    src={cytokineImg}
                                    alt="Cytokine and protein analysis laboratory workflow"
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

            {/* Capabilities */}
            <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Cytokine & Protein Analysis Capabilities"
                        subtitle="A flexible menu of immunoassay and proteomic services built to quantify the mediators that matter to your study."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {capabilities.map((item, index) => (
                            <CapabilityCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies / Platforms Deep Dive */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bioanalysisImg} alt="Analytical platforms" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary-500/20 text-primary-300 font-semibold text-sm mb-5 border border-primary-500/30">
                            Technologies & Platforms
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            Matched to Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Analytes & Sensitivity</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mx-auto mt-6 mb-5" />
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            Solutions for Any Sensitivity or Multiplex Needs
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-6xl mx-auto mt-14"
                    >
                        <div className="overflow-x-auto rounded-[20px] border border-slate-200 shadow-2xl">
                            <table className="w-full min-w-[760px] text-left border-collapse bg-white">
                                <thead>
                                    <tr className="bg-gradient-to-r from-primary-600 to-teal-500 text-white">
                                        {comparisonColumns.map((col) => (
                                            <th key={col} className="px-6 py-4 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, rIdx) => (
                                        <tr
                                            key={row.feature}
                                            className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-primary-50/70 transition-colors duration-300`}
                                        >
                                            <td className="px-6 py-4 font-bold text-slate-900 align-middle whitespace-nowrap">{row.feature}</td>
                                            {row.values.map((val, cIdx) => (
                                                <td key={cIdx} className="px-6 py-4 text-slate-600 align-middle whitespace-nowrap">{val}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Clinical Programs"
                        subtitle="Cytokine and protein data support discovery, safety, and translational goals across a wide range of therapeutic areas."
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
                    @keyframes cyto-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(12px, -16px, 0); }
                    }
                    @keyframes cyto-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-14px, 14px, 0) rotate(7deg); }
                    }
                    .cyto-float-a { animation: cyto-float-a 10s ease-in-out infinite; will-change: transform; }
                    .cyto-float-b { animation: cyto-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .cyto-float-a, .cyto-float-b { animation: none !important; }
                    }
                `}</style>
                <Waves aria-hidden="true" className="cyto-float-a hidden sm:block absolute top-12 right-[8%] w-14 h-14 text-primary-400/20 pointer-events-none" />
                <Droplets aria-hidden="true" className="cyto-float-b hidden sm:block absolute bottom-16 right-[16%] w-12 h-12 text-teal-400/20 pointer-events-none" />
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Analysis Workflow"
                        subtitle="From study consultation to secure data delivery, every step is tracked and quality-controlled."
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
                subtitle="A trusted partner for cytokine and protein analysis projects of every scale."
                items={whyChooseUs}
            />

            {/* FAQ Section */}



            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default CytokineProfiling;
