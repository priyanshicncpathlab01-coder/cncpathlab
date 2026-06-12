import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import IntroServices from './sections/IntroServices';
import BiomarkerAnalysis from './sections/BiomarkerAnalysis';
import SampleExpertise from './sections/SampleExpertise';
import TranslationalScience from './sections/TranslationalScience';
import ClinicalLogistics from './sections/ClinicalLogistics';
import BiospecimenRepository from './sections/BiospecimenRepository';
import CTASection from './sections/CTASection';
import ContactModal from './components/ui/ContactModal';
import Preclinical from './pages/Preclinical';
import EarlyPhase from './pages/EarlyPhase';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    
    const handleNavigate = (e) => {
      if (e.detail && e.detail.page) {
        setCurrentPage(e.detail.page);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('navigate', handleNavigate);

    return () => {
      window.removeEventListener('openContactModal', handleOpenModal);
      window.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <IntroServices />
            <BiomarkerAnalysis />
            <SampleExpertise />
            <TranslationalScience />
            <ClinicalLogistics />
            <BiospecimenRepository />
            <CTASection />
          </>
        ) : currentPage === 'preclinical' ? (
          <Preclinical />
        ) : currentPage === 'early-phase' ? (
          <EarlyPhase />
        ) : null}
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;
