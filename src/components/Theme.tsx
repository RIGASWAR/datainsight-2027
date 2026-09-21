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
    <section id="themes" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/25 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            OFFICIAL POSTER THEMES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONFERENCE <span className="text-[#176BFF]">THEMES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#4A5E82]">
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
                className="p-7 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF] transition-all duration-300 hover:-translate-y-1.5 shadow-md shadow-[#0B2D6B]/5 flex flex-col justify-between"
              >
                <div>
                  {/* Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#D9A441] font-mono">
                      {theme.number}
                    </span>
                    <div className="w-13 h-13 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF] shadow-xs">
                      <IconComponent className="w-6.5 h-6.5 text-[#176BFF]" />
                    </div>
                  </div>

                  {/* Theme Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B] leading-snug">
                    {theme.title}
                  </h3>

                  {/* Theme Description */}
                  <p className="mt-3 text-sm sm:text-base text-[#4A5E82] leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Subtopics from Poster */}
                  <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider">
                      Focus Areas:
                    </div>
                    <ul className="space-y-2">
                      {theme.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2.5 text-sm text-[#1A2B4A] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#176BFF] flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-[#4A5E82]">
                  <span className="font-medium">Track Integration</span>
                  <span className="text-[#176BFF] font-semibold">Active</span>
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
            <div className="text-sm uppercase tracking-widest text-[#D9A441] font-bold">
              Convergence Architecture
            </div>
            <div className="text-base font-semibold text-[#1A2B4A] mt-1.5">
              Themes integrate seamlessly into a continuous pipeline of value
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#176BFF]/5 via-[#00A8E8]/5 to-[#D9A441]/5 opacity-60" />
            
            <div className="relative z-10 flex flex-col items-center space-y-4">
              
              {/* Node 1: DATA */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-md flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#00A8E8]/35 shadow-xs hover:border-[#00A8E8] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#00A8E8]/15 flex items-center justify-center text-[#00A8E8]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00A8E8]">Phase 1</div>
                    <div className="text-lg font-black text-[#0B2D6B]">DATA</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-[#4A5E82] font-semibold hidden sm:inline">
                  Multimodal Raw Streams
                </span>
              </motion.div>

              {/* Arrow 1 */}
              <div className="flex flex-col items-center justify-center text-[#00A8E8]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node 2: INTELLIGENCE */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-full max-w-md flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/35 shadow-xs hover:border-[#176BFF] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#176BFF]/15 flex items-center justify-center text-[#176BFF]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#176BFF]">Phase 2</div>
                    <div className="text-lg font-black text-[#0B2D6B]">INTELLIGENCE</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-[#4A5E82] font-semibold hidden sm:inline">
                  AI & Cognitive Reasoning
                </span>
              </motion.div>

              {/* Arrow 2 */}
              <div className="flex flex-col items-center justify-center text-[#D9A441]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node 3: SECURITY */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-md flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#D9A441]/35 shadow-xs hover:border-[#D9A441] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#D9A441]/15 flex items-center justify-center text-[#D9A441]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#D9A441]">Phase 3</div>
                    <div className="text-lg font-black text-[#0B2D6B]">SECURITY</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-[#4A5E82] font-semibold hidden sm:inline">
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
