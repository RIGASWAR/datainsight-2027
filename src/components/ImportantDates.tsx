import React from 'react';
import { Calendar, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const ImportantDates: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="dates" className="py-20 md:py-28 relative bg-[#040E22]/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#176BFF]/10 rounded-full blur-[160px] pointer-events-none" />

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
            <Clock className="w-3.5 h-3.5 text-[#E9B949]" />
            CONFERENCE SCHEDULE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            IMPORTANT <span className="gradient-text-gold">DATES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E9B949] via-[#19C7E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
            Track essential submission deadlines and registration schedules for DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* Desktop Horizontal Connected Animated Timeline */}
        <div className="hidden lg:block relative my-12">
          
          {/* Progressively illuminating horizontal track */}
          <div className="absolute top-8 left-12 right-12 h-1 bg-[#0B2859] rounded-full z-0 overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-gradient-to-r from-[#176BFF] via-[#19C7E8] to-[#E9B949] origin-left shadow-[0_0_12px_rgba(25,199,232,0.8)]"
            />
          </div>
          
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {CONFERENCE_DATA.importantDates.map((item, index) => {
              return (
                <motion.div 
                  key={item.id} 
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.65, 
                    delay: 0.15 + index * 0.12, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="flex flex-col items-center text-center group"
                >
                  
                  {/* Milestone Node with activation scale */}
                  <motion.div 
                    initial={shouldReduceMotion ? false : { scale: 0.8 }}
                    whileInView={{ scale: item.isHighlighted ? 1.1 : 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl mb-6 ${
                      item.isHighlighted
                        ? 'bg-gradient-to-br from-[#E9B949] to-[#b38827] text-[#071A3D] ring-4 ring-[#E9B949]/30'
                        : 'bg-[#0B2859] border-2 border-[#19C7E8] text-[#19C7E8] group-hover:scale-110 group-hover:border-[#E9B949]'
                    }`}
                  >
                    {item.isHighlighted ? (
                      <Sparkles className="w-7 h-7 animate-pulse text-[#071A3D]" />
                    ) : (
                      <Calendar className="w-6 h-6 text-white" />
                    )}
                  </motion.div>

                  {/* Date Card with slide into position */}
                  <div 
                    className={`w-full p-4 rounded-xl glass-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[140px] ${
                      item.isHighlighted 
                        ? 'border-2 border-[#E9B949] shadow-lg shadow-[#E9B949]/20 bg-[#0B2859]/90' 
                        : 'border border-[#19C7E8]/20 hover:border-[#19C7E8]/60'
                    }`}
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#8EA7CE] uppercase tracking-wider block mb-1">
                        Step 0{index + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10">
                      <span 
                        className={`inline-block px-2.5 py-1 rounded text-xs font-extrabold tracking-wide ${
                          item.isHighlighted
                            ? 'bg-[#E9B949] text-[#071A3D] shadow-sm'
                            : 'bg-white/10 text-[#C5D4EE]'
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Animated Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-[#176BFF] before:via-[#19C7E8] before:to-[#E9B949] before:rounded-full">
          {CONFERENCE_DATA.importantDates.map((item, index) => {
            return (
              <motion.div 
                key={item.id} 
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-6"
              >
                
                {/* Node on vertical line */}
                <div 
                  className={`absolute -left-[23px] sm:-left-[27px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    item.isHighlighted
                      ? 'bg-[#E9B949] border-white text-[#071A3D] shadow-lg ring-4 ring-[#E9B949]/30'
                      : 'bg-[#0B2859] border-[#19C7E8] text-[#19C7E8]'
                  }`}
                >
                  <span className="text-[11px] font-bold">{index + 1}</span>
                </div>

                {/* Vertical Card */}
                <div 
                  className={`p-4 sm:p-5 rounded-xl glass-card transition-all ${
                    item.isHighlighted
                      ? 'border-2 border-[#E9B949] bg-[#0B2859]/90'
                      : 'border border-[#19C7E8]/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h4>
                    {item.isHighlighted && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9B949] text-[#071A3D]">
                        Conference
                      </span>
                    )}
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#8EA7CE]">Schedule:</span>
                    <span 
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        item.isHighlighted 
                          ? 'bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/40' 
                          : 'text-[#C5D4EE] bg-white/5'
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Note Box */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-[#0B2859]/50 border border-[#19C7E8]/20 text-center text-xs text-[#8EA7CE] flex items-center justify-center gap-2"
        >
          <AlertCircle className="w-4 h-4 text-[#E9B949] flex-shrink-0" />
          <span>
            Deadlines marked <strong>TO BE INCLUDED</strong> will be officially confirmed and notified to authors.
          </span>
        </motion.div>

      </div>
    </section>
  );
};
