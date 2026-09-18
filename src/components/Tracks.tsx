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
    <section id="tracks" className="py-20 md:py-28 relative bg-[#071A3D] overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#19C7E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/15 text-[#19C7E8] border border-[#19C7E8]/30 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#E9B949]" />
            TECHNICAL AREAS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONFERENCE <span className="gradient-text-cyan-blue">TRACKS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#19C7E8] via-[#176BFF] to-[#E9B949] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
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
                className={`rounded-2xl glass-card transition-all duration-300 border ${
                  isExpanded
                    ? 'border-[#19C7E8] bg-[#0B2859]/90 shadow-xl shadow-[#176BFF]/15'
                    : 'border-[#19C7E8]/20 hover:border-[#19C7E8]/50 hover:bg-[#0B2859]/50 hover:-translate-y-1'
                }`}
              >
                {/* Header (Click to toggle) */}
                <button
                  type="button"
                  onClick={() => toggleTrack(track.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    {/* Track Icon */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md ${
                        isExpanded
                          ? 'bg-gradient-to-br from-[#176BFF] to-[#19C7E8] text-white shadow-[#19C7E8]/30 scale-105'
                          : 'bg-[#0B2859] border border-[#19C7E8]/30 text-[#19C7E8] group-hover:scale-105'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Track Title & Meta */}
                    <div>
                      <span className="text-[11px] font-black tracking-widest text-[#E9B949] uppercase font-mono">
                        {track.trackNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug group-hover:text-[#19C7E8] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs text-[#C5D4EE] mt-1.5 line-clamp-2">
                        {track.overview}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="p-1.5 rounded-lg bg-white/5 text-[#8EA7CE] flex-shrink-0 group-hover:text-white transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#19C7E8]" />
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
                      <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4">
                        <div className="p-4 rounded-xl bg-[#071A3D]/70 border border-[#19C7E8]/20 space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold text-[#19C7E8] uppercase tracking-wider">
                            <span>Topics & Sub-themes:</span>
                            <span className="text-[#E9B949] text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-[#E9B949]/30">
                              {track.topics}
                            </span>
                          </div>
                          <p className="text-xs text-[#8EA7CE] leading-relaxed">
                            Detailed call-for-paper topics for {track.title} will be finalized in the formal conference call.
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#8EA7CE]">
                          <span>Scope: Full Research, Short Papers & Posters</span>
                          <span className="text-white font-medium">Peer-Reviewed Track</span>
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
