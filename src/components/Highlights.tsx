import React from 'react';
import { Sparkles, Globe, Bot, BarChart3, Lock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Highlights: React.FC = () => {
  const fallbackIcons = [Globe, Bot, BarChart3, Lock];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="highlights" className="py-20 md:py-24 relative bg-[#040E22]/60 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-[#E9B949]" />
            KEY PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONFERENCE <span className="gradient-text-gold">HIGHLIGHTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E9B949] via-[#19C7E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
            Fostering research excellence, cross-domain fusion, and secure innovations across four foundational pillars.
          </p>
        </motion.div>

        {/* 4 Premium Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CONFERENCE_DATA.highlights.map((card, index) => {
            const FallbackIcon = fallbackIcons[index % fallbackIcons.length];

            return (
              <motion.div
                key={card.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.65, 
                  delay: index * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative p-7 rounded-2xl glass-card border border-[#19C7E8]/20 transition-all duration-300 hover:-translate-y-2 hover:border-[#19C7E8]/60 hover:shadow-2xl hover:shadow-[#176BFF]/20 flex flex-col justify-between cursor-default"
              >
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#19C7E8]/5 via-transparent to-[#176BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Icon Area with Google Noto Emoji and Fallback Lucide Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2859] to-[#071A3D] border border-[#19C7E8]/30 flex items-center justify-center p-2 mb-6 group-hover:scale-105 group-hover:border-[#19C7E8] transition-all duration-300 shadow-md">
                    <img
                      src={card.emojiUrl}
                      alt={card.title}
                      className="w-10 h-10 object-contain drop-shadow group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextEl) nextEl.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-10 h-10 items-center justify-center text-[#19C7E8]">
                      <FallbackIcon className="w-8 h-8" />
                    </div>
                    
                    {/* Badge number */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#176BFF] text-white text-[11px] font-bold flex items-center justify-center border border-white/20 shadow">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#19C7E8] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#C5D4EE] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom accent indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8EA7CE]">
                  <span className="font-medium">Core Dimension</span>
                  <span className="text-[#E9B949] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
