import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, Users, ChevronUp, ChevronDown } from 'lucide-react';
import { CONFERENCE_DATA, type CommitteeMember, type CommitteeSecretary } from '../data/conference';

interface CommitteeCardProps {
  member: CommitteeMember | CommitteeSecretary;
  variant: 'chief' | 'featured' | 'secretary';
  delay?: number;
}

const CommitteeMemberCard: React.FC<CommitteeCardProps> = ({ member, variant, delay = 0.1 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Consistent portrait display dimensions adhering to requested ranges:
  // Desktop: 150-180px W x 180-220px H
  // Tablet: 130-160px W x 160-200px H
  // Mobile: 120-150px W x 150-190px H
  const photoSizeClasses = 
    variant === 'chief'
      ? 'w-[140px] sm:w-[160px] md:w-[175px] h-[175px] sm:h-[200px] md:h-[220px]'
      : variant === 'featured'
        ? 'w-[130px] sm:w-[150px] md:w-[165px] h-[165px] sm:h-[190px] md:h-[210px]'
        : 'w-[125px] sm:w-[140px] md:w-[155px] h-[160px] sm:h-[180px] md:h-[195px]';

  const cardContainerClasses =
    variant === 'chief'
      ? 'p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#D9A441]/45 hover:border-[#D9A441] shadow-xl hover:shadow-2xl'
      : variant === 'featured'
        ? 'p-6 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 hover:border-[#176BFF]/50 shadow-md hover:shadow-lg'
        : 'p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/45 shadow-sm hover:shadow-md';

  const nameSizeClasses =
    variant === 'chief'
      ? 'text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2D6B]'
      : variant === 'featured'
        ? 'text-xl sm:text-2xl font-bold text-[#0B2D6B]'
        : 'text-lg sm:text-xl font-bold text-[#0B2D6B]';

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
      className={`${cardContainerClasses} hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between relative overflow-hidden group`}
    >
      {variant === 'chief' && (
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D9A441]/10 rounded-full blur-xl pointer-events-none" />
      )}

      {/* 1. OFFICIAL MEMBER PHOTO (Clearly ABOVE the corresponding member's name) */}
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

      {/* 3. Designation */}
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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <section id="committee" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
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

        {/* Tier 1: Chief Patron (Featured Primary Card with Official Photo) */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto mb-10">
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.chiefPatron} 
            variant="chief" 
            delay={0.05} 
          />
        </div>

        {/* Tier 2: Patron & Convener (Two Featured Cards in a Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.patron} 
            variant="featured" 
            delay={0.1} 
          />
          <CommitteeMemberCard 
            member={CONFERENCE_DATA.committee.convener} 
            variant="featured" 
            delay={0.18} 
          />
        </div>

        {/* Tier 3: Organizing Secretaries (Three Cards: 3 on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h4 className="text-base font-extrabold uppercase tracking-widest text-[#D9A441]">
              ORGANIZING SECRETARIES
            </h4>
            <div className="w-16 h-1 bg-[#D9A441] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Tier 4: Additional Committee Categories (Expandable Placeholders) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto pt-6 border-t border-[#176BFF]/15"
        >
          <div className="text-center mb-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#174EA6]">
              Additional Committees & Advisory Bodies
            </h4>
            <p className="text-sm text-[#1A2B4A]/70 mt-1">
              Member appointments and international advisory boards in formation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CONFERENCE_DATA.committee.additionalRoles.map((role) => {
              const isExpanded = expandedCategory === role.category;

              return (
                <div
                  key={role.category}
                  className="rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 shadow-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(role.category)}
                    className="w-full p-4.5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#0B2D6B] focus:outline-none"
                  >
                    <span>{role.category}</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-[#D9A441] font-mono font-bold px-2.5 py-1 rounded-md bg-[#FFF9E6] border border-[#D9A441]/30">
                        {role.status}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4.5 h-4.5 text-[#176BFF]" />
                      ) : (
                        <ChevronDown className="w-4.5 h-4.5 text-[#174EA6]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 pt-1.5 text-xs sm:text-sm text-[#1A2B4A]/85 border-t border-[#176BFF]/10 bg-[#F5F9FF] overflow-hidden space-y-1 leading-relaxed"
                      >
                        <p>
                          The roster for <strong>{role.category}</strong> is being finalized by the organizing secretariat and will be posted upon institutional confirmation.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
