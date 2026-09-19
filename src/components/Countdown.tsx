import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export const Countdown: React.FC = () => {
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
        const minutes = Math.floor((difference / 1000 / 60) % 60);
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

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="relative -mt-6 sm:-mt-10 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl glass-card p-4 sm:p-6 lg:p-8 border border-[#176BFF]/20 shadow-xl bg-white">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Title / Badge */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/25 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Clock className="w-6 h-6 text-[#176BFF] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Conference Countdown</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B2D6B]">
                Gathering in Coimbatore, India
              </h3>
              <p className="text-xs text-[#4A5E82]">
                December 16–18, 2027 &bull; PSG College of Technology
              </p>
            </div>
          </div>

          {/* Right Countdown Blocks or Live Banner */}
          {timeLeft.isLive ? (
            <div className="py-3 px-8 rounded-xl bg-gradient-to-r from-[#176BFF] via-[#00A8E8] to-[#D9A441] text-white font-extrabold text-xl tracking-wider animate-bounce shadow-xl">
              DATAINSIGHT 2027 IS LIVE
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full md:w-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 shadow-xs group hover:border-[#176BFF]/60 hover:bg-[#EBF2FF] transition-all min-w-[64px] sm:min-w-[80px]"
                >
                  <span className="text-xl sm:text-3xl font-extrabold text-[#0B2D6B] group-hover:text-[#176BFF] transition-colors tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-bold tracking-wider text-[#174EA6] mt-0.5">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
