'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Dna,
    Layers,
    ShieldCheck,
    Crosshair,
    Syringe,
    Beaker,
    FlaskConical,
    GraduationCap,
    Inbox,
    SearchCheck,
    Cpu,
    GitBranch,
    Database,
    FileCheck,
    Target,
    CheckCircle2,
    Zap,
    Lock,
    Headset,
    FileText,
    ClipboardList,
    ClipboardCheck,
    Users,
    ChevronDown,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const centralLabImg = '/assets/central_lab.png';
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

const applications = [
    { title: 'Synthetic Biology', description: 'Validate engineered genetic circuits and multi-part constructs before they advance into downstream synthetic biology workflows.', icon: Dna },
    { title: 'Gene Cloning', description: 'Confirm insert orientation, reading frame, and backbone integrity immediately after every cloning reaction.', icon: Layers },
    { title: 'Vector Validation', description: 'Verify expression vectors, promoters, and selection markers against your intended design before transfection.', icon: ShieldCheck },
    { title: 'CRISPR Research', description: 'Check guide RNA cassettes, Cas constructs, and donor templates for accuracy ahead of genome-editing experiments.', icon: Crosshair },
    { title: 'Gene Therapy Development', description: 'Confirm the integrity of viral and non-viral gene therapy plasmids ahead of GMP-grade manufacturing.', icon: Syringe },
    { title: 'Vaccine Research', description: 'Validate antigen-encoding plasmids and expression cassettes used in nucleic acid vaccine development.', icon: Beaker },
    { title: 'Biotechnology Research', description: 'Support strain engineering and protein production pipelines with complete construct verification.', icon: FlaskConical },
    { title: 'Academic Research', description: 'Provide research labs with fast, affordable full-plasmid confirmation for grant-funded projects.', icon: GraduationCap },
];

const workflowSteps = [
    { step: '01', title: 'Sample Submission', description: 'Submit purified plasmid DNA or bacterial stocks through our straightforward online intake process.', icon: Inbox },
    { step: '02', title: 'DNA Quality Assessment', description: 'Concentration, purity, and integrity are verified before a sample enters the sequencing queue.', icon: SearchCheck },
    { step: '03', title: 'Library Preparation', description: 'Plasmid DNA is prepared for sequencing using protocols optimized for circular constructs.', icon: Layers },
    { step: '04', title: 'Sequencing', description: 'Samples are sequenced at high depth to achieve full, even coverage across the entire plasmid.', icon: Cpu },
    { step: '05', title: 'Assembly', description: 'Reads are assembled into a single circular consensus sequence spanning the whole construct.', icon: GitBranch },
    { step: '06', title: 'Quality Control', description: 'Assembled sequences are checked against expected size, topology, and coverage uniformity.', icon: ShieldCheck },
    { step: '07', title: 'Bioinformatics Analysis', description: 'Variants, mutations, and structural discrepancies are identified relative to your reference map.', icon: Database },
    { step: '08', title: 'Final Report Delivery', description: 'A complete report and annotated sequence files are delivered through your secure client portal.', icon: FileCheck },
];

const features = [
    { title: 'Complete Plasmid Coverage', description: 'Every base of the construct is sequenced, including regions standard Sanger primers often miss.', icon: Target },
    { title: 'High Accuracy', description: 'Deep, redundant coverage supports confident detection of single-base changes and small indels.', icon: CheckCircle2 },
    { title: 'Long & Short Read Compatibility', description: 'Flexible sequencing chemistries accommodate constructs of virtually any size or complexity.', icon: GitBranch },
    { title: 'Rapid Turnaround', description: 'Streamlined submission-to-report pipelines keep your cloning and validation timelines on track.', icon: Zap },
    { title: 'Comprehensive QC', description: 'Multi-stage checkpoints confirm sample integrity, coverage depth, and assembly quality.', icon: ShieldCheck },
    { title: 'Secure Data Delivery', description: 'Sequence files and reports are delivered through encrypted, access-controlled channels.', icon: Lock },
    { title: 'Advanced Bioinformatics', description: 'Configurable analysis pipelines support everything from single clones to large plasmid libraries.', icon: Cpu },
    { title: 'Expert Technical Support', description: 'Our scientific team is available to help interpret results and troubleshoot constructs.', icon: Headset },
];

