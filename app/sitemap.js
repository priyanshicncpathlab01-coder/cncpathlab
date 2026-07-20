import { ROUTES } from '@/lib/routes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cncpathlab.com';

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.8,
  }));
}
