import EarlyPhase from '@/views/EarlyPhase';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Early Phase Development',
  description: 'Early phase clinical development support with specialty biomarker, genomic, and central laboratory services.',
  alternates: { canonical: '/early-phase' },
};

export default function Page() {
  return <EarlyPhase />;
}
