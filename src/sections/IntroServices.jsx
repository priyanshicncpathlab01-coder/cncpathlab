import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Microscope, Dna, Search, Activity } from 'lucide-react';

const technologyCards = [
  {
    title: 'Multiplex Immunofluorescence',
    description: 'Simultaneously visualize multiple biomarkers within a single tissue section using high-parameter fluorescence panels for deep spatial insight.',
    icon: Layers,
  },
  {
    title: 'Immunohistochemistry (IHC)',
    description: 'Precise antigen detection and biomarker localization in tissue sections, validated for both research and clinical diagnostic workflows.',
    icon: Microscope,
  },
  {
    title: 'FISH / ISH',
    description: 'Fluorescence and chromogenic in situ hybridization to detect gene rearrangements, copy number changes, and RNA expression at the single-cell level.',
    icon: Dna,
  },
  {
    title: 'Pathology',
    description: 'Expert histopathological review and diagnostic interpretation by board-certified pathologists to support accurate, evidence-based conclusions.',
    icon: Search,
  },
  {
    title: 'Gene Expression Profiling of Biopsies',
    description: 'Quantitative transcriptomic analysis of biopsy specimens to characterize gene expression signatures and inform biomarker discovery.',
    icon: Activity,
  },
];

const TechnologyCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="relative group h-full cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-teal-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />

    <div className="relative h-full p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 group-hover:border-primary-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-primary-200 group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-teal-50 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-primary-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Icon className="w-7 h-7 text-primary-600 group-hover:text-primary-700 group-hover:scale-110 transition-transform duration-500 relative z-10" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">{description}</p>

      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-teal-50/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  </motion.div>
);

const IntroServices = () => {
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
              Our Technologies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Explore Technologies and Insights for{' '}
              <span className="text-primary-600">Tissue Biopsy Analysis</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="lg:max-w-sm text-slate-600 leading-relaxed lg:mb-1"
          >
            A comprehensive suite of tissue-based technologies delivering precise biomarker detection, molecular characterization, and expert pathology interpretation for biopsy specimens.
          </motion.p>
        </div>

        {/* Five technology cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyCards.map((card, i) => (
            <TechnologyCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroServices;
