import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Waves, Layers, Image as ImageIcon, BarChart, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

const BiomarkerAnalysis = () => {
  const analyses = [
    {
      title: 'Immune Monitoring & Flow Cytometry',
      icon: <Layers className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1579154273801-e91e3540d151?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Bioanalysis',
      icon: <BarChart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Genomics',
      icon: <Dna className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f1305b3c2?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Tissue Imaging & Analysis',
      icon: <ImageIcon className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1532187875605-7fe359843f68?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Cytokine Profiling & Proteomics',
      icon: <Waves className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Target & Biomarker Validation',
      icon: <CheckCircle2 className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader 
          title="Comprehensive Biomarker & Sample Analysis"
          subtitle="Our state-of-the-art facilities and expert scientists deliver high-quality data across a broad range of technology platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="p-1.5 bg-primary-500 rounded-lg">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Expertise in complex {item.title.toLowerCase()} for oncology, immunology, and rare diseases.
                  </p>
                  <div className="h-1 w-0 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiomarkerAnalysis;
