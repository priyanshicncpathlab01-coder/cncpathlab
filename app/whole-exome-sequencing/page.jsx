import WholeExomeSequencing from '@/views/WholeExomeSequencing';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Whole Exome Sequencing',
  description: 'Whole exome sequencing (WES) for targeted analysis of protein-coding regions and clinically relevant variants.',
  alternates: { canonical: '/whole-exome-sequencing' },
};

export default function Page() {
  return <WholeExomeSequencing />;
}
