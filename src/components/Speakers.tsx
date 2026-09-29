import React, { useState } from 'react';
import { UserCheck, Sparkles, Globe, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Speakers: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A353]" />
            DISTINGUISHED ACADEMICIANS & VISIONARIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            KEYNOTE SPEAKERS AND PANELISTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A353] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            World-renowned researchers, academicians, and industry leaders will deliver visionary talks and lead plenary deliberations at DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* 4 Speaker / Panelist Reusable Cards */}
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
                className="group relative rounded-2xl border border-[#176BFF]/15 bg-white overflow-hidden hover:border-[#176BFF]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                {/* Photo Placeholder Area */}
                <div>
                  <div className="relative w-full aspect-square bg-gradient-to-b from-[#F5F9FF] to-[#EBF3FF] flex items-center justify-center overflow-hidden border-b border-[#176BFF]/10 group-hover:from-[#EBF3FF] group-hover:to-[#DCEBFF] transition-colors">
                    
                    {/* Subtle Grid in background */}
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    
                    {/* Placeholder Avatar Frame */}
                    <div className="relative w-28 h-28 rounded-2xl bg-white border-2 border-dashed border-[#176BFF]/30 flex flex-col items-center justify-center text-center p-3 group-hover:scale-105 group-hover:border-[#176BFF] transition-all duration-300 shadow-sm">
                      <UserCheck className="w-10 h-10 text-[#176BFF] opacity-80 group-hover:opacity-100 group-hover:text-[#D9A353] transition-colors" />
                      <span className="text-[11px] font-bold text-[#174EA6] mt-1.5 uppercase tracking-wider">
                        Slot 0{index + 1}
                      </span>
                      <span className="text-[9px] font-semibold text-[#4A5E82]">
                        Photo: TO BE INCLUDED
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#D9A353]/15 text-[#D9A353] border border-[#D9A353]/30 backdrop-blur-md">
                      TO BE INCLUDED
                    </div>
                  </div>

                  {/* Speaker Info Body */}
                  <div className="p-6 space-y-3.5 bg-white">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1A2B4A]/70">
                      <span>Distinguished Speaker 0{index + 1}</span>
                      <span className="font-semibold text-[#176BFF]">Keynote / Panel</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B2554] group-hover:text-[#176BFF] transition-colors">
                      Name: {speaker.name}
                    </h3>

                    <div className="space-y-1.5 text-xs sm:text-sm text-[#1A2B4A]">
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#4A5E82] font-medium">Designation:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.designation}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#4A5E82] font-medium">Institution:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#00A8E8] flex-shrink-0" />
                        <span className="text-[#4A5E82] font-medium">Country:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.country}</span>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#176BFF]/10 text-xs text-[#4A5E82] italic leading-relaxed">
                      Profile: {speaker.biography}
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="p-4 bg-[#F8FAFC] border-t border-[#176BFF]/10">
                  <button
                    type="button"
                    onClick={() => setSelectedSlot(index + 1)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[#176BFF] bg-white hover:bg-[#176BFF] hover:text-white border border-[#176BFF]/25 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  {selectedSlot === index + 1 && (
                    <div className="mt-1 text-[11px] text-center text-[#D9A353] font-bold">
                      Speaker details will be announced upon formal confirmation.
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
