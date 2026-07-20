import WholeGenomeSequencing from '@/views/WholeGenomeSequencing';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Whole Genome Sequencing',
  description: 'Whole genome sequencing (WGS) for comprehensive variant discovery across coding and non-coding regions.',
  alternates: { canonical: '/whole-genome-sequencing' },
};

export default function Page() {
  return <WholeGenomeSequencing />;
}
