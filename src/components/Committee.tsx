import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Committee: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <section id="committee" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#176BFF]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Users className="w-3.5 h-3.5 text-[#D9A441]" />
            LEADERSHIP & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            ORGANIZING <span className="gradient-text-gold">COMMITTEE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Guiding the academic direction, research rigor, and organizational excellence of DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* Tier 1: Chief Patron (Featured Primary Card with Stronger Entrance) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#D9A441]/50 shadow-xl text-center relative overflow-hidden group hover:border-[#D9A441] transition-all">
            
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D9A441]/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/40 mb-4 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              CHIEF PATRON
            </div>

            <div className="w-22 h-22 mx-auto rounded-full bg-gradient-to-tr from-[#D9A441] to-[#F5CE68] p-0.5 shadow-md shadow-[#D9A441]/20 mb-4 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <User className="w-10 h-10 text-[#D9A441]" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
              {CONFERENCE_DATA.committee.chiefPatron.name}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-[#176BFF] mt-1.5">
              {CONFERENCE_DATA.committee.chiefPatron.affiliation}
            </p>
            <p className="text-sm text-[#1A2B4A]/70 mt-1">
              {CONFERENCE_DATA.institution.name}, Coimbatore
            </p>
          </div>
        </motion.div>

        {/* Tier 2: Patron & Convener (Two Featured Cards with Staggered Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* Patron */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center space-y-3.5"
          >
            <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 uppercase tracking-wider">
              PATRON
            </span>
            <div className="w-18 h-18 rounded-full bg-[#F5F9FF] border-2 border-[#176BFF]/30 flex items-center justify-center text-[#176BFF] shadow-sm">
              <User className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0B2D6B]">
                {CONFERENCE_DATA.committee.patron.name}
              </h4>
              <p className="text-sm sm:text-base font-semibold text-[#174EA6] mt-1">
                {CONFERENCE_DATA.committee.patron.affiliation}
              </p>
            </div>
          </motion.div>

          {/* Convener */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center space-y-3.5"
          >
            <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 uppercase tracking-wider">
              CONVENER
            </span>
            <div className="w-18 h-18 rounded-full bg-[#F5F9FF] border-2 border-[#176BFF]/30 flex items-center justify-center text-[#176BFF] shadow-sm">
              <User className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0B2D6B]">
                {CONFERENCE_DATA.committee.convener.name}
              </h4>
              <p className="text-sm sm:text-base font-semibold text-[#174EA6] mt-1">
                {CONFERENCE_DATA.committee.convener.department}
              </p>
              <p className="text-sm text-[#1A2B4A]/70">
                {CONFERENCE_DATA.institution.name}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Tier 3: Organizing Secretaries (Three Dedicated Cards) */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h4 className="text-base font-extrabold uppercase tracking-widest text-[#D9A441]">
              ORGANIZING SECRETARIES
            </h4>
            <div className="w-16 h-1 bg-[#D9A441] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CONFERENCE_DATA.committee.organizingSecretaries.map((sec, idx) => (
              <motion.div
                key={sec.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + idx * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center space-y-2.5"
              >
                <div className="w-13 h-13 mx-auto rounded-full bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF]">
                  <User className="w-6.5 h-6.5" />
                </div>
                <h5 className="text-lg font-bold text-[#0B2D6B]">
                  {sec.name}
                </h5>
                <p className="text-sm text-[#174EA6] font-semibold">
                  {sec.role}
                </p>
                <p className="text-xs sm:text-sm text-[#1A2B4A]/70">
                  Dept. of Information Technology
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 4: Additional Committee Categories (Expandable Placeholders) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto pt-6 border-t border-[#176BFF]/15"
        >
          <div className="text-center mb-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#174EA6]">
              Additional Committees & Advisory Bodies
            </h4>
            <p className="text-sm text-[#1A2B4A]/70 mt-1">
              Member appointments and international advisory boards in formation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CONFERENCE_DATA.committee.additionalRoles.map((role) => {
              const isExpanded = expandedCategory === role.category;

              return (
                <div
                  key={role.category}
                  className="rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 shadow-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(role.category)}
                    className="w-full p-4.5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#0B2D6B] focus:outline-none"
                  >
                    <span>{role.category}</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-[#D9A441] font-mono font-bold px-2.5 py-1 rounded-md bg-[#FFF9E6] border border-[#D9A441]/30">
                        {role.status}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4.5 h-4.5 text-[#176BFF]" />
                      ) : (
                        <ChevronDown className="w-4.5 h-4.5 text-[#174EA6]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 pt-1.5 text-xs sm:text-sm text-[#1A2B4A]/85 border-t border-[#176BFF]/10 bg-[#F5F9FF] overflow-hidden space-y-1 leading-relaxed"
                      >
                        <p>
                          The roster for <strong>{role.category}</strong> is being finalized by the organizing secretariat and will be posted upon institutional confirmation.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
