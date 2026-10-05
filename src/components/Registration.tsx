import React from 'react';
import { 
  Building2, 
  Receipt,
  CreditCard
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface RegistrationProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const Registration: React.FC<RegistrationProps> = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="registration" className="py-20 md:py-28 relative bg-gradient-to-b from-white via-[#F7FAFF] to-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-[120px] pointer-events-none" />

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
            <CreditCard className="w-3.5 h-3.5 text-[#D9A441]" />
            CONFERENCE PARTICIPATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            REGISTRATION DETAILS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Participation fee structure, delegate categories, and electronic payment guidelines for DATAINSIGHT 2027.
          </p>
        </motion.div>

        {/* Vertically Stacked Layout: Registration Details Box Above, Payment Details Box Below */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
          
          {/* Top Block: Registration Details Box */}
          <div className="w-full space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-[#176BFF]/20 shadow-md overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F5F9FF] to-white border-b border-[#176BFF]/15 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2D6B]">
                      Registration Details
                    </h3>
                    <p className="text-xs text-[#1A2B4A]/65">National & International Delegates</p>
                  </div>
                </div>
              </div>

              {/* Box Content: exactly TO BE UPDATED SOON */}
              <div className="p-12 sm:p-16 text-center flex items-center justify-center bg-white">
                <p className="text-base sm:text-lg font-bold tracking-wider text-[#D9A441] uppercase font-mono">
                  TO BE UPDATED SOON
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Block: Payment Details Box */}
          <div className="w-full space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-[#176BFF]/20 shadow-md overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F5F9FF] to-white border-b border-[#176BFF]/15 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/10 text-[#00A8E8] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2D6B]">
                      Payment Details
                    </h3>
                    <p className="text-xs text-[#1A2B4A]/65">Electronic Transfer Guidelines</p>
                  </div>
                </div>
              </div>

              {/* Box Content: exactly TO BE UPDATED SOON */}
              <div className="p-12 sm:p-16 text-center flex items-center justify-center bg-white">
                <p className="text-base sm:text-lg font-bold tracking-wider text-[#D9A441] uppercase font-mono">
                  TO BE UPDATED SOON
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
