import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Target,
    Dna,
    Microscope,
    FlaskConical,
    ShieldCheck,
    SearchCheck,
    Layers,
    Activity,
    Boxes,
    Cpu,
    Network,
    Stethoscope,
    Beaker,
    ScanLine,
    ClipboardCheck,
    Inbox,
    Settings2,
    LineChart,
    FileCheck,
    Crosshair,
    Users,
    Lock,
    Headset,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import WhyChooseSection from '../components/ui/WhyChooseSection';
import bgVideo from '../assets/bgvideo.mp4';
import bioanalysisImg from '../assets/bioanalysis.webp';
import genomicsImg from '../assets/genomics.webp';
import biomarkerImg from '../assets/apoadvantagetwo.webp';

const capabilities = [
    { title: 'Target Identification', description: 'Nominate and prioritize candidate targets using integrated molecular, genomic, and pathway evidence.', icon: Target },
    { title: 'Target Validation', description: 'Confirm the biological relevance of a target to disease through orthogonal, hypothesis-driven experiments.', icon: CheckCircle2 },
    { title: 'Biomarker Discovery', description: 'Uncover predictive, prognostic, and pharmacodynamic biomarkers across tissue, blood, and molecular data.', icon: SearchCheck },
    { title: 'Biomarker Verification', description: 'Confirm candidate biomarkers in independent sample cohorts to establish reproducibility and reliability.', icon: ShieldCheck },
    { title: 'Assay Development', description: 'Design fit-for-purpose assays tailored to each target, matrix, and downstream application.', icon: FlaskConical },
    { title: 'Analytical Validation', description: 'Characterize assay accuracy, precision, sensitivity, and specificity to support confident decision-making.', icon: ClipboardCheck },
];

const technologies = [
    { title: 'Immunohistochemistry (IHC)', description: 'Spatially resolved protein localization within intact tissue for target and biomarker confirmation.', icon: Microscope },
    { title: 'In Situ Hybridization (ISH / FISH)', description: 'Direct detection of DNA and RNA targets to resolve gene expression and rearrangements in context.', icon: Dna },
    { title: 'Real-Time & Digital PCR', description: 'Sensitive nucleic-acid quantification for expression profiling and low-abundance target detection.', icon: Activity },
    { title: 'Next-Generation Sequencing', description: 'Genomic and transcriptomic profiling to nominate and validate targets across large sample sets.', icon: ScanLine },
    { title: 'Flow Cytometry', description: 'High-parameter, single-cell characterization of surface and intracellular markers.', icon: Layers },
    { title: 'Multiplex Immunoassays', description: 'Simultaneous quantification of multiple protein biomarkers from limited-volume specimens.', icon: Boxes },
    { title: 'Digital & Quantitative Pathology', description: 'Whole-slide imaging with algorithm-driven scoring for objective, reproducible readouts.', icon: Cpu },
    { title: 'Bioinformatics & Data Integration', description: 'Statistical and computational analysis that unifies multi-modal data into actionable insight.', icon: Network },
];

const applications = [
    { title: 'Oncology & Immuno-Oncology', description: 'Validate tumor targets and immune biomarkers that guide next-generation therapeutic strategies.', icon: ShieldCheck },
    { title: 'Companion Diagnostics', description: 'Establish the biomarker evidence that pairs the right therapy with the right patient population.', icon: Stethoscope },
    { title: 'Drug Discovery & Development', description: 'De-risk pipelines by confirming target relevance and pharmacodynamic response early.', icon: FlaskConical },
    { title: 'Patient Stratification', description: 'Identify and verify markers that segment patients for enrollment and response prediction.', icon: Crosshair },
    { title: 'Translational Research', description: 'Bridge preclinical findings and clinical application with validated, reproducible readouts.', icon: Dna },
    { title: 'Precision Medicine', description: 'Enable targeted intervention by anchoring therapeutic decisions to validated biology.', icon: Target },
];

const workflowSteps = [
    { step: '01', title: 'Study Design & Consultation', description: 'We define objectives, endpoints, and the optimal target or biomarker strategy with your team.', icon: Inbox },
    { step: '02', title: 'Assay Development', description: 'Fit-for-purpose assays are built and optimized for your specific target, matrix, and question.', icon: Settings2 },
    { step: '03', title: 'Analytical Validation', description: 'Assay performance is characterized for accuracy, precision, sensitivity, and specificity.', icon: ClipboardCheck },
    { step: '04', title: 'Sample Analysis', description: 'Specimens are processed and analyzed on validated platforms under controlled conditions.', icon: Beaker },
    { step: '05', title: 'Data Analysis & Interpretation', description: 'Statistical and bioinformatic analysis turns raw results into meaningful biological insight.', icon: LineChart },
    { step: '06', title: 'Reporting & Delivery', description: 'Findings, datasets, and interpretation are compiled into clear, traceable, decision-ready reports.', icon: FileCheck },
];

