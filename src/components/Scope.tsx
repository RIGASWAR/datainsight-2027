import React from 'react';
import { Compass } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Scope: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="scope" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F7FAFF] via-[#EEF5FF]/60 to-[#F7FAFF] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-xs">
            <Compass className="w-4 h-4 text-[#D9A353]" />
            RESEARCH HORIZONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            SCOPE OF THE CONFERENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Clean, Professional Content Container */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white p-7 sm:p-10 md:p-12 border border-[#176BFF]/20 shadow-xl shadow-[#0B2D6B]/5 space-y-6 text-left"
        >
          <p className="text-base sm:text-lg text-[#1A2B4A] leading-relaxed text-justify">
            {CONFERENCE_DATA.scope.paragraph1}
          </p>
          <p className="text-base sm:text-lg text-[#1A2B4A] leading-relaxed text-justify">
            {CONFERENCE_DATA.scope.paragraph2}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
