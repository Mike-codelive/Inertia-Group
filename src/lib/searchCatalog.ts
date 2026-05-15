import type { CatalogItem } from '@/domain/catalog/catalog.types';

export function searchCatalog(data: CatalogItem[], query: string = '') {
  const q = query.toLowerCase().trim();

  if (!q) return data;

  const tokens = q.split(/\s+/).filter(Boolean);

  return data
    .map((item) => {
      let score = 0;

      tokens.forEach((token) => {
        const numeric = parseFloat(token.replace(',', '.'));

        if (!isNaN(numeric)) {
          if (Math.abs(item.terminalSize - numeric) < 0.001) {
            score += 3;
          }
        }

        if (item.name.toLowerCase().includes(token)) score += 5;
        if (item.category.toLowerCase().includes(token)) score += 2;
        if (item.productFamily.toLowerCase().includes(token)) score += 2;
        if (item.description.toLowerCase().includes(token)) score += 1;

        if (token === 'sealable' && item.sealable) score += 2;
        if (token === 'non-sealable' && !item.sealable) score += 2;
      });

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}
