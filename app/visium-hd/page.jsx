import VisiumHD from '@/views/VisiumHD';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: '10x Genomics Visium HD',
  description: 'Spatial transcriptomics with 10x Genomics Visium HD for single-cell resolution tissue profiling.',
  alternates: { canonical: '/visium-hd' },
};

export default function Page() {
  return <VisiumHD />;
}
