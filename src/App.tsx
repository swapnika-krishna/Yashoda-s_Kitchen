import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';

// Informational Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { PicklesPage } from './pages/PicklesPage';
import { PowdersPage } from './pages/PowdersPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top upon navigating
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#1E293B] font-sans selection:bg-[#D4AF37]/30 selection:text-[#0D472B]">
        
        {/* Sticky Business Navbar */}
        <Navbar />

        {/* Main Informational Views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/pickles" element={<PicklesPage />} />
            <Route path="/powders" element={<PowdersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Fixed Mobile Contact Bar (CALL, WHATSAPP, DIRECTIONS) */}
        <MobileContactBar />

        {/* Footer with official poster credentials */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
