import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Share2, 
  Send, 
  Building
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONFERENCE_DATA } from '../data/conference';

interface ContactProps {
  onFormSuccess: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onFormSuccess }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSuccess("Thank you. Your message has been recorded.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F5F9FF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#176BFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/20 mb-3 shadow-sm">
            <Mail className="w-4 h-4 text-[#D9A441]" />
            SECRETARIAT INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2D6B]">
            CONTACT <span className="gradient-text-gold">US</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D9A441] via-[#00A8E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#1A2B4A]/80">
            Have questions regarding paper submissions, conference registration, or sponsorship opportunities? Connect with our team.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details Cards (sequential appearance) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Department Card */}
            <motion.div 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#176BFF]/20 shadow-sm space-y-3.5 hover:border-[#176BFF]/40 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF]">
                  <Building className="w-5 h-5 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2D6B]">
                    {CONFERENCE_DATA.contact.department}
                  </h3>
                  <p className="text-sm text-[#D9A441] font-semibold">
                    {CONFERENCE_DATA.contact.institution}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#1A2B4A]/80 pt-3 border-t border-[#176BFF]/10 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#176BFF] flex-shrink-0 mt-1" />
                <span>{CONFERENCE_DATA.contact.location}</span>
              </p>
            </motion.div>

            {/* Direct Communication Channels (Sequential) */}
            <div className="space-y-3.5">
              
              {/* Email */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 hover:-translate-y-0.5 shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F9FF] flex items-center justify-center text-[#176BFF]">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1A2B4A]/60 uppercase font-bold tracking-wider">Email Address</span>
                    <div className="text-sm sm:text-base font-bold text-[#0B2D6B]">Conference Secretariat</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#D9A441] px-3 py-1 rounded bg-[#FFF9E6] border border-[#D9A441]/30">
                  {CONFERENCE_DATA.contact.email}
                </span>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 hover:-translate-y-0.5 shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F9FF] flex items-center justify-center text-[#176BFF]">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1A2B4A]/60 uppercase font-bold tracking-wider">Phone Support</span>
                    <div className="text-sm sm:text-base font-bold text-[#0B2D6B]">Desk Line</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#D9A441] px-3 py-1 rounded bg-[#FFF9E6] border border-[#D9A441]/30">
                  {CONFERENCE_DATA.contact.phone}
                </span>
              </motion.div>

              {/* Official Website */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 hover:-translate-y-0.5 shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F9FF] flex items-center justify-center text-[#176BFF]">
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1A2B4A]/60 uppercase font-bold tracking-wider">Web Portal</span>
                    <div className="text-sm sm:text-base font-bold text-[#0B2D6B]">Official URL</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#D9A441] px-3 py-1 rounded bg-[#FFF9E6] border border-[#D9A441]/30">
                  {CONFERENCE_DATA.contact.website}
                </span>
              </motion.div>

              {/* Social Channels */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.34 }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#176BFF]/15 hover:border-[#176BFF]/35 hover:-translate-y-0.5 shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F9FF] flex items-center justify-center text-[#176BFF]">
                    <Share2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1A2B4A]/60 uppercase font-bold tracking-wider">Social Media</span>
                    <div className="text-sm sm:text-base font-bold text-[#0B2D6B]">Academic Channels</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#D9A441] px-3 py-1 rounded bg-[#FFF9E6] border border-[#D9A441]/30">
                  {CONFERENCE_DATA.contact.socialMedia}
                </span>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Accessible Contact Form (fades upward + field stagger) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#176BFF]/20 shadow-xl space-y-6 text-left hover:border-[#176BFF]/40 transition-colors">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0B2D6B]">
                  Send a Message to the Secretariat
                </h3>
                <p className="text-sm text-[#1A2B4A]/70 mt-1.5">
                  Fill in your details below. We will attend to your inquiry at the earliest opportunity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1A2B4A] mb-1.5">
                      Full Name <span className="text-[#D9A441]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Dr. Jane Doe"
                      className="w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 text-[#1A2B4A] placeholder-[#1A2B4A]/40 text-sm sm:text-base focus:outline-none focus:border-[#176BFF] focus:ring-2 focus:ring-[#176BFF]/20 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1A2B4A] mb-1.5">
                      Email Address <span className="text-[#D9A441]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="author@university.edu"
                      className="w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 text-[#1A2B4A] placeholder-[#1A2B4A]/40 text-sm sm:text-base focus:outline-none focus:border-[#176BFF] focus:ring-2 focus:ring-[#176BFF]/20 transition-all"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#1A2B4A] mb-1.5">
                    Subject <span className="text-[#1A2B4A]/60">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Paper submission inquiry / Track details"
                    className="w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 text-[#1A2B4A] placeholder-[#1A2B4A]/40 text-sm sm:text-base focus:outline-none focus:border-[#176BFF] focus:ring-2 focus:ring-[#176BFF]/20 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1A2B4A] mb-1.5">
                    Message <span className="text-[#D9A441]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please state your question or conference query here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/20 text-[#1A2B4A] placeholder-[#1A2B4A]/40 text-sm sm:text-base focus:outline-none focus:border-[#176BFF] focus:ring-2 focus:ring-[#176BFF]/20 transition-all"
                  />
                </div>

                {/* Submit Button enters last */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-[#176BFF] to-[#00A8E8] text-white shadow-lg shadow-[#176BFF]/25 hover:shadow-[#00A8E8]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>RECORDING...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
