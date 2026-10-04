import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { CONFERENCE_DATA, type CommitteeMember, type CommitteeSecretary } from '../data/conference';

interface CommitteeCardProps {
  member: CommitteeMember | CommitteeSecretary;
  variant: 'top' | 'coconvener' | 'secretary';
  delay?: number;
}

const CommitteeMemberCard: React.FC<CommitteeCardProps> = ({ member, variant, delay = 0.1 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Equal dimensions within tiers
  const photoSizeClasses = 
    variant === 'top'
      ? 'w-[150px] sm:w-[165px] h-[185px] sm:h-[210px]'
      : 'w-[130px] sm:w-[145px] h-[160px] sm:h-[180px]';

  const cardContainerClasses =
    variant === 'top'
      ? 'p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF]/50 shadow-md hover:shadow-xl w-full max-w-[340px] sm:max-w-[360px] min-h-[460px] sm:min-h-[480px]'
      : variant === 'secretary'
        ? 'p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#D9A441]/40 secretary-card-shimmer shadow-sm hover:shadow-md'
        : 'p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/45 shadow-sm hover:shadow-md';

  const nameSizeClasses =
    variant === 'top'
      ? 'text-xl sm:text-2xl font-bold text-[#0B2D6B]'
      : 'text-base sm:text-lg font-bold text-[#0B2D6B]';

  // Uniform gold role badge for all committee members as requested in Section 34
  const roleBadge = (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/40 uppercase tracking-wider shadow-xs">
      <Sparkles className="w-3 h-3 text-[#D9A441]" />
      {member.role}
    </span>
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${cardContainerClasses} hover:scale-[1.015] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-between relative overflow-hidden group w-full h-full`}
    >
      <div className="w-full flex flex-col items-center">
        {/* 1. Official Member Photo */}
        <div className={`${photoSizeClasses} mx-auto rounded-2xl overflow-hidden border-2 border-[#176BFF]/25 group-hover:border-[#176BFF]/50 shadow-md shadow-[#0B2D6B]/5 group-hover:shadow-lg transition-all mb-4 bg-[#F5F9FF] shrink-0`}>
          <img
            src={member.image}
            alt={member.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ objectPosition: member.objectPosition || 'center' }}
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.dataset.fallbackTried) return;
              target.dataset.fallbackTried = 'true';
              const filename = member.image.split('/').pop()?.split('-')[0]?.split('?')[0];
              if (filename) {
                target.src = `/committee/${filename}.png`;
              }
            }}
          />
        </div>

        {/* 2. Member Name */}
        <h3 className={`${nameSizeClasses} tracking-tight leading-snug min-h-[2.5rem] flex items-center justify-center`}>
          {member.name}
        </h3>

        {/* 3. Designation & Department */}
        <div className="mt-1.5 space-y-0.5">
          <p className="text-sm sm:text-base font-semibold text-[#174EA6] leading-snug">
            {member.designation}
          </p>
          {member.department && (
            <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-snug">
              {member.department}
            </p>
          )}
          {member.institution && (
            <p className="text-xs sm:text-sm text-[#1A2B4A]/70 leading-relaxed">
              {member.institution}
            </p>
          )}
        </div>
      </div>

      {/* 4. Committee Role Badge */}
      <div className="mt-4 pt-1">
        {roleBadge}
      </div>
    </motion.div>
  );
};

export const Committee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="committee" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F4F8FF] via-[#EEF5FF] to-[#F4F8FF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#176BFF]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Users className="w-3.5 h-3.5 text-[#D9A441]" />
            LEADERSHIP & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            ORGANIZING COMMITTEE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Guiding the academic direction, research rigor, and organizational excellence of DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* 1. TOP TIERS: Chief Patron, Patron, Convener - 3 Vertical Levels, 1 Centered Card Per Level, EXACTLY Equal Dimensions */}
        <div className="max-w-md mx-auto space-y-8 mb-14">
          {/* LEVEL 1: Chief Patron */}
          <div className="w-full flex justify-center">
            <CommitteeMemberCard 
              member={CONFERENCE_DATA.committee.chiefPatron} 
              variant="top" 
              delay={0.05} 
            />
          </div>

          {/* LEVEL 2: Patron */}
          <div className="w-full flex justify-center">
            <CommitteeMemberCard 
              member={CONFERENCE_DATA.committee.patron} 
              variant="top" 
              delay={0.1} 
            />
          </div>

          {/* LEVEL 3: Convener */}
          <div className="w-full flex justify-center">
            <CommitteeMemberCard 
              member={CONFERENCE_DATA.committee.convener} 
              variant="top" 
              delay={0.15} 
            />
          </div>
        </div>

        {/* 2. SUBSECTION: CO-CONVENERS (Matching Organizing Secretaries heading style) */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="text-center mb-8">
            <h4 className="text-base font-extrabold uppercase tracking-widest text-brand-primary">
              CO-CONVENERS
            </h4>
            <div className="w-16 h-1 bg-[#244A91] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {CONFERENCE_DATA.committee.coConveners.map((coConvener, idx) => (
              <CommitteeMemberCard 
                key={coConvener.name} 
                member={coConvener} 
                variant="coconvener" 
                delay={0.1 + idx * 0.1} 
              />
            ))}
          </div>
        </div>

        {/* 3. SUBSECTION: ORGANIZING SECRETARIES (With special gold shimmer effect) */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="text-center mb-8">
            <h4 className="text-base font-extrabold uppercase tracking-widest text-brand-primary">
              ORGANIZING SECRETARIES
            </h4>
            <div className="w-16 h-1 bg-[#244A91] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
            {CONFERENCE_DATA.committee.organizingSecretaries.map((sec, idx) => (
              <CommitteeMemberCard 
                key={sec.name} 
                member={sec} 
                variant="secretary" 
                delay={0.1 + idx * 0.1} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
