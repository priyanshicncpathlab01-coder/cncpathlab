import Hero from '../sections/Hero';
import IntroServices from '../sections/IntroServices';
import BiomarkerAnalysis from '../sections/BiomarkerAnalysis';
import SampleExpertise from '../sections/SampleExpertise';
import TranslationalScience from '../sections/TranslationalScience';
import ClinicalLogistics from '../sections/ClinicalLogistics';
import BiospecimenRepository from '../sections/BiospecimenRepository';
import CTASection from '../sections/CTASection';

// Homepage section sequence (previously the inline <HomePage> in App.jsx).
export default function Home() {
  return (
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
}
