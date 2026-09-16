import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface GoogleMapProps {
  // Configurable Google Maps place query or embed URL
  embedQuery?: string;
  directionsUrl?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  embedQuery = "Yashoda's Divine Kitchen, Hyderabad, Telangana",
  directionsUrl = BUSINESS_INFO.googleMapsDirectionsUrl
}) => {
  const encodedQuery = encodeURIComponent(embedQuery);
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="find-us" className="py-16 bg-white border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6EE] border border-[#D4AF37] shadow-2xs mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#991B1B]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Google Maps & Business Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D472B]">
            Find Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-serif-devotional">
            Visiting in person or placing a direct pickup order? Reach our kitchen easily using Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Location & Hours Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FAF6EE] border-2 border-[#D4AF37]/60 shadow-xs space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#B38728] font-bold block">
                  Official Business Profile
                </span>
                <h3 className="font-serif-devotional font-bold text-2xl text-[#0D472B]">
                  Yashoda’s Divine Kitchen
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Sattvic Pickles & Powders
                </p>
              </div>

              {/* Direct Location Note without inventing fake street address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-[#991B1B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0D472B] block">Business Kitchen Location:</span>
                  <p className="text-gray-600 leading-relaxed">
                    Yashoda’s Divine Kitchen<br />
                    (Linked with Google Maps & Google Business Profile)
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                <Phone className="w-5 h-5 text-[#0D472B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0D472B] block">Telephone Assistance:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono text-base font-bold text-[#0D472B] hover:underline">
                    +91 {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* FSSAI */}
              <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/40 text-xs">
                <span className="text-gray-500 block text-[10px] uppercase font-mono">Licensed Entity:</span>
                <span className="font-mono font-bold text-[#0D472B]">FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}</span>
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div className="pt-4 border-t border-[#D4AF37]/30 space-y-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-serif-devotional text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#E5C158]" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Namaste! I need directions to Yashoda’s Divine Kitchen for direct pickup."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Location on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Responsive Google Map Area */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-md min-h-[380px] sm:min-h-[440px] relative bg-[#F3EAD8]">
            <iframe
              title="Yashoda’s Divine Kitchen Google Maps Location"
              src={mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[440px]"
            />

            {/* Quick floating action in map corner */}
            <div className="absolute top-3 right-3 hidden sm:block">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-xs text-[#0D472B] hover:text-[#991B1B] text-xs font-serif-devotional font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-[#D4AF37] flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#991B1B]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
