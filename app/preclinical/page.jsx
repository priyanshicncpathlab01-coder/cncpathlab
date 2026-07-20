import Preclinical from '@/views/Preclinical';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Preclinical Development',
  description: 'Preclinical development and biomarker services supporting IND-enabling studies and translational research programs.',
  alternates: { canonical: '/preclinical' },
};

export default function Page() {
  return <Preclinical />;
}
