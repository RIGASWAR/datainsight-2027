import React, { useState, useEffect, useRef } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  User, 
  MessageSquareQuote, 
  Globe 
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const ExpertOpinions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isHovered = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const opinions = CONFERENCE_DATA.expertOpinions;
  const total = opinions.length;

  // Auto-play carousel every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prev) => (prev + 1) % total);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentOpinion = opinions[currentIndex];

  // Slide variants: current slides towards the LEFT, next enters from the RIGHT
  const slideVariants = {
    enter: {
      x: shouldReduceMotion ? 0 : 250,
      opacity: 0,
      scale: 0.98,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
      },
    },
    exit: {
      x: shouldReduceMotion ? 0 : -250,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
      },
    },
  };

  return (
    <section id="expert-opinions" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-sm">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#D9A441]" />
            PERSPECTIVES & ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            EXPERT OPINIONS ON DATAINSIGHT 2027
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Insights and perspectives from leading academic and industry researchers on the future of multimodal data and intelligence.
          </p>
        </motion.div>

        {/* Carousel Container (with hover pause) */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
        >
          {/* Card Presentation Area */}
          <div className="min-h-[380px] sm:min-h-[340px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white rounded-3xl border-2 border-[#176BFF]/20 p-7 sm:p-10 shadow-xl relative overflow-hidden"
              >
                {/* Big decorative quote mark in background */}
                <div className="absolute top-4 right-6 text-[#176BFF]/10 pointer-events-none">
                  <Quote className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                  {/* Expert Avatar / Image Area */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#176BFF] to-[#00A8E8] p-1 shadow-lg shadow-[#176BFF]/20">
                      <div className="w-full h-full rounded-[14px] bg-[#F5F9FF] border border-white flex flex-col items-center justify-center text-[#174EA6] p-2">
                        <User className="w-9 h-9 text-[#176BFF]/70 mb-1" />
                        <span className="text-[10px] font-mono font-bold text-[#D9A441] uppercase tracking-wider">
                          PHOTO
                        </span>
                        <span className="text-[9px] text-[#1A2B4A]/60">
                          {currentOpinion.image}
                        </span>
                      </div>
                    </div>
                    <span className="inline-block mt-2 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#176BFF]/10 text-[#174EA6]">
                      EXPERT 0{currentIndex + 1}
                    </span>
                  </div>

                  {/* Expert Information & Quote */}
                  <div className="flex-1 text-center sm:text-left space-y-4">
                    {/* 2-3 Line Academic Quote */}
                    <div className="relative">
                      <p className="text-base sm:text-lg italic text-[#1A2B4A] font-medium leading-relaxed">
                        "{currentOpinion.quote}: Expert commentary and visionary perspective on the impact of multimodal data intelligence and trustworthy systems for DATAINSIGHT 2027."
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="pt-2 border-t border-[#176BFF]/15 space-y-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h4 className="text-lg font-bold text-[#0B2D6B]">
                          {currentOpinion.name}
                        </h4>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30">
                          TO BE INCLUDED
                        </span>
                      </div>
                      
                      <p className="text-sm font-semibold text-[#176BFF]">
                        {currentOpinion.designation}
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-[#1A2B4A]/70 pt-0.5">
                        <span>{currentOpinion.institution}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 font-medium text-[#1A2B4A]/80">
                          <Globe className="w-3 h-3 text-[#176BFF]" />
                          {currentOpinion.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls & Pagination Dots */}
          <div className="mt-8 flex items-center justify-between px-2">
            
            {/* Left/Right Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-[#176BFF]/20 text-[#0B2D6B] hover:text-[#176BFF] hover:border-[#176BFF] shadow-sm hover:shadow flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous expert opinion"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-[#176BFF]/20 text-[#0B2D6B] hover:text-[#176BFF] hover:border-[#176BFF] shadow-sm hover:shadow flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next expert opinion"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-[#F5F9FF] border border-[#176BFF]/15 text-[#174EA6] hover:text-[#0B2D6B] flex items-center justify-center transition-colors ml-1 cursor-pointer text-xs"
                title={isPlaying ? 'Pause auto-sliding' : 'Play auto-sliding'}
                aria-label={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            </div>

            {/* Pagination Indicators (1 to 5) */}
            <div className="flex items-center gap-2">
              {opinions.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-7 h-2.5 bg-gradient-to-r from-[#176BFF] to-[#00A8E8]' 
                      : 'w-2.5 h-2.5 bg-[#176BFF]/25 hover:bg-[#176BFF]/50'
                  }`}
                  aria-label={`Go to opinion ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Index Counter */}
            <div className="text-xs font-mono font-bold text-[#1A2B4A]/60">
              0{currentIndex + 1} / 0{total}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
