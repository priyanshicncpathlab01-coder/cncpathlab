import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import LabServices from './pages/LabServices';
import ApoStream from './pages/ApoStream';
import ImmuneMonitoring from './pages/ImmuneMonitoring';
import BioanalyticalTesting from './pages/BioanalyticalTesting';
import WholeGenomeSequencing from './pages/WholeGenomeSequencing';
import WholeExomeSequencing from './pages/WholeExomeSequencing';
import WholePlasmidSequencing from './pages/WholePlasmidSequencing';
import VisiumHD from './pages/VisiumHD';
import SolidTumorPanel from './pages/SolidTumorPanel';
import CytokineProfiling from './pages/CytokineProfiling';
import TissueImagingAnalysis from './pages/TissueImagingAnalysis';
import AboutUs from './pages/AboutUs';
import TargetBiomarkerValidation from './pages/TargetBiomarkerValidation';
import MultiplexImmunofluorescence from './pages/MultiplexImmunofluorescence';
import Immunohistochemistry from './pages/Immunohistochemistry';
import RTPCR from './pages/RTPCR';
import FishIsh from './pages/FishIsh';
import PathologyServices from './pages/PathologyServices';

const HomePage = () => (
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
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);

    return () => {
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preclinical" element={<Preclinical />} />
          <Route path="/early-phase" element={<EarlyPhase />} />
          <Route path="/lab-services" element={<LabServices />} />
          <Route path="/apostream" element={<ApoStream />} />
          <Route path="/immune-monitoring" element={<ImmuneMonitoring />} />
          <Route path="/bioanalytical-testing" element={<BioanalyticalTesting />} />
          <Route path="/whole-genome-sequencing" element={<WholeGenomeSequencing />} />
          <Route path="/whole-exome-sequencing" element={<WholeExomeSequencing />} />
          <Route path="/whole-plasmid-sequencing" element={<WholePlasmidSequencing />} />
          <Route path="/visium-hd" element={<VisiumHD />} />
          <Route path="/solid-tumor-panel" element={<SolidTumorPanel />} />
          <Route path="/cytokine-profiling" element={<CytokineProfiling />} />
          <Route path="/tissue-imaging-analysis" element={<TissueImagingAnalysis />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/target-biomarker-validation" element={<TargetBiomarkerValidation />} />
          <Route path="/multiplex-immunofluorescence" element={<MultiplexImmunofluorescence />} />
          <Route path="/immunohistochemistry" element={<Immunohistochemistry />} />
          <Route path="/rt-pcr" element={<RTPCR />} />
          <Route path="/fish-ish" element={<FishIsh />} />
          <Route path="/pathology-services" element={<PathologyServices />} />
          {/* Fallback to home for unknown routes */}
          <Route path="*" element={<HomePage />} />
        </Routes>
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
