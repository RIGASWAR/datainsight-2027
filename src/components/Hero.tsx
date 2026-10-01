import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface HeroProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick, onExploreClick }) => {
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
        {/* First — Conference Title, largest text in the information box */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] xl:text-[2.45rem] font-black tracking-tight text-white leading-tight max-w-3xl mx-auto"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          International Conference on Multimodal Data Analytics, Intelligence and Security
        </h1>

        {/* Second — Conference Name, slightly smaller than the title */}
        <h2
          className="mt-3 sm:mt-3.5 text-lg sm:text-xl md:text-2xl lg:text-[1.85rem] xl:text-[2rem] font-extrabold tracking-tight text-[#E6B85C] leading-snug"
          style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.65)' }}
        >
          DATAINSIGHT 2027
        </h2>

        {/* Third — Replacement Tagline */}
        <p
          className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base lg:text-[1.05rem] italic text-[#E2EEFF] font-semibold max-w-xl mx-auto"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
        >
          Transforming Data into Intelligence, Securing the Future
        </p>

        {/* Gold Separator */}
        <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-[#E6B85C] to-transparent mx-auto my-3 sm:my-4" />

        {/* Event Dates */}
        <div
          className="inline-flex items-center justify-center gap-2 text-base sm:text-xl md:text-2xl font-extrabold text-[#E6B85C] tracking-wide"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.65)' }}
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#E6B85C]" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }} />
          <span>{CONFERENCE_DATA.datesDisplay}</span>
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

        {/* Action CTAs inside the conference box */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <button
            onClick={() => onActionClick('submit')}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#244A91] hover:bg-[#16366B] text-white border border-white/25 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>SUBMIT PAPER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onActionClick('register')}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#D9A353] hover:bg-[#C28E3F] text-[#071329] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>REGISTER</span>
          </button>

          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white/85 hover:text-white hover:bg-white/10 border border-white/15 transition-all cursor-pointer"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9A353]" />
          </button>
        </div>

      </motion.div>
    </section>
  );
};
