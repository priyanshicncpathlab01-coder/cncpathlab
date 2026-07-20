import { Inter } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

// Font optimization: next/font self-hosts Inter (no external Google Fonts
// request, no layout shift) and exposes it as the --font-inter CSS variable
// that tailwind.config.js and globals.css reference.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cncpathlab.com';
const description =
  'CNC Path Lab provides world-class biomarker and sample analysis services for clinical trials and research.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CNC Path Lab',
    template: '%s | CNC Path Lab',
  },
  description,
  keywords: [
    'CNC Path Lab',
    'clinical pathology laboratory',
    'biomarker analysis',
    'central laboratory services',
    'genomics',
    'immunohistochemistry',
    'FISH ISH',
    'digital pathology',
    'clinical trial testing',
  ],
  applicationName: 'CNC Path Lab',
  authors: [{ name: 'CNC Path Lab' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'CNC Path Lab',
    title: 'CNC Path Lab',
    description,
    url: siteUrl,
    images: [{ url: '/assets/mainpic.webp', width: 1200, height: 630, alt: 'CNC Path Lab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CNC Path Lab',
    description,
    images: ['/assets/mainpic.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
