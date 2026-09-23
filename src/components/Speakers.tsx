import React from 'react';
import { UserCheck, Sparkles, Globe, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Speakers: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="speakers" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#176BFF]/5 rounded-full blur-[150px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            DISTINGUISHED GUESTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            KEYNOTE SPEAKERS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            World-renowned researchers, academicians, and industry leaders will deliver visionary talks at DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* 4 Speaker Placeholder Cards with Sequential Entrance (opacity 0->1, y 30->0, scale 0.97->1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CONFERENCE_DATA.speakers.map((speaker, index) => {
            return (
              <motion.div
                key={speaker.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.65, 
                  delay: index * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative rounded-2xl border border-[#176BFF]/15 bg-white overflow-hidden hover:border-[#176BFF]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 shadow-sm flex flex-col cursor-default"
              >
                {/* Photo Placeholder Area with subtle zoom on hover */}
                <div className="relative w-full aspect-square bg-gradient-to-b from-[#F5F9FF] to-[#EBF3FF] flex items-center justify-center overflow-hidden border-b border-[#176BFF]/10 group-hover:from-[#EBF3FF] group-hover:to-[#DCEBFF] transition-colors">
                  
                  {/* Subtle Grid Matrix in background */}
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  
                  {/* Animated Avatar Frame */}
                  <div className="relative w-28 h-28 rounded-2xl bg-white border-2 border-dashed border-[#176BFF]/30 flex flex-col items-center justify-center text-center p-3 group-hover:scale-105 group-hover:border-[#176BFF] transition-all duration-300 shadow-sm">
                    <UserCheck className="w-10 h-10 text-[#176BFF] opacity-80 group-hover:opacity-100 group-hover:text-[#D9A441] transition-colors" />
                    <span className="text-xs font-bold text-[#174EA6] mt-1.5 uppercase tracking-wider">
                      Slot 0{index + 1}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30 backdrop-blur-md">
                    To Be Announced
                  </div>
                </div>

                {/* Speaker Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1A2B4A]/70">
                      <span>Keynote Speaker 0{index + 1}</span>
                      <span className="font-semibold text-[#176BFF]">Global Expert</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B] mt-1 group-hover:text-[#176BFF] transition-colors">
                      {speaker.name}
                    </h3>

                    <div className="mt-2.5 space-y-1.5 text-sm text-[#1A2B4A]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#1A2B4A]/70 font-medium">Role:</span>
                        <span className="font-semibold text-[#0B2D6B]">{speaker.designation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#1A2B4A]/70 font-medium">Affiliation:</span>
                        <span className="font-semibold text-[#0B2D6B]">{speaker.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#00A8E8]" />
                        <span className="font-medium text-[#1A2B4A]">{speaker.country}</span>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3.5 border-t border-[#176BFF]/10 text-sm text-[#1A2B4A]/85 italic leading-relaxed">
                      Biography: {speaker.biography}
                    </div>
                  </div>

                  {/* Social Profile Placeholder Bar */}
                  <div className="pt-3.5 border-t border-[#176BFF]/10 flex items-center justify-between text-xs text-[#1A2B4A]/70">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/10 flex items-center justify-center text-[#174EA6] hover:text-[#176BFF] hover:bg-[#EBF3FF] transition-colors" title="Professional Network">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/10 flex items-center justify-center text-[#174EA6] hover:text-[#176BFF] hover:bg-[#EBF3FF] transition-colors" title="Academic Email">
                        <Mail className="w-4 h-4" />
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#D9A441]">
                      Pending Release
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
