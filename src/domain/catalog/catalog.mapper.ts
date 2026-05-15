import type { CatalogItem, CatalogRecord } from './catalog.types';

export function mapCatalogRecord(record: CatalogRecord): CatalogItem {
  return {
    id: record.id,
    slug: record.slug,
    name: record.name,
    category: record.category,
    image: record.image,
    description: record.description,
    cavities: record.cavities,
    productFamily: record.product_family,
    terminalSize: record.terminal_size,
    sealable: record.sealable,
  };
}
