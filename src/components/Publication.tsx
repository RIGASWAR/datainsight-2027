import React from 'react';
import { BookOpen, AlertCircle, Sparkles, FileCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Publication: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publication" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <BookOpen className="w-3.5 h-3.5 text-[#D9A441]" />
            PROCEEDINGS & POLICIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONFERENCE <span className="gradient-text-cyan-blue">PUBLICATION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
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
              className="p-5 sm:p-6 rounded-2xl bg-[#FFF9E6] border border-[#D9A441]/50 flex items-start gap-3.5 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 text-[#D9A441] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9A441]">
                  Official Notice
                </h4>
                <p className="text-sm sm:text-base text-[#1A2B4A] font-medium mt-1 leading-relaxed">
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
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3.5 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1A2B4A]/60 uppercase tracking-wider">
                      Item 0{index + 1}
                    </span>
                    <FileCheck className="w-4 h-4 text-[#176BFF]" />
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                      {item.label}
                    </h5>
                    <div className="mt-2 inline-block px-3.5 py-1.5 rounded-lg text-sm font-mono font-bold bg-[#F5F9FF] text-[#D9A441] border border-[#176BFF]/15">
                      {item.value}
                    </div>
                  </div>

                  <div className="text-xs text-[#1A2B4A]/65 pt-2.5 border-t border-[#176BFF]/10">
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
            <div className="w-full max-w-md p-8 sm:p-9 rounded-3xl bg-white border-2 border-[#176BFF]/20 shadow-xl relative overflow-hidden text-center space-y-6 hover:border-[#176BFF]/40 transition-colors">
              
              {/* Graphic Medallion */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#176BFF] to-[#00A8E8] border border-[#176BFF]/30 flex items-center justify-center shadow-lg shadow-[#176BFF]/25">
                <BookOpen className="w-12 h-12 text-white" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Peer-Reviewed Proceedings
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B2D6B] mt-2.5">
                  Academic Integrity & Quality
                </h3>
                <p className="text-sm sm:text-base text-[#1A2B4A]/85 mt-2.5 leading-relaxed">
                  All submitted manuscripts will undergo double-blind peer review by international technical committee reviewers to uphold the highest scholarly standards.
                </p>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm font-semibold">
                <div className="p-2.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 text-[#176BFF]">
                  Zero Plagiarism Tolerance
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF9E6] border border-[#D9A441]/30 text-[#D9A441]">
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
