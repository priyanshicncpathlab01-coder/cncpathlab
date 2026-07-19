import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Globe2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import logisticsImg from '../assets/apostream.webp';

const features = [
  {
    title: 'Global Kit Management',
    icon: Globe2,
    desc: 'Custom collection kit design, assembly, and worldwide distribution for multinational studies.',
  },
  {
    title: 'Cold Chain Testing',
    icon: Truck,
    desc: 'Temperature-controlled transport ensuring integrity of sensitive biological samples worldwide.',
  },
  {
    title: 'Real-Time Sample Tracking',
    icon: Clock,
    desc: 'End-to-end visibility and complete chain-of-custody management across your entire study.',
  },
  {
    title: 'Regulatory Compliance',
    icon: ShieldCheck,
    desc: 'Full adherence to IATA, GCLP, and all applicable international shipping and handling standards.',
  },
];

const ClinicalLogistics = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold tracking-widest text-primary-600 uppercase mb-4"
            >
              Sample Management
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Clinical Testing for <br />
              <span className="text-primary-600">Biomarker Trials</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed"
            >
              End-to-end sample management solutions that ensure specimen integrity from collection
              to analysis, across every time zone and regulatory boundary.
            </motion.p>

            <div className="space-y-7">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={logisticsImg}
                alt="Clinical Logistics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10" />
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-5 -left-5 md:-left-8 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3"
            >
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="font-bold text-sm">
                  
                </div>
                <div className="text-slate-400 text-xs">Full regulatory compliance</div>
              </div>
            </motion.div>

            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ClinicalLogistics;
