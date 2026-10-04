import React from 'react';
import { Building2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';
import collegeImage from '../assets/college.png';
import eblockImage from '../assets/eblock.png';

export const AboutPSGCT: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-psgct" className="py-20 md:py-28 relative bg-gradient-to-b from-white via-[#F7FAFF] to-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#244A91]/10 text-[#244A91] border border-[#244A91]/20 mb-3 shadow-xs">
            <Building2 className="w-4 h-4 text-[#D9A353]" />
            HOST INSTITUTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            ABOUT PSGCT
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#244A91] via-[#00A8E8] to-[#D9A353] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            A pioneering autonomous institution renowned globally for engineering education, industry integration, and innovative research excellence.
          </p>
        </motion.div>

        {/* Two-Row Grid Layout: 
            Row 1: Left College Image, Right Pioneering Engineering & Research Stature
            Row 2: Left E-block Image, Right Department of Information Technology
        */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: College Image */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[250px] sm:min-h-[280px] rounded-3xl overflow-hidden border border-[#244A91]/20 shadow-xl bg-white p-2 flex items-center justify-center">
                <img
                  src={collegeImage}
                  alt="PSG College of Technology Campus"
                  className="w-full h-full max-h-[300px] rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Right: Pioneering Engineering & Research Stature Box */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F9FF] border border-[#244A91]/15 shadow-sm space-y-3.5 h-full flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2554] tracking-tight">
                  Pioneering Engineering & Research Stature
                </h3>
                <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                  {CONFERENCE_DATA.aboutPSGCT.description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: E-block Image */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[250px] sm:min-h-[280px] rounded-3xl overflow-hidden border border-[#244A91]/20 shadow-xl bg-white p-2 flex items-center justify-center">
                <img
                  src={eblockImage}
                  alt="PSG College of Technology E-Block"
                  className="w-full h-full max-h-[300px] rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Right: Department of Information Technology Box */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#244A91]/20 shadow-md space-y-3 border-l-4 border-l-[#244A91] h-full flex flex-col justify-center">
                <div className="text-xs sm:text-sm font-bold text-[#D9A353] uppercase tracking-wider">
                  Organizing Department
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0B2554]">
                  Department of Information Technology
                </h4>
                <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                  {CONFERENCE_DATA.aboutPSGCT.departmentIT}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
