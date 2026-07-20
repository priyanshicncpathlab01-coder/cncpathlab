'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Zap, Shield, Target, Beaker, GitMerge, Activity } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const apoStreamImg = '/assets/apostream.webp';
const apoAdvOne = '/assets/apoadvantageone.webp';
const apoAdvTwo = '/assets/apoadvantagetwo.webp';
const AdvantageSection = ({ benefits }) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const images = [apoAdvOne, apoAdvTwo];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === 0 ? 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 relative z-10 overflow-hidden">
            {/* Background Slideshow */}
            {images.map((img, i) => (
                <div
                    key={i}
                    className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-0"
                    style={{ opacity: currentImage === i ? 1 : 0 }}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/46 z-0" />

            <div className="container-custom relative z-10">
                <SectionHeader
                    title={<span className="text-white drop-shadow-md">The ApoStream Advantage</span>}
                    subtitle={<span className="text-slate-200 drop-shadow">Overcoming the limitations of traditional, marker-dependent CTC isolation methods.</span>}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] transition-all duration-300 group overflow-hidden bg-white/5 backdrop-blur-md"
                        >
                            <div className="relative z-10 flex flex-col items-start">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden border border-white/20 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:bg-white/20 transition-colors duration-300">
                                    <div className="relative z-10 text-white">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{benefit.title}</h3>
                                <p className="text-slate-200 leading-relaxed drop-shadow">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ApoStream = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        {
            title: 'Antibody-Independent Isolation',
            description: 'Recovers both EpCAM-positive and EpCAM-negative CTCs, ensuring a comprehensive capture of heterogeneous cell populations.',
            icon: <Shield className="w-8 h-8 text-primary-400" />,
            color: 'from-primary-600 to-primary-400'
        },
        {
            title: 'High Viability & Integrity',
            description: 'Gentle dielectrophoresis (DEP) technology preserves cell viability, making the recovered cells suitable for diverse downstream assays.',
            icon: <Activity className="w-8 h-8 text-teal-400" />,
            color: 'from-teal-600 to-teal-400'
        },
        {
            title: 'Continuous Flow Process',
            description: 'Efficient processing of blood samples enables high-throughput isolation with minimal manual intervention.',
            icon: <GitMerge className="w-8 h-8 text-blue-400" />,
            color: 'from-blue-600 to-blue-400'
        },
        {
            title: 'Versatile Downstream Applications',
            description: 'Enables advanced analyses including multiplex immunofluorescence, FISH, next-generation sequencing, and single-cell characterization.',
            icon: <Beaker className="w-8 h-8 text-indigo-400" />,
            color: 'from-indigo-600 to-indigo-400'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 pointer-events-none" />

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-950/20 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/30 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/40 shadow-[0_0_20px_rgba(20,184,166,0.35)]">
                            <Zap className="w-4 h-4" />
                            Proprietary Technology
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)' }}
                        >
                            ApoStream® <br className="hidden md:block" />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200"
                                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))' }}
                            >
                                CTC Isolation & Analysis
                            </span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto font-medium"
                            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.8), 0 2px 20px rgba(0,0,0,0.6)' }}
                        >
                            The ApoStream® platform uses continuous-flow dielectrophoresis to isolate and recover rare viable cells, including Circulating Tumor Cells (CTCs), from blood—without relying on surface markers like EpCAM.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Dielectrophoresis</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full mb-8" />
                            <p className="text-lg text-slate-600 leading-relaxed">
                                ApoStream® leverages the principles of dielectrophoresis (DEP)—the movement of particles in a non-uniform electric field. Because cancer cells possess different physical and electrical properties (like membrane capacitance) compared to normal blood cells, they respond differently to the applied field.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                When a blood sample is passed continuously through the ApoStream® microfluidic flow chamber, alternating current (AC) electric fields apply targeted forces that pull cancer cells toward a collection port, while normal blood cells are swept away in the waste stream.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-3xl bg-slate-900 p-8 overflow-hidden shadow-2xl border border-slate-800">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="bg-primary-500/20 p-3 rounded-lg text-primary-400">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">1. Sample Introduction</h4>
                                            <p className="text-slate-400 text-sm">Blood sample flows continuously into chamber</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="bg-teal-500/20 p-3 rounded-lg text-teal-400">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">2. Dielectrophoretic Field</h4>
                                            <p className="text-slate-400 text-sm">AC electric field separates cells by electrical properties</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                                            <Microscope className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">3. Viable Cell Recovery</h4>
                                            <p className="text-slate-400 text-sm">Enriched, intact CTCs are collected for analysis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <AdvantageSection benefits={benefits} />

            {/* ApoStream Technology Section */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Column: Text Content */}
                        <div className="flex-1 space-y-8 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                                    ApoStream® Technology: <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Advanced Capture of Circulating Tumor Cells</span>
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full" />
                            </motion.div>

                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    ApoStream® leverages positive dielectrophoresis (DEP) technology to isolate and enrich circulating tumor cells (CTCs) from blood samples with high sensitivity and viability. This innovative platform has been successfully used to capture CTCs from patients with a wide range of solid tumors, including breast, prostate, pancreatic, bladder, ovarian, lung, liver, head and neck cancers, melanoma, and sarcoma.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Following isolation, the enriched CTCs can be analyzed using advanced molecular techniques such as fluorescence in situ hybridization (FISH), next-generation sequencing (NGS), and other genomic characterization methods. These studies have demonstrated that ApoStream®-isolated CTCs retain clinically relevant genetic alterations and remain viable for downstream research applications, enabling deeper insights into tumor biology, disease progression, and therapeutic response.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 w-full flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Decorative elements behind image */}
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-3xl z-0 hidden sm:block" />
                                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-teal-500/30 rounded-3xl z-0 hidden sm:block" />
                                <img
                                    src={apoStreamImg}
                                    alt="ApoStream Technology"
                                    className="w-full max-w-lg rounded-3xl shadow-2xl object-cover relative z-10 border border-slate-700/50"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default ApoStream;