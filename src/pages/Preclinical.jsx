import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, FlaskConical, BrainCircuit, Activity, CheckCircle2, FileText, Package, Database, BadgeDollarSign, BarChart } from 'lucide-react';
import CTASection from '../sections/CTASection';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
import diagnosticsImg from "../assets/diagnostics.jpg";
//console.log("Image path:", diagnosticsImg);


import { p } from 'framer-motion/client';

const slides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
];

const Preclinical = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const solutions = [
    {
      title: 'Biomarker Discovery and Target Validation',
      description: 'Identifying and validating novel biomarkers to support target selection and accelerate your preclinical programs.',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Specialty Assay Development',
      description: 'Custom assay design, optimization, and validation tailored to your specific therapeutic mechanisms and goals.',
      icon: <FlaskConical className="w-8 h-8" />,
      color: 'bg-teal-500',
    },
    {
      title: 'Biomarker Strategy',
      description: 'Comprehensive planning and implementation of biomarker strategies from preclinical research through clinical phases.',
      icon: <BrainCircuit className="w-8 h-8" />,
      color: 'bg-indigo-500',
    },
    {
      title: 'Companion Diagnostics Program',
      description: 'Early-stage development and strategic alignment for future companion diagnostic (CDx) integration.',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-purple-500',
    },
  ];

  const specialtyAssays = [
    "Immunogenicity assessment",
    "Neutralizing and total antibody (NAb/Tab) assays",
    "Pharmacokinetic (PK) assays",
    "Tissue analysis using Immunohistochemistry (IHC) and Multiplex Immunofluorescence",
    "Sensitive analyte detection through ELISA, Luminex, and Meso Scale Discovery (MSD) platforms",
    "Viral tissue distribution analysis for gene therapies using ddPCR and qPCR",
    "Evaluation of gene editing accuracy and specificity through Next-Generation Sequencing (NGS)"
  ];

  const biomarkerStrategyCards = [
    {
      title: 'Informed Consent',
      icon: <FileText className="w-8 h-8" />,
      color: 'bg-indigo-500',
      des: 'Informed consent forms (ICFs) should clearly outline sample collection requirements and any associated risks to ensure participants are fully informed before enrollment.',
      size: 'h-[320px] w-[220px]',  // ← add this line


    },
    {
      title: 'Sample Kits',
      icon: <Package className="w-8 h-8" />,
      color: 'bg-emerald-500',
      des: 'Sample kits must be prepared and delivered to clinical sites before the first patient enrollment to ensure accurate sample collection, handling, and processing procedures are properly followed.',
      size: 'h-[320px] w-[220px]',
    },
    {
      title: 'eCRF',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-blue-500',
      des: 'Development and structuring of the electronic case report form (eCRF) to ensure smooth and standardized data capture',
      size: 'h-[320px] w-[220px]',
    },
    {
      title: 'Site Budgets',
      icon: <BadgeDollarSign className="w-8 h-8" />,
      color: 'bg-amber-500',
      des: 'Site budgets may be affected by the type of biomarker samples collected and the frequency of sample collection throughout the study.',
      size: 'h-[320px] w-[220px]',
    },
    {
      title: 'Data Management',
      icon: <BarChart className="w-8 h-8" />,
      color: 'bg-purple-500',
      des: 'Biomarker data management enables data from multiple laboratories to be integrated with clinical data, helping generate more accurate and meaningful insights.',
      size: 'h-[320px] w-[220px]',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Slideshow Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-visible">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].image}
                alt="Preclinical Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-950/85"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container-custom relative z-10 pt-20 flex flex-col items-center text-center justify-center h-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              Preclinical Research and <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-teal-300 to-primary-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Regulatory Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Identical CTA Section */}
      <CTASection />

      {/* New Solutions Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            title="Solutions to Guide Your Project to Clinical Phases"
            subtitle="Expertly designed preclinical services to ensure a seamless transition from discovery to clinical validation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col p-8 group">
                  <div className={`${solution.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {solution.description}
                  </p>
                  <Button variant="ghost" size="sm" className="justify-start px-0 text-primary-600 font-bold hover:bg-transparent hover:text-primary-700">
                    Learn More →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Assay Development Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Specialty Assay Development"
            subtitle="Precision supports preclinical development with advanced biomarker assay solutions, specializing in large molecule bioanalysis and immunogenicity testing. Our expertise includes:"
          />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialtyAssays.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="flex items-start p-6 h-full group hover:border-primary-200 transition-colors">
                    <div className="bg-primary-50 rounded-full p-1 mr-4 shrink-0 group-hover:bg-primary-100 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed mt-0.5">
                      {item}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Biomarker Strategy Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            title="Biomarker Strategy: Planning Biomarker Analysis for Clinical Trials"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 relative">
            {/* Ambient Background Glow for the Section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-slate-400/5 via-primary-400/5 to-slate-400/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {[
              "Effective biomarker planning plays a vital role in the success of clinical trials. Integrating biomarker management with clinical trial operations from the beginning helps ensure efficient execution, high-quality data collection, and smoother study workflows.",
              "Before starting a clinical trial, key biomarker sampling details should be clearly defined, including sample type, processing and handling methods, collection frequency, and intended data usage.",
              "Well-planned biomarker strategies help improve the overall effectiveness, accuracy, and reliability of clinical trial outcomes."
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative group h-full z-10"
              >
                {/* Soft Outer Dark Glow that intensifies on hover */}
                <div className="absolute inset-0 bg-slate-800/10 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Gentle Drifting/Floating Animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full"
                >
                  <Card className="h-full relative overflow-hidden bg-slate-50/50 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 md:p-10 flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:border-slate-800/30 group-hover:shadow-[0_25px_50px_-12px_rgba(15,23,42,0.2)] rounded-[2rem]">

                    {/* Animated Light Streak / Shimmer */}
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                      <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[200%] transition-all duration-1000 ease-in-out"></div>
                    </div>

                    {/* Elegant Dark Top Edge Highlight */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-slate-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Subtle Corner Accents for Depth */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-slate-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col h-full items-center justify-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-6 rounded-full opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-700"></div>
                      <p className="text-slate-700 font-medium text-[1.05rem] leading-loose group-hover:text-slate-950 transition-colors duration-500 tracking-wide">
                        {text}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {biomarkerStrategyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${card.size || 'h-full'} flex flex-col items-center text-center p-4 overflow-y-auto group border-transparent hover:border-slate-200 transition-all shadow-sm hover:shadow-xl`}>

                  <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {card.des}
                  </p>
                </Card>

              </motion.div>

            ))}
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mt-10 bg-primary-50 py-4 px-6 rounded-xl max-w-2xl mx-auto">
            Advanced Companion Diagnostic Programs
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-10">

            {/* Left side - text + list */}
            <div className="flex-1">
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                We help develop companion diagnostic solutions from research to clinical use with expert support at every stage.
              </p>
              <ul className="space-y-3">
                {[
                  "Biomarker assay development",
                  "Indications and claims planning",
                  "Diagnostic product design support",
                  "FDA and regulatory pathway guidance",
                  "Point-of-care, lab, and home testing strategies",
                  "CLIA and quality compliance support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - image */}

            <div className="flex-1 flex justify-center">
              <img
                src={diagnosticsImg}
                alt="Companion diagnostics"
                style={{
                  width: "550px",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Preclinical;