const whyChooseUs = [
    { title: 'Multidisciplinary Expertise', description: 'Pathologists, molecular biologists, immunologists, and data scientists working as one team.', icon: Users },
    { title: 'Integrated Platforms', description: 'A broad, complementary technology portfolio brings multiple lines of evidence to every question.', icon: Boxes },
    { title: 'Fit-for-Purpose Assays', description: 'Assays designed and validated around your target, matrix, and program requirements.', icon: FlaskConical },
    { title: 'Rigorous Quality Standards', description: 'Validated methods and multi-stage checkpoints safeguard accuracy and data integrity.', icon: ShieldCheck },
    { title: 'Secure Data Management', description: 'Confidential handling of specimens, data, and results across the entire workflow.', icon: Lock },
    { title: 'Responsive Scientific Support', description: 'Collaborative guidance from study design through execution and final reporting.', icon: Headset },
];

const CapabilityCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="relative group h-full cursor-pointer"
    >
        <div className="absolute inset-0 bg-teal-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
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

const TargetBiomarkerValidation = () => {
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
                            <CheckCircle2 className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Target & Biomarker <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Validation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Confirming the biology that de-risks discovery and accelerates the path to precision medicine.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            From target identification through biomarker verification, our integrated platforms and multidisciplinary scientists validate the molecular evidence behind your program—turning promising hypotheses into confident, data-driven decisions.
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
                                    Understanding Validation
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Evidence That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Drives Confident Decisions</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    Every successful therapeutic program depends on a clear answer to a fundamental question: is this target relevant, and does this biomarker reliably reflect the biology it is meant to measure? Target and biomarker validation provides that answer, establishing the scientific foundation on which discovery, development, and diagnostic decisions are built.
                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                                    At CNC Path Lab, we combine deep scientific expertise with a complementary suite of molecular, cellular, and tissue-based technologies to confirm target relevance and verify biomarker performance. By bringing multiple, orthogonal lines of evidence to each question, we help our partners advance the right targets and trust the readouts that guide their programs.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Confirm the biological relevance of candidate targets to disease.',
                                    'Verify biomarker reproducibility across independent sample cohorts.',
                                    'Develop and validate fit-for-purpose assays for each application.',
                                    'Integrate molecular, cellular, and tissue-level evidence.',
                                    'Support decisions from early discovery through clinical translation.',
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
                                    src={biomarkerImg}
                                    alt="Scientist validating molecular biomarkers in the laboratory"
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

            {/* Key Capabilities */}
            <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Key Capabilities"
                        subtitle="A complete set of services spanning the full arc from target nomination to validated, decision-ready biomarkers."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {capabilities.map((item, index) => (
                            <CapabilityCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies & Platforms */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={genomicsImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center mb-16">
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
                                Multiple Lines of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Molecular Evidence</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Robust validation rarely rests on a single method. Our integrated portfolio spans genomic, transcriptomic, protein, cellular, and tissue-based platforms, allowing us to confirm findings through complementary, orthogonal approaches.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Each technology is matched to your target, sample type, and study goals, then unified through advanced bioinformatics into a clear, coherent picture of the underlying biology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                                <img
                                    src={bioanalysisImg}
                                    alt="Advanced analytical platforms for biomarker validation"
                                    loading="lazy"
                                    className="w-full h-auto md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {technologies.map((tech, idx) => {
                            const TechIcon = tech.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx % 4) * 0.1, duration: 0.5, ease: 'easeOut' }}
                                    whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                                    className="group relative h-full"
                                >
                                    <div className="relative h-full bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 group-hover:border-primary-400/40 shadow-2xl transition-all duration-500 p-6 flex flex-col">
                                        <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                            <TechIcon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-base font-bold text-white mb-2">{tech.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-black relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Clinical Programs"
                        subtitle="Validated targets and biomarkers underpin better decisions across discovery, development, and diagnostics."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((item, index) => (
                            <ApplicationCard key={index} {...item} delay={index * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Guided Validation Workflow"
                        subtitle="From study design to decision-ready reporting, every step is structured, tracked, and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 3) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose CNC Path Lab */}
            <WhyChooseSection
                subtitle="A trusted partner for target and biomarker validation at every stage of your program."
                items={whyChooseUs}
            />

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default TargetBiomarkerValidation;
