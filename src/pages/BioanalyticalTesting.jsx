import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Shield, FlaskConical, Layers, ArrowRight, Zap, Microscope, Activity } from 'lucide-react';
import CTASection from '../sections/CTASection';
import SectionHeader from '../components/ui/SectionHeader';
import biovideo from '../assets/biovideo.mp4';
import bioimage from '../assets/bioimage.webp';
import labimage from '../assets/labimage.webp';
import earlyphase from '../assets/images/earlyphase.webp';

const BG_SLIDES = [labimage, earlyphase];

const serviceCards = [
    {
        icon: Shield,
        title: 'Immunogenicity',
        description:
            'Addressing complex immunogenicity challenges — including multi-domain and PEGylated proteins, complement activation, and immunogenicity assessment for CAR-T and gene therapy modalities — with scientifically rigorous, fit-for-purpose assay strategies.',
        gradient: 'from-primary-700 to-primary-500',
        glow: 'rgba(2, 132, 199, 0.45)',
        border: 'rgba(2, 132, 199, 0.3)',
        borderHover: 'rgba(2, 132, 199, 0.65)',
        iconBg: 'rgba(2, 132, 199, 0.15)',
    },
    {
        icon: FlaskConical,
        title: 'Large Molecule PK',
        description:
            'Full-lifecycle development, validation, and implementation of ELISA and MSD-based assays for biologic quantification, complemented by flow cytometry and ddPCR platforms for cell and gene therapy pharmacokinetic assessments.',
        gradient: 'from-teal-700 to-teal-500',
        glow: 'rgba(13, 148, 136, 0.45)',
        border: 'rgba(13, 148, 136, 0.3)',
        borderHover: 'rgba(13, 148, 136, 0.65)',
        iconBg: 'rgba(13, 148, 136, 0.15)',
    },
    {
        icon: Layers,
        title: 'NAb & TAb Assays',
        description:
            'Deploying a broad range of methodological approaches — including ELISA and MesoScale Discovery platforms — for the development and validation of neutralizing antibody and total antibody assays, with the capability to advance these into companion diagnostic formats.',
        gradient: 'from-indigo-700 to-indigo-500',
        glow: 'rgba(79, 70, 229, 0.45)',
        border: 'rgba(79, 70, 229, 0.3)',
        borderHover: 'rgba(79, 70, 229, 0.65)',
        iconBg: 'rgba(79, 70, 229, 0.15)',
    },
];

const ServiceCard = ({ card, index }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = card.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
            className="flex flex-col h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="flex flex-col h-full rounded-2xl overflow-hidden bg-slate-900 transition-all duration-400"
                style={{
                    border: `1px solid ${hovered ? card.borderHover : card.border}`,
                    boxShadow: hovered
                        ? `0 0 32px ${card.glow}, 0 8px 40px rgba(0,0,0,0.25)`
                        : `0 0 12px ${card.glow.replace('0.45', '0.15')}, 0 4px 16px rgba(0,0,0,0.12)`,
                    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s ease',
                }}
            >
                {/* Gradient top band */}
                <div className={`relative bg-gradient-to-br ${card.gradient} h-2 w-full`} />

                {/* Card body */}
                <div className="flex flex-col flex-grow p-8">
                    {/* Icon */}
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300"
                        style={{
                            background: card.iconBg,
                            border: `1px solid ${card.border}`,
                            transform: hovered ? 'scale(1.08)' : 'scale(1)',
                        }}
                    >
                        <Icon
                            className="w-7 h-7 transition-colors duration-300"
                            style={{ color: hovered ? '#fff' : card.borderHover }}
                        />
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug tracking-tight">
                        {card.title}
                    </h3>

                    {/* Divider */}
                    <div
                        className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${card.gradient} mb-5 transition-all duration-300`}
                        style={{ width: hovered ? '3rem' : '2.5rem' }}
                    />

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                        {card.description}
                    </p>

                    {/* Explore link */}
                    <div className="mt-8 pt-6 border-t border-slate-800">
                        <span
                            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300"
                            style={{ color: hovered ? '#fff' : card.borderHover }}
                        >
                            Explore
                            <ArrowRight
                                className="w-4 h-4 transition-transform duration-300"
                                style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const techCards = [
    {
        icon: Zap,
        title: 'Meso Scale Discovery (MSD)',
        description:
            'Sensitive and reproducible quantification of analytes in complex biological matrices for immunogenicity and pharmacokinetic assessments, including ADA, NAb, TAb, and PK assays.',
    },
    {
        icon: Microscope,
        title: 'ELISA',
        description:
            'Delivering gold-standard antibody-based bioanalytical services with specialized expertise in the development, optimization, and validation of immunogenicity assays for biologic and therapeutic programs.',
    },
    {
        icon: Activity,
        title: 'Olink® Proteomics',
        description:
            'High-throughput multiplex protein biomarker analysis with exceptional sensitivity and specificity, requiring only minimal clinical sample volumes.',
    },
];

const TechCard = ({ card, index }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = card.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
            className="flex flex-col h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="flex flex-col h-full rounded-2xl p-8 backdrop-blur-md"
                style={{
                    background: hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)',
                    border: `1px solid ${hovered ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.12)'}`,
                    boxShadow: hovered
                        ? '0 20px 52px rgba(0,0,0,0.32), 0 0 28px rgba(14,165,233,0.18)'
                        : '0 4px 24px rgba(0,0,0,0.22)',
                    transform: hovered ? 'translateY(-7px) scale(1.01)' : 'translateY(0) scale(1)',
                    transition: 'all 0.32s ease',
                }}
            >
                {/* Icon */}
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                        background: hovered ? 'rgba(14,165,233,0.22)' : 'rgba(255,255,255,0.10)',
                        border: `1px solid ${hovered ? 'rgba(14,165,233,0.45)' : 'rgba(255,255,255,0.16)'}`,
                        transition: 'all 0.32s ease',
                        transform: hovered ? 'scale(1.08)' : 'scale(1)',
                    }}
                >
                    <Icon
                        className="w-7 h-7"
                        style={{
                            color: hovered ? '#38bdf8' : '#7dd3fc',
                            transition: 'color 0.32s ease',
                        }}
                    />
                </div>

                {/* Heading */}
                <h3
                    className="text-lg font-bold mb-3 leading-snug tracking-tight text-white"
                    style={{ textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}
                >
                    {card.title}
                </h3>

                {/* Accent line */}
                <div
                    className="h-0.5 rounded-full mb-5 bg-gradient-to-r from-primary-400 to-teal-400"
                    style={{
                        width: hovered ? '2.75rem' : '2rem',
                        transition: 'width 0.32s ease',
                    }}
                />

                {/* Description */}
                <p
                    className="text-sm leading-relaxed flex-grow"
                    style={{ color: 'rgba(226,232,240,0.90)' }}
                >
                    {card.description}
                </p>
            </div>
        </motion.div>
    );
};

