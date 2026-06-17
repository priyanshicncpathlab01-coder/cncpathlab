import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, TestTube2, Wind, Thermometer, UserCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../sections/CTASection';

import labImg from '../assets/labimage.webp';
import bgVideo from '../assets/bgvideo.mp4';

const LabServices = () => {
    const services = [
        {
            title: 'Specialty Lab Services',
            description: 'Delivering specialized testing solutions with scientific precision to support complex clinical and translational research programs.',
        },
        {
            title: 'Central Lab Services',
            description: 'Providing standardized, high-quality laboratory operations and data consistency across global clinical studies.',
        },
        {
            title: 'Companion Diagnostics Solutions',
            description: 'Supporting biomarker-driven development with diagnostic strategies that enable patient selection and therapeutic success.',
        },
        {
            title: 'Advancing Science Through Innovation',
            description: 'Leveraging scientific expertise, technology, and operational excellence to accelerate research and improve development outcomes.',
        }
    ];

    const [selectedBar, setSelectedBar] = React.useState(0);

    const precisionSolutions = [
        {
            title: 'Immune Monitoring & Flow Cytometry',
            description: 'Comprehensive immune profiling and cellular analysis services designed to evaluate immune responses, characterize cell populations, and support biomarker-driven research.',
            bgStyle: { background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' },
            glowColor: 'rgba(30, 58, 138, 0.5)',
        },
        {
            title: 'Bioanalysis',
            description: 'Robust bioanalytical testing solutions supporting pharmacokinetic, pharmacodynamic, and biomarker assessments with high accuracy and regulatory compliance.',
            bgStyle: { background: 'linear-gradient(135deg, #1e3a8a 0%, #8a9fdbff 100%)' },
            glowColor: 'rgba(29, 78, 216, 0.5)',
        },
        {
            title: 'Genomics',
            description: 'Advanced genomic testing and sequencing capabilities that provide critical insights into genetic variation, disease mechanisms, and targeted therapeutic development.',
            bgStyle: { background: 'linear-gradient(135deg, #7bb2d3ff 0%, #0284c7 100%)' },
            glowColor: 'rgba(2, 132, 199, 0.5)',
        },
        {
            title: 'Tissue Imaging & Analysis',
            description: 'High-resolution tissue characterization and image-based analytical solutions that enable deeper understanding of biological processes and treatment responses.',
            bgStyle: { background: 'linear-gradient(135deg, #2e3856 0%, #4f46e5 100%)' },
            glowColor: 'rgba(79, 70, 229, 0.5)',
        }
    ];

    const cardGlowStyle = {
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.15), 0 0 30px rgba(59, 130, 246, 0.05)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        transition: 'all 0.4s ease',
    };

    const cardGlowHoverStyle = {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), 0 8px 32px rgba(0,0,0,0.12)',
        border: '1px solid rgba(59, 130, 246, 0.4)',
    };

    // ✅ value add kiya — yahi missing tha
    const barData = [
        {
            name: 'DNA',
            value: 95,
            icon: <Fingerprint />,
            color: '#1e3a8a',
            desc: 'The genetic blueprint of a cell. DNA testing identifies mutations, genetic variations, and biomarkers that can influence disease and treatment response.',
        },
        {
            name: 'RNA',
            value: 85,
            icon: <TestTube2 />,
            color: '#0284c7',
            desc: 'The messenger that carries instructions from DNA. RNA analysis shows which genes are actively expressed and how cells are responding biologically.',
        },
        {
            name: 'Tissue',
            value: 75,
            icon: <Wind />,
            color: '#4f46e5',
            desc: 'A collection of cells from organs or tumors. Tissue analysis provides insight into disease biology, biomarker expression, and the cellular environment.',
        },
        {
            name: 'Protein',
            value: 65,
            icon: <Thermometer />,
            color: '#334155',
            desc: 'The functional molecules produced by cells. Protein testing measures biomarkers, immune responses, and drug effects.',
        },
        {
            name: 'Cell',
            value: 80,
            icon: <UserCheck />,
            color: '#7797bb',
            desc: 'The basic unit of life. Cell-based analysis evaluates cell populations, immune function, and cellular responses to therapy.',
        },
    ];

    const VideoSectionCard = ({ item, index }) => {
        const [isHovered, setIsHovered] = React.useState(false);
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="h-full rounded-2xl overflow-hidden relative flex flex-col backdrop-blur-md"
                    style={{
                        ...(isHovered ? { ...cardGlowStyle, ...cardGlowHoverStyle } : cardGlowStyle),
                        background: 'rgba(15, 23, 42, 0.7)',
                    }}
                >
                    <div className="relative z-10 p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="leading-relaxed flex-grow text-slate-200">{item.description}</p>
                    </div>
                </div>
            </motion.div>
        );
    };

    const ServiceCard = ({ item, index }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        const baseGlow = item.glowColor
            ? `0 0 15px ${item.glowColor.replace('0.5', '0.2')}, 0 0 30px ${item.glowColor.replace('0.5', '0.1')}`
            : '0 0 15px rgba(59, 130, 246, 0.15)';

        const hoverGlow = item.glowColor
            ? `0 0 25px ${item.glowColor}, 0 0 50px ${item.glowColor.replace('0.5', '0.3')}, 0 10px 30px rgba(0,0,0,0.2)`
            : '0 0 20px rgba(59, 130, 246, 0.3)';

        const borderBase = item.glowColor
            ? `1px solid ${item.glowColor.replace('0.5', '0.3')}`
            : '1px solid rgba(59, 130, 246, 0.2)';

        const borderHover = item.glowColor
            ? `1px solid ${item.glowColor.replace('0.5', '0.6')}`
            : '1px solid rgba(59, 130, 246, 0.4)';

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="h-full rounded-2xl overflow-hidden relative flex flex-col"
                    style={{
                        ...(item.bgStyle || { backgroundColor: '#ffffff' }),
                        boxShadow: isHovered ? hoverGlow : baseGlow,
                        border: isHovered ? borderHover : borderBase,
                        transition: 'all 0.4s ease',
                    }}
                >
                    <div className="relative z-10 p-8 flex flex-col flex-grow">
                        <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${item.bgStyle
                            ? 'text-white'
                            : isHovered ? 'text-primary-600' : 'text-slate-900'
                            }`}>
                            {item.title}
                        </h3>
                        <p className={`leading-relaxed flex-grow ${item.bgStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                            {item.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${labImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/60" />
                </div>

                <div className="container-custom relative z-10 text-center flex flex-col items-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="max-w-5xl mx-auto p-10 md:p-16"
                    >
                        <div className="inline-block px-5 py-2 rounded-full bg-primary-500/25 border border-primary-400/40 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(20,184,166,0.35)]">
                            Laboratory Solutions
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-teal-400 mx-auto mb-8 rounded-full" />
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4"
                            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)' }}
                        >
                            Precision-Driven <br />
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200"
                                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                Laboratory Solutions
                            </span>
                        </h1>
                        <p
                            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium mt-6"
                            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}
                        >
                            Advancing research through scientific excellence, innovation, and precision — empowering smarter clinical development outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-950/70 z-[1]" />
                <div className="relative z-10 py-24">
                    <div className="container-custom">
                        <SectionHeader
                            title={<span className="text-white">Our Capabilities</span>}
                            subtitle={<span className="text-slate-300">Explore our comprehensive suite of specialized laboratory services.</span>}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12">
                            {services.map((service, index) => (
                                <VideoSectionCard key={index} item={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Precision-Driven Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Precision-Driven Laboratory Solutions"
                        subtitle="Our precision laboratory services deliver advanced biomarker, molecular, and sample analysis capabilities that support translational research, clinical development, and precision medicine initiatives."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12">
                        {precisionSolutions.map((solution, index) => (
                            <ServiceCard key={index} item={solution} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Bar Graph Section — CLEAN, no nested maps */}
            <section className="py-24 bg-slate-50 relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Advanced scientific capabilities and platforms designed to generate deep insights from any sample or tissue type."
                        subtitle="Click on any bar to explore detailed information about each biological sample type."
                    />

                    <div className="max-w-5xl mx-auto mt-16">

                        {/* Bars */}
                        <div
                            className="flex items-end justify-center gap-3 sm:gap-6 px-2"
                            style={{ height: '288px' }}
                        >
                            {barData.map((bar, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center flex-1 cursor-pointer group"
                                    onClick={() => setSelectedBar(index)}
                                >
                                    {/* Bar */}
                                    <div
                                        className={`w-full rounded-t-2xl relative overflow-hidden transition-all duration-500 ease-out flex flex-col justify-end ${selectedBar === index ? 'z-10' : 'z-0'
                                            }`}
                                        style={{
                                            height: `${bar.value * 2.2}px`,
                                            background: selectedBar === index
                                                ? `linear-gradient(180deg, ${bar.color} 0%, ${bar.color}dd 100%)`
                                                : `linear-gradient(180deg, ${bar.color}bb 0%, ${bar.color}88 100%)`,
                                            boxShadow: selectedBar === index
                                                ? `0 -8px 30px -5px ${bar.color}aa, inset 0 2px 10px rgba(255,255,255,0.4), 0 10px 20px -5px rgba(0,0,0,0.2)`
                                                : `0 4px 15px ${bar.color}33`,
                                            border: selectedBar === index
                                                ? '1px solid rgba(255,255,255,0.6)'
                                                : '1px solid rgba(255,255,255,0.1)',
                                            borderBottom: 'none',
                                            transform: selectedBar === index ? 'scaleY(1.05) scaleX(1.05)' : 'scaleY(1) scaleX(1)',
                                            transformOrigin: 'bottom',
                                            filter: selectedBar === index ? 'brightness(1.15)' : 'brightness(0.9)',
                                        }}
                                    >
                                        {/* Glass reflection highlight */}
                                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl" />

                                        {/* Icon */}
                                        <div
                                            className={`absolute top-4 left-0 right-0 flex justify-center text-white transition-all duration-500 ${selectedBar === index ? 'opacity-100 scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'opacity-50 scale-95 group-hover:opacity-80'
                                                }`}
                                        >
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                                {bar.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name label */}
                                    <span className={`mt-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 ${selectedBar === index
                                        ? 'text-slate-900 scale-105 drop-shadow-sm'
                                        : 'text-slate-500 group-hover:text-slate-700'
                                        }`}>
                                        {bar.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Base line */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-2" />

                        {/* ✅ Info card — hamesha visible, selectedBar se change hota hai */}
                        <motion.div
                            key={selectedBar}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="mt-8 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${barData[selectedBar].color} 0%, ${barData[selectedBar].color}99 100%)`,
                                boxShadow: `0 8px 32px ${barData[selectedBar].color}66`,
                            }}
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="text-5xl sm:text-6xl">
                                    {barData[selectedBar].icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <h3 className="text-2xl sm:text-3xl font-black">
                                            {barData[selectedBar].name}
                                        </h3>
                                    </div>
                                    <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                                        {barData[selectedBar].desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Liquid Biopsy & ApoStream Section */}
            <section className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Advancing Science Through Innovative <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Liquid Biopsy and Immune Monitoring Solutions</span>
                        </h2>
                        <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                            <p>
                                Beyond leveraging established assay and biomarker platforms, we develop proprietary biomarker technologies designed to generate deeper biological insights and support biomarker-driven research.
                            </p>
                            <p>
                                Our commitment to advancing precision medicine extends beyond testing capabilities. Through continuous innovation, we help accelerate the development of targeted therapies by enabling more comprehensive characterization of disease biology and treatment response.
                            </p>
                        </div>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative group hover:border-primary-500/50 transition-colors duration-500"
                        >
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />

                            <div className="p-8 sm:p-12 md:p-16 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 font-semibold text-sm mb-6 border border-primary-500/30">
                                        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                                        Proprietary Platform
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                                        ApoStream®: <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-300">Advanced Rare Cell Enrichment and CTC Liquid Biopsy</span>
                                    </h3>
                                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full" />
                                </div>
                                <div className="flex-1 space-y-6">
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        ApoStream® is Precision's proprietary platform for the isolation and enrichment of circulating tumor cells (CTCs), enabling comprehensive downstream analyses including multiplex immunofluorescence, FISH, ISH, and other molecular characterization techniques.
                                    </p>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        In addition to CTC applications, ApoStream® supports the enrichment of diverse rare cell populations, including stem cells, progenitor cells, differentiated immune cells, CAR T cells, and other low-frequency immune cell subsets. This capability provides valuable insights for oncology, immuno-oncology, and cell therapy research.
                                    </p>
                                    <button style={{ backgroundColor: 'white' }}>Learn More</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="relative z-10 bg-slate-50">
                <CTASection />
            </div>

        </div>
    );
};

export default LabServices;