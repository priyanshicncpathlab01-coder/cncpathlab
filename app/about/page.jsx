import AboutUs from '@/views/AboutUs';

// Static content -> SSG (App Router default). Regenerated only at build time.
export const metadata = {
  title: 'About Us',
  description: 'Learn about CNC Path Lab, our scientific team, and our commitment to precision diagnostics and laboratory excellence.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutUs />;
}
