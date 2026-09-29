import React from 'react';
import { 
  Users2, 
  ShieldCheck, 
  Globe2, 
  BookOpen, 
  CreditCard, 
  HeartHandshake, 
  Megaphone,
  AlertCircle
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const AdditionalCommittees: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const committees = CONFERENCE_DATA.additionalCommittees;

  const commIcons: Record<string, React.ElementType> = {
    'comm-1': ShieldCheck,
    'comm-2': Globe2,
    'comm-3': BookOpen,
    'comm-4': CreditCard,
    'comm-5': HeartHandshake,
    'comm-6': Megaphone,
  };

  return (
    <section id="advisory-bodies" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-[120px] pointer-events-none" />

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
            <Users2 className="w-3.5 h-3.5 text-[#D9A441]" />
            ORGANIZATION & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            ADDITIONAL COMMITTEES AND ADVISORY BODIES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Dedicated committees and international advisory boards steering technical rigor, academic excellence, and conference operations.
          </p>
        </motion.div>

        {/* Disclaimer Notice */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-5 rounded-2xl bg-white border border-[#176BFF]/20 flex items-center justify-between gap-3 mb-10 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#D9A441] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#1A2B4A]/85">
              Full rosters of national and international committee members: <span className="font-semibold text-[#D9A441]">TO BE INCLUDED</span> following final institutional appointment and confirmations.
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30 flex-shrink-0">
            TO BE INCLUDED
          </span>
        </motion.div>

        {/* 6 Committee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {committees.map((comm, index) => {
            const IconComponent = commIcons[comm.id] || Users2;

            return (
              <motion.div
                key={comm.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 3) * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="rounded-2xl bg-white border border-[#176BFF]/15 p-6 sm:p-7 shadow-sm hover:border-[#176BFF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#174EA6] bg-[#176BFF]/10 px-2.5 py-0.5 rounded-full border border-[#176BFF]/20">
                      COMMITTEE 0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#00A8E8] text-white flex items-center justify-center shadow-md shadow-[#176BFF]/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B] leading-snug">
                    {comm.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#176BFF] to-[#00A8E8] rounded-full my-3" />
                  <p className="text-xs sm:text-sm text-[#1A2B4A]/75 leading-relaxed">
                    {comm.role}
                  </p>
                </div>

                {/* Bottom Members Area */}
                <div className="mt-6 pt-4 border-t border-[#176BFF]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1A2B4A]/70">
                    Member Roster:
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30">
                    {comm.members}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
