import React from 'react';
import { 
  CreditCard, 
  Building2, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  Receipt
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface RegistrationProps {
  onActionClick?: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onActionClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const regData = CONFERENCE_DATA.registration;

  const paymentFields = [
    { label: 'Payment Type', value: regData.payment.paymentType, isConfirmed: true },
    { label: 'Account Number', value: regData.payment.accountNumber, isConfirmed: false },
    { label: 'Name of Beneficiary', value: regData.payment.beneficiaryName, isConfirmed: false },
    { label: 'Bank', value: regData.payment.bankName, isConfirmed: false },
    { label: 'Account Type', value: regData.payment.accountType, isConfirmed: false },
    { label: 'IFSC Code', value: regData.payment.ifscCode, isConfirmed: false },
    { label: 'SWIFT Code', value: regData.payment.swiftCode, isConfirmed: false },
    { label: 'Payment Address', value: regData.payment.paymentAddress, isConfirmed: false },
  ];

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

        {/* Notice Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#FFF9E6] border border-[#D9A441]/40 flex items-start gap-4 mb-10 shadow-sm"
        >
          <AlertCircle className="w-5 h-5 text-[#D9A441] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9A441]">
              Registration & Payment Advisory
            </h4>
            <p className="text-sm text-[#1A2B4A] font-medium mt-1 leading-relaxed">
              Official registration fees, banking beneficiary details, and online payment gateway links for DATAINSIGHT 2027 will be finalized and published following the Call for Papers release. Status: <span className="font-bold text-[#D9A441]">TO BE INCLUDED</span>
            </p>
          </div>
        </motion.div>

        {/* Vertically Stacked Layout: Categories Table Above, Payment Details Table Below */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto w-full">
          
          {/* Top Block: Delegate Categories & Fee Table */}
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
                      Registration Categories & Fees
                    </h3>
                    <p className="text-xs text-[#1A2B4A]/65">National & International Delegates</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441]/30">
                  TO BE INCLUDED
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px] sm:min-w-0">
                  <thead>
                    <tr className="bg-[#0B2D6B]/5 border-b border-[#176BFF]/15 text-[11px] font-bold text-[#0B2D6B] uppercase tracking-wider">
                      <th className="py-3 px-4 sm:px-6">Delegate Category</th>
                      <th className="py-3 px-4 sm:px-6">Entitlements</th>
                      <th className="py-3 px-4 sm:px-6 text-right">Registration Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#176BFF]/10 text-sm">
                    {regData.categories.map((cat, idx) => (
                      <tr key={idx} className="hover:bg-[#F5F9FF]/60 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0B2D6B] text-xs sm:text-sm">
                          {cat.category}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-xs text-[#1A2B4A]/75">
                          {cat.details}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right font-mono font-bold text-[#D9A441]">
                          <span className="inline-block px-2.5 py-1 rounded bg-[#FFF9E6] border border-[#D9A441]/30 text-xs whitespace-nowrap">
                            {cat.fee}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Inclusions Footer */}
              <div className="p-5 bg-[#F5F9FF]/80 border-t border-[#176BFF]/15 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#174EA6]">
                  Registration Includes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A2B4A]/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#176BFF] flex-shrink-0" />
                    <span>Access to all 5 technical tracks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#176BFF] flex-shrink-0" />
                    <span>Keynote addresses & plenary talks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#176BFF] flex-shrink-0" />
                    <span>Official conference delegate kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#176BFF] flex-shrink-0" />
                    <span>Proceedings & presentation certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Block: Payment Information Table */}
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
                      Payment Information
                    </h3>
                    <p className="text-xs text-[#1A2B4A]/65">Electronic Transfer Guidelines</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#176BFF] px-2.5 py-1 rounded bg-[#176BFF]/10">
                  {regData.payment.paymentType}
                </span>
              </div>

              {/* Key-Value Details Table */}
              <div className="p-5 sm:p-6 divide-y divide-[#176BFF]/10 text-sm">
                {paymentFields.map((field) => (
                  <div key={field.label} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <span className="text-xs sm:text-sm font-semibold text-[#1A2B4A]/70">
                      {field.label}:
                    </span>
                    <span className={`text-xs sm:text-sm font-mono font-bold break-all sm:break-normal ${
                      field.isConfirmed ? 'text-[#0B2D6B]' : 'text-[#D9A441] bg-[#FFF9E6] px-2 py-0.5 rounded border border-[#D9A441]/30 self-start sm:self-auto'
                    }`}>
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Area */}
              <div className="p-5 bg-[#F5F9FF] border-t border-[#176BFF]/15 space-y-3">
                <button
                  type="button"
                  onClick={() => onActionClick ? onActionClick('register') : undefined}
                  className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#176BFF] to-[#00A8E8] hover:from-[#0B2D6B] hover:to-[#176BFF] text-white shadow-md shadow-[#176BFF]/25 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Register for Conference</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>
                <p className="text-[11px] text-center text-[#1A2B4A]/65">
                  Registration portal opens following paper notification.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
