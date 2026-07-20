import Home from '@/views/Home';

// Home is fully static content -> Static Site Generation (the App Router
// default for a page with no dynamic data or request-time APIs).
export const metadata = {
  title: 'CNC Path Lab | Advanced Specialty Laboratory Services',
  description:
    'World-class biomarker and sample analysis, central lab services, genomics, and specialty diagnostics for clinical trials and research.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <Home />;
}
