import React from 'react';
import { Award } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface SponsorsProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const Sponsors: React.FC<SponsorsProps> = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sponsors" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F6F9FF] via-[#EEF5FF] to-[#F6F9FF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#D9A441]" />
            PARTNERSHIP & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            SPONSORS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Industry partners, research organizations, and academic institutions collaborating to empower DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* ONLY ONE SINGLE CENTERED BOX */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl bg-white border border-[#176BFF]/20 px-8 py-10 sm:py-14 shadow-sm hover:border-[#176BFF]/40 hover:shadow-md transition-all duration-300 flex items-center justify-center text-center">
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#0B2D6B] font-mono uppercase">
              TO BE UPDATED SOON
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
