import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, TestTube2, Thermometer, UserCheck, Wind, ArrowRight } from 'lucide-react';

const types = [
  {
    name: 'DNA',
    icon: Fingerprint,
    desc: 'High-throughput sequencing and genomic profiling for precision diagnostics.',
  },
  {
    name: 'RNA',
    icon: TestTube2,
    desc: 'Advanced transcriptomics and gene expression analysis platforms.',
  },
  {
    name: 'Protein',
    icon: Thermometer,
    desc: 'Comprehensive proteomics and protein biomarker validation workflows.',
  },
  {
    name: 'Cell',
    icon: UserCheck,
    desc: 'Single-cell analysis, immune phenotyping and functional cell monitoring.',
  },
  {
    name: 'Tissue',
    icon: Wind,
    desc: 'Digital pathology, IHC staining and spatial transcriptomics capabilities.',
  },
];

const SampleExpertise = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Split header row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold tracking-widest text-primary-600 uppercase mb-4"
            >
              Analytical Platforms
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Advanced Expertise for <br className="hidden md:block" />
              Every Sample Type
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-slate-600 lg:max-w-sm leading-relaxed lg:mb-1"
          >
            Our specialized teams are equipped to handle and analyze a diverse array of biological materials with precision and care.
          </motion.p>
        </div>

        {/* Five expertise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group p-7 rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer bg-white relative overflow-hidden"
              >
                {/* Animated top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />

                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {type.name}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{type.desc}</p>
                <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SampleExpertise;
