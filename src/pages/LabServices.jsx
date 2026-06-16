import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
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

    const precisionSolutions = [
        {
            title: 'Immune Monitoring & Flow Cytometry',
            description: 'Comprehensive immune profiling and cellular analysis services designed to evaluate immune responses, characterize cell populations, and support biomarker-driven research.',
            bgStyle: { background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }, // Deep navy
            glowColor: 'rgba(30, 58, 138, 0.5)',
        },
        {
            title: 'Bioanalysis',
            description: 'Robust bioanalytical testing solutions supporting pharmacokinetic, pharmacodynamic, and biomarker assessments with high accuracy and regulatory compliance.',
            bgStyle: { background: 'linear-gradient(135deg, #1e3a8a 0%, #8a9fdbff 100%)' }, // Royal blue
            glowColor: 'rgba(29, 78, 216, 0.5)',
        },
        {
            title: 'Genomics',
            description: 'Advanced genomic testing and sequencing capabilities that provide critical insights into genetic variation, disease mechanisms, and targeted therapeutic development.',
            bgStyle: { background: 'linear-gradient(135deg, #7bb2d3ff 0%, #0284c7 100%)' }, // Azure
            glowColor: 'rgba(2, 132, 199, 0.5)',
        },
        {
            title: 'Tissue Imaging & Analysis',
            description: 'High-resolution tissue characterization and image-based analytical solutions that enable deeper understanding of biological processes and treatment responses.',
            bgStyle: { background: 'linear-gradient(135deg, #2e3856 0%, #4f46e5 100%)' }, // Soft blue
            glowColor: 'rgba(79, 70, 229, 0.5)',
        }
    ];

    // Shared card style for the blue glow effect
    const cardGlowStyle = {
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.15), 0 0 30px rgba(59, 130, 246, 0.05)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        transition: 'all 0.4s ease',
    };

    const cardGlowHoverStyle = {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), 0 8px 32px rgba(0,0,0,0.12)',
        border: '1px solid rgba(59, 130, 246, 0.4)',
    };

    // Card for the Our Capabilities section (over video background - glassmorphism dark)
    const VideoSectionCard = ({ item, index }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        return (
            <motion.div
                key={index}
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
                        <h3 className="text-xl font-bold mb-4 text-white transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="leading-relaxed flex-grow text-slate-200">
                            {item.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Card for the Precision section (colored background, no video)
    const ServiceCard = ({ item, index }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        const baseGlow = item.glowColor
            ? `0 0 15px ${item.glowColor.replace('0.5', '0.2')}, 0 0 30px ${item.glowColor.replace('0.5', '0.1')}`
            : '0 0 15px rgba(59, 130, 246, 0.15), 0 0 30px rgba(59, 130, 246, 0.05)';

        const hoverGlow = item.glowColor
            ? `0 0 25px ${item.glowColor}, 0 0 50px ${item.glowColor.replace('0.5', '0.3')}, 0 10px 30px rgba(0,0,0,0.2)`
            : '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), 0 8px 32px rgba(0,0,0,0.12)';

        const borderBase = item.glowColor ? `1px solid ${item.glowColor.replace('0.5', '0.3')}` : '1px solid rgba(59, 130, 246, 0.2)';
        const borderHover = item.glowColor ? `1px solid ${item.glowColor.replace('0.5', '0.6')}` : '1px solid rgba(59, 130, 246, 0.4)';

        const currentStyle = {
            ...(item.bgStyle || { backgroundColor: '#ffffff' }),
            boxShadow: isHovered ? hoverGlow : baseGlow,
            border: isHovered ? borderHover : borderBase,
            transition: 'all 0.4s ease',
        };

        return (
            <motion.div
                key={index}
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
                    style={currentStyle}
                >
                    <div className="relative z-10 p-8 flex flex-col flex-grow">
                        <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${item.bgStyle ? 'text-white' : (isHovered ? 'text-primary-600' : 'text-slate-900')
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
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Fixed Background Image — sharp and clearly visible */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${labImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* Lighter overlay so the image remains sharp and visible */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/60"></div>
                </div>

                {/* Hero Content */}
                <div className="container-custom relative z-10 text-center flex flex-col items-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-5xl mx-auto p-10 md:p-16"
                    >
                        {/* Tagline badge */}
                        <div className="inline-block px-5 py-2 rounded-full bg-primary-500/25 border border-primary-400/40 text-teal-300 font-semibold text-sm tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(20,184,166,0.35)]">
                            Laboratory Solutions
                        </div>

                        {/* Decorative accent line */}
                        <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-teal-400 mx-auto mb-8 rounded-full"></div>

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

            {/* Services Cards Section - with background video */}
            <section className="relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-slate-950/70 z-[1]"></div>

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

            {/* Precision-Driven Laboratory Solutions Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-custom">
                    <SectionHeader
                        title="Precision-Driven Laboratory Solutions"
                        subtitle="Our precision laboratory services deliver advanced biomarker, molecular, and sample analysis capabilities that support translational research, clinical development, and precision medicine initiatives. Through specialized scientific expertise and cutting-edge technologies, we help generate reliable data that drives informed decision-making throughout the development lifecycle."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12">
                        {precisionSolutions.map((solution, index) => (
                            <ServiceCard key={index} item={solution} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Existing CTA Section */}
            <div className="relative z-10 bg-white">
                <CTASection />
            </div>
        </div>
    );
};

export default LabServices;
