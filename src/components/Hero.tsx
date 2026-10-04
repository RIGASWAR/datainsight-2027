import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface HeroProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp') => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const shouldReduceMotion = useReducedMotion();

  // Dynamic countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const target = new Date(CONFERENCE_DATA.targetLiveDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isLive: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[82vh] md:min-h-[88vh] lg:min-h-[calc(100vh-170px)] flex items-center justify-center overflow-hidden py-10 sm:py-14 md:py-16 px-4"
    >
      {/* 
        Full-width continuously playing drone video of PSG College of Technology.
        Rendered as an un-animated raw HTML video element to guarantee continuous,
        uninterrupted playback without reloading on React renders.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/PsgDroneshot-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gentle dark gradient overlay to ensure high video clarity and vivid campus footage */}
        <div className="absolute inset-0 bg-black/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 z-10" />
      </div>

      {/* Centered Translucent Dark-Blue Conference Information Box */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-[94%] sm:w-[90%] md:w-[86%] max-w-3xl lg:max-w-4xl mx-auto rounded-2xl bg-[#0C234B]/75 sm:bg-[#0C234B]/72 backdrop-blur-md border border-[#176BFF]/35 shadow-2xl shadow-[#041026]/60 p-5 sm:p-7 md:p-9 text-center text-white"
      >
        {/* Conference Information Hierarchy */}
        <div className="space-y-1 sm:space-y-1.5">
          {/* 1. DATAINSIGHT 2027 — Visually prominent with elegant dark golden color */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#C89427]"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.75)' }}
          >
            DATAINSIGHT 2027
          </h1>

          {/* 2. International Conference */}
          <h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white/95 leading-snug pt-1"
            style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
          >
            International Conference
          </h2>

          {/* 3. on */}
          <div
            className="text-xs sm:text-sm font-semibold text-[#8AB4FF] uppercase tracking-widest"
            style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.7)' }}
          >
            on
          </div>

          {/* 4. Multimodal Data Analytics, Intelligence and Security */}
          <h3
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-[#E2EEFF] leading-snug max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
          >
            Multimodal Data Analytics, Intelligence and Security
          </h3>
        </div>

        {/* Third — Replacement Tagline */}
        <p
          className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base italic text-[#E2EEFF]/90 font-medium max-w-xl mx-auto"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
        >
          Transforming Data into Intelligence, Securing the Future
        </p>

        {/* Gold Separator */}
        <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-[#C89427] to-transparent mx-auto my-3 sm:my-4" />

        {/* Event Dates — with elegant dark golden color */}
        <div
          className="inline-flex items-center justify-center gap-2 text-base sm:text-xl md:text-2xl font-extrabold tracking-wide"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.65)' }}
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#C89427]" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }} />
          <span className="text-[#C89427]">{CONFERENCE_DATA.datesDisplay}</span>
        </div>

        {/* Dynamic Countdown Timer Component */}
        <div className="mt-4 sm:mt-6">
          {timeLeft.isLive ? (
            <div className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#244A91] via-[#00A8E8] to-[#E6B85C] text-white font-extrabold text-sm sm:text-base tracking-wider shadow-lg">
              DATAINSIGHT 2027 IS CURRENTLY LIVE
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-3.5 max-w-xs sm:max-w-md mx-auto">
              {countdownUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center px-2 py-2 sm:px-3 sm:py-3 rounded-xl bg-[#091F44]/65 backdrop-blur-sm border border-[#176BFF]/30 shadow-md group hover:border-[#E6B85C]/60 transition-colors"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F0C66A] tabular-nums leading-none" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}>
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#E2EEFF] uppercase tracking-wider mt-1 sm:mt-1.5" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.45)' }}>
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Exactly 5 Hero Action Buttons */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
          <a
            href="#submission"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('submission')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#244A91] hover:bg-[#16366B] text-white border border-white/20 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Call for Papers</span>
          </a>

          <a
            href="#speakers"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Keynote Speakers</span>
          </a>

          <a
            href="#tracks"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Tracks</span>
          </a>

          <a
            href="#dates"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('dates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Important Dates</span>
          </a>

          <a
            href="#registration"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#D9A353] hover:bg-[#C28E3F] text-[#071329] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Registration</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
};
