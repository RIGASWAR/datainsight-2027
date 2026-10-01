import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';
import datainsightLogo from '../assets/datainsight_logo.png';
import posterImage from '../assets/poster.jpeg';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F7FAFF] via-[#EEF5FF]/50 to-[#F7FAFF] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/25 mb-3 shadow-xs">
            <Info className="w-4 h-4 text-[#D9A441]" />
            CONFERENCE INTRODUCTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            ABOUT DATAINSIGHT 2027
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 2-Column Desktop Layout: Left Content (Logo, Description, Stats), Right Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: DATAINSIGHT Logo + Official Description + 3 Core Indicators */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* DATAINSIGHT Logo - Enlarged and clearly visible directly below heading, centered within content column */}
            <div className="flex items-center justify-center">
              <img
                src={datainsightLogo}
                alt="DATAINSIGHT 2027 Conference Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Complete Official Description Box */}
            <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-white border border-[#176BFF]/20 shadow-lg shadow-[#0B2D6B]/5 space-y-4">
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.about.paragraph1}
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.about.paragraph2}
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.about.paragraph3}
              </p>
              
              {/* Four Interconnected Themes */}
              <div className="pt-2 pb-1">
                <p className="text-sm sm:text-base font-bold text-[#0B2554] mb-2.5">
                  {CONFERENCE_DATA.about.themeIntro}
                </p>
                <div className="space-y-2 pl-1">
                  {CONFERENCE_DATA.about.themesList.map((theme) => (
                    <div key={theme} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A441] mt-1 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#1A2B4A]">
                        {theme}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.about.paragraph5}
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.about.paragraph6}
              </p>
            </div>

            {/* Three Information Indicators: 3 Days, 4 Tracks, PSG Tech */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#244A91]/40 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-brand-primary">3 Days</div>
                <div className="text-[11px] sm:text-xs text-[#4A5E82] mt-0.5 sm:mt-1 font-medium">Dec 16–18, 2027</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#244A91]/40 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-brand-primary">4 Tracks</div>
                <div className="text-[11px] sm:text-xs text-[#4A5E82] mt-0.5 sm:mt-1 font-medium">Multimodal AI & Security</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#244A91]/40 transition-all">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-brand-primary">PSG Tech</div>
                <div className="text-[11px] sm:text-xs text-[#4A5E82] mt-0.5 sm:mt-1 font-medium">Coimbatore, India</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Enlarged Conference Poster */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[560px] xl:max-w-[600px] rounded-3xl overflow-hidden border border-[#176BFF]/25 shadow-2xl bg-white p-2.5 sm:p-3">
              <img
                src={posterImage}
                alt="DATAINSIGHT 2027 Official Conference Poster"
                className="w-full h-auto rounded-2xl object-contain transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
