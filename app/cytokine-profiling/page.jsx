import CytokineProfiling from '@/views/CytokineProfiling';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Cytokine Profiling',
  description: 'Multiplex cytokine profiling to characterize immune response and inflammation biomarkers.',
  alternates: { canonical: '/cytokine-profiling' },
};

export default function Page() {
  return <CytokineProfiling />;
}
