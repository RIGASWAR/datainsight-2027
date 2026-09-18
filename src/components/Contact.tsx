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
    <section id="contact" className="py-20 md:py-28 relative bg-[#071A3D] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#19C7E8]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#176BFF]/15 text-[#19C7E8] border border-[#19C7E8]/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#E9B949]" />
            SECRETARIAT INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CONTACT <span className="gradient-text-gold">US</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E9B949] via-[#19C7E8] to-[#176BFF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#C5D4EE]">
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
              className="p-6 sm:p-7 rounded-2xl glass-card border border-[#19C7E8]/30 shadow-xl space-y-3 hover:border-[#19C7E8]/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#0B2859] border border-[#19C7E8]/40 flex items-center justify-center text-white">
                  <Building className="w-5 h-5 text-[#19C7E8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {CONFERENCE_DATA.contact.department}
                  </h3>
                  <p className="text-xs text-[#E9B949] font-semibold">
                    {CONFERENCE_DATA.contact.institution}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#C5D4EE] pt-2 border-t border-white/10 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#19C7E8] flex-shrink-0 mt-0.5" />
                <span>{CONFERENCE_DATA.contact.location}</span>
              </p>
            </motion.div>

            {/* Direct Communication Channels (Sequential) */}
            <div className="space-y-3">
              
              {/* Email */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2859] flex items-center justify-center text-[#19C7E8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8EA7CE] uppercase font-bold">Email Address</span>
                    <div className="text-xs font-bold text-white">Conference Secretariat</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#E9B949] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {CONFERENCE_DATA.contact.email}
                </span>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2859] flex items-center justify-center text-[#19C7E8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8EA7CE] uppercase font-bold">Phone Support</span>
                    <div className="text-xs font-bold text-white">Desk Line</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#E9B949] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {CONFERENCE_DATA.contact.phone}
                </span>
              </motion.div>

              {/* Official Website */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2859] flex items-center justify-center text-[#19C7E8]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8EA7CE] uppercase font-bold">Web Portal</span>
                    <div className="text-xs font-bold text-white">Official URL</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#E9B949] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {CONFERENCE_DATA.contact.website}
                </span>
              </motion.div>

              {/* Social Channels */}
              <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.34 }}
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-[#19C7E8]/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2859] flex items-center justify-center text-[#19C7E8]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8EA7CE] uppercase font-bold">Social Media</span>
                    <div className="text-xs font-bold text-white">Academic Channels</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#E9B949] px-2 py-0.5 rounded bg-white/5 border border-white/10">
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
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-[#19C7E8]/30 shadow-2xl space-y-6 text-left hover:border-[#19C7E8]/50 transition-colors">
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Send a Message to the Secretariat
                </h3>
                <p className="text-xs text-[#8EA7CE] mt-1">
                  Fill in your details below. We will attend to your inquiry at the earliest opportunity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#C5D4EE] mb-1.5">
                      Full Name <span className="text-[#E9B949]">*</span>
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
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#0B2859]/60 border border-[#19C7E8]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#19C7E8] focus:ring-2 focus:ring-[#19C7E8]/40 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#C5D4EE] mb-1.5">
                      Email Address <span className="text-[#E9B949]">*</span>
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
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#0B2859]/60 border border-[#19C7E8]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#19C7E8] focus:ring-2 focus:ring-[#19C7E8]/40 transition-all"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-[#C5D4EE] mb-1.5">
                    Subject <span className="text-[#8EA7CE]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Paper submission inquiry / Track details"
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#0B2859]/60 border border-[#19C7E8]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#19C7E8] focus:ring-2 focus:ring-[#19C7E8]/40 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#C5D4EE] mb-1.5">
                    Message <span className="text-[#E9B949]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please state your question or conference query here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B2859]/60 border border-[#19C7E8]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#19C7E8] focus:ring-2 focus:ring-[#19C7E8]/40 transition-all"
                  />
                </div>

                {/* Submit Button enters last */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[50px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#176BFF] to-[#19C7E8] text-white shadow-lg shadow-[#176BFF]/30 hover:shadow-[#19C7E8]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>RECORDING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
