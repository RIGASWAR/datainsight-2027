import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'cyan-blue' | 'blue-gold' | 'gold-cyan';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'cyan-blue' }) => {
  const shouldReduceMotion = useReducedMotion();

  const getGradient = () => {
    switch (variant) {
      case 'blue-gold':
        return 'from-transparent via-[#D9A441]/40 to-transparent';
      case 'gold-cyan':
        return 'from-transparent via-[#00A8E8]/35 to-transparent';
      default:
        return 'from-transparent via-[#176BFF]/30 to-transparent';
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-3 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-3/4 max-w-4xl h-[1px] bg-gradient-to-r ${getGradient()} relative`}
      >
        {/* Central glowing node pip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#176BFF] shadow-[0_0_8px_rgba(23,107,255,0.5)]" />
      </motion.div>
    </div>
  );
};
