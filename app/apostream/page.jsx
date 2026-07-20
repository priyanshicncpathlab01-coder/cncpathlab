import ApoStream from '@/views/ApoStream';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'ApoStream',
  description: 'ApoStream label-free circulating tumor cell (CTC) enrichment for liquid biopsy and rare-cell analysis.',
  alternates: { canonical: '/apostream' },
};

export default function Page() {
  return <ApoStream />;
}
