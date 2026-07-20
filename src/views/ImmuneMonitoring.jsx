'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, Beaker, Fingerprint, Activity, ActivitySquare, Dna, Box, Globe2, Truck, ShieldCheck, BarChart3, LineChart } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const labImg = '/assets/labimage.webp';
const flowImg = '/assets/flow.webp';
const ServiceGridItem = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="relative group h-full cursor-pointer"
    >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-teal-200 from-primary-500/20 via-teal-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />

        {/* Card Content - Glassmorphism & Depth */}
        <div className="relative h-full p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 group-hover:border-primary-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col overflow-hidden z-10">

            {/* Top Gradient Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Wrapper */}
            <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-primary-200 group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-teal-50 transition-all duration-500 relative">
                {/* Subtle Icon Glow */}
                <div className="absolute inset-0 bg-primary-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="w-7 h-7 text-primary-600 group-hover:text-primary-700 group-hover:scale-110 transition-transform duration-500 relative z-10" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">{description}</p>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-teal-50/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    </motion.div>
);

const ImmuneMonitoring = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Flow Cytometry",
            description: "High-parameter immunophenotyping to deeply characterize immune cell subsets, assess activation status, and monitor therapeutic responses with high precision.",
            icon: Target
        },
        {
            title: "Epiontis ID®",
            description: "An epigenetic immune cell quantification platform utilizing DNA methylation patterns for highly stable and standardized immune profiling.",
            icon: Fingerprint
        },
        {
            title: "Cytokine Profiling",
            description: "Multiplexed and high-sensitivity assays to measure cytokine release, providing insights into inflammation, immune activation, and potential toxicity.",
            icon: ActivitySquare
        },
        {
            title: "ELISpot",
            description: "Sensitive detection of antigen-specific immune cell responses, quantifying cytokine-secreting cells at the single-cell level.",
            icon: Microscope
        },
        {
            title: "Cell-Based Assays",
            description: "Functional assays designed to evaluate cell proliferation, cytotoxicity, and neutralizing antibody responses in a biologically relevant context.",
            icon: Beaker
        },
        {
            title: "Gene Expression Profiling",
            description: "Comprehensive transcriptomic analysis to uncover gene signatures associated with immune modulation and disease mechanisms.",
            icon: Dna
        }
    ];

    const logisticsFeatures = [
        {
            title: "Global Clinical Sample Processing",
            description: "Standardized sample processing protocols deployed across our global laboratory network ensuring consistency and integrity from collection to analysis.",
            icon: Globe2
        },
        {
            title: "Clinical Sample Logistics",
            description: "Expertly managed cold-chain logistics for time- and temperature-sensitive biological samples, maintaining sample viability worldwide.",
            icon: Truck
        },
        {
            title: "Biostorage Capabilities",
            description: "Secure, state-of-the-art biorepositories for the long-term preservation of critical clinical trial samples with full regulatory compliance.",
            icon: Box
        }
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
                            <ShieldCheck className="w-4 h-4" />
                            Specialty Lab Services
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Global Immune <br className="hidden md:block" />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200"
                            >
                                Monitoring Services
                            </span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl font-medium text-slate-200 mb-6"
                        >
                            Unraveling the complexities of immunity: tailored solutions for detailed insights.
                        </p>
                        <p
                            className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
                        >
                            Precision's immune monitoring services empower your therapeutic development by characterizing cell populations, evaluating immune responses, and identifying critical biomarkers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview / Specialty Lab Services Grid */}
            <section className="py-24 bg-blue relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Comprehensive Immune Monitoring Capabilities"
                        subtitle="Our specialized lab services provide unparalleled visibility into the immune system's interaction with targeted therapies, offering robust data to drive clinical decisions."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                        {services.map((service, index) => (
                            <ServiceGridItem key={index} {...service} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Cytometry Deep Dive */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={labImg} alt="Lab Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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
                                Unlocking Potential
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Flow Cytometry for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Breakthrough Research</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-6" />
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Our flow cytometry capabilities provide exceptional multidimensional analysis of individual cells within complex heterogeneous populations. Utilizing state-of-the-art instruments and high-parameter panel design, we deliver precise immunophenotyping to support immuno-oncology and autoimmune research.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                From receptor occupancy assays to rare cell detection, our globally harmonized platforms ensure that your clinical trial data is robust, reproducible, and ready for regulatory submission.
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
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">High-Parameter Analysis</h4>
                                            <p className="text-slate-400">Deep profiling with 20+ color panels to resolve intricate cell subtypes.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-teal-500/20 p-3 rounded-lg text-teal-400 mt-1">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Global Harmonization</h4>
                                            <p className="text-slate-400">Standardized instruments and protocols across our international laboratories.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 mt-1">
                                            <LineChart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Expert Data Analysis</h4>
                                            <p className="text-slate-400">Advanced computational gating and dimensionality reduction techniques.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Endpoint Assessment Section */}
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
                                    Tailored Assays & Diagnostics
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                    Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Endpoint Assessment</span> <br className="hidden lg:block"/> Across Diverse Applications
                                </h2>
                                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                    All assays can be tailored to specific study requirements and developed in compliance with ISO, GCP, GLP, CAP, and CLIA standards.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Detection and quantification of rare cell populations based on phenotype, apoptotic activity, or phosphorylation profiles.",
                                    "Detailed immunophenotyping with accurate enumeration of immune cell subsets.",
                                    "Evaluation of activation and exhaustion marker expression to monitor immune cell functionality.",
                                    "Analysis of apoptosis and cell cycle dynamics, including assessment of histone methylation patterns.",
                                    "Measurement of cytokine secretion and production to characterize immune responses."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <ActivitySquare className="w-6 h-6 text-teal-600" />
                                    CAR T-Cell & CAR NK-Cell Therapy Support
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                        <span className="text-slate-700 text-sm md:text-base leading-relaxed">Characterization of engineered cells through lineage-specific marker expression profiling.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                        <span className="text-slate-700 text-sm md:text-base leading-relaxed">Monitoring of CAR T/NK cell persistence, expansion, and immunogenicity throughout treatment.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                                {/* Image */}
                                <img 
                                    src={flowImg} 
                                    alt="Comprehensive Endpoint Assessment" 
                                    className="w-full h-auto md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-50 -z-10 pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Logistics Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-100 relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Efficient Sample Management & Logistics"
                        subtitle="Preserving the scientific integrity of your critical clinical trial samples worldwide."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                        {logisticsFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
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

export default ImmuneMonitoring;
