import React from 'react';
import { 
  Layers, 
  Cpu, 
  ShieldAlert, 
  Eye, 
  ArrowDown, 
  Database, 
  Brain, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Theme: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Cpu,
    ShieldAlert,
    Eye,
  };

  return (
    <section id="themes" className="py-20 md:py-28 relative bg-[#071A3D] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#19C7E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            OFFICIAL POSTER THEMES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONFERENCE <span className="gradient-text-cyan-blue">THEMES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#19C7E8] via-[#176BFF] to-[#E9B949] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
            Interdisciplinary convergence across four core domains advancing intelligent and secure insights.
          </p>
        </motion.div>

        {/* 4 Theme Cards Grid with Sequential Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CONFERENCE_DATA.themes.map((theme, index) => {
            const IconComponent = iconMap[theme.iconName] || Layers;

            return (
              <motion.div
                key={theme.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.65, 
                  delay: index * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="p-6 sm:p-7 rounded-2xl glass-card border border-[#19C7E8]/20 hover:border-[#19C7E8]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#E9B949] font-mono">
                      {theme.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#0B2859] border border-[#19C7E8]/40 flex items-center justify-center text-[#19C7E8] shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Theme Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {theme.title}
                  </h3>

                  {/* Theme Description */}
                  <p className="mt-2 text-xs text-[#8EA7CE] leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Subtopics from Poster */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                    <div className="text-[11px] font-bold text-[#19C7E8] uppercase tracking-wider">
                      Focus Areas:
                    </div>
                    <ul className="space-y-1.5">
                      {theme.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-xs text-[#C5D4EE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#19C7E8] flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#8EA7CE]">
                  <span>Track Integration</span>
                  <span className="text-[#19C7E8] font-semibold">Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Central Convergence Flow Node: DATA ↓ INTELLIGENCE ↓ SECURITY with Progressive Illumination */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <div className="text-xs uppercase tracking-widest text-[#E9B949] font-bold">
              Convergence Architecture
            </div>
            <div className="text-sm font-semibold text-[#C5D4EE] mt-1">
              Themes integrate seamlessly into a continuous pipeline of value
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-[#19C7E8]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#176BFF]/10 via-[#19C7E8]/10 to-[#E9B949]/10 opacity-50" />
            
            <div className="relative z-10 flex flex-col items-center space-y-4">
              
              {/* Node 1: DATA */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-sm flex items-center justify-between p-3.5 rounded-xl bg-[#0B2859] border border-[#19C7E8]/40 shadow-md hover:border-[#19C7E8] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#19C7E8]/20 flex items-center justify-center text-[#19C7E8]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#19C7E8]">Phase 1</div>
                    <div className="text-base font-extrabold text-white">DATA</div>
                  </div>
                </div>
                <span className="text-xs text-[#8EA7CE] font-medium hidden sm:inline">
                  Multimodal Raw Streams
                </span>
              </motion.div>

              {/* Arrow 1 */}
              <div className="flex flex-col items-center justify-center text-[#19C7E8]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node 2: INTELLIGENCE */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-full max-w-sm flex items-center justify-between p-3.5 rounded-xl bg-[#0B2859] border border-[#176BFF]/50 shadow-md hover:border-[#176BFF] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#176BFF]/20 flex items-center justify-center text-[#176BFF]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#176BFF]">Phase 2</div>
                    <div className="text-base font-extrabold text-white">INTELLIGENCE</div>
                  </div>
                </div>
                <span className="text-xs text-[#8EA7CE] font-medium hidden sm:inline">
                  AI & Cognitive Reasoning
                </span>
              </motion.div>

              {/* Arrow 2 */}
              <div className="flex flex-col items-center justify-center text-[#E9B949]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node 3: SECURITY */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-sm flex items-center justify-between p-3.5 rounded-xl bg-[#0B2859] border border-[#E9B949]/50 shadow-md hover:border-[#E9B949] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E9B949]/20 flex items-center justify-center text-[#E9B949]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#E9B949]">Phase 3</div>
                    <div className="text-base font-extrabold text-white">SECURITY</div>
                  </div>
                </div>
                <span className="text-xs text-[#8EA7CE] font-medium hidden sm:inline">
                  Trustworthy & Verified Action
                </span>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
