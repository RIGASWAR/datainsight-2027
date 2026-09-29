import React from 'react';
import { 
  Calendar, 
  Clock, 
  Presentation, 
  Mic, 
  Users, 
  Lightbulb, 
  FileText, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Events: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const events = CONFERENCE_DATA.events;

  const eventIcons: Record<string, React.ElementType> = {
    '01': Presentation,
    '02': Mic,
    '03': Users,
    '04': Lightbulb,
    '05': FileText,
  };

  return (
    <section id="events" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-80 h-80 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />

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
            <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
            PROGRAM HIGHLIGHTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            EVENTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            A comprehensive three-day academic program featuring pre-conference workshops, keynote addresses, panel discussions, innovation expos, and research sessions.
          </p>
        </motion.div>

        {/* Disclaimer Notice */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-5 rounded-2xl bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-between gap-3 mb-10 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#176BFF] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#1A2B4A]/85">
              Specific session dates, room schedules, and invited speakers for each event category: <span className="font-semibold text-[#D9A441]">TO BE ANNOUNCED</span> in the official conference program.
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30 flex-shrink-0">
            TO BE ANNOUNCED
          </span>
        </motion.div>

        {/* 5 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {events.map((evt, index) => {
            const IconComponent = eventIcons[evt.number] || Sparkles;

            return (
              <motion.div
                key={evt.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 3) * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`rounded-2xl bg-white border border-[#176BFF]/15 p-6 sm:p-7 shadow-sm hover:border-[#176BFF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''
                }`}
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-[#174EA6] font-mono bg-[#176BFF]/10 px-2.5 py-0.5 rounded-full border border-[#176BFF]/20">
                      EVENT {evt.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#00A8E8] text-white flex items-center justify-center shadow-md shadow-[#176BFF]/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-bold text-[#D9A441] uppercase tracking-wider">
                    {evt.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B] mt-1 leading-snug">
                    {evt.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#176BFF] to-[#00A8E8] rounded-full my-3" />

                  {/* Description */}
                  <p className="text-sm text-[#1A2B4A]/80 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {/* Bottom Schedule Badge */}
                <div className="mt-6 pt-4 border-t border-[#176BFF]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#1A2B4A]/70">
                    <Clock className="w-3.5 h-3.5 text-[#176BFF]" />
                    <span>Schedule:</span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30">
                    {evt.schedule}
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
