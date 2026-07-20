import TissueImagingAnalysis from '@/views/TissueImagingAnalysis';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Tissue Imaging Analysis',
  description: 'Digital pathology and quantitative tissue imaging analysis for translational and clinical research.',
  alternates: { canonical: '/tissue-imaging-analysis' },
};

export default function Page() {
  return <TissueImagingAnalysis />;
}
