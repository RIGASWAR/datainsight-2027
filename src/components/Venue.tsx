import React from 'react';
import { 
  MapPin, 
  Plane, 
  Train, 
  Hotel, 
  Compass, 
  Car, 
  ExternalLink, 
  Building2, 
  Sparkles,
  Map
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface VenueProps {
  onMapClick: () => void;
}

export const Venue: React.FC<VenueProps> = ({ onMapClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ElementType> = {
    'How to Reach': Compass,
    'Nearest Airport': Plane,
    'Nearest Railway Station': Train,
    'Accommodation': Hotel,
    'Local Transportation': Car,
  };

  return (
    <section id="venue" className="py-20 md:py-28 relative bg-[#040E22]/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[150px] pointer-events-none" />

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
            <MapPin className="w-3.5 h-3.5 text-[#E9B949]" />
            HOST INSTITUTION & LOCATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONFERENCE <span className="gradient-text-cyan-blue">VENUE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#19C7E8] via-[#176BFF] to-[#E9B949] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
            Hosted at the prestigious PSG College of Technology, a premier engineering institution in Coimbatore, India.
          </p>
        </motion.div>

        {/* Two-Column Venue Layout (Desktop opposing slide-in, Mobile vertical fade) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Campus Showcase Graphic Card */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl glass-card border-2 border-[#19C7E8]/30 overflow-hidden shadow-2xl group hover:border-[#19C7E8]/60 transition-colors">
              
              {/* Image Graphic / Illustration Area */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#0B2859] via-[#071A3D] to-[#040E22] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-25" />
                
                {/* Visual Architectural Landmark Motif */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0B2859] border-2 border-[#19C7E8]/50 flex items-center justify-center shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-12 h-12 text-[#19C7E8]" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/30">
                    CAMPUS PHOTOGRAPH PLACEHOLDER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                    PSG College of Technology
                  </h3>
                  <p className="text-xs text-[#8EA7CE]">
                    Autonomous Institution &bull; Established 1951 &bull; Coimbatore
                  </p>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#C5D4EE]">
                    <Sparkles className="w-4 h-4 text-[#E9B949]" />
                    <span>Department of Information Technology</span>
                  </div>
                  <span className="text-[#19C7E8] font-bold">Venue Host</span>
                </div>
              </div>

              {/* Map Preview Button */}
              <div className="p-5 bg-[#071A3D]/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white">Interactive Location Services</div>
                  <div className="text-[11px] text-[#8EA7CE]">GPS Coordinates: Peelamedu, Coimbatore</div>
                </div>
                <button
                  onClick={onMapClick}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-md border border-[#19C7E8]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>VIEW ON MAP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Venue Details & Subsections */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            
            {/* Address Banner */}
            <div className="p-6 rounded-2xl glass-card border border-[#19C7E8]/30 space-y-2 hover:border-[#19C7E8]/50 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E9B949] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Conference Address</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {CONFERENCE_DATA.venue.institution}
              </h3>
              <p className="text-sm text-[#19C7E8] font-medium">
                {CONFERENCE_DATA.venue.department}
              </p>
              <p className="text-xs sm:text-sm text-[#C5D4EE] leading-relaxed">
                {CONFERENCE_DATA.venue.area}, {CONFERENCE_DATA.venue.city} – {CONFERENCE_DATA.venue.pincode}, {CONFERENCE_DATA.venue.state}, {CONFERENCE_DATA.venue.country}
              </p>
            </div>

            {/* Subsections: Travel & Stay Information */}
            <div className="space-y-3">
              {CONFERENCE_DATA.venue.subsections.map((sub, index) => {
                const IconComp = iconMap[sub.title] || Compass;

                return (
                  <motion.div
                    key={sub.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 hover:-translate-y-0.5 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0B2859] border border-[#19C7E8]/30 flex items-center justify-center text-[#19C7E8] flex-shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {sub.title}
                        </h4>
                        <span className="text-[11px] text-[#8EA7CE]">
                          Local Travel Guidance
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white/5 text-[#E9B949] border border-white/10 flex-shrink-0">
                      {sub.info}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
