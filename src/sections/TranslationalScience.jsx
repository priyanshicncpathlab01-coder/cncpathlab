import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight, BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';

const TranslationalScience = () => {
  return (
    <section id="research" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 text-primary-600 font-bold tracking-wider uppercase text-sm mb-6">
              <BookOpen className="w-5 h-5" />
              <span>Translational Science</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Translational and <br />
              <span className="text-primary-600">Biomarker Sciences</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our Translational Science team works at the intersection of discovery and clinical development. 
              We provide the scientific insight and technical expertise required to translate laboratory 
              findings into clinical utility, supporting patient stratification and therapeutic response monitoring.
            </p>
            <div className="space-y-4 mb-10">
              {['Assay Development & Validation', 'Method Transfer & Global Harmonization', 'Strategic Biomarker Consulting'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="gap-2">
                Download PDF Capability <FileDown className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="gap-2 text-primary-600">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684388669-c1538395778b?auto=format&fit=crop&q=80&w=1000" 
                alt="Translational Science"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Abstract decorative shape */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px] border border-slate-100 hidden md:block">
              <p className="text-slate-900 font-bold text-lg mb-2">150+ Assays</p>
              <p className="text-slate-500 text-sm">Successfully validated and transferred for global clinical trials.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TranslationalScience;
