import React, { useState } from 'react';
import { 
  FileText, 
  Image as ImageIcon, 
  Mic, 
  Video, 
  Cpu, 
  Database, 
  Brain, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    { name: 'Text', desc: 'Natural Language Processing, Text Mining & LLM Architectures', icon: FileText, color: '#00A8E8' },
    { name: 'Image', desc: 'Computer Vision, Multi-spectral Sensing & Feature Extraction', icon: ImageIcon, color: '#176BFF' },
    { name: 'Audio', desc: 'Speech Recognition, Acoustic Signal Processing & Sonics', icon: Mic, color: '#D9A441' },
    { name: 'Video', desc: 'Temporal Video Dynamics, Action Recognition & Motion Parsing', icon: Video, color: '#00A8E8' },
    { name: 'Sensor', desc: 'Cyber-Physical Streams, IoT Telemetry & Ambient Signals', icon: Cpu, color: '#176BFF' },
    { name: 'Data', desc: 'Heterogeneous Fusion, Graph Topologies & Scalable Lakes', icon: Database, color: '#D9A441' },
    { name: 'Intelligence', desc: 'Deep Learning, Explainable AI (XAI) & Cognitive Inference', icon: Brain, color: '#00A8E8' },
    { name: 'Security', desc: 'Zero-Trust, Multimodal Biometrics, Privacy & Cryptography', icon: ShieldCheck, color: '#D9A441' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Staggered Entrance */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/25 mb-3 shadow-xs">
            <Info className="w-4 h-4 text-[#D9A441]" />
            CONFERENCE INTRODUCTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            ABOUT DATAINSIGHT 2027
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Official Description (enters with translateY) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 shadow-lg shadow-[#0B2D6B]/5 relative hover:border-[#176BFF]/40 transition-colors">
              <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded text-xs font-bold bg-[#176BFF] text-white uppercase tracking-wider shadow-sm">
                Mission & Scope
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-[#1A2B4A] text-justify pt-1">
                {CONFERENCE_DATA.about.primaryText}
              </p>
            </div>

            {/* Poster Summary Quote */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border-l-4 border-[#D9A441] border-y border-r border-[#176BFF]/15 shadow-sm space-y-2 hover:border-[#D9A441] transition-colors">
              <div className="text-xs sm:text-sm font-bold text-[#D9A441] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Interdisciplinary Horizon</span>
              </div>
              <p className="text-sm sm:text-base text-[#4A5E82] italic leading-relaxed">
                "{CONFERENCE_DATA.about.posterSummary}"
              </p>
            </div>

            {/* Core Metrics with subtle hover lift */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#00A8E8] transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#00A8E8]">3 Days</div>
                <div className="text-xs sm:text-sm text-[#4A5E82] mt-1 font-medium">Dec 16–18, 2027</div>
              </div>
              <div className="p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#D9A441] transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#D9A441]">8 Tracks</div>
                <div className="text-xs sm:text-sm text-[#4A5E82] mt-1 font-medium">Multimodal AI & Security</div>
              </div>
              <div className="p-4 rounded-xl bg-white text-center border border-[#176BFF]/15 shadow-xs hover:-translate-y-1 hover:border-[#176BFF] transition-all">
                <div className="text-2xl sm:text-3xl font-black text-[#176BFF]">PSG Tech</div>
                <div className="text-xs sm:text-sm text-[#4A5E82] mt-1 font-medium">Coimbatore, India</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Animated Circular Multimodal Data Visualization (subtle scale + fade) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Outer Circular Flow Track */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#00A8E8]/30 animate-spin" style={{ animationDuration: '70s' }} />
              <div className="absolute inset-12 rounded-full border border-[#176BFF]/15" />
              
              {/* Central Transformation Core */}
              <div className="relative z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-white border-2 border-[#00A8E8]/40 shadow-xl flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:border-[#176BFF] transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#176BFF] to-[#00A8E8] flex items-center justify-center shadow-md shadow-[#176BFF]/20 mb-1 group-hover:scale-110 transition-transform">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-[#00A8E8] tracking-widest uppercase">
                  Transformation
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#0B2D6B] mt-0.5">
                  Multimodal Pipeline
                </span>
                <span className="text-xs text-[#D9A441] font-semibold mt-1">
                  {steps[activeStep].name} Stage
                </span>
              </div>

              {/* 8 Circular Nodes along perimeter */}
              {steps.map((step, idx) => {
                const total = steps.length;
                const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
                const radius = 42; 
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                const IconComponent = step.icon;
                const isActive = activeStep === idx;

                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center group transition-all duration-300 focus:outline-none`}
                    aria-label={`Multimodal node: ${step.name}`}
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'scale-125 ring-4 ring-[#00A8E8]/30 border-2 border-white'
                          : 'bg-white border border-[#176BFF]/25 hover:scale-110 hover:border-[#176BFF]'
                      }`}
                      style={{
                        backgroundColor: isActive ? step.color : '#FFFFFF',
                      }}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#176BFF]'}`}
                      />
                    </div>
                    <span
                      className={`mt-1 text-xs font-bold tracking-tight px-2 py-0.5 rounded transition-colors ${
                        isActive ? 'text-white bg-[#0B2D6B] shadow-xs' : 'text-[#1A2B4A] bg-white/95 border border-[#176BFF]/15 shadow-xs'
                      }`}
                    >
                      {step.name}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Active Node Detail Card */}
            <div className="mt-4 w-full max-w-md p-4 rounded-xl bg-white border border-[#176BFF]/20 text-center shadow-md transition-all">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#176BFF] uppercase tracking-wider">
                <span>Stage {activeStep + 1} of {steps.length}:</span>
                <span className="text-[#0B2D6B]">{steps[activeStep].name}</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </div>
              <p className="text-xs sm:text-sm text-[#4A5E82] mt-1.5 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
