'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Microscope,
  Activity,
  ShieldCheck,
  Dna,
  HeartPulse,
  ChevronDown,
  Clock,
  Users,
  CheckCircle2,
  Syringe,
  Network
} from 'lucide-react';
import CTASection from '../sections/CTASection';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const earlyphaseImg = '/assets/images/earlyphase.webp';
const faqs = [
  {
    question: "How does your early-phase strategy minimize clinical trial risk?",
    answer: "We integrate biomarker discovery and adaptive trial designs from day one. By generating robust, real-time data on pharmacokinetics (PK) and pharmacodynamics (PD), we enable continuous risk assessment and safer dose-escalation."
  },
  {
    question: "What capabilities do you offer for First-in-Human (FIH) studies?",
    answer: "Our FIH capabilities include seamless protocol design, regulatory navigation, custom assay development, and rapid execution. We specialize in complex therapeutic areas like oncology and cell & gene therapy."
  },
  {
    question: "Can you support complex specialty assays during phase I/II?",
    answer: "Yes, our laboratories develop and validate highly sensitive specialty assays, including immunogenicity testing, multiplex immunofluorescence, and flow cytometry, customized to your specific mechanism of action."
  }
];

const EarlyPhase = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      {/* Parallax Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
        {/* Fixed Background Image for Parallax Effect */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${earlyphaseImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/50 to-teal-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-teal-300 font-semibold text-sm tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
              Early Phase <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-teal-300 to-primary-200" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Development</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
              Accelerating your journey from discovery to clinical validation with precision-engineered assays and strategic biomarker integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Purpose-Built for Early Phase Complexity */}
      <section className="relative z-10 bg-white py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-10">
        <div className="container-custom max-w-5xl mx-auto">
          <SectionHeader
            title="Purpose-Built for Early Phase Complexity"
            subtitle="Early-phase development is where critical decisions shape a program's future. Missed biomarker insights, suboptimal dose-escalation strategies, or regulatory setbacks can significantly impact timelines."
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Our purpose-built infrastructure helps generate reliable data, reduce risk, and support confident, evidence-based decisions from the very first stages of development—bridging the translational gap between science and clinical success.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Capabilities */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <SectionHeader title="Core Capabilities" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Microscope className="w-8 h-8" />,
                title: 'Discovery Integration',
                desc: 'Seamless transition of discovery assays into robust, clinical-grade testing to validate early targets and establish proof of mechanism.',
                color: 'text-primary-500 bg-primary-50'
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: 'Clinical Execution',
                desc: 'Agile clinical operations tailored for early-phase environments, ensuring rapid patient enrollment, stringent monitoring, and superior data quality.',
                color: 'text-teal-500 bg-teal-50'
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Regulatory Navigation',
                desc: 'Expert guidance through complex global regulatory pathways, minimizing approval hurdles for IND/CTA submissions and protocol designs.',
                color: 'text-indigo-500 bg-indigo-50'
              }
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full p-8 border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl bg-white group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cap.color}`}>
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. First-in-Human (FIH) Development Excellence */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                First-in-Human (FIH) <br className="hidden lg:block" />
                <span className="text-primary-600">Development Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Executing FIH studies requires extraordinary precision and agility. We provide end-to-end expertise designed to safeguard patient safety while rapidly evaluating pharmacokinetics and preliminary efficacy.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: 'Clinical Trial Design', desc: 'Custom, risk-mitigated protocols optimizing subject enrollment and safety monitoring.', icon: <CheckCircle2 className="w-6 h-6 text-teal-500" /> },
                { title: 'Adaptive Development Strategies', desc: 'Real-time data review to inform dose-escalation and cohort expansion efficiently.', icon: <Network className="w-6 h-6 text-primary-500" /> },
                { title: 'Integrated Biomarker Support', desc: 'Laboratory capabilities tightly woven into clinical operations for rapid decision-making.', icon: <Dna className="w-6 h-6 text-indigo-500" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Therapeutic Expertise */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-slate-900 z-0"></div>
        <div className="container-custom relative z-10">
          <SectionHeader
            title={<span className="text-white">Therapeutic Expertise</span>}
            subtitle={<span className="text-slate-300">Deep scientific knowledge across the most challenging and innovative therapeutic areas.</span>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {[
              { title: 'Oncology', icon: <HeartPulse className="w-8 h-8" /> },
              { title: 'Rare Diseases', icon: <Microscope className="w-8 h-8" /> },
              { title: 'Cell & Gene Therapy', icon: <Dna className="w-8 h-8" /> },
              { title: 'Precision Medicine', icon: <Syringe className="w-8 h-8" /> }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all cursor-default"
              >
                <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-teal-300">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-wide">{exp.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Development Journey Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="The Development Journey" subtitle="Our comprehensive roadmap from target validation to clinical proof of concept." />
          <div className="max-w-5xl mx-auto mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '01', title: 'Target Validation' },
                { step: '02', title: 'Preclinical Development' },
                { step: '03', title: 'FIH Studies' },
                { step: '04', title: 'Dose Escalation' },
                { step: '05', title: 'Phase 2 Readiness' }
              ].map((phase, i) => (
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
                  <h4 className="font-semibold text-slate-800 px-2">{phase.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Sponsors Choose Us */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {[
              { stat: '150+', label: 'FIH Studies Completed', icon: <CheckCircle2 className="w-8 h-8" /> },
              { stat: '40+', label: 'Global Clinical Sites', icon: <Users className="w-8 h-8" /> },
              { stat: '30%', label: 'Accelerated Timelines', icon: <Clock className="w-8 h-8" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">{stat.stat}</div>
                <div className="text-lg text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Studies / Success Stories */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="Success Stories" subtitle="Demonstrating impact through real-world clinical execution and biomarker integration." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {[
              {
                topic: 'Oncology Dose Escalation',
                challenge: 'Complex PK/PD analysis requirement for a novel immunotherapy.',
                result: 'Accelerated dose determination by 2 months through integrated real-time lab data.'
              },
              {
                topic: 'Rare Disease FIH',
                challenge: 'Extremely limited patient population requiring precise biomarker screening.',
                result: 'Successfully enrolled target cohort utilizing our specialized global site network.'
              },
              {
                topic: 'Cell Therapy Logistics',
                challenge: 'Time-critical apheresis collection and complex manufacturing transit.',
                result: 'Achieved 100% chain-of-custody compliance with zero logistical deviations.'
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full p-8 bg-white border border-slate-200 hover:border-primary-300 shadow-sm transition-colors">
                  <div className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">{caseStudy.topic}</div>
                  <div className="mb-6">
                    <span className="block font-semibold text-slate-900 mb-1">Challenge:</span>
                    <span className="text-slate-600">{caseStudy.challenge}</span>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <span className="block font-semibold text-slate-900 mb-1">Result:</span>
                    <span className="text-primary-700 font-medium">{caseStudy.result}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="space-y-4 mt-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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

export default EarlyPhase;
