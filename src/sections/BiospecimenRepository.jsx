import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Box, Users, Search, Activity, HeartPulse } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

const BiospecimenRepository = () => {
  const specimens = [
    { name: 'Blood Fluid', icon: <Droplet className="w-6 h-6" />, count: '500,000+ Samples' },
    { name: 'Tissue', icon: <Box className="w-6 h-6" />, count: '200,000+ Blocks' },
    { name: 'Viable Cells', icon: <Activity className="w-6 h-6" />, count: 'Frozen/Fresh' },
    { name: 'Remnant Specimens', icon: <HeartPulse className="w-6 h-6" />, count: 'Diverse Pathologies' },
    { name: 'NGS Services', icon: <Search className="w-6 h-6" />, count: 'Sequencing Ready' },
    { name: 'Custom Collection', icon: <Users className="w-6 h-6" />, count: 'Bespoke Protocols' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Enabling Research with an Expansive Biospecimens Repository"
          subtitle="Access high-quality, ethically sourced human biospecimens across a wide range of therapeutic areas and clinical indications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specimens.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-8 flex items-center gap-6 group hover:border-primary-300">
                <div className="w-16 h-16 rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h4>
                  <p className="text-primary-600 font-semibold text-sm">{item.count}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiospecimenRepository;
