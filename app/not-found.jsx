import Home from '@/views/Home';

// The Vite app fell back to the homepage for unknown routes
// (<Route path="*" element={<HomePage />} />). We preserve that behavior:
// unknown paths render the homepage content.
export const metadata = {
  title: 'CNC Path Lab | Advanced Specialty Laboratory Services',
};

export default function NotFound() {
  return <Home />;
}
