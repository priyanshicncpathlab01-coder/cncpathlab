import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <IntroServices />
        <BiomarkerAnalysis />
        <SampleExpertise />
        <TranslationalScience />
        <ClinicalLogistics />
        <BiospecimenRepository />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
