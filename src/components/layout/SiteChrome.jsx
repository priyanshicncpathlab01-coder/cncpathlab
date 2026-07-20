'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from '../ui/ContactModal';
import RoutePrefetcher from '../RoutePrefetcher';

// Client wrapper that reproduces the old App.jsx shell: persistent Navbar +
// Footer around every page, the shared contact modal, and the global
// `openContactModal` custom-event bridge that any component dispatches.
export default function SiteChrome({ children }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    return () => window.removeEventListener('openContactModal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <RoutePrefetcher />
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
