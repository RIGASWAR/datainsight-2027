import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const Publication: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publication" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F7FAFF] via-[#EEF5FF]/60 to-[#F7FAFF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#D9A441]" />
            PROCEEDINGS & POLICIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            CONFERENCE PUBLICATION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Centered Professional Content Box */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#176BFF]/20 shadow-xl shadow-[#0B2D6B]/5 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#176BFF] to-[#00A8E8] flex items-center justify-center shadow-lg shadow-[#176BFF]/25">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2D6B]">
              Will be updated soon
            </h3>
            <p className="text-sm text-[#4A5E82]">
              Publication and proceedings information for DATAINSIGHT 2027 will be announced officially once finalized.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
