import { productCatalog } from '@/data/productCatalog';

import { mapCatalogRecord } from '@/domain/catalog/catalog.mapper';

import type { CatalogItem } from '@/domain/catalog/catalog.types';

import { env } from '@/config/env';

export async function getCatalog(): Promise<CatalogItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = productCatalog.map(mapCatalogRecord);

      resolve(items);
    }, env.apiDelay);
  });
}
