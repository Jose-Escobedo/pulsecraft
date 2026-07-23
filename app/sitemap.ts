import type { MetadataRoute } from 'next';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.pulsecraftweb.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1 },
    { route: '/pricing', priority: 0.8 },
    { route: '/contact', priority: 0.8 },
    { route: '/solutions', priority: 0.7 },
    { route: '/web-design', priority: 0.7 },
    { route: '/roi-calculator', priority: 0.7 },
    { route: '/blog', priority: 0.6 },
    { route: '/accessibility', priority: 0.3 },
    { route: '/privacy-policy', priority: 0.3 },
    { route: '/terms', priority: 0.3 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/solutions/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE_URL}/web-design/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...locationRoutes, ...blogRoutes];
}
