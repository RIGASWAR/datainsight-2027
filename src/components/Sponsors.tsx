import React from 'react';
import { Award, Sparkles, Handshake, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface SponsorsProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onActionClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const sponsors = CONFERENCE_DATA.sponsors;

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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-sm">
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

        {/* EXACTLY FOUR SPONSOR BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsors.map((sp, index) => (
            <motion.div
              key={sp.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="rounded-2xl bg-white border border-[#176BFF]/20 p-8 shadow-sm hover:border-[#176BFF]/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[260px] group hover:-translate-y-1"
            >
              {/* Top Medallion Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5F9FF] to-[#E9F2FF] border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF] group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Sparkles className="w-7 h-7 text-[#D9A441]" />
              </div>

              {/* Sponsor Label */}
              <div className="my-4">
                <h3 className="text-lg font-bold text-[#0B2D6B] font-mono tracking-wider">
                  {sp.label}
                </h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#176BFF] to-[#00A8E8] mx-auto mt-2 rounded-full" />
              </div>

              {/* Placeholder Status Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/40 shadow-sm">
                {sp.status}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Inquiries Callout */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#176BFF]/20 shadow-md max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center flex-shrink-0">
              <Handshake className="w-6 h-6 text-[#176BFF]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                Interested in Sponsoring DATAINSIGHT 2027?
              </h4>
              <p className="text-xs sm:text-sm text-[#1A2B4A]/70 mt-0.5">
                Packages available for industry booths, keynote branding & research tracks.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onActionClick ? onActionClick('sponsors') : undefined}
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0B2D6B] hover:bg-[#176BFF] text-white transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#D9A441]" />
            <span>Sponsorship Details</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
