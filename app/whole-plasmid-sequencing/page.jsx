import WholePlasmidSequencing from '@/views/WholePlasmidSequencing';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Whole Plasmid Sequencing',
  description: 'Whole plasmid sequencing for full construct verification of plasmids and engineered DNA.',
  alternates: { canonical: '/whole-plasmid-sequencing' },
};

export default function Page() {
  return <WholePlasmidSequencing />;
}
