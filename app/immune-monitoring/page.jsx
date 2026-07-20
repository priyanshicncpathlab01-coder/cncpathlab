import ImmuneMonitoring from '@/views/ImmuneMonitoring';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Immune Monitoring',
  description: 'Flow cytometry and immune monitoring services for immuno-oncology and immunology clinical studies.',
  alternates: { canonical: '/immune-monitoring' },
};

export default function Page() {
  return <ImmuneMonitoring />;
}
