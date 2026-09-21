import React from 'react';
import { Calendar, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const ImportantDates: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="dates" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#176BFF]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
            CONFERENCE SCHEDULE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            IMPORTANT <span className="text-[#176BFF]">DATES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#4A5E82]">
            Track essential submission deadlines and registration schedules for DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* Desktop Horizontal Connected Animated Timeline */}
        <div className="hidden lg:block relative my-12">
          
          {/* Progressively illuminating horizontal track */}
          <div className="absolute top-8 left-12 right-12 h-1.5 bg-[#EBF2FF] rounded-full z-0 overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-gradient-to-r from-[#176BFF] via-[#00A8E8] to-[#D9A441] origin-left shadow-[0_0_8px_rgba(23,107,255,0.4)]"
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
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md mb-6 ${
                      item.isHighlighted
                        ? 'bg-gradient-to-br from-[#D9A441] to-[#b38827] text-white ring-4 ring-[#D9A441]/30 border-2 border-white'
                        : 'bg-[#176BFF] border-2 border-white text-white group-hover:scale-110 group-hover:border-[#00A8E8]'
                    }`}
                  >
                    {item.isHighlighted ? (
                      <Sparkles className="w-7 h-7 animate-pulse text-white" />
                    ) : (
                      <Calendar className="w-6 h-6 text-white" />
                    )}
                  </motion.div>

                  {/* Date Card with slide into position */}
                  <div 
                    className={`w-full p-5 sm:p-5.5 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[160px] shadow-sm ${
                      item.isHighlighted 
                        ? 'border-2 border-[#D9A441] shadow-lg shadow-[#D9A441]/15' 
                        : 'border border-[#176BFF]/20 hover:border-[#176BFF] hover:shadow-md'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#176BFF] uppercase tracking-wider block mb-1.5">
                        Step 0{index + 1}
                      </span>
                      <h4 className="text-base font-bold text-[#0B2D6B] leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="mt-3.5 pt-3.5 border-t border-gray-100">
                      <span 
                        className={`inline-block px-3 py-1.5 rounded-lg text-sm font-extrabold tracking-wide ${
                          item.isHighlighted
                            ? 'bg-[#D9A441] text-white shadow-xs'
                            : 'bg-[#F5F9FF] text-[#174EA6] border border-[#176BFF]/20'
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
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-[#176BFF] before:via-[#00A8E8] before:to-[#D9A441] before:rounded-full">
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
                  className={`absolute -left-[23px] sm:-left-[27px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-md ${
                    item.isHighlighted
                      ? 'bg-[#D9A441] text-white ring-4 ring-[#D9A441]/30'
                      : 'bg-[#176BFF] text-white'
                  }`}
                >
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>

                {/* Vertical Card */}
                <div 
                  className={`p-5 sm:p-6 rounded-2xl bg-white shadow-sm transition-all ${
                    item.isHighlighted
                      ? 'border-2 border-[#D9A441] shadow-md shadow-[#D9A441]/10'
                      : 'border border-[#176BFF]/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                      {item.title}
                    </h4>
                    {item.isHighlighted && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#D9A441] text-white shadow-xs">
                        Conference
                      </span>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-[#4A5E82] font-medium">Schedule:</span>
                    <span 
                      className={`text-sm font-extrabold px-3 py-1.5 rounded-lg ${
                        item.isHighlighted 
                          ? 'bg-[#D9A441]/15 text-[#B58226] border border-[#D9A441]/30' 
                          : 'text-[#174EA6] bg-[#F5F9FF] border border-[#176BFF]/20'
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
          className="mt-12 max-w-2xl mx-auto p-5 rounded-2xl bg-[#F5F9FF] border border-[#176BFF]/20 text-center text-sm text-[#4A5E82] flex items-center justify-center gap-2.5 shadow-xs"
        >
          <AlertCircle className="w-5 h-5 text-[#D9A441] flex-shrink-0" />
          <span>
            Deadlines marked <strong>TO BE INCLUDED</strong> will be officially confirmed and notified to authors.
          </span>
        </motion.div>

      </div>
    </section>
  );
};
