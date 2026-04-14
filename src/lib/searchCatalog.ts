import type { CatalogItem } from '@/types/catalog';

export function searchCatalog(items: CatalogItem[], query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/);

  if (!terms.length || !terms[0]) return items;

  return items.filter((item) => {
    return terms.every((term) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.productFamily.toLowerCase().includes(term) ||
        item.cavities.toString().includes(term) ||
        item.terminalSize.toString().includes(term) ||
        (term === 'sealable' && item.sealable) ||
        (term === 'non-sealable' && !item.sealable)
      );
    });
  });
}
