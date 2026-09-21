import React from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Layers, 
  Lock, 
  Database,
  Radio,
  FileCheck
} from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface HeroProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick, onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0.6]);
  const graphicY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] lg:min-h-[88vh] pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FBFF] to-[#F0F6FF]"
    >
      {/* Dynamic Background Network & Cyber Mesh with Subtle Parallax */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-[#D9A441]/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Conference Header & Details with Parallax & Entrance */}
          <motion.div 
            style={shouldReduceMotion ? {} : { y: contentY, opacity: contentOpacity }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left space-y-5 md:space-y-6"
          >
            
            {/* Top Badge: ISO & Host Institution */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/25 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                INTERNATIONAL CONFERENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white text-[#4A5E82] border border-[#176BFF]/15 shadow-xs">
                <FileCheck className="w-3.5 h-3.5 text-[#00A8E8]" />
                ISO 9001:2015 Certified
              </span>
            </motion.div>

            {/* Main Title & Acronym */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-[#0B2D6B] leading-none">
                  DATAINSIGHT <span className="text-[#176BFF] drop-shadow-[0_4px_12px_rgba(23,107,255,0.2)]">2027</span>
                </h1>
              </div>
              <h2 className="mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] font-bold text-[#174EA6] leading-snug tracking-tight">
                {CONFERENCE_DATA.fullTitle}
              </h2>
            </motion.div>

            {/* Official Tagline */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-4 border-l-4 border-[#D9A441] py-1"
            >
              <p className="text-sm sm:text-base lg:text-lg italic font-medium text-[#1A2B4A] leading-relaxed">
                "{CONFERENCE_DATA.tagline.replace(/^"|"$/g, '')}"
              </p>
            </motion.div>

            {/* Host Institution & Department Info Card (Optimized) */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm shadow-[#0B2D6B]/5 space-y-2 max-w-xl hover:border-[#176BFF]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#176BFF]">
                <Cpu className="w-4 h-4 text-[#176BFF] flex-shrink-0" />
                <span>Organized by: {CONFERENCE_DATA.institution.department}</span>
              </div>
              <div className="text-xs sm:text-sm text-[#1A2B4A] font-semibold pl-0.5">
                {CONFERENCE_DATA.institution.name}
              </div>
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 pt-2 text-xs text-[#4A5E82] border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-[#0B2D6B] font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>{CONFERENCE_DATA.datesDisplay}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#00A8E8]" />
                  <span>{CONFERENCE_DATA.institution.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Primary & Secondary Action CTAs */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => onActionClick('submit')}
                className="group relative inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#176BFF] hover:bg-[#0A55E0] text-white shadow-md shadow-[#176BFF]/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>SUBMIT PAPER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onActionClick('register')}
                className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-[#F5F9FF] text-[#176BFF] border border-[#176BFF] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>REGISTER</span>
              </button>

              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-1 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#4A5E82] hover:text-[#176BFF] hover:bg-[#F5F9FF] transition-all cursor-pointer"
              >
                <span>EXPLORE CONFERENCE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00A8E8] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Key Theme Badges */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#4A5E82]"
            >
              <span className="font-semibold text-[#0B2D6B]">Key Focus:</span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-[#176BFF]/15 text-[#1A2B4A] font-medium shadow-xs">Multimodal AI</span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-[#176BFF]/15 text-[#1A2B4A] font-medium shadow-xs">Computer Vision</span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-[#176BFF]/15 text-[#1A2B4A] font-medium shadow-xs">Speech & NLP</span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-[#176BFF]/15 text-[#1A2B4A] font-medium shadow-xs">Cybersecurity</span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-[#176BFF]/15 text-[#1A2B4A] font-medium shadow-xs">Trustworthy Systems</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive Multimodal AI & Cyber Graphic with Parallax */}
          <motion.div 
            style={shouldReduceMotion ? {} : { y: graphicY }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            
            {/* Outer Decorative Orbit Ring */}
            <div className="relative w-full max-w-[490px] xl:max-w-[520px] aspect-square flex items-center justify-center">
              
              {/* Spinning background halo */}
              <div className="absolute inset-0 rounded-full border border-[#00A8E8]/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#176BFF]/25 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
              
              {/* Central Core Card */}
              <div className="relative z-20 w-64 sm:w-72 p-5 sm:p-6 rounded-2xl glass-card border border-[#176BFF]/20 shadow-xl flex flex-col items-center text-center space-y-3.5">
                
                {/* Visual Neural Shield Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#176BFF] via-[#0E58DB] to-[#0B2D6B] border border-[#00A8E8] flex items-center justify-center shadow-md shadow-[#176BFF]/20">
                  <div className="absolute inset-0 rounded-2xl bg-[#00A8E8]/15 animate-ping opacity-25" />
                  <ShieldCheck className="w-8 h-8 text-white" />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A441] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9A441]"></span>
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm uppercase tracking-widest text-[#00A8E8] font-bold">Multimodal Convergence</div>
                  <div className="text-xl font-extrabold text-[#0B2D6B] mt-0.5">DATA &bull; AI &bull; SECURITY</div>
                  <p className="text-xs sm:text-sm text-[#4A5E82] mt-1.5 leading-relaxed line-clamp-2">
                    Harmonizing vision, audio, text, sensors & cryptographic security into unified insights.
                  </p>
                </div>

                {/* Micro Signal Meters */}
                <div className="w-full grid grid-cols-3 gap-2 pt-2.5 border-t border-gray-100 text-xs">
                  <div className="p-2 rounded bg-[#F5F9FF] border border-[#176BFF]/15 flex flex-col items-center">
                    <span className="text-[#0B2D6B] font-bold">8 Tracks</span>
                    <span className="text-[#4A5E82] text-[11px]">Specialized</span>
                  </div>
                  <div className="p-2 rounded bg-[#F5F9FF] border border-[#176BFF]/15 flex flex-col items-center">
                    <span className="text-[#D9A441] font-bold">3 Days</span>
                    <span className="text-[#4A5E82] text-[11px]">Dec 16-18</span>
                  </div>
                  <div className="p-2 rounded bg-[#F5F9FF] border border-[#176BFF]/15 flex flex-col items-center">
                    <span className="text-[#176BFF] font-bold">Global</span>
                    <span className="text-[#4A5E82] text-[11px]">Exchange</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Nodes */}
              {/* Top Node: Vision & Image */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-3.5 py-2 rounded-xl glass-card border border-[#176BFF]/25 shadow-md flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-[#00A8E8]/15 flex items-center justify-center text-[#00A8E8]">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#0B2D6B]">Computer Vision</div>
                  <div className="text-[10px] text-[#4A5E82]">Object & Video Analysis</div>
                </div>
              </div>

              {/* Right Node: Cybersecurity & Cryptography */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-30 px-3.5 py-2 rounded-xl glass-card border border-[#176BFF]/25 shadow-md flex items-center gap-2.5 animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-[#176BFF]/15 flex items-center justify-center text-[#176BFF]">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#0B2D6B]">Cybersecurity</div>
                  <div className="text-[10px] text-[#4A5E82]">Zero-Trust & Biometrics</div>
                </div>
              </div>

              {/* Bottom Node: Speech & Language Processing */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-3.5 py-2 rounded-xl glass-card border border-[#D9A441]/35 shadow-md flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-[#D9A441]/15 flex items-center justify-center text-[#D9A441]">
                  <Radio className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#0B2D6B]">Speech & NLP</div>
                  <div className="text-[10px] text-[#4A5E82]">Cross-Modal Mining</div>
                </div>
              </div>

              {/* Left Node: Sensor & IoT Streams */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-30 px-3.5 py-2 rounded-xl glass-card border border-[#176BFF]/25 shadow-md flex items-center gap-2.5 animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-[#00A8E8]/15 flex items-center justify-center text-[#00A8E8]">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#0B2D6B]">IoT & Sensors</div>
                  <div className="text-[10px] text-[#4A5E82]">Edge Intelligence</div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
