import { searchCatalog } from '@/lib/searchCatalog';
import { mockCatalog } from './catalog.mock';

import type { CatalogItem } from './catalog.types';

export async function getCatalog(query?: string): Promise<CatalogItem[]> {
  const normalizedQuery = query ?? '';

  const filtered = searchCatalog(mockCatalog, normalizedQuery);

  return Promise.resolve(filtered);
}

export async function getCatalogBySlug(slug: string): Promise<CatalogItem | null> {
  const item = mockCatalog.find((item) => item.slug === slug);

  return Promise.resolve(item ?? null);
}
