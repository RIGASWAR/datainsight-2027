import React from 'react';
import { 
  FileText, 
  Download, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface CallForPapersProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
}

export const CallForPapers: React.FC<CallForPapersProps> = ({ onActionClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="cfp" className="py-20 md:py-28 relative bg-[#071A3D] overflow-hidden">
      {/* Dynamic Glow and Mesh */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[#176BFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 lg:p-16 rounded-3xl glass-card border border-[#19C7E8]/30 shadow-2xl relative overflow-hidden"
        >
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#19C7E8]/20 to-[#176BFF]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-[#E9B949]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/20 text-[#19C7E8] border border-[#19C7E8]/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E9B949]" />
                INVITATION FOR CONTRIBUTIONS
              </motion.div>

              <motion.h2 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                {CONFERENCE_DATA.callForPapers.heading}
              </motion.h2>

              <motion.p 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-[#C5D4EE] leading-relaxed"
              >
                {CONFERENCE_DATA.callForPapers.description}
              </motion.p>

              {/* Submission Highlights Checklist */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#F7FAFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#19C7E8] flex-shrink-0" />
                  <span>Peer-Reviewed Rigor</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F7FAFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#19C7E8] flex-shrink-0" />
                  <span>Plagiarism & Ethics Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F7FAFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#19C7E8] flex-shrink-0" />
                  <span>International Best Paper Awards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F7FAFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#19C7E8] flex-shrink-0" />
                  <span>Oral & Poster Tracks</span>
                </div>
              </motion.div>

              {/* Action Buttons with subtle hover lift and soft glow */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => onActionClick('cfp')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#176BFF] to-[#19C7E8] text-white shadow-lg shadow-[#176BFF]/30 hover:shadow-[#19C7E8]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD CFP</span>
                </button>

                <button
                  onClick={() => onActionClick('submit')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0B2859] hover:bg-[#0F377A] text-[#E9B949] border border-[#E9B949]/50 hover:border-[#E9B949] shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>SUBMIT PAPER</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>

              <div className="text-xs text-[#8EA7CE]">
                * Official CFP document and paper submission portal link: <span className="text-[#E9B949] font-semibold">{CONFERENCE_DATA.callForPapers.cfpDocumentLink}</span>
              </div>
            </div>

            {/* Right Column: Academic Paper Graphic with subtle scale entrance */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-[#0B2859] to-[#071A3D] border-2 border-[#19C7E8]/30 shadow-2xl space-y-4 hover:border-[#19C7E8]/60 transition-colors">
                
                {/* Paper Header Preview */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#176BFF]/20 border border-[#19C7E8]/40 flex items-center justify-center text-[#19C7E8]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Call for Papers (CFP)</div>
                      <div className="text-[10px] text-[#8EA7CE]">DATAINSIGHT 2027 Guidelines</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/30">
                    PDF Notice
                  </span>
                </div>

                {/* Abstract Lines */}
                <div className="space-y-2 py-2">
                  <div className="h-3 w-3/4 bg-white/15 rounded animate-pulse" />
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-5/6 bg-white/10 rounded" />
                  <div className="h-2 w-4/5 bg-white/10 rounded" />
                  <div className="h-2 w-full bg-white/10 rounded" />
                </div>

                {/* Scope Box */}
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                  <div className="text-[10px] font-bold text-[#19C7E8] uppercase">Manuscript Specifications</div>
                  <div className="text-[11px] text-[#C5D4EE]">Format & Style Template: <strong className="text-white">TO BE INCLUDED</strong></div>
                  <div className="text-[11px] text-[#C5D4EE]">Portal: <strong className="text-white">TO BE INCLUDED</strong></div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#8EA7CE]">
                  <span>Status: Announced</span>
                  <span className="text-[#19C7E8] font-semibold">Dec 16–18, 2027</span>
                </div>

              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