const deliverables = [
    { title: 'Raw Sequencing Data', description: 'Unprocessed reads provided for full transparency and independent reanalysis.', icon: FileText },
    { title: 'Assembled Plasmid Sequence', description: 'A single, complete circular consensus sequence representing your full construct.', icon: Dna },
    { title: 'Annotated Sequence Files', description: 'Feature-mapped files highlighting promoters, origins, resistance markers, and inserts.', icon: ClipboardList },
    { title: 'Quality Control Report', description: 'Coverage, depth, and assembly metrics summarized in a clear, reviewable format.', icon: ClipboardCheck },
    { title: 'Variant & Mutation Analysis', description: 'Detailed comparison against your reference sequence to flag unexpected changes.', icon: SearchCheck },
    { title: 'Custom Bioinformatics Report', description: 'Optional additional analysis tailored to your specific construct or study design.', icon: FileCheck },
];

const whyChooseUs = [
    { title: 'Experienced Genomics Scientists', description: 'A dedicated team with deep experience validating engineered plasmids and vectors.', icon: Users },
    { title: 'Advanced Sequencing Platforms', description: 'Modern instrumentation validated for full-construct accuracy and reproducibility.', icon: Cpu },
    { title: 'Reliable Quality Standards', description: 'Standardized protocols and multi-stage checkpoints protect data integrity at every step.', icon: ShieldCheck },
    { title: 'Fast Project Delivery', description: 'Efficient pipelines built to keep pace with active cloning and development timelines.', icon: Zap },
    { title: 'Secure Data Management', description: 'Confidential handling of samples and sequencing data across every stage of your project.', icon: Lock },
    { title: 'Dedicated Customer Support', description: 'Responsive scientific guidance available from submission through final report review.', icon: Headset },
];

const faqs = [
    {
        question: 'What sample types can I submit for Whole Plasmid Sequencing?',
        answer: 'We accept purified plasmid DNA, miniprep or midiprep extractions, and glycerol stocks of transformed bacterial cultures. Our team can advise on the best submission format for your construct.',
    },
    {
        question: 'How long does a typical Whole Plasmid Sequencing project take?',
        answer: 'Most single-construct projects are completed within a few business days of sample receipt, with expedited turnaround available for time-sensitive cloning workflows.',
    },
    {
        question: 'How accurate is Whole Plasmid Sequencing compared to Sanger sequencing?',
        answer: 'By generating deep, uniform coverage across the entire construct rather than short primer-targeted reads, Whole Plasmid Sequencing offers higher-confidence detection of point mutations, small indels, and structural changes across the whole plasmid.',
    },
    {
        question: 'What file formats will I receive with my results?',
        answer: 'Standard deliverables include raw sequencing reads, an assembled consensus sequence in common formats such as FASTA and GenBank, and a summary quality control report.',
    },
    {
        question: 'Does Whole Plasmid Sequencing cover the entire construct, including the backbone?',
        answer: 'Yes. Coverage spans the full circular sequence, including the insert, promoters, selection markers, and vector backbone, rather than only the regions targeted by specific primers.',
    },
    {
        question: 'What quality control steps are performed during the project?',
        answer: 'Samples are assessed for concentration and purity prior to sequencing, and assembled sequences are evaluated for expected size, coverage uniformity, and consistency with your reference map.',
    },
    {
        question: 'What applications is Whole Plasmid Sequencing best suited for?',
        answer: 'It is well suited to gene cloning, vector validation, CRISPR construct verification, gene therapy and vaccine development, synthetic biology, and academic research projects of any scale.',
    },
    {
        question: 'Can your team help interpret unexpected results?',
        answer: 'Yes. Our scientific staff is available to help review variant calls, discuss unexpected mutations or rearrangements, and support any necessary troubleshooting or repeat testing.',
    },
];

