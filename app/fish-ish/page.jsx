import FishIsh from '@/views/FishIsh';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'FISH / ISH',
  description: 'Fluorescence and chromogenic in situ hybridization (FISH / ISH) for gene amplification and rearrangement detection.',
  alternates: { canonical: '/fish-ish' },
};

export default function Page() {
  return <FishIsh />;
}
