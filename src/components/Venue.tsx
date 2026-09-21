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
    <section id="venue" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[150px] pointer-events-none" />

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
            <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
            HOST INSTITUTION & LOCATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONFERENCE <span className="gradient-text-cyan-blue">VENUE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
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
            <div className="relative rounded-3xl bg-white border-2 border-[#176BFF]/20 overflow-hidden shadow-xl group hover:border-[#176BFF]/40 transition-colors">
              
              {/* Image Graphic / Illustration Area */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#F5F9FF] via-[#EBF3FF] to-[#E0EDFF] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-25" />
                
                {/* Visual Architectural Landmark Motif */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border-2 border-[#176BFF]/30 flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-12 h-12 text-[#176BFF]" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30">
                    CAMPUS PHOTOGRAPH PLACEHOLDER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D6B] mt-2">
                    PSG College of Technology
                  </h3>
                  <p className="text-sm text-[#1A2B4A]/75">
                    Autonomous Institution &bull; Established 1951 &bull; Coimbatore
                  </p>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#176BFF]/20 shadow-sm flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#1A2B4A] font-medium">
                    <Sparkles className="w-4 h-4 text-[#D9A441]" />
                    <span>Department of Information Technology</span>
                  </div>
                  <span className="text-[#176BFF] font-bold">Venue Host</span>
                </div>
              </div>

              {/* Map Preview Button */}
              <div className="p-5 bg-[#F5F9FF] border-t border-[#176BFF]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#0B2D6B]">Interactive Location Services</div>
                  <div className="text-xs text-[#1A2B4A]/70">GPS Coordinates: Peelamedu, Coimbatore</div>
                </div>
                <button
                  onClick={onMapClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-md border border-[#176BFF]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Map className="w-4 h-4" />
                  <span>VIEW ON MAP</span>
                  <ExternalLink className="w-4 h-4" />
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
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm space-y-2.5 hover:border-[#176BFF]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D9A441] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Conference Address</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B2D6B]">
                {CONFERENCE_DATA.venue.institution}
              </h3>
              <p className="text-base text-[#174EA6] font-bold">
                {CONFERENCE_DATA.venue.department}
              </p>
              <p className="text-sm sm:text-base text-[#1A2B4A]/85 leading-relaxed">
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
                    className="p-4.5 rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 hover:-translate-y-0.5 shadow-sm transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF] flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0B2D6B]">
                          {sub.title}
                        </h4>
                        <span className="text-xs text-[#1A2B4A]/70">
                          Local Travel Guidance
                        </span>
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-md bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30 flex-shrink-0">
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
