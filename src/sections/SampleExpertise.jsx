import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, TestTube2, Thermometer, UserCheck, Wind } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const SampleExpertise = () => {
  const types = [
    { name: 'DNA', icon: <Fingerprint className="w-10 h-10" />, desc: 'Expertise in high-throughput sequencing and genomic profiling.' },
    { name: 'RNA', icon: <TestTube2 className="w-10 h-10" />, desc: 'Advanced transcriptomics and expression analysis.' },
    { name: 'Protein', icon: <Thermometer className="w-10 h-10" />, desc: 'Comprehensive proteomics and protein biomarker validation.' },
    { name: 'Cell', icon: <UserCheck className="w-10 h-10" />, desc: 'Single-cell analysis and immune cell monitoring.' },
    { name: 'Tissue', icon: <Wind className="w-10 h-10" />, desc: 'Digital pathology and spatial transcriptomics.' },
  ];

  return (
    <section className="section-padding bg-medical-indigo text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionHeader 
          title="Advanced Expertise for Every Sample Type"
          subtitle="Our specialized teams are equipped to handle and analyze a diverse array of biological materials with precision and care."
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {types.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300 shadow-lg">
                <div className="text-primary-400 group-hover:text-white transition-colors">
                  {type.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-2">{type.name}</h4>
              <p className="text-slate-400 text-sm text-center max-w-[150px] group-hover:text-slate-200 transition-colors">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleExpertise;
