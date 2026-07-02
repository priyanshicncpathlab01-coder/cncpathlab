import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Box, Activity, HeartPulse, Search, Users, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import bioImg from '../assets/bioimage.webp';

const stats = [
  { value: '500K+', label: 'Blood & Fluid Samples' },
  { value: '200K+', label: 'Tissue Blocks' },
  { value: '150+', label: 'Validated Assays' },
  { value: '100%', label: 'GCLP Compliant' },
];

const specimens = [
  { name: 'Blood & Fluid', icon: Droplet, count: '500,000+ Samples' },
  { name: 'Tissue', icon: Box, count: '200,000+ Blocks' },
  { name: 'Viable Cells', icon: Activity, count: 'Frozen/Fresh' },
  { name: 'Remnant Specimens', icon: HeartPulse, count: 'Diverse Pathologies' },
  { name: 'NGS Services', icon: Search, count: 'Sequencing Ready' },
  { name: 'Custom Collection', icon: Users, count: 'Bespoke Protocols' },
];

const BiospecimenRepository = () => {
  return (
    <>
      {/* ── Dark stats section with background image ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <img
          src={bioImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/86" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text + CTA */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold tracking-widest text-teal-400 uppercase mb-4"
              >
                Trusted Research Partner
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              >
                Enabling Research with an <span className="text-teal-300">Expansive Repository</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="text-lg text-slate-300 mb-8 leading-relaxed"
              >
                Access high-quality, ethically sourced human biospecimens across a wide range of
                therapeutic areas and clinical indications, backed by rigorous quality and
                compliance standards.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                >
                  Request Biospecimens
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  <span className="flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Right: 2×2 stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="bg-slate-900/60 backdrop-blur-sm p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specimen types grid ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Specimen Types Available
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              Comprehensive biospecimen sourcing across therapeutic areas and clinical indications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specimens.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-primary-600 font-semibold text-sm">{item.count}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BiospecimenRepository;
