import React, { useState } from 'react';
import { 
  Network, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  Layers, 
  RotateCw, 
  ArrowRight,
  Info
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Tracks: React.FC = () => {
  // Store flipped state per track id
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ElementType> = {
    Network,
    Sparkles,
    ShieldCheck,
    Server,
  };

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip(id);
    }
  };

  return (
    <section id="tracks" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F5F9FF] via-[#EBF3FF]/60 to-[#F5F9FF] overflow-hidden">
      <div id="theme" className="sr-only" />
      {/* Ambience background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-[#176BFF]/10 rounded-full blur-[120px] pointer-events-none" />

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
            <Layers className="w-3.5 h-3.5 text-[#D9A441]" />
            CONFERENCE PROGRAM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONFERENCE TRACKS AND TOPICS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            DATAINSIGHT 2027 features exactly four official technical tracks. Click or tap any card to view detailed track topics and sub-themes.
          </p>
        </motion.div>

        {/* Exactly 4 Tracks Grid - 2 Cards Per Row on Desktop / Tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 max-w-5xl mx-auto">
          {CONFERENCE_DATA.tracks.map((track, index) => {
            const IconComponent = iconMap[track.iconName] || Network;
            const isFlipped = !!flippedCards[track.id];

            return (
              <motion.div
                key={track.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="[perspective:1200px] h-[520px] sm:h-[540px] md:h-[560px] w-full"
              >
                {/* 3D Rotating Card Container */}
                <motion.div
                  className="w-full h-full relative cursor-pointer select-none rounded-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0.1 : 0.65, 
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  onClick={() => toggleFlip(track.id)}
                  onKeyDown={(e) => handleKeyDown(e, track.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${track.trackNumber}: ${track.title}. Click to ${isFlipped ? 'flip back' : 'view topics'}.`}
                >
                  {/* FRONT SIDE - DATAINSIGHT Blue Theme */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#0B2D6B] via-[#0D3B82] to-[#174EA6] text-white border border-[#00A8E8]/35 shadow-xl hover:shadow-2xl hover:border-[#00A8E8]/60 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="flex-1 flex flex-col min-h-0 space-y-4">
                      {/* Top Bar: Track Badge & Icon */}
                      <div className="flex items-center justify-between gap-3 shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black tracking-wider text-[#D9A441] bg-[#D9A441]/15 border border-[#D9A441]/30 font-mono whitespace-nowrap">
                          {track.trackNumber}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-white/10 text-cyan-200 border border-white/20 flex items-center justify-center shadow-md shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Hierarchy: TRACK TITLE -> TRACK NAME -> TRACK FOCUS */}
                      <div className="shrink-0 space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                          {track.title}
                        </h3>
                        <p className="text-sm sm:text-base font-bold text-cyan-300 uppercase font-mono tracking-wide">
                          TRACK NAME: {track.shortName}
                        </p>
                      </div>

                      {/* DATAINSIGHT Visual Accent */}
                      <div className="w-12 h-1 bg-gradient-to-r from-[#00A8E8] to-[#D9A441] rounded-full shrink-0" />

                      {/* Track Focus */}
                      <div className="space-y-1.5">
                        <span className="text-sm font-bold text-[#D9A441] uppercase tracking-wider block">
                          FOCUS
                        </span>
                        <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed">
                          {track.focus || track.overview}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Prompt: Click to view topics */}
                    <div className="pt-3.5 mt-2 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-semibold text-cyan-200 shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#D9A441]" />
                        Click to view topics
                      </span>
                      <span className="p-1.5 rounded-lg bg-white/10 text-white group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* BACK SIDE - White Background */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl bg-white text-[#1A2B4A] border border-[#176BFF]/25 shadow-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex-1 flex flex-col min-h-0 space-y-3">
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-3 shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#174EA6] bg-[#176BFF]/10 border border-[#176BFF]/25 font-mono whitespace-nowrap">
                          {track.trackNumber} TOPICS
                        </span>
                        <span className="text-xs text-[#4A5E82] font-semibold">DATAINSIGHT 2027</span>
                      </div>

                      {/* Track Title */}
                      <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B] leading-snug shrink-0">
                        {track.title}
                      </h4>

                      {/* Topics Covered & Core Question Area with Internal Scroll */}
                      <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F4F8FF] border border-[#176BFF]/15">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#174EA6] pb-1.5 border-b border-[#176BFF]/15 mb-2.5">
                            TRACK TOPICS
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-[#1A2B4A]">
                            {track.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#176BFF] mt-1.5 shrink-0" />
                                <span className="leading-snug">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Core Question - Clearly Separated */}
                        <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-[#D9A441]/30 shadow-xs space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441] block">
                            Core Question:
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-[#0B2D6B] italic leading-relaxed">
                            "{track.coreQuestion}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Prompt: Click to flip back / Return control */}
                    <div className="pt-3.5 mt-2 border-t border-[#176BFF]/15 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#176BFF] shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <RotateCw className="w-4 h-4 text-[#D9A441]" />
                        Click to flip back
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-[#176BFF]/10 text-[#176BFF] font-bold">
                        Return
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
