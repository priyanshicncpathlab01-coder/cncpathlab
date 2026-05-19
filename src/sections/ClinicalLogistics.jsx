import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Globe2, Clock, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const ClinicalLogistics = () => {
  const features = [
    { title: 'Global Kit Management', icon: <Globe2 className="w-6 h-6" />, desc: 'Custom collection kit design, assembly, and global distribution.' },
    { title: 'Cold Chain Logistics', icon: <Truck className="w-6 h-6" />, desc: 'Temperature-controlled transport for sensitive biological samples.' },
    { title: 'Sample Tracking', icon: <Clock className="w-6 h-6" />, desc: 'Real-time visibility and chain of custody management.' },
    { title: 'Regulatory Compliance', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Adherence to IATA, GCLP, and international shipping standards.' },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader 
          title="Clinical Logistics for Biomarker Trials"
          subtitle="End-to-end sample management solutions that ensure specimen integrity from collection to analysis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
              alt="Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-600/10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalLogistics;
