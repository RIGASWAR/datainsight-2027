import React, { useState } from 'react';
import { 
  Network, 
  TrendingUp, 
  Sparkles, 
  Boxes, 
  Shield, 
  ShieldCheck, 
  Server, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Layers
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Tracks: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<string | null>('track-01');
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ElementType> = {
    Network,
    TrendingUp,
    Sparkles,
    Boxes,
    Shield,
    ShieldCheck,
    Server,
    Zap,
  };

  const toggleTrack = (id: string) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  return (
    <section id="tracks" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-80 h-80 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />

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
            TECHNICAL AREAS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONFERENCE <span className="gradient-text-cyan-blue">TRACKS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Eight specialized technical tracks covering contemporary challenges in multimodal analytics, intelligent systems, and trustworthy computing.
          </p>
        </motion.div>

        {/* 8 Tracks Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {CONFERENCE_DATA.tracks.map((track, index) => {
            const IconComponent = iconMap[track.iconName] || Network;
            const isExpanded = expandedTrack === track.id;

            return (
              <motion.div
                key={track.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 4) * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded
                    ? 'border-[#176BFF] bg-white shadow-xl shadow-[#176BFF]/10 ring-1 ring-[#176BFF]/20'
                    : 'border-[#176BFF]/15 bg-white shadow-sm hover:border-[#176BFF]/40 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Header (Click to toggle) */}
                <button
                  type="button"
                  onClick={() => toggleTrack(track.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    {/* Track Icon */}
                    <div 
                      className={`w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm ${
                        isExpanded
                          ? 'bg-gradient-to-br from-[#176BFF] to-[#00A8E8] text-white shadow-[#176BFF]/30 scale-105'
                          : 'bg-[#F5F9FF] border border-[#176BFF]/20 text-[#176BFF] group-hover:scale-105 group-hover:text-[#174EA6]'
                      }`}
                    >
                      <IconComponent className="w-6.5 h-6.5" />
                    </div>

                    {/* Track Title & Meta */}
                    <div>
                      <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase font-mono">
                        {track.trackNumber}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B] mt-0.5 leading-snug group-hover:text-[#176BFF] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#1A2B4A]/85 mt-2 line-clamp-2 leading-relaxed">
                        {track.overview}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="p-2 rounded-lg bg-[#F5F9FF] text-[#174EA6] border border-[#176BFF]/15 flex-shrink-0 group-hover:text-[#176BFF] transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#176BFF]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expandable Content Area with Smooth Framer Motion Animation */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#176BFF]/10 space-y-4">
                        <div className="p-4.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2.5">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-[#174EA6] uppercase tracking-wider">
                            <span>Topics & Sub-themes:</span>
                            <span className="text-[#D9A441] text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-[#D9A441]/30">
                              {track.topics}
                            </span>
                          </div>
                          <p className="text-sm text-[#1A2B4A]/85 leading-relaxed">
                            Detailed call-for-paper topics for {track.title} will be finalized in the formal conference call.
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs sm:text-sm text-[#1A2B4A]/75">
                          <span>Scope: Full Research, Short Papers & Posters</span>
                          <span className="text-[#0B2D6B] font-semibold">Peer-Reviewed Track</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
