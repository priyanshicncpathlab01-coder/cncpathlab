import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, FlaskConical, Database, ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const IntroServices = () => {
  const services = [
    {
      title: 'Specialty Lab Services',
      description: 'Advanced assays and specialized testing for complex therapeutic areas.',
      icon: <Microscope className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Central Lab Services',
      description: 'Global clinical trial support with standardized laboratory testing.',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-teal-500',
    },
    {
      title: 'Companion Diagnostics',
      description: 'Development and validation of IVD and CDx assays for personalized medicine.',
      icon: <FlaskConical className="w-8 h-8" />,
      color: 'bg-indigo-500',
    },
    {
      title: 'Biospecimen Services',
      description: 'High-quality human biospecimen procurement and management.',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Advanced Healthcare Solutions',
      description: 'Custom diagnostic programs and innovative healthcare delivery models.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-sky-500',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Turning Science into Healthcare Solutions"
          subtitle="We bridge the gap between scientific discovery and clinical application with our integrated suite of laboratory services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-8 group">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" size="sm" className="justify-start px-0 text-primary-600 font-bold hover:bg-transparent hover:text-primary-700">
                  Explore Details →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroServices;
