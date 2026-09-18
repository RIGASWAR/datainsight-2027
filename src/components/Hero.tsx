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
      className="relative min-h-[92vh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040E22] via-[#071A3D] to-[#071A3D]"
    >
      {/* Dynamic Background Network & Cyber Mesh with Subtle Parallax */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#176BFF]/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-[#19C7E8]/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? {} : { y: backgroundY }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-[#E9B949]/10 rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Conference Header & Details with Parallax & Entrance */}
          <motion.div 
            style={shouldReduceMotion ? {} : { y: contentY, opacity: contentOpacity }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            
            {/* Top Badge: ISO & Host Institution */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/15 text-[#19C7E8] border border-[#19C7E8]/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E9B949]" />
                INTERNATIONAL CONFERENCE
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 text-[#C5D4EE] border border-white/10">
                <FileCheck className="w-3 h-3 text-[#19C7E8]" />
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
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                  DATAINSIGHT <span className="text-[#E9B949] drop-shadow-[0_0_20px_rgba(233,185,73,0.3)]">2027</span>
                </h1>
              </div>
              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19C7E8] via-[#F7FAFF] to-[#176BFF] leading-snug">
                {CONFERENCE_DATA.fullTitle}
              </h2>
            </motion.div>

            {/* Official Tagline */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-4 border-l-2 border-[#E9B949] py-1"
            >
              <p className="text-sm sm:text-base lg:text-lg italic font-medium text-[#F7FAFF]/90">
                {CONFERENCE_DATA.tagline}
              </p>
            </motion.div>

            {/* Host Institution & Department Info */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-[#0B2859]/50 border border-[#19C7E8]/20 backdrop-blur-sm shadow-inner space-y-2 max-w-xl hover:border-[#19C7E8]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#19C7E8]">
                <Cpu className="w-4 h-4 text-[#19C7E8]" />
                <span>Organized by: {CONFERENCE_DATA.institution.department}</span>
              </div>
              <div className="text-xs sm:text-sm text-[#C5D4EE] font-medium">
                {CONFERENCE_DATA.institution.name}
              </div>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-2 text-xs text-[#8EA7CE] border-t border-white/10">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#E9B949]" />
                  <span>{CONFERENCE_DATA.datesDisplay}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#19C7E8]" />
                  <span>{CONFERENCE_DATA.institution.city}</span>
                </div>
              </div>
            </motion.div>

            {/* Primary & Secondary Action CTAs */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={() => onActionClick('submit')}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#176BFF] to-[#19C7E8] text-white shadow-lg shadow-[#176BFF]/30 hover:shadow-[#19C7E8]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>SUBMIT PAPER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onActionClick('register')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0B2859]/80 hover:bg-[#0B2859] text-[#E9B949] border border-[#E9B949]/50 hover:border-[#E9B949] shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>REGISTER</span>
              </button>

              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#C5D4EE] hover:text-white hover:bg-white/5 transition-all"
              >
                <span>EXPLORE CONFERENCE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#19C7E8] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Key Theme Badges */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-[#8EA7CE]"
            >
              <span className="font-semibold text-white/70">Key Focus:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#C5D4EE]">Multimodal AI</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#C5D4EE]">Computer Vision</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#C5D4EE]">Speech & NLP</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#C5D4EE]">Cybersecurity</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#C5D4EE]">Trustworthy Systems</span>
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
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Spinning background halo */}
              <div className="absolute inset-0 rounded-full border border-[#19C7E8]/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#176BFF]/30 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
              
              {/* Central Core Card */}
              <div className="relative z-20 w-64 sm:w-72 p-6 rounded-2xl glass-card border border-[#19C7E8]/30 shadow-2xl flex flex-col items-center text-center space-y-4">
                
                {/* Visual Neural Shield Icon */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#176BFF] via-[#0B2859] to-[#071A3D] border border-[#19C7E8] flex items-center justify-center shadow-lg shadow-[#19C7E8]/20">
                  <div className="absolute inset-0 rounded-2xl bg-[#19C7E8]/10 animate-ping opacity-25" />
                  <ShieldCheck className="w-10 h-10 text-[#19C7E8]" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9B949] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E9B949]"></span>
                  </span>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-[#19C7E8] font-bold">Multimodal Convergence</div>
                  <div className="text-lg font-extrabold text-white mt-0.5">DATA &bull; AI &bull; SECURITY</div>
                  <p className="text-[11px] text-[#C5D4EE] mt-1 line-clamp-2">
                    Harmonizing vision, audio, text, sensors & cryptographic security into unified insights.
                  </p>
                </div>

                {/* Micro Signal Meters */}
                <div className="w-full grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[10px]">
                  <div className="p-1.5 rounded bg-black/30 border border-white/5 flex flex-col items-center">
                    <span className="text-[#19C7E8] font-bold">8 Tracks</span>
                    <span className="text-[#8EA7CE]">Specialized</span>
                  </div>
                  <div className="p-1.5 rounded bg-black/30 border border-white/5 flex flex-col items-center">
                    <span className="text-[#E9B949] font-bold">3 Days</span>
                    <span className="text-[#8EA7CE]">Dec 16-18</span>
                  </div>
                  <div className="p-1.5 rounded bg-black/30 border border-white/5 flex flex-col items-center">
                    <span className="text-[#176BFF] font-bold">Global</span>
                    <span className="text-[#8EA7CE]">Exchange</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Nodes */}
              {/* Top Node: Vision & Image */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-xl glass-card border border-[#19C7E8]/40 shadow-lg flex items-center gap-2 animate-float">
                <div className="w-6 h-6 rounded-lg bg-[#19C7E8]/20 flex items-center justify-center text-[#19C7E8]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white">Computer Vision</div>
                  <div className="text-[9px] text-[#8EA7CE]">Object & Video Analysis</div>
                </div>
              </div>

              {/* Right Node: Cybersecurity & Cryptography */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-30 px-3 py-1.5 rounded-xl glass-card border border-[#176BFF]/50 shadow-lg flex items-center gap-2 animate-float-reverse">
                <div className="w-6 h-6 rounded-lg bg-[#176BFF]/20 flex items-center justify-center text-[#176BFF]">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white">Cybersecurity</div>
                  <div className="text-[9px] text-[#8EA7CE]">Zero-Trust & Biometrics</div>
                </div>
              </div>

              {/* Bottom Node: Speech & Language Processing */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-xl glass-card border border-[#E9B949]/40 shadow-lg flex items-center gap-2 animate-float">
                <div className="w-6 h-6 rounded-lg bg-[#E9B949]/20 flex items-center justify-center text-[#E9B949]">
                  <Radio className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white">Speech & NLP</div>
                  <div className="text-[9px] text-[#8EA7CE]">Cross-Modal Mining</div>
                </div>
              </div>

              {/* Left Node: Sensor & IoT Streams */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-30 px-3 py-1.5 rounded-xl glass-card border border-[#19C7E8]/40 shadow-lg flex items-center gap-2 animate-float-reverse">
                <div className="w-6 h-6 rounded-lg bg-[#19C7E8]/20 flex items-center justify-center text-[#19C7E8]">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white">IoT & Sensors</div>
                  <div className="text-[9px] text-[#8EA7CE]">Edge Intelligence</div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
