import { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${portfolio.personal.siteUrl}/sitemap.xml`,
  };
}
