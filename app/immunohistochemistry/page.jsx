import Immunohistochemistry from '@/views/Immunohistochemistry';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'Immunohistochemistry (IHC)',
  description: 'Immunohistochemistry (IHC) assay development and staining for protein expression and biomarker analysis.',
  alternates: { canonical: '/immunohistochemistry' },
};

export default function Page() {
  return <Immunohistochemistry />;
}
