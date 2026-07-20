'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Microscope,
    Dna,
    Activity,
    Binary,
    FileText,
    Layers,
    Atom,
    Filter,
    Boxes,
    ScanLine,
    Focus,
    Cpu,
    SearchCheck,
    Target,
    FlaskConical,
    ShieldCheck,
    Repeat,
    ShieldPlus,
    Stethoscope,
    Beaker,
    TestTubes,
    Database,
    CheckCircle2,
    Sparkles,
    ClipboardCheck,
    Handshake,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';
const bgVideo = '/assets/bgvideo.mp4';
const office1 = '/assets/office1.webp';
const office2 = '/assets/office2.webp';
const genomicsImg = '/assets/genomics.webp';
const galleryImages = [office1, office2];

const OfficeGallery = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    // Smooth parallax scrolling effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    
    // Add useSpring for butter-smooth parallax with no jitter
    const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120, mass: 0.5 });
    const parallaxY = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative group"
        >
            {/* Creative blue glow effect */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-500/40 via-teal-400/30 to-sky-400/40 blur-3xl opacity-60 group-hover:opacity-100 group-hover:from-primary-400/50 group-hover:via-teal-300/40 group-hover:to-sky-300/50 transition-all duration-700 -z-10 pointer-events-none" />

            {/* Subtle glassmorphism styling, soft shadow, glowing border */}
            <div className="relative rounded-3xl overflow-hidden bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-700 ease-out group-hover:border-primary-400/70 group-hover:shadow-[0_20px_60px_rgba(14,165,233,0.35)] group-hover:ring-1 group-hover:ring-primary-300/50">
                
                <div ref={containerRef} className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl">
                    {/* Parallax Layer */}
                    <motion.div style={{ y: parallaxY }} className="absolute -inset-y-[20%] inset-x-0 will-change-transform">
                        {/* Gentle hover zoom */}
                        <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.06]">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={index}
                                    src={galleryImages[index]}
                                    alt="CNC Path Lab facility"
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                />
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Gradient Overlay for better contrast of indicators */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Modern Slide Indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
                    {galleryImages.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                i === index
                                    ? 'w-8 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]'
                                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Additional ambient blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-400/30 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
        </motion.div>
    );
};

const technologyPlatforms = [
    { title: 'Immunohistochemistry (IHC)', icon: Microscope },
    { title: 'Fluorescence In Situ Hybridization (FISH)', icon: Dna },
    { title: 'Real-Time PCR (RT-PCR)', icon: Activity },
    { title: 'Next-Generation Sequencing (NGS)', icon: Binary },
    { title: 'Transcriptomics', icon: FileText },
    { title: 'Multi-omics', icon: Layers },
    { title: 'Proteomics', icon: Atom },
    { title: 'Flow Cytometry', icon: Filter },
    { title: 'Multiplex Cytokine Profiling', icon: Boxes },
    { title: 'Digital Pathology & Whole-Slide Scanning', icon: ScanLine },
    { title: 'Quantitative Image Analysis', icon: Focus },
    { title: 'AI-Enabled Pathology Workflows', icon: Cpu },
];

const scientificServices = [
    { title: 'Biomarker Discovery & Validation', description: 'Identify and confirm the molecular signatures that drive disease and therapeutic response.', icon: SearchCheck },
    { title: 'Target Identification', description: 'Pinpoint and characterize novel biological targets to guide early-stage discovery.', icon: Target },
    { title: 'Small Molecule Discovery Support', description: 'Enable screening and characterization workflows across the discovery pipeline.', icon: FlaskConical },
    { title: 'Toxicology & Safety Assessment', description: 'Evaluate safety signals and tissue-level effects throughout preclinical development.', icon: ShieldCheck },
    { title: 'Translational Research', description: 'Bridge basic science and clinical application with spatially and molecularly resolved data.', icon: Repeat },
    { title: 'Immuno-Oncology Studies', description: 'Profile immune context and response to advance next-generation cancer therapeutics.', icon: ShieldPlus },
    { title: 'Companion Diagnostic Development', description: 'Co-develop diagnostics that match the right therapy to the right patient.', icon: Stethoscope },
    { title: 'Assay Development & Validation', description: 'Design and validate fit-for-purpose assays across exploratory and regulated programs.', icon: Beaker },
    { title: 'Biospecimen Analysis', description: 'Extract high-quality data from tissue, blood, and other biological specimens.', icon: TestTubes },
    { title: 'Integrated Multi-Omics Data Generation', description: 'Generate and unify multi-layered molecular datasets for a complete biological picture.', icon: Database },
];

const partnershipPillars = [
    'Pathology & molecular diagnostics',
    'Genomics & proteomics',
    'Digital pathology & imaging',
    'Computational & data analytics',
];

const PlatformCard = ({ title, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -6 }}
        className="group relative h-full"
    >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-300/30 via-teal-300/20 to-primary-300/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative h-full flex items-center gap-4 p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 group-hover:border-primary-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)] transition-all duration-500">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
        </div>
    </motion.div>
);

const ServiceCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full"
    >
        <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary-500/40 to-teal-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 h-full p-7 rounded-[1.75rem] bg-gradient-to-br from-slate-800/60 via-slate-800/30 to-white/5 backdrop-blur-2xl border border-slate-700/40 group-hover:border-primary-400/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 flex flex-col">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border bg-primary-500/20 border-primary-400/30 text-primary-200 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2 tracking-tight">{title}</h3>
            <p className="text-slate-300 leading-relaxed text-sm font-medium">{description}</p>
        </div>
    </motion.div>
);

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
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
                            <Sparkles className="w-4 h-4" />
                            Who We Are
                        </div>
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">
                                CNC Path Lab
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 max-w-3xl mx-auto">
                            A premier translational research and advanced diagnostics partner accelerating scientific discovery and precision medicine.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro / Overview */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm mb-2 border border-teal-200">
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                Bridging Discovery and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Clinical Impact</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                CNC Path Lab is a premier translational research and advanced diagnostics partner enabling pharmaceutical, biotechnology, healthcare, and academic organizations to accelerate scientific discovery and precision medicine. By integrating world-class laboratory technologies with deep scientific expertise, we deliver high-quality data and actionable insights that support every stage of the research and development lifecycle—from early discovery through clinical translation and commercialization.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                As a trusted technology partner, we provide comprehensive solutions that bridge basic research, translational science, and clinical application. Our multidisciplinary team of pathologists, molecular biologists, immunologists, genomics specialists, bioinformaticians, and data scientists collaborates closely with clients to design customized research strategies that address complex biological and clinical questions.
                            </p>
                        </motion.div>

                        <OfficeGallery />
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 relative z-10 overflow-hidden border-t border-slate-100 bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50">
                <div className="absolute top-0 left-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Our Technology Ecosystem"
                        subtitle="A comprehensive portfolio of advanced platforms enabling molecular, cellular, and tissue-level characterization for translational research, biomarker development, and precision diagnostics."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-16">
                        {technologyPlatforms.map((item, index) => (
                            <PlatformCard key={index} {...item} delay={(index % 3) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Services */}
            <section className="py-24 bg-slate-900 relative z-10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={genomicsImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-slate-900/90" />
                </div>

                <div className="container-custom relative z-10">
                    <SectionHeader
                        title="Scientific Services"
                        subtitle="End-to-end solutions designed to support innovation across the pharmaceutical and life sciences ecosystem."
                        className="[&_h2]:text-white [&_p]:text-slate-300"
                    />
                    <p className="text-center text-slate-300 max-w-3xl mx-auto -mt-6 mb-16 leading-relaxed">
                        Through advanced bioinformatics and statistical analysis, we transform complex datasets into meaningful biological insights that accelerate decision-making and reduce development timelines.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {scientificServices.map((item, index) => (
                            <ServiceCard key={index} {...item} delay={(index % 4) * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality & Compliance */}
            <section className="py-24 bg-white relative z-10 border-t border-slate-100 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="shrink-0"
                        >
                            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary-500 to-teal-500 text-white flex items-center justify-center shadow-[0_16px_40px_rgba(14,165,233,0.35)]">
                                <ClipboardCheck className="w-14 h-14" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 text-teal-700 font-semibold text-sm border border-teal-200">
                                Quality & Compliance
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                                Scientific Excellence You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Trust</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                CNC Path Lab is committed to delivering scientific excellence through rigorous quality systems, validated methodologies, and internationally accepted laboratory standards. Our emphasis on analytical accuracy, reproducibility, regulatory compliance, and data integrity ensures confidence in every result we generate.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We partner seamlessly with pharmaceutical companies, biotechnology innovators, contract research organizations (CROs), hospitals, diagnostic developers, and academic research institutions, providing flexible, scalable solutions tailored to each program's scientific and regulatory requirements.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Scientific Partnership */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/60 to-teal-50 border-t border-slate-100">
                <div className="absolute top-0 right-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-teal-500 text-white items-center justify-center mb-8 shadow-[0_16px_40px_rgba(14,165,233,0.35)]"
                        >
                            <Handshake className="w-10 h-10" />
                        </motion.div>
                        <SectionHeader
                            title="A Strategic Scientific Partnership"
                            subtitle="Beyond laboratory services, we serve as a strategic scientific partner dedicated to advancing precision medicine."
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto -mt-6"
                        >
                            By integrating pathology, molecular diagnostics, genomics, proteomics, digital pathology, and computational analytics into a unified research framework, we help our collaborators uncover novel biomarkers, understand disease biology, optimize therapeutic development, and translate scientific discoveries into clinical impact.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-14">
                        {partnershipPillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.06)]"
                            >
                                <div className="mt-0.5 bg-primary-100 p-1 rounded-full text-primary-600 shrink-0">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span className="text-slate-700 font-semibold leading-snug">{pillar}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-24 bg-slate-950 relative z-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-white/10 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-8 border border-primary-400/30">
                            <Sparkles className="w-4 h-4" />
                            Our Mission
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                            Innovation Driven by Science, Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200">Collaboration</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                            At CNC Path Lab, our mission is to empower researchers and healthcare innovators with comprehensive, high-quality translational research solutions that accelerate drug discovery, enable precision diagnostics, and improve patient outcomes worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

        </div>
    );
};

export default AboutUs;
