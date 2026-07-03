import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Dna,
    Microscope,
    FlaskConical,
    Layers,
    GitBranch,
    FileCheck,
    Search,
    Network,
    Baby,
    Bug,
    Stethoscope,
    Cpu,
    Database,
    Activity,
    Target,
    ClipboardCheck,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
import bgVideo from '../assets/bgvideo.mp4';
import genomicsImg from '../assets/genomics.webp';

const ServiceGridItem = ({ title, description, icon: Icon, delay }) => (
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

const WholeGenomeSequencing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const methodologies = [
        {
            title: 'Clinical Whole Genome Sequencing',
            description: 'CAP/CLIA-aligned human sequencing at 30X mean depth, delivering clinically annotated reports for inherited disorder diagnosis and disease risk assessment.',
            icon: Stethoscope,
        },
        {
            title: 'DNA Resequencing',
            description: 'Reference-aligned sequencing with annotated variant reporting and streamlined analysis for fast, reliable genome-wide comparisons.',
            icon: Dna,
        },
        {
            title: 'Low-Pass Sequencing',
            description: 'Cost-efficient 0.5-1X coverage sequencing ideal for genome-wide association studies (GWAS) and large-scale population screening.',
            icon: Network,
        },
        {
            title: 'Long-Read Sequencing',
            description: 'PacBio-powered sequencing with 10+ kb average read lengths, enabling de novo assembly and resolution of complex structural regions.',
            icon: GitBranch,
        },
        {
            title: 'De Novo Sequencing',
            description: 'Reference-free sequencing for non-model organisms, complete with gene prediction and functional annotation.',
            icon: Layers,
        },
        {
            title: 'Targeted Panels',
            description: 'Disease-specific sequencing panels designed for rapid risk assessment, confirmation testing, and focused variant discovery.',
            icon: Target,
        },
    ];

    const applications = [
        {
            title: 'Infectious Disease Research',
            description: 'Investigate pathogen genomes and drug resistance mechanisms to inform treatment and containment strategies.',
            icon: Bug,
        },
        {
            title: 'Population Genomics',
            description: 'Power genome-wide association studies (GWAS) with scalable, cost-effective low-pass sequencing across large cohorts.',
            icon: Network,
        },
        {
            title: 'Clinical Diagnostics',
            description: 'Confirm inherited disorders and detect structural variants with clinically annotated, CAP/CLIA-aligned reporting.',
            icon: ClipboardCheck,
        },
        {
            title: 'Oncology',
            description: 'Characterize tumor genomes and support precision medicine through tumor-normal pairing and variant analysis.',
            icon: Microscope,
        },
        {
            title: 'Comparative Genomics',
            description: 'Assemble and annotate non-model organism genomes with reference-free, de novo sequencing workflows.',
            icon: FlaskConical,
        },
        {
            title: 'Reproductive Health',
            description: 'Support genetic risk assessment and family planning decisions with high-confidence variant detection.',
            icon: Baby,
        },
    ];

    const workflowSteps = [
        { step: '01', title: 'Consultation', description: 'Set up your account and design your study alongside our scientific team to define coverage, platform, and analysis needs.' },
        { step: '02', title: 'Order Placement', description: 'Receive a detailed quote, shipping instructions, and project kickoff so your samples move seamlessly into the pipeline.' },
        { step: '03', title: 'QC & Delivery', description: 'Built-in quality control at every stage, with real-time progress updates and secure results delivered through your client portal.' },
    ];

    const sampleRequirements = [
        { param: 'DNA Input', shortRead: '100–200 ng (PCR-Plus) / 500–1000 ng (PCR-Free)', longRead: '8.1 µg high molecular weight' },
        { param: 'Concentration', shortRead: '≥ 20 ng/µl', longRead: '≥ 50 ng/µl' },
        { param: 'Quality (DIN)', shortRead: '≥ 7.0 (non-FFPE) / ≥ 4.0 (FFPE)', longRead: '≥ 8.0' },
        { param: 'Acceptable Sources', shortRead: 'Blood, cultured cells, tissue, FFPE, saliva, swabs', longRead: 'Blood, cultured cells, fresh tissue' },
    ];

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
                            Whole Genome <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                Sequencing
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
                            Identify changes across coding and non-coding regions in a single, comprehensive massively parallel sequencing workflow.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Our whole genome sequencing services support discovery research and clinical applications alike — spanning infectious disease, microbiology, immunology, inherited disorders, oncology, and reproductive health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Methodologies Grid */}
            <section className="py-24 bg-blue relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Sequencing Methodologies Built Around Your Study"
                        subtitle="From research-use-only discovery projects to CAP/CLIA-certified clinical samples, our dedicated bioinformatics team supports a full range of sequencing approaches."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {methodologies.map((item, index) => (
                            <ServiceGridItem key={index} {...item} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Platform Deep Dive */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={genomicsImg} alt="Genome Sequencing Technology" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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
                                Instrumentation & Depth
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Industry-Leading <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Sequencing Platforms</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                We run short-read sequencing on Illumina NovaSeq 6000, HiSeq X, and NovaSeq X Plus platforms with 2 × 151 bp read lengths, alongside long-read sequencing on PacBio Sequel IIe for de novo assembly and structural variant resolution.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Sequencing depth is fully customizable per project, and our library preparation options — including TruSeq DNA Nano/PCR-Free, Nextera DNA Flex, and PacBio HiFi/SMRTbell — are matched to your sample type and study goals.
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
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-500/20 p-3 rounded-lg text-primary-400 mt-1">
                                            <Cpu className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Short & Long-Read Platforms</h4>
                                            <p className="text-slate-400">Illumina NovaSeq 6000, HiSeq X, NovaSeq X Plus, and PacBio Sequel IIe.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-teal-500/20 p-3 rounded-lg text-teal-400 mt-1">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Custom Sequencing Depth</h4>
                                            <p className="text-slate-400">30X mean depth for clinical WGS, with fully configurable coverage per project.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 mt-1">
                                            <Database className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Flexible Data Delivery</h4>
                                            <p className="text-slate-400">Demultiplexed FASTQ files as standard, with BCL files available on request.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sample Requirements & Bioinformatics */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Sample Requirements & Analysis Tiers"
                        subtitle="Clear specifications and analysis options so your samples are sequencing-ready from day one."
                    />

                    <div className="max-w-6xl mx-auto mt-16">
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="w-full min-w-[640px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Parameter</th>
                                        <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Short-Read Sequencing</th>
                                        <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Long-Read Sequencing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sampleRequirements.map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                            <td className="px-6 py-4 font-semibold text-slate-900 align-top">{row.param}</td>
                                            <td className="px-6 py-4 text-slate-600 align-top">{row.shortRead}</td>
                                            <td className="px-6 py-4 text-slate-600 align-top">{row.longRead}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 text-primary-600">
                                <Search className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Bioinformatics</h3>
                            <ul className="space-y-3">
                                {['Data quality control', 'Reference mapping (ISAAC/BWA-GATK)', 'SNP and InDel variant analysis'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm text-white"
                        >
                            <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 text-teal-400">
                                <FileCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Advanced Bioinformatics</h3>
                            <ul className="space-y-3">
                                {['Structural variant & copy number analysis', 'Family trio and tumor-normal pairing', 'Joint genotyping and custom workflows'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                        <span className="text-slate-300 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workflow Timeline */}
            <section className="py-24 bg-slate-50 relative z-10">
                <div className="container-custom">
                    <SectionHeader title="A Streamlined Project Workflow" subtitle="From first consultation to final report, every step is tracked and quality-controlled." />
                    <div className="max-w-5xl mx-auto mt-16 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-200 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 relative z-10">
                            {workflowSteps.map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center font-bold text-slate-400 text-xl mb-4 group-hover:border-primary-500 group-hover:text-primary-600 transition-colors shadow-sm">
                                        {phase.step}
                                    </div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2 px-2">{phase.title}</h4>
                                    <p className="text-slate-600 leading-relaxed px-2">{phase.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="py-24 bg-white relative z-10 border-t border-slate-100">
                <div className="container-custom">
                    <SectionHeader
                        title="Applications Across Research & Clinical Domains"
                        subtitle="Genome-wide coverage supports discovery and diagnostic goals across a broad range of therapeutic areas."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {applications.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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

export default WholeGenomeSequencing;