const BioanalyticalTesting = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const integratedRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: integratedRef,
        offset: ['start end', 'end start'],
    });
    const bgParallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % BG_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">
            <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={biovideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 pointer-events-none" />

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-white/10 shadow-2xl"
                    >
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                        >
                            Biologic and Large Molecule Characterization
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Three service cards */}
            <section className="bg-slate-950 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {serviceCards.map((card, index) => (
                            <ServiceCard key={card.title} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Integrated Technologies — parallax slideshow + glass cards */}
            <section ref={integratedRef} className="relative overflow-hidden py-24 md:py-32">

                {/* Parallax background slideshow */}
                <div className="absolute inset-0 z-0">
                    {/* Persistent parallax container — never remounted, keeps MotionValue connected */}
                    <motion.div
                        style={{
                            y: bgParallaxY,
                            position: 'absolute',
                            top: '-15%',
                            left: 0,
                            right: 0,
                            height: '130%',
                        }}
                    >
                        {/* Crossfade only the images inside the persistent container */}
                        <AnimatePresence mode="sync">
                            <motion.img
                                key={currentSlide}
                                src={BG_SLIDES[currentSlide]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt=""
                                aria-hidden="true"
                            />
                        </AnimatePresence>
                    </motion.div>

                    {/* Layered overlays for readability */}
                    <div className="absolute inset-0 bg-slate-950/62" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/25 to-slate-950/55" />
                </div>

                {/* Content */}
                <div className="relative z-10 container-custom">
                    <SectionHeader
                        title={
                            <span
                                className="text-white"
                                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.45)' }}
                            >
                                Innovative Bioanalysis Technologies
                            </span>
                        }
                        subtitle={
                            <span className="text-slate-300">
                                We combine established technologies, proprietary platforms, and validated biomarker assays to generate reliable, high-quality data across a wide range of biological samples, including nucleic acids, proteins, cells, and tissues.
                            </span>
                        }
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {techCards.map((card, index) => (
                            <TechCard key={card.title} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bioanalytical expertise two-column section */}
            <section className="bg-white py-20 md:py-28">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left column — heading + content */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
                                Bioanalytical Scientific and Technical Expertise
                            </h2>

                            <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-primary-500 to-teal-400 mb-8" />

                            <div className="space-y-5">
                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                                    className="text-slate-600 text-base leading-relaxed"
                                >
                                    CNC Path Lab provides comprehensive bioanalytical expertise to evaluate the pharmacokinetic (PK), pharmacodynamic (PD), and immunogenicity profiles of biologics and advanced therapeutics. Our capabilities support every stage of drug development, from IND-enabling preclinical studies through all phases of clinical trials.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
                                    className="text-slate-600 text-base leading-relaxed"
                                >
                                    Leveraging advanced analytical platforms and scientific expertise, we design and deliver fit-for-purpose bioanalytical assays tailored to each program's development stage, therapeutic modality, and risk profile. Our robust quality systems ensure compliance with global regulatory standards while generating reliable, high-quality data.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
                                    className="text-slate-600 text-base leading-relaxed"
                                >
                                    We also support the development and validation of specialized assays, including neutralizing antibody (NAb) assays for AAV-based gene therapies and companion diagnostic programs. Our bioanalytical services are designed to support a broad range of therapeutic areas, including Oncology, Rare Diseases, Gastroenterology, Immunology, and other precision medicine applications.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Right column — bioimage */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={bioimage}
                                alt="Bioanalytical laboratory expertise"
                                className="w-full h-auto max-h-[520px] object-cover rounded-2xl"
                                style={{
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
                                }}
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default BioanalyticalTesting;
