import React from 'react';
import { Sparkles, Globe, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Speakers: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="speakers" className="py-20 md:py-28 relative bg-gradient-to-b from-white via-[#F7FAFF] to-white overflow-hidden">
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
            DISTINGUISHED ACADEMICIANS &amp; VISIONARIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            KEYNOTE SPEAKERS AND PANELISTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A353] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            World-renowned researchers, academicians, and industry leaders delivering visionary talks and leading deliberations at DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* 3 Keynote Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                <div>
                  {/* Speaker Portrait Area */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-square bg-[#F5F9FF] overflow-hidden border-b border-[#176BFF]/10">
                    <img
                      src={speaker.image}
                      alt={`Photograph of ${speaker.name}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.dataset.fallbackTried) return;
                        target.dataset.fallbackTried = 'true';
                        const filename = speaker.image.split('/').pop()?.split('-')[0]?.split('?')[0];
                        if (filename) {
                          target.src = `/speakers/${filename}`;
                        }
                      }}
                    />

                    {/* Role Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#176BFF]/15 text-[#174EA6] border border-[#176BFF]/30 backdrop-blur-md shadow-xs uppercase tracking-wider">
                      Keynote Speaker
                    </div>
                  </div>

                  {/* Speaker Info Body */}
                  <div className="p-6 space-y-3.5 bg-white">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1A2B4A]/70">
                      <span>Distinguished Speaker 0{index + 1}</span>
                      <span className="font-semibold text-[#176BFF]">Keynote / Panel</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B2554] group-hover:text-[#176BFF] transition-colors leading-snug">
                      {speaker.name}
                    </h3>

                    <div className="space-y-1.5 text-xs sm:text-sm text-[#1A2B4A]">
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#4A5E82] font-medium shrink-0">Designation:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.designation}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#4A5E82] font-medium shrink-0">Institution:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#00A8E8] shrink-0" />
                        <span className="text-[#4A5E82] font-medium">Country:</span>
                        <span className="font-semibold text-[#0B2554]">{speaker.country}</span>
                      </div>
                    </div>

                    {speaker.specialization && (
                      <div className="pt-2">
                        <span className="inline-block px-2.5 py-1 text-[11px] font-medium bg-[#176BFF]/5 text-[#174EA6] rounded-md border border-[#176BFF]/10 leading-relaxed">
                          {speaker.specialization}
                        </span>
                      </div>
                    )}

                    {speaker.biography && (
                      <div className="pt-2 border-t border-[#176BFF]/10 text-xs text-[#4A5E82] italic leading-relaxed">
                        {speaker.biography}
                      </div>
                    )}
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="p-4 bg-[#F8FAFC] border-t border-[#176BFF]/10 mt-auto">
                  <a
                    href={speaker.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-[#176BFF] bg-white hover:bg-[#176BFF] hover:text-white border border-[#176BFF]/25 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

