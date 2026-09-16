import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Award, CheckCircle, Mail, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste Yashoda’s Divine Kitchen! I would like to get in touch with you regarding your traditional products."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect directly to WhatsApp with user's typed enquiry message
    const formattedMsg = `Namaste! My name is ${formData.name || 'Customer'} (Phone: ${formData.phone || 'N/A'}). Enquiry: ${formData.message}`;
    const directUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(directUrl, '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#FAF6EE] border-b border-[#D4AF37]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Direct Kitchen Access
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D472B]">
            Contact the Business
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-serif-devotional">
            Reach us directly via phone, WhatsApp, or Google Maps for fresh domestic pickle & powder enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Official Contact Details Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#D4AF37]/60 shadow-xs space-y-6">
              
              <div>
                <span className="text-xs font-serif-devotional font-bold uppercase tracking-widest text-[#991B1B] block">
                  Official Contact Information
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0D472B] mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-serif-devotional">
                  {BUSINESS_INFO.subtitle} • {BUSINESS_INFO.tagline}
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4 pt-2">
                
                {/* Phone Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/30">
                  <div className="w-12 h-12 rounded-xl bg-[#0D472B] text-[#E5C158] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block">
                      Direct Phone / Mobile
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-mono text-lg sm:text-xl font-bold text-[#0D472B] hover:text-[#991B1B] transition-colors"
                    >
                      +91 {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Touchpoint */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/30">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base sm:text-lg font-bold text-[#0D472B] hover:text-[#25D366] transition-colors"
                    >
                      +91 {BUSINESS_INFO.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* FSSAI Verified Certificate */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#92400E] block">
                      FSSAI Food Safety License
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#78350F]">
                      LIC. NO. {BUSINESS_INFO.fssaiLicense}
                    </span>
                  </div>
                </div>

              </div>

              {/* The 3 Core Action Buttons from Prompt */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0D472B] hover:bg-[#14532D] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#E5C158]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP US</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-[#E5C158]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right: Quick Direct WhatsApp Message Composer */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/60 shadow-xs">
            
            <div className="mb-6">
              <span className="text-xs font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B] block">
                Quick Enquiry
              </span>
              <h3 className="font-serif-devotional font-bold text-xl sm:text-2xl text-[#0D472B] mt-0.5">
                Send Direct Message
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill this quick form to instantly open WhatsApp pre-filled with your requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase font-serif-devotional mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0D472B] focus:ring-1 focus:ring-[#0D472B] text-sm bg-[#FAF6EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase font-serif-devotional mb-1">
                  Your Phone / Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0D472B] focus:ring-1 focus:ring-[#0D472B] text-sm bg-[#FAF6EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase font-serif-devotional mb-1">
                  Products or Items you want to inquire about
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Inquiring about Avakaya Mango Pickle, Ekadasi Palli Podi, and delivery availability..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0D472B] focus:ring-1 focus:ring-[#0D472B] text-sm bg-[#FAF6EE]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Send to WhatsApp (+91 {BUSINESS_INFO.phone})</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
