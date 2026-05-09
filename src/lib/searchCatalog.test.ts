import { searchCatalog } from './searchCatalog';
import type { CatalogItem } from '@/types/catalog';

const catalog: CatalogItem[] = [
  {
    id: 'connector-a',
    slug: 'connector-a',
    name: 'Connector A',
    category: 'Connectors',
    image: '/connector.webp',
    description: 'High performance sealed connector',
    cavities: 2,
    productFamily: 'HCP',
    terminalSize: 1.5,
    sealable: true,
  },
  {
    id: 'terminal-b',
    slug: 'terminal-b',
    name: 'Terminal B',
    category: 'Terminals',
    image: '/terminal.webp',
    description: 'Compact connector compatible terminal',
    cavities: 1,
    productFamily: 'TCP',
    terminalSize: 2.8,
    sealable: false,
  },
  {
    id: 'seal-c',
    slug: 'seal-c',
    name: 'Seal C',
    category: 'Seals',
    image: '/seal.webp',
    description: 'Waterproof seal',
    cavities: 1,
    productFamily: 'SCP',
    terminalSize: 1.2,
    sealable: true,
  },
];

describe('searchCatalog', () => {
  it('returns the original data for an empty query', () => {
    expect(searchCatalog(catalog, '   ')).toBe(catalog);
  });

  it('matches text across name, category, product family, and description', () => {
    expect(searchCatalog(catalog, 'tcp')).toEqual([catalog[1]]);
    expect(searchCatalog(catalog, 'waterproof')).toEqual([catalog[2]]);
    expect(searchCatalog(catalog, 'connectors')).toEqual([catalog[0]]);
  });

  it('ranks stronger name matches before weaker description matches', () => {
    expect(searchCatalog(catalog, 'connector').map((item) => item.id)).toEqual([
      'connector-a',
      'terminal-b',
    ]);
  });

  it('supports comma decimal terminal size searches', () => {
    expect(searchCatalog(catalog, '1,5')).toEqual([catalog[0]]);
  });

  it('filters by sealable and non-sealable terms', () => {
    expect(searchCatalog(catalog, 'sealable').map((item) => item.id)).toEqual([
      'connector-a',
      'seal-c',
    ]);

    expect(searchCatalog(catalog, 'non-sealable')).toEqual([catalog[1]]);
  });
});
