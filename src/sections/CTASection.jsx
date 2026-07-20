'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
const ctaBg = '/assets/images/earlyphase.webp';
const CTASection = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/82" />
      {/* Subtle gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/35 to-teal-900/20" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Partner With Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Life science innovators <br className="hidden md:block" />
            come to{' '}
            <span className="text-teal-300">CNC Path Lab</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to accelerate your clinical program? Our experts are here to help you design
            and execute the perfect laboratory strategy. Are you ready?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              variant="white"
              onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
            >
              Contact Our Experts
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 group"
            >
              View Our Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
