import React, { useState } from 'react';
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
  Map,
  ChevronDown,
  Navigation,
  Clock,
  Info
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface VenueProps {
  onMapClick?: () => void;
}

export const Venue: React.FC<VenueProps> = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeAccordion, setActiveAccordion] = useState<string | null>('how-to-reach');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prev => (prev === id ? null : id));
  };

  const { venue } = CONFERENCE_DATA;

  return (
    <section id="venue" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            CONFERENCE VENUE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Hosted at the prestigious PSG College of Technology, a premier engineering institution in Coimbatore, India.
          </p>
        </motion.div>

        {/* Two-Column Venue Introduction Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          
          {/* Left Column: Campus Showcase Graphic Card */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative h-full rounded-3xl bg-white border-2 border-[#176BFF]/20 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#176BFF]/40 transition-colors">
              
              {/* Image Graphic / Illustration Area */}
              <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#F5F9FF] via-[#EBF3FF] to-[#E0EDFF] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-25" />
                
                {/* Visual Architectural Landmark Motif */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border-2 border-[#176BFF]/30 flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-12 h-12 text-[#176BFF]" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30">
                    PSG COLLEGE OF TECHNOLOGY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D6B] mt-2">
                    {venue.institution}
                  </h3>
                  <p className="text-sm text-[#1A2B4A]/75 font-medium">
                    Autonomous Institution &bull; Established 1951 &bull; Coimbatore
                  </p>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#176BFF]/20 shadow-sm flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#1A2B4A] font-medium">
                    <Sparkles className="w-4 h-4 text-[#D9A441]" />
                    <span>{venue.department}</span>
                  </div>
                  <span className="text-[#176BFF] font-bold">Venue Host</span>
                </div>
              </div>

              {/* Map Preview Bar with Fully Functional Google Maps Button */}
              <div className="p-5 bg-[#F5F9FF] border-t border-[#176BFF]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#0B2D6B]">Interactive Location Services</div>
                  <div className="text-xs text-[#1A2B4A]/70">Avinashi Road, Peelamedu, Coimbatore</div>
                </div>
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-md border border-[#176BFF]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group/btn"
                >
                  <Map className="w-4 h-4" />
                  <span>VIEW ON MAP</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Official Venue Address & Key Distance Summary */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-5 text-left"
          >
            
            {/* Address Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/20 shadow-md space-y-3 hover:border-[#176BFF]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D9A441] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Official Conference Address</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D6B]">
                {venue.institution}
              </h3>
              <p className="text-base text-[#174EA6] font-bold">
                {venue.department}
              </p>
              <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15">
                <p className="text-sm sm:text-base text-[#1A2B4A] font-medium leading-relaxed">
                  {venue.address}
                </p>
              </div>

              {/* Direct Map CTA */}
              <div className="pt-2">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#244A91] hover:bg-[#1A3870] text-white shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#D9A441]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Connectivity Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-[#176BFF]/15 shadow-xs hover:border-[#176BFF]/35 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00A8E8] uppercase tracking-wider mb-1">
                  <Plane className="w-4 h-4" />
                  <span>Airport Proximity</span>
                </div>
                <div className="text-lg font-extrabold text-[#0B2D6B]">Approx. 5 km</div>
                <div className="text-xs text-[#4A5E82] mt-0.5">Approx. 15–20 min by road</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#176BFF]/15 shadow-xs hover:border-[#176BFF]/35 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D9A441] uppercase tracking-wider mb-1">
                  <Train className="w-4 h-4" />
                  <span>Railway Proximity</span>
                </div>
                <div className="text-lg font-extrabold text-[#0B2D6B]">Approx. 8 km</div>
                <div className="text-xs text-[#4A5E82] mt-0.5">Approx. 20–30 min by road</div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Detailed Expandable Travel Guide Cards */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between pb-2 border-b border-[#176BFF]/15">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2D6B] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#176BFF]" />
              <span>Delegate Travel & Transit Guide</span>
            </h3>
            <span className="text-xs text-[#4A5E82] font-semibold hidden sm:inline">
              Click any section to expand details
            </span>
          </div>

          {/* CARD 1: How to Reach */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion('how-to-reach')}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F5F9FF]/60 transition-colors cursor-pointer"
              aria-expanded={activeAccordion === 'how-to-reach'}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#176BFF]/10 border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF] flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                    How to Reach
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5E82]">
                    Air, rail, and road transit routes to PSG College of Technology
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#176BFF]/10 text-[#176BFF]">
                  Comprehensive Guide
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-center text-[#176BFF] transition-transform duration-300 ${activeAccordion === 'how-to-reach' ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === 'how-to-reach' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#176BFF]/10 space-y-5">
                    <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed">
                      {venue.howToReach.overview}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* By Air */}
                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#176BFF] uppercase tracking-wider flex items-center gap-1.5">
                            <Plane className="w-3.5 h-3.5" />
                            {venue.howToReach.air.title}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-[#0B2D6B] border border-[#176BFF]/15">
                            {venue.howToReach.air.distance}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
                          {venue.howToReach.air.description}
                        </p>
                        <div className="pt-1.5 border-t border-[#176BFF]/10">
                          <span className="text-xs font-semibold text-[#0B2D6B]">Available options:</span>
                          <ul className="mt-1 text-xs text-[#4A5E82] space-y-0.5 list-disc list-inside">
                            {venue.howToReach.air.options.map((opt, i) => (
                              <li key={i}>{opt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* By Train */}
                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#D9A441] uppercase tracking-wider flex items-center gap-1.5">
                            <Train className="w-3.5 h-3.5" />
                            {venue.howToReach.train.title}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-[#0B2D6B] border border-[#176BFF]/15">
                            {venue.howToReach.train.distance}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
                          {venue.howToReach.train.description}
                        </p>
                        <div className="pt-1.5 border-t border-[#176BFF]/10">
                          <span className="text-xs font-semibold text-[#0B2D6B]">Available options:</span>
                          <ul className="mt-1 text-xs text-[#4A5E82] space-y-0.5 list-disc list-inside">
                            {venue.howToReach.train.options.map((opt, i) => (
                              <li key={i}>{opt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* By Road */}
                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#00A8E8] uppercase tracking-wider flex items-center gap-1.5">
                            <Car className="w-3.5 h-3.5" />
                            {venue.howToReach.road.title}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-[#0B2D6B] border border-[#176BFF]/15">
                            Avinashi Road
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
                          {venue.howToReach.road.description}
                        </p>
                        <div className="pt-1.5 border-t border-[#176BFF]/10">
                          <span className="text-xs font-semibold text-[#0B2D6B]">Available options:</span>
                          <ul className="mt-1 text-xs text-[#4A5E82] space-y-0.5 list-disc list-inside">
                            {venue.howToReach.road.options.map((opt, i) => (
                              <li key={i}>{opt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#4A5E82] italic bg-white p-3 rounded-lg border border-[#176BFF]/10">
                      <Clock className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                      <span>Note: Travel times are typical estimates and may vary depending on local traffic conditions.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CARD 2: Nearest Airport */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion('nearest-airport')}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F5F9FF]/60 transition-colors cursor-pointer"
              aria-expanded={activeAccordion === 'nearest-airport'}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#00A8E8]/10 border border-[#00A8E8]/25 flex items-center justify-center text-[#00A8E8] flex-shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                    Nearest Airport
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5E82]">
                    {venue.airport.name} &bull; Approx. 5 km
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#00A8E8]/10 text-[#00A8E8]">
                  ~5 km • 15–20 min
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-center text-[#176BFF] transition-transform duration-300 ${activeAccordion === 'nearest-airport' ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === 'nearest-airport' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#176BFF]/10 space-y-4">
                    <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed">
                      {venue.airport.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2">
                        <div className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider">Distance & Travel Time</div>
                        <div className="text-sm font-semibold text-[#0B2D6B]">
                          Distance: <span className="font-normal text-[#1A2B4A]">{venue.airport.distance}</span>
                        </div>
                        <div className="text-sm font-semibold text-[#0B2D6B]">
                          Typical Travel Time: <span className="font-normal text-[#1A2B4A]">{venue.airport.travelTime} (depending on traffic)</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2">
                        <div className="text-xs font-bold text-[#176BFF] uppercase tracking-wider">Getting to the Venue</div>
                        <ul className="text-xs sm:text-sm text-[#4A5E82] space-y-1 list-disc list-inside">
                          {venue.airport.transitOptions.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={venue.airport.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-sm hover:-translate-y-0.5 transition-all"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>GET DIRECTIONS FROM AIRPORT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CARD 3: Nearest Railway Station */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion('nearest-railway')}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F5F9FF]/60 transition-colors cursor-pointer"
              aria-expanded={activeAccordion === 'nearest-railway'}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#D9A441]/10 border border-[#D9A441]/25 flex items-center justify-center text-[#D9A441] flex-shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                    Nearest Railway Station
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5E82]">
                    {venue.railway.name} &bull; Approx. 8 km
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#D9A441]/15 text-[#B58226]">
                  ~8 km • 20–30 min
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-center text-[#176BFF] transition-transform duration-300 ${activeAccordion === 'nearest-railway' ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === 'nearest-railway' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#176BFF]/10 space-y-4">
                    <p className="text-sm sm:text-base text-[#1A2B4A] leading-relaxed">
                      {venue.railway.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2">
                        <div className="text-xs font-bold text-[#D9A441] uppercase tracking-wider">Distance & Travel Time</div>
                        <div className="text-sm font-semibold text-[#0B2D6B]">
                          Distance: <span className="font-normal text-[#1A2B4A]">{venue.railway.distance}</span>
                        </div>
                        <div className="text-sm font-semibold text-[#0B2D6B]">
                          Typical Travel Time: <span className="font-normal text-[#1A2B4A]">{venue.railway.travelTime} (depending on traffic)</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2">
                        <div className="text-xs font-bold text-[#176BFF] uppercase tracking-wider">Getting to the Venue</div>
                        <ul className="text-xs sm:text-sm text-[#4A5E82] space-y-1 list-disc list-inside">
                          {venue.railway.transitOptions.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={venue.railway.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-sm hover:-translate-y-0.5 transition-all"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>GET DIRECTIONS FROM RAILWAY STATION</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CARD 4: Local Transportation */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion('local-transport')}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F5F9FF]/60 transition-colors cursor-pointer"
              aria-expanded={activeAccordion === 'local-transport'}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#176BFF]/10 border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF] flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                    Local Transportation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5E82]">
                    Autos, app-based cabs, city buses and private vehicles in Coimbatore
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#176BFF]/10 text-[#176BFF]">
                  City Transit Options
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-center text-[#176BFF] transition-transform duration-300 ${activeAccordion === 'local-transport' ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === 'local-transport' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#176BFF]/10 space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {venue.localTransport.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-1.5">
                          <h5 className="text-xs sm:text-sm font-extrabold text-[#0B2D6B] uppercase tracking-wide">
                            {item.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#4A5E82] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CARD 5: Accommodation */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion('accommodation')}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F5F9FF]/60 transition-colors cursor-pointer"
              aria-expanded={activeAccordion === 'accommodation'}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#D9A441]/10 border border-[#D9A441]/25 flex items-center justify-center text-[#D9A441] flex-shrink-0">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2D6B]">
                    Accommodation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5E82]">
                    Delegate hotel arrangements and nearby stay guidance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30">
                  {venue.accommodation.status}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-center text-[#176BFF] transition-transform duration-300 ${activeAccordion === 'accommodation' ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === 'accommodation' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#176BFF]/10 space-y-3">
                    <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 space-y-2">
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#D9A441]" />
                        <h5 className="text-sm font-bold text-[#0B2D6B]">
                          {venue.accommodation.title}
                        </h5>
                      </div>
                      <p className="text-sm text-[#1A2B4A]/90 font-medium">
                        {venue.accommodation.details}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4A5E82] italic leading-relaxed pt-1">
                        {venue.accommodation.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
