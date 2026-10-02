import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe2, ExternalLink } from 'lucide-react';
import { CONFERENCE_DATA, type AdvisoryMember } from '../data/conference';

interface AdvisoryCardProps {
  member: AdvisoryMember;
  delay?: number;
}

const AdvisoryMemberCard: React.FC<AdvisoryCardProps> = ({ member, delay = 0.05 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full"
    >
      <div>
        {/* Member Portrait */}
        <div className="w-[140px] sm:w-[150px] h-[170px] sm:h-[185px] mx-auto rounded-2xl overflow-hidden border-2 border-[#176BFF]/25 group-hover:border-[#176BFF]/60 shadow-md shadow-[#0B2D6B]/5 group-hover:shadow-lg transition-all mb-4 bg-[#F5F9FF] shrink-0">
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ objectPosition: member.objectPosition || 'top' }}
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.dataset.fallbackTried) return;
              target.dataset.fallbackTried = 'true';
              const filename = member.image.split('/').pop()?.split('-')[0]?.split('?')[0];
              if (filename) {
                target.src = `/advisory/${filename}`;
              }
            }}
          />
        </div>

        {/* Member Name */}
        <h3 className="text-base sm:text-lg font-bold text-[#0B2D6B] group-hover:text-[#176BFF] transition-colors leading-snug text-center">
          {member.name}
        </h3>

        {/* Designation & Institution */}
        <div className="mt-2 space-y-1 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#174EA6] leading-snug">
            {member.designation}
          </p>
          {member.institution && (
            <p className="text-xs text-[#1A2B4A]/70 leading-relaxed">
              {member.institution}
            </p>
          )}
        </div>

        {/* Area of Expertise */}
        {member.expertise && (
          <div className="mt-3 pt-2.5 border-t border-[#176BFF]/10 text-center">
            <span className="inline-block text-[11px] font-medium text-[#4A5E82] bg-[#176BFF]/5 rounded-md px-2 py-1 border border-[#176BFF]/10 leading-relaxed">
              {member.expertise}
            </span>
          </div>
        )}
      </div>

      {/* View Profile Button */}
      <div className="mt-5 pt-3 border-t border-[#176BFF]/10">
        <a
          href={member.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[#176BFF] bg-white hover:bg-[#176BFF] hover:text-white border border-[#176BFF]/25 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export const AdvisoryCommittee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="advisory" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F7FAFF] via-white to-[#F7FAFF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#176BFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-[#D9A441]" />
            INTERNATIONAL &amp; NATIONAL ADVISORY BOARD
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            ADVISORY COMMITTEE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Distinguished global academicians, researchers, and scientific leaders advising on conference rigor, technical quality, and international collaboration.
          </p>
        </motion.div>

        {/* 16 Advisory Committee Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
          {CONFERENCE_DATA.advisoryCommittee.map((member, idx) => (
            <AdvisoryMemberCard
              key={member.id}
              member={member}
              delay={0.04 * (idx % 4)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
