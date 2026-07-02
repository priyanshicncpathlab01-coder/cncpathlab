import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, FlaskConical, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import specialtyImg from '../assets/specialty_lab.png';
import centralImg from '../assets/central_lab.png';

const largeCards = [
  {
    title: 'Specialty Lab Services',
    description: 'Advanced assays and specialized testing for complex therapeutic areas including oncology, immunology, and rare diseases.',
    icon: Microscope,
    tag: 'Core Capability',
    image: specialtyImg,
    route: '/lab-services',
  },
  {
    title: 'Central Lab Services',
    description: 'Global clinical trial support with standardized laboratory testing, ensuring consistent and reliable data across all sites.',
    icon: Activity,
    tag: 'Clinical Trials',
    image: centralImg,
    route: '/lab-services',
  },
];

const smallCards = [
  {
    title: 'Companion Diagnostics',
    description: 'Development and validation of IVD and CDx assays for personalized medicine.',
    icon: FlaskConical,
  },
  {
    title: 'Biospecimen Services',
    description: 'High-quality human biospecimen procurement and lifecycle management.',
    icon: Database,
  },
  {
    title: 'Advanced Healthcare Solutions',
    description: 'Custom diagnostic programs and innovative healthcare delivery models.',
    icon: ShieldCheck,
  },
];

const IntroServices = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section intro — left-aligned like PFM */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="flex-1 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold tracking-widest text-primary-600 uppercase mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Turning Science into{' '}
              <span className="text-primary-600">Healthcare Solutions</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="lg:max-w-sm text-slate-600 leading-relaxed lg:mb-1"
          >
            We bridge the gap between scientific discovery and clinical application with our integrated suite of laboratory services designed for biotechnology and pharmaceutical innovators.
          </motion.p>
        </div>

        {/* Three-column service grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Two large image cards */}
          {largeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[420px] flex flex-col"
                onClick={() => handleNavigate(card.route)}
              >
                {/* Background image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-900/55 to-slate-900/20 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-8">
                  {/* Tag */}
                  <div className="mb-auto">
                    <span className="px-3 py-1 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-wider">
                      {card.tag}
                    </span>
                  </div>
                  {/* Bottom content */}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{card.description}</p>
                    <div className="flex items-center gap-2 text-teal-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Explore Services <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Right column: 3 smaller border cards stacked */}
          <div className="flex flex-col gap-5">
            {smallCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex-1 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 p-6 flex items-start gap-5 cursor-pointer group relative overflow-hidden"
                >
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{card.description}</p>
                    <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      Discover <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroServices;
