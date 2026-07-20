import BioanalyticalTesting from '@/views/BioanalyticalTesting';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Bioanalytical Testing',
  description: 'Validated bioanalytical testing and assay services for pharmacokinetic and pharmacodynamic endpoints.',
  alternates: { canonical: '/bioanalytical-testing' },
};

export default function Page() {
  return <BioanalyticalTesting />;
}
