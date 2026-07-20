import SolidTumorPanel from '@/views/SolidTumorPanel';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Solid Tumor Panel',
  description: 'Targeted next-generation sequencing solid tumor panels for actionable oncology biomarkers.',
  alternates: { canonical: '/solid-tumor-panel' },
};

export default function Page() {
  return <SolidTumorPanel />;
}
