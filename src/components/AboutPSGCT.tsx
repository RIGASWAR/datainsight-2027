import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  BookOpen, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';
import psgLogo from '../assets/psg_logo.png';

export const AboutPSGCT: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const institutionalPillars = [
    {
      title: 'Visionary Legacy',
      desc: "Founded in 1951 by PSG & Sons' Charities Trust with a mission to deliver world-class engineering education and community upliftment.",
      icon: Calendar,
    },
    {
      title: 'Academic Stature',
      desc: "Autonomous institution affiliated with Anna University, accredited with 'A+' Grade by NAAC and ISO 9001:2015 certified.",
      icon: Award,
    },
    {
      title: 'Department of IT',
      desc: 'Established in 1999, spearheading advanced research in multimodal analytics, machine intelligence, and high-assurance cybersecurity.',
      icon: BookOpen,
    },
    {
      title: 'Global Research Culture',
      desc: 'Celebrated for close industry-academia linkage, Centers of Excellence, and high-impact societal innovations.',
      icon: GraduationCap,
    },
  ];

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

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Institutional Showcase Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#06142E] via-[#0B2554] to-[#123673] text-white shadow-2xl border border-white/15 overflow-hidden">
              {/* Background emblem glow */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#00A8E8]/15 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Header with Emblem */}
              <div className="flex items-center gap-5 pb-6 border-b border-white/15">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg flex-shrink-0">
                  <img
                    src={psgLogo}
                    alt="PSG College of Technology official crest"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#D9A353] text-[#071329] uppercase tracking-wider mb-1.5">
                    Est. 1951
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    PSG TECH
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5C2F4] font-medium mt-0.5">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Badges / Highlights */}
              <div className="space-y-3.5 py-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D9A353] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/95">
                    NAAC A+ Accredited Institution
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/95">
                    ISO 9001:2015 Certified
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#D9A353] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/95">
                    Affiliated to Anna University, Chennai
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/95">
                    Avinashi Road, Peelamedu, Coimbatore - 641004
                  </span>
                </div>
              </div>

              {/* 4 Quick Stat Tiles */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/15">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#D9A353]">75+</div>
                  <div className="text-[11px] font-semibold text-white/80 uppercase tracking-wider mt-0.5">Years Legacy</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#00A8E8]">A+</div>
                  <div className="text-[11px] font-semibold text-white/80 uppercase tracking-wider mt-0.5">NAAC Grade</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Institutional Description & Expandable Content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Primary Narrative */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F9FF] border border-[#244A91]/15 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#244A91] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#D9A353]" />
                <span>Pioneering Engineering & Research Stature</span>
              </div>
              <p className="text-base sm:text-lg text-[#1A2B4A] leading-relaxed text-justify">
                {CONFERENCE_DATA.aboutPSGCT.description}
              </p>
            </div>

            {/* Department of Information Technology Feature Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#244A91]/20 shadow-md space-y-2.5 border-l-4 border-l-[#244A91]">
              <div className="text-xs sm:text-sm font-bold text-[#D9A353] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#244A91]" />
                <span>Organizing Department</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#0B2554]">
                Department of Information Technology
              </h4>
              <p className="text-sm sm:text-base text-[#4A5E82] leading-relaxed">
                {CONFERENCE_DATA.aboutPSGCT.departmentIT}
              </p>
            </div>

            {/* Expandable "See More" Institutional Details */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#244A91] bg-[#244A91]/10 hover:bg-[#244A91]/15 border border-[#244A91]/25 transition-all cursor-pointer"
                aria-expanded={showMore}
              >
                <span>{showMore ? 'Show Less' : 'See More Institutional Highlights'}</span>
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {institutionalPillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                          <div
                            key={pillar.title}
                            className="p-4 rounded-xl bg-white border border-[#244A91]/15 shadow-xs hover:border-[#244A91]/40 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 mb-1.5">
                              <div className="w-7 h-7 rounded-lg bg-[#244A91]/10 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-[#244A91]" />
                              </div>
                              <h5 className="text-sm font-bold text-[#0B2554]">{pillar.title}</h5>
                            </div>
                            <p className="text-xs sm:text-sm text-[#4A5E82] leading-relaxed">
                              {pillar.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
