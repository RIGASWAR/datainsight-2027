import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { CONFERENCE_DATA, type CommitteeMember, type CommitteeSecretary } from '../data/conference';

interface CommitteeCardProps {
  member: CommitteeMember | CommitteeSecretary;
  variant: 'chief' | 'patron' | 'convener' | 'secretary';
  delay?: number;
}

const CommitteeMemberCard: React.FC<CommitteeCardProps> = ({ member, variant, delay = 0.1 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Consistent portrait display dimensions adhering to visual hierarchy
  const photoSizeClasses = 
    variant === 'chief'
      ? 'w-[150px] sm:w-[170px] md:w-[185px] h-[185px] sm:h-[210px] md:h-[230px]'
      : variant === 'patron'
        ? 'w-[140px] sm:w-[155px] md:w-[170px] h-[175px] sm:h-[195px] md:h-[215px]'
        : variant === 'convener'
          ? 'w-[130px] sm:w-[145px] md:w-[160px] h-[165px] sm:h-[185px] md:h-[200px]'
          : 'w-[120px] sm:w-[135px] md:w-[145px] h-[150px] sm:h-[170px] md:h-[185px]';

  const cardContainerClasses =
    variant === 'chief'
      ? 'p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#D9A441]/45 hover:border-[#D9A441] shadow-xl hover:shadow-2xl'
      : variant === 'patron'
        ? 'p-6 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/25 hover:border-[#176BFF]/50 shadow-md hover:shadow-lg'
        : variant === 'convener'
          ? 'p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF]/50 shadow-md hover:shadow-lg'
          : 'p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/45 shadow-sm hover:shadow-md';

  const nameSizeClasses =
    variant === 'chief'
      ? 'text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#0B2D6B]'
      : variant === 'patron'
        ? 'text-xl sm:text-2xl md:text-2xl font-bold text-[#0B2D6B]'
        : variant === 'convener'
          ? 'text-lg sm:text-xl md:text-xl font-bold text-[#0B2D6B]'
          : 'text-base sm:text-lg font-bold text-[#0B2D6B]';

  const roleBadge = variant === 'chief' ? (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/40 uppercase tracking-wider shadow-xs">
      <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
      {member.role}
    </span>
  ) : (
    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 uppercase tracking-wider shadow-xs">
      {member.role}
    </span>
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25, scale: variant === 'chief' ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${cardContainerClasses} hover:scale-[1.015] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-between relative overflow-hidden group w-full`}
    >
      {variant === 'chief' && (
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D9A441]/10 rounded-full blur-xl pointer-events-none" />
      )}

      {/* 1. Official Member Photo */}
      <div className={`${photoSizeClasses} mx-auto rounded-2xl overflow-hidden border-2 ${variant === 'chief' ? 'border-[#D9A441]/50 group-hover:border-[#D9A441]' : 'border-[#176BFF]/25 group-hover:border-[#176BFF]/50'} shadow-md shadow-[#0B2D6B]/5 group-hover:shadow-lg transition-all mb-4 bg-[#F5F9FF] shrink-0`}>
        <img
          src={member.image}
          alt={member.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ objectPosition: member.objectPosition || 'center' }}
          loading="lazy"
        />
      </div>

      {/* 2. Member Name */}
      <h3 className={`${nameSizeClasses} tracking-tight leading-snug`}>
        {member.name}
      </h3>

      {/* 3. Designation & Department */}
      <div className="mt-1.5 sm:mt-2 space-y-0.5">
        <p className={`${variant === 'chief' ? 'text-base sm:text-lg font-semibold text-[#176BFF]' : 'text-sm sm:text-base font-semibold text-[#174EA6]'} leading-snug`}>
          {member.designation}
        </p>
        {member.institution && (
          <p className="text-xs sm:text-sm text-[#1A2B4A]/70 leading-relaxed">
            {member.institution}
          </p>
        )}
      </div>

      {/* 4. Committee Role */}
      <div className="mt-4 pt-0.5">
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

        {/* 1. Chief Patron — Shri. L. Gopalakrishnan (largest profile presentation) */}
        <div className="max-w-xl mx-auto mb-10">
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.chiefPatron} 
            variant="chief" 
            delay={0.05} 
          />
        </div>

        {/* 2. Patron — Dr. G. Thilagavathi (placed below Chief Patron, slightly smaller) */}
        <div className="max-w-lg mx-auto mb-10">
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.patron} 
            variant="patron" 
            delay={0.1} 
          />
        </div>

        {/* 3. Convener — Dr. B. Vinoth Kumar (placed below Patron, not beside her, slightly smaller) */}
        <div className="max-w-md mx-auto mb-12">
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.convener} 
            variant="convener" 
            delay={0.15} 
          />
        </div>

        {/* 4. Three Organizing Secretaries (below Convener, side by side on desktop) */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="text-center mb-6">
            <h4 className="text-base font-extrabold uppercase tracking-widest text-brand-primary">
              ORGANIZING SECRETARIES
            </h4>
            <div className="w-16 h-1 bg-[#244A91] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
