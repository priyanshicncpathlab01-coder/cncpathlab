import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={cn(
        'bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm transition-shadow hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
