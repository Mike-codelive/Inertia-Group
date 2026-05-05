import { productCatalog } from '@/data/productCatalog';
import type { CatalogItem } from '@/types/catalog';

export async function getCatalog(): Promise<CatalogItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productCatalog), 300);
  });
}
