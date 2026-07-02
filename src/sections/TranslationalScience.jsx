import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import translationalImg from '../assets/apoadvantageone.webp';

const capabilities = [
  'Assay Development & Validation',
  'Method Transfer & Global Harmonization',
  'Strategic Biomarker Consulting',
];

const TranslationalScience = () => {
  return (
    <section id="research" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image with floating stat */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={translationalImg}
                alt="Translational Science"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-10"
            >
              <div className="text-3xl font-black text-primary-600 mb-1">150+</div>
              <div className="text-slate-900 font-bold text-sm mb-1">Assays Validated</div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[160px]">
                Successfully transferred for global clinical trials.
              </p>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 right-0 w-48 h-48 bg-primary-500/8 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2.5 text-primary-600 font-bold tracking-wider uppercase text-xs mb-5">
              <div className="w-8 h-px bg-primary-500" />
              <BookOpen className="w-4 h-4" />
              <span>Translational Science</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Translational and <br />
              <span className="text-primary-600">Biomarker Sciences</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our Translational Science team works at the intersection of discovery and clinical
              development. We provide the scientific insight and technical expertise required to
              translate laboratory findings into clinical utility, supporting patient stratification
              and therapeutic response monitoring.
            </p>
            <div className="space-y-4 mb-10">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="gap-2 group">
                Download Capability PDF
                <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="ghost" className="gap-2 text-primary-600 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TranslationalScience;
