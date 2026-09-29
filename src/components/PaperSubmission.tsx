import React from 'react';
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  FileCheck2
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface PaperSubmissionProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const PaperSubmission: React.FC<PaperSubmissionProps> = ({ onActionClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const subData = CONFERENCE_DATA.paperSubmission;

  return (
    <section id="submission" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#176BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-[120px] pointer-events-none" />

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
            <UploadCloud className="w-3.5 h-3.5 text-[#D9A441]" />
            AUTHOR INSTRUCTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            PAPER SUBMISSION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Submit original, unpublished research contributions in the areas of multimodal analytics, intelligent systems, and cybersecurity.
          </p>
        </motion.div>

        {/* 2-Column Academic Submission Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Guidelines & Categories */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Guidelines Card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#176BFF]/20 shadow-md space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B2D6B]">
                    Submission Guidelines
                  </h3>
                  <span className="text-xs text-[#1A2B4A]/60">Manuscript Standards & Scope</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#1A2B4A]/85 leading-relaxed">
                {subData.guidelines}
              </p>
              <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 text-xs sm:text-sm text-[#174EA6] font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                <span>Formal submission circular and detailed author checklist: <strong>TO BE INCLUDED</strong></span>
              </div>
            </motion.div>

            {/* Format & Review Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/20 shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00A8E8]/10 text-[#00A8E8] flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B2D6B]">
                  Paper Format
                </h4>
                <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
                  {subData.format}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-[#D9A441]">
                  Template: TO BE INCLUDED
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#176BFF]/20 shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B2D6B]">
                  Review Process
                </h4>
                <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
                  {subData.reviewProcess}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-[#176BFF]">
                  Double-Blind Peer Review
                </div>
              </motion.div>
            </div>

            {/* Submission Instructions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {subData.instructions.map((inst) => (
                <div 
                  key={inst.title}
                  className="p-4 rounded-xl bg-white border border-[#176BFF]/15 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#176BFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#0B2D6B] uppercase tracking-wider">
                      {inst.title}
                    </h5>
                    <p className="text-xs text-[#1A2B4A]/75 mt-0.5 leading-relaxed">
                      {inst.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Submission Platform & Action */}
          <div className="lg:col-span-5 space-y-6">
            
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B2D6B] via-[#0D3B82] to-[#174EA6] text-white shadow-xl border border-white/10 space-y-6 relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00A8E8]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#D9A441] bg-[#D9A441]/15 border border-[#D9A441]/30">
                  ONLINE SUBMISSION SYSTEM
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Submission Platform
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  The official manuscript submission portal for DATAINSIGHT 2027 will be opened in accordance with the conference submission timeline.
                </p>
              </div>

              {/* Status Box */}
              <div className="relative z-10 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-200 uppercase tracking-wider">
                  <span>Portal Status</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#D9A441]/25 text-[#D9A441] font-mono text-xs">
                    TO BE INCLUDED
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Platform URL and author submission credentials: <span className="font-semibold text-white">TO BE INCLUDED</span> upon CFP launch.
                </p>
              </div>

              {/* Submit Paper CTA Button */}
              <div className="relative z-10 pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => onActionClick ? onActionClick('submit') : undefined}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#00A8E8] to-[#176BFF] hover:from-[#176BFF] hover:to-[#00A8E8] text-white shadow-lg shadow-[#176BFF]/30 hover:shadow-[#176BFF]/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <UploadCloud className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Submit Paper</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>

                <p className="text-[11px] text-center text-white/60">
                  Submissions must be original work not submitted elsewhere.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
