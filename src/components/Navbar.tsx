import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/products';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Why Choose Us', path: '/#why-choose-us' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to enquire about Yashoda’s Divine Kitchen Sattvic Pickles & Powders."
  )}`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF6EE]/95 backdrop-blur-md shadow-md py-2 border-b border-[#D4AF37]/50' 
        : 'bg-[#FAF6EE] py-3.5 border-b border-[#D4AF37]/30'
    }`}>
      
      {/* Top Auspicious Micro-Bar */}
      <div className="bg-[#0D472B] text-white py-1 px-4 text-center text-[11px] font-serif-devotional tracking-widest uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#E5C158]" />
        <span>{BUSINESS_INFO.tagline} • {BUSINESS_INFO.suitableForText}</span>
        <Sparkles className="w-3 h-3 text-[#E5C158]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Official Yashoda's Divine Kitchen Logo */}
          <Link to="/" className="flex items-center group">
            <BrandLogo size="md" />
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs xl:text-sm font-serif-devotional font-bold uppercase tracking-wider transition-colors py-1 relative ${
                    isActive 
                      ? 'text-[#0D472B]' 
                      : 'text-gray-700 hover:text-[#991B1B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B38728] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons: CALL NOW & WHATSAPP */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-[#0D472B] text-[#0D472B] hover:bg-[#0D472B] hover:text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 text-[#0D472B] hover:bg-[#F3EAD8] rounded-lg sm:hidden"
              title="Call Business"
              aria-label="Call Business"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0D472B] hover:bg-[#F3EAD8] rounded-xl focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#D4AF37]/40 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-serif-devotional font-bold uppercase tracking-wider ${
                    location.pathname === link.path 
                      ? 'bg-[#0D472B] text-white' 
                      : 'text-gray-800 hover:bg-[#F3EAD8]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Call & WhatsApp Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#0D472B] text-[#0D472B] font-serif-devotional text-xs font-bold uppercase tracking-wider bg-white"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
