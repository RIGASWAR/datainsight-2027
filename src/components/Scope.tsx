import React from 'react';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Server, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const Scope: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scopePillars = [
    {
      number: '01',
      title: 'Multimodal Data Processing and Analytics',
      desc: 'Cross-modal representation learning, audio-visual synthesis, heterogeneous signal processing, multimodal embeddings, and unified sensor stream analytics.',
      icon: Layers,
      color: '#00A8E8',
    },
    {
      number: '02',
      title: 'Artificial Intelligence and Intelligent Computing',
      desc: 'Deep neural architectures, foundation models, explainable AI (XAI), cognitive inference engines, and automated reasoning pipelines.',
      icon: Sparkles,
      color: '#176BFF',
    },
    {
      number: '03',
      title: 'Data Science, Knowledge Discovery and Decision Intelligence',
      desc: 'Scalable data lakes, graph analytics, semantic knowledge networks, predictive modeling, and automated decision-support frameworks.',
      icon: TrendingUp,
      color: '#D9A441',
    },
    {
      number: '04',
      title: 'Cybersecurity, Privacy and Data Protection',
      desc: 'Zero-trust computing, multimodal biometrics, privacy-preserving machine learning, differential privacy, and high-assurance forensic validation.',
      icon: ShieldCheck,
      color: '#00A8E8',
    },
    {
      number: '05',
      title: 'Computing Architectures for Data-Driven Systems',
      desc: 'High-performance computing (HPC), edge-fog orchestration, AI hardware accelerators, distributed pipelines, and cloud-native backbones.',
      icon: Server,
      color: '#176BFF',
    },
  ];

  return (
    <section id="scope" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-xs">
            <Compass className="w-4 h-4 text-[#D9A441]" />
            RESEARCH HORIZONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            SCOPE OF THE CONFERENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            {CONFERENCE_DATA.scope.overview}
          </p>
        </motion.div>

        {/* 5 Core Scope Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {scopePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.65, 
                  delay: idx * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative rounded-2xl bg-white p-7 border border-[#176BFF]/15 shadow-sm hover:border-[#176BFF]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#176BFF]/10 text-[#176BFF] tracking-wider">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-center group-hover:bg-[#244A91] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-[#244A91] group-hover:text-[#D9A353] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2554] group-hover:text-[#244A91] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#4A5E82] mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#176BFF]">
                  <span>Scope Track {pillar.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Official Scope Notice */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              duration: 0.65, 
              delay: 0.5, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="rounded-2xl p-7 bg-gradient-to-br from-[#06142E] to-[#123673] text-white border border-white/15 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#D9A353] text-[#071329] tracking-wider uppercase">
                  Documentation
                </span>
                <FileCheck2 className="w-6 h-6 text-[#D9A353]" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Detailed Scope Document
              </h3>
              <p className="text-xs sm:text-sm text-[#A5C2F4] mt-2.5 leading-relaxed">
                The comprehensive scope document and full list of specialized sub-domains will be published in the official conference circular.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/15">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-white/15 text-[#D9A353] border border-[#D9A353]/30">
                Detailed Scope: TO BE INCLUDED
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
