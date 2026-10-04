import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
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
        
        {/* 1. DATAINSIGHT LOGO - At top, Centered horizontally, Large */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center mb-6"
        >
          <img
            src={datainsightLogo}
            alt="DATAINSIGHT 2027 Conference Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          />
        </motion.div>

        {/* 2. ABOUT DATAINSIGHT 2027 - Section heading below logo, Centered */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
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

        {/* 3. CONFERENCE POSTER - Centered, sufficiently large and prominent, not distorted */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center w-full mb-14"
        >
          <div className="relative w-full max-w-xl md:max-w-2xl rounded-3xl overflow-hidden border border-[#176BFF]/25 shadow-2xl bg-white p-3 sm:p-4">
            <img
              src={posterImage}
              alt="DATAINSIGHT 2027 Official Conference Poster"
              className="w-full h-auto rounded-2xl object-contain transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* 4. TWO LARGE CONTENT BOXES - Equal width, equal height, same row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Box 1: Exact Content */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 md:p-9 rounded-2xl bg-white border border-[#176BFF]/20 shadow-lg shadow-[#0B2D6B]/5 flex flex-col justify-between space-y-4 h-full"
          >
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                DATAINSIGHT 2027 – International Conference on Multimodal Data Analytics, Intelligence and Security is a premier international forum organized by the Department of Information Technology, PSG College of Technology, Coimbatore, India, bringing together researchers, academicians, industry professionals, technology experts, and practitioners to explore emerging developments in data-driven intelligent systems.
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                The rapid growth of multimodal data from text, images, video, audio, sensors, IoT devices, and structured and unstructured sources, together with advances in Artificial Intelligence and large-scale computing, is transforming the way information is processed, interpreted, and used for decision-making. At the same time, ensuring the security, privacy, integrity, reliability, and trustworthiness of data and the intelligence derived from it has become increasingly important.
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                DATAINSIGHT 2027 focuses on the complete journey from multimodal data to meaningful analytics, intelligence, actionable insights, and secure digital outcomes. The conference provides a platform for presenting innovative research, exchanging ideas, discussing emerging technologies, and fostering collaboration between academia and industry.
              </p>
            </div>
          </motion.div>

          {/* Box 2: Exact Content */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 md:p-9 rounded-2xl bg-white border border-[#176BFF]/20 shadow-lg shadow-[#0B2D6B]/5 flex flex-col justify-between space-y-4 h-full"
          >
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0B2554]">
                The technical scope of the conference is organized around four interconnected themes:
              </h3>
              
              <div className="space-y-2.5 pl-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#1A2B4A]">
                    DATA – Multimodal Data Processing and Analytics
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#1A2B4A]">
                    INTELLIGENCE – Artificial Intelligence, Data Science and Knowledge Discovery
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#1A2B4A]">
                    SECURE – Cybersecurity, Privacy and Trustworthy Intelligence
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#1A2B4A]">
                    COMPUTE – Computing Architectures for Data-Driven Systems
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify pt-1">
                The conference will feature keynote addresses, technical paper presentations, invited talks, panel discussions, tutorials, project exhibitions, and an ideathon, providing opportunities for meaningful interaction among researchers, students, and industry experts.
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed text-justify">
                Through its multidisciplinary focus, DATAINSIGHT 2027 aims to advance research and collaboration at the intersection of data, analytics, artificial intelligence, security, and computing, contributing to the development of intelligent, trustworthy, and scalable digital systems for real-world applications.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 5. BOTTOM STATISTIC BOXES: Only 3 Days and 4 Tracks */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto"
        >
          <div className="p-4 sm:p-5 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#244A91]/40 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-primary">3 Days</div>
            <div className="text-xs sm:text-sm text-[#4A5E82] mt-1 font-medium">Dec 16–18, 2027</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#244A91]/40 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-primary">4 Tracks</div>
            <div className="text-xs sm:text-sm text-[#4A5E82] mt-1 font-medium">Multimodal AI & Security</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