const WholePlasmidSequencing = () => {
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
                            <Dna className="w-4 h-4" />
                            Genomics Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Whole Plasmid <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Sequencing
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
Comprehensive nucleotide-level validation of your engineered plasmid, covering the backbone, inserted sequence, and every genetic element.                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                            Whole Plasmid Sequencing confirms your construct matches its intended design in a single reaction, replacing multi-primer Sanger runs with full-coverage, circular consensus sequencing built for cloning, vector validation, and construct development at any scale.
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
                                Contact Our Team
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What is Whole Plasmid Sequencing */}
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
                                    Understanding WPS
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Whole Plasmid Sequencing?</span>
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
A plasmid is a small, circular DNA molecule that scientists use to carry and deliver specific genetic material. It typically contains important components such as the gene of interest (insert), promoter, selection marker, and origin of replication, making it an essential tool in molecular biology, genetic engineering, and biotechnology research.                                </p>
                                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
During cloning, amplification, or storage, plasmids can acquire unexpected mutations, insertions, deletions, or structural changes that may affect experimental results. For this reason, verifying the complete plasmid sequence before using it in downstream research is essential.
<br></br>
Whole Plasmid Sequencing analyzes the entire circular plasmid from end to end in a single workflow. Instead of sequencing only selected regions, it provides a complete, high-accuracy assembled sequence of the entire construct, allowing researchers to confirm that every genetic element is present, correctly arranged, and free from unwanted changes.                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    'Confirms the entire plasmid, not just primer-targeted stretches.',
                                    'Detects unintended mutations, recombination events, and backbone rearrangements.',
                                    'Removes the need to design and order multiple sequencing primers.',
                                    'Delivers a complete, assembled reference sequence in a single submission.',
                                    'Scales efficiently across single constructs or large plasmid libraries.',
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
                                    src={centralLabImg}
                                    alt="Automated laboratory workflow used for plasmid sequencing and analysis"
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

            {/* Applications */}
            <section className="py-24 bg-black relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Development"
                        subtitle="Full-construct resolution supports validation and discovery goals across a wide range of plasmid-based work."
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
                    @keyframes wps-float-a {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(12px, -16px, 0); }
                    }
                    @keyframes wps-float-b {
                        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                        50% { transform: translate3d(-14px, 14px, 0) rotate(7deg); }
                    }
                    .wps-float-a { animation: wps-float-a 10s ease-in-out infinite; will-change: transform; }
                    .wps-float-b { animation: wps-float-b 12s ease-in-out infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                        .wps-float-a, .wps-float-b { animation: none !important; }
                    }
                `}</style>

                {/* Decorative DNA helix */}
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
                </svg>
                <Dna aria-hidden="true" className="wps-float-a hidden sm:block absolute top-12 right-[8%] w-14 h-14 text-primary-400/20 pointer-events-none" />
                <FlaskConical aria-hidden="true" className="wps-float-b hidden sm:block absolute bottom-16 right-[15%] w-12 h-12 text-teal-400/20 pointer-events-none" />
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="A Streamlined Plasmid Sequencing Workflow"
                        subtitle="From sample submission to final report, every step is tracked and quality-controlled."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
                        {workflowSteps.map((step, i) => (
                            <WorkflowStepCard key={i} {...step} delay={(i % 4) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features & Advantages */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Features & Advantages"
                        subtitle="A dependable plasmid sequencing service built for accuracy, speed, and flexibility."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
                        {features.map((item, index) => (
                            <FeatureCard key={index} {...item} delay={index * 0.08} />
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
                        subtitle="Complete, well-organized deliverables designed for downstream research or clinical use."
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
                        subtitle="A trusted partner for plasmid sequencing projects of every scale."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                        {whyChooseUs.map((item, index) => (
                            <WhyChooseCard key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default WholePlasmidSequencing;
