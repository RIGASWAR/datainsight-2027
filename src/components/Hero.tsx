import React from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Database,
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
            className="lg:col-span-8 flex flex-col text-left space-y-5 md:space-y-6"
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
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-brand-primary leading-none">
                  DATAINSIGHT 2027
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

            {/* Host Institution & Department Info Card (Enlarged & Prominent) */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 lg:p-6.5 rounded-2xl bg-white border border-[#176BFF]/25 shadow-md shadow-[#0B2D6B]/5 max-w-3xl hover:border-[#176BFF]/45 transition-all"
            >
              {/* Row 1: Organized by */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#176BFF]/10 border border-[#176BFF]/20 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-4 h-4 text-[#176BFF]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#176BFF] tracking-wide">
                  Organized by: Department of Information Technology
                </span>
              </div>

              {/* Row 2: Institution Name */}
              <div className="mt-2 pl-0.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2D6B] tracking-tight">
                  PSG College of Technology
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-[#176BFF]/15 my-3.5 sm:my-4" />

              {/* Row 3: Date and Location (Horizontal on desktop, stacked on mobile) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base">
                {/* Date */}
                <div className="flex items-center gap-2.5 text-[#0B2D6B] font-bold flex-shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-[#D9A441]/10 border border-[#D9A441]/25 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-[#D9A441]" />
                  </div>
                  <span className="whitespace-nowrap">December 16–18, 2027</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#1A2B4A] font-semibold flex-shrink-0 sm:flex-shrink">
                  <div className="w-7 h-7 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/25 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#00A8E8]" />
                  </div>
                  <span className="sm:whitespace-nowrap">Peelamedu Campus, 641004, Tamil Nadu, India</span>
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

          {/* Right Column: Compact Futuristic Multimodal-AI Animated Visual Component */}
          <motion.div 
            style={shouldReduceMotion ? {} : { y: graphicY }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative w-full"
          >
            
            {/* Visual Orbit Container (Occupying ~30-35% hero width) */}
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-square flex items-center justify-center">
              
              {/* Ambient Glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#176BFF]/10 via-[#00A8E8]/10 to-[#D9A441]/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Subtle Spinning Orbit Tracks */}
              <div className="absolute inset-2 rounded-full border border-[#176BFF]/20 animate-spin" style={{ animationDuration: '36s' }} />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#00A8E8]/25 animate-spin" style={{ animationDuration: '48s', animationDirection: 'reverse' }} />
              
              {/* Flow Path SVG: DATA → INTELLIGENCE → SECURITY */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                <defs>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#176BFF" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#D9A441" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                {/* Orbital connecting pathway */}
                <circle cx="160" cy="160" r="105" fill="none" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.65" />
                {/* Subtle rays to core */}
                <line x1="160" y1="55" x2="160" y2="120" stroke="#00A8E8" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
                <line x1="70" y1="225" x2="125" y2="185" stroke="#176BFF" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
                <line x1="250" y1="225" x2="195" y2="185" stroke="#D9A441" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
              </svg>

              {/* Central Intelligent Core (Compact AI Center) */}
              <div className="relative z-20 w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-white/95 backdrop-blur-md border border-[#176BFF]/30 shadow-lg shadow-[#176BFF]/15 flex flex-col items-center justify-center group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A8E8]/25 via-[#176BFF]/25 to-[#D9A441]/25 animate-pulse opacity-70" />
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#176BFF] via-[#0E58DB] to-[#0B2D6B] flex items-center justify-center text-white shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#D9A441] animate-pulse" />
                </div>
                <span className="text-[9px] font-extrabold tracking-widest text-[#0B2D6B] mt-1 uppercase">
                  CONVERGENCE
                </span>
              </div>

              {/* Node 1: DATA (Top) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-float">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#00A8E8]/40 shadow-md shadow-[#00A8E8]/10 hover:border-[#00A8E8] transition-all">
                  <div className="w-6 h-6 rounded-lg bg-[#00A8E8]/15 flex items-center justify-center text-[#00A8E8]">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-extrabold text-[#0B2D6B] leading-none">DATA</div>
                    <div className="text-[9px] font-semibold text-[#00A8E8] mt-0.5">Multimodal</div>
                  </div>
                </div>
              </div>

              {/* Node 2: INTELLIGENCE (Bottom-Left) */}
              <div className="absolute bottom-5 left-0 sm:left-1 z-30 flex flex-col items-center animate-float-reverse">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#176BFF]/40 shadow-md shadow-[#176BFF]/10 hover:border-[#176BFF] transition-all">
                  <div className="w-6 h-6 rounded-lg bg-[#176BFF]/15 flex items-center justify-center text-[#176BFF]">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-extrabold text-[#0B2D6B] leading-none">INTELLIGENCE</div>
                    <div className="text-[9px] font-semibold text-[#176BFF] mt-0.5">Applied AI/ML</div>
                  </div>
                </div>
              </div>

              {/* Node 3: SECURITY (Bottom-Right) */}
              <div className="absolute bottom-5 right-0 sm:right-1 z-30 flex flex-col items-center animate-float">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#D9A441]/45 shadow-md shadow-[#D9A441]/10 hover:border-[#D9A441] transition-all">
                  <div className="w-6 h-6 rounded-lg bg-[#D9A441]/15 flex items-center justify-center text-[#D9A441]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-extrabold text-[#0B2D6B] leading-none">SECURITY</div>
                    <div className="text-[9px] font-semibold text-[#D9A441] mt-0.5">Trust & Privacy</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Subtle Subtitle Flow Pill */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#176BFF]/20 text-[11px] font-bold text-[#0B2D6B] shadow-2xs">
              <span className="text-[#00A8E8]">DATA</span>
              <span className="text-gray-400">→</span>
              <span className="text-[#176BFF]">INTELLIGENCE</span>
              <span className="text-gray-400">→</span>
              <span className="text-[#D9A441]">SECURITY</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
