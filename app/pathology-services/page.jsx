import PathologyServices from '@/views/PathologyServices';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Pathology Services',
  description: 'Anatomic and digital pathology services including expert pathologist review and image analysis.',
  alternates: { canonical: '/pathology-services' },
};

export default function Page() {
  return <PathologyServices />;
}
