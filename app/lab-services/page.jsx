import LabServices from '@/views/LabServices';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Lab Services',
  description: 'Comprehensive specialty and central laboratory services for clinical trials, including immune monitoring and bioanalytical testing.',
  alternates: { canonical: '/lab-services' },
};

export default function Page() {
  return <LabServices />;
}
