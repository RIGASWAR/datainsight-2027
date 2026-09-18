import React from 'react';
import { BookOpen, AlertCircle, Sparkles, FileCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Publication: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publication" className="py-20 md:py-28 relative bg-[#040E22]/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#19C7E8]/10 rounded-full blur-[140px] pointer-events-none" />

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
            <BookOpen className="w-3.5 h-3.5 text-[#E9B949]" />
            PROCEEDINGS & POLICIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONFERENCE <span className="gradient-text-cyan-blue">PUBLICATION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#19C7E8] via-[#176BFF] to-[#E9B949] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
            Maintaining rigorous academic peer-review standards and publishing ethics for high-impact research.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Publication Details List */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Mandatory Disclaimer Note */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="p-4 sm:p-5 rounded-xl bg-[#0B2859]/70 border border-[#E9B949]/40 flex items-start gap-3.5 shadow-lg"
            >
              <AlertCircle className="w-5 h-5 text-[#E9B949] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E9B949]">
                  Official Notice
                </h4>
                <p className="text-xs sm:text-sm text-[#F7FAFF]/95 font-medium mt-0.5">
                  "{CONFERENCE_DATA.publication.note}"
                </p>
              </div>
            </motion.div>

            {/* Publication Key Fields Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONFERENCE_DATA.publication.details.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="p-5 rounded-2xl glass-card border border-[#19C7E8]/20 hover:border-[#19C7E8]/50 transition-all flex flex-col justify-between space-y-3 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#8EA7CE] uppercase tracking-wider">
                      Item 0{index + 1}
                    </span>
                    <FileCheck className="w-4 h-4 text-[#19C7E8]" />
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {item.label}
                    </h5>
                    <div className="mt-2 inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#071A3D] text-[#E9B949] border border-white/10">
                      {item.value}
                    </div>
                  </div>

                  <div className="text-[11px] text-[#8EA7CE] pt-2 border-t border-white/5">
                    Official announcement pending
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right: Academic Graphic Artwork with subtle scale */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="w-full max-w-md p-8 rounded-3xl glass-card border-2 border-[#19C7E8]/30 shadow-2xl relative overflow-hidden text-center space-y-6 hover:border-[#19C7E8]/60 transition-colors">
              
              {/* Graphic Medallion */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#176BFF] via-[#0B2859] to-[#071A3D] border border-[#19C7E8] flex items-center justify-center shadow-xl shadow-[#176BFF]/25">
                <BookOpen className="w-12 h-12 text-[#19C7E8]" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/30">
                  <Sparkles className="w-3 h-3" />
                  Peer-Reviewed Proceedings
                </div>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  Academic Integrity & Quality
                </h3>
                <p className="text-xs text-[#C5D4EE] mt-2 leading-relaxed">
                  All submitted manuscripts will undergo double-blind peer review by international technical committee reviewers to uphold the highest scholarly standards.
                </p>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-medium">
                <div className="p-2 rounded-lg bg-[#071A3D] border border-white/10 text-[#19C7E8]">
                  Zero Plagiarism Tolerance
                </div>
                <div className="p-2 rounded-lg bg-[#071A3D] border border-white/10 text-[#E9B949]">
                  Strict Ethical Review
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
