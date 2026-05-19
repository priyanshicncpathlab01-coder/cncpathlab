import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const SectionHeader = ({ title, subtitle, centered = true, className }) => {
  return (
    <div className={cn('mb-12 md:mb-16', centered ? 'text-center' : 'text-left', className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={cn('h-1.5 w-20 bg-primary-500 mt-6 rounded-full', centered ? 'mx-auto' : '')}
      />
    </div>
  );
};

export default SectionHeader;
