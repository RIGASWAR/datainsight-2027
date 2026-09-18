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
    <section id="committee" className="py-20 md:py-28 relative bg-[#071A3D] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#176BFF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/15 text-[#19C7E8] border border-[#19C7E8]/30 mb-3">
            <Users className="w-3.5 h-3.5 text-[#E9B949]" />
            LEADERSHIP & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            ORGANIZING <span className="gradient-text-gold">COMMITTEE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E9B949] via-[#19C7E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
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
          <div className="p-7 sm:p-9 rounded-3xl glass-card border-2 border-[#E9B949]/50 shadow-2xl bg-gradient-to-br from-[#0B2859] via-[#071A3D] to-[#071A3D] text-center relative overflow-hidden group hover:border-[#E9B949] transition-all">
            
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E9B949]/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/40 mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              CHIEF PATRON
            </div>

            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#E9B949] to-[#F5CE68] p-0.5 shadow-lg shadow-[#E9B949]/20 mb-4 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#071A3D] flex items-center justify-center">
                <User className="w-9 h-9 text-[#E9B949]" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {CONFERENCE_DATA.committee.chiefPatron.name}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#19C7E8] mt-1">
              {CONFERENCE_DATA.committee.chiefPatron.affiliation}
            </p>
            <p className="text-xs text-[#8EA7CE] mt-1">
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
            className="p-7 rounded-2xl glass-card border border-[#19C7E8]/30 hover:border-[#19C7E8]/70 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center space-y-3"
          >
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#176BFF]/20 text-[#19C7E8] border border-[#19C7E8]/30 uppercase tracking-wider">
              PATRON
            </span>
            <div className="w-16 h-16 rounded-full bg-[#0B2859] border-2 border-[#19C7E8]/40 flex items-center justify-center text-[#19C7E8] shadow-md">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                {CONFERENCE_DATA.committee.patron.name}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#19C7E8] mt-0.5">
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
            className="p-7 rounded-2xl glass-card border border-[#19C7E8]/30 hover:border-[#19C7E8]/70 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center space-y-3"
          >
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#176BFF]/20 text-[#19C7E8] border border-[#19C7E8]/30 uppercase tracking-wider">
              CONVENER
            </span>
            <div className="w-16 h-16 rounded-full bg-[#0B2859] border-2 border-[#19C7E8]/40 flex items-center justify-center text-[#19C7E8] shadow-md">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                {CONFERENCE_DATA.committee.convener.name}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#19C7E8] mt-0.5">
                {CONFERENCE_DATA.committee.convener.department}
              </p>
              <p className="text-xs text-[#8EA7CE]">
                {CONFERENCE_DATA.institution.name}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Tier 3: Organizing Secretaries (Three Dedicated Cards) */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#E9B949]">
              ORGANIZING SECRETARIES
            </h4>
            <div className="w-12 h-0.5 bg-[#E9B949] mx-auto mt-2 rounded-full" />
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
                className="p-6 rounded-2xl glass-card border border-[#19C7E8]/20 hover:border-[#19C7E8]/50 hover:-translate-y-1 transition-all text-center space-y-2.5"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#071A3D] border border-[#19C7E8]/30 flex items-center justify-center text-[#19C7E8]">
                  <User className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">
                  {sec.name}
                </h5>
                <p className="text-xs text-[#19C7E8] font-medium">
                  {sec.role}
                </p>
                <p className="text-[11px] text-[#8EA7CE]">
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
          className="max-w-4xl mx-auto pt-6 border-t border-white/10"
        >
          <div className="text-center mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8EA7CE]">
              Additional Committees & Advisory Bodies
            </h4>
            <p className="text-xs text-[#C5D4EE] mt-1">
              Member appointments and international advisory boards in formation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONFERENCE_DATA.committee.additionalRoles.map((role) => {
              const isExpanded = expandedCategory === role.category;

              return (
                <div
                  key={role.category}
                  className="rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(role.category)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-white focus:outline-none"
                  >
                    <span>{role.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#E9B949] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {role.status}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#19C7E8]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8EA7CE]" />
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
                        className="px-4 pb-4 pt-1 text-[11px] text-[#8EA7CE] border-t border-white/5 overflow-hidden space-y-1"
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
