import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-gradient-to-b from-[#F5F9FF] via-[#EEF5FF] to-[#F5F9FF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary">
            CONTACT US
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#244A91] via-[#00A8E8] to-[#D9A441] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Compact, Clean Card Container */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#176BFF]/20 shadow-xl shadow-[#0B2D6B]/5 space-y-8"
        >
          {/* Organizing / Contact Information Block */}
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#244A91]/10 flex items-center justify-center text-[#244A91] mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2D6B]">
              Department of Information Technology
            </h3>
            <p className="text-base sm:text-lg font-semibold text-[#174EA6]">
              PSG College of Technology
            </p>
            <p className="text-sm sm:text-base text-[#4A5E82] flex items-center justify-center gap-1.5 pt-1">
              <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
              <span>Coimbatore, Tamil Nadu, India – 641004</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#176BFF]/20 to-transparent" />

          {/* Contact Details: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Email Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#176BFF]/15 text-center space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174EA6]">
                <Mail className="w-4 h-4 text-[#D9A441]" />
                <span>Email</span>
              </div>
              <div className="text-sm sm:text-base font-bold font-mono text-[#0B2D6B]">
                TO BE INCLUDED
              </div>
            </div>

            {/* Phone Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#176BFF]/15 text-center space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174EA6]">
                <Phone className="w-4 h-4 text-[#D9A441]" />
                <span>Phone</span>
              </div>
              <div className="text-sm sm:text-base font-bold font-mono text-[#0B2D6B]">
                TO BE INCLUDED
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
