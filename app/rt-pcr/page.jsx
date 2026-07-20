import RTPCR from '@/views/RTPCR';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'RT-PCR',
  description: 'Real-time and reverse-transcription PCR (RT-PCR) services for gene expression and pathogen detection.',
  alternates: { canonical: '/rt-pcr' },
};

export default function Page() {
  return <RTPCR />;
}
