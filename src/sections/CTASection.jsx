import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-medical-gradient"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-white opacity-[0.03] rotate-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-teal-400 opacity-[0.05] -rotate-12 -translate-x-1/2"></div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Advance Your Project with Our <br />
            Specialized Laboratory Services
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to accelerate your clinical program? Our experts are here to help you 
            design and execute the perfect laboratory strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="white" onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}>
              Contact Our Experts
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10">
              View Our Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
