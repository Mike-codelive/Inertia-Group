import type { CatalogItem } from '@/types/catalog';

export const productCatalog: CatalogItem[] = [
  {
    id: '1',
    name: 'Connector A',
    category: 'Connectors',
    image: '/products/connectors/connector_1.webp',
    description: 'High performance connector',
    cavities: 4,
    productFamily: 'HCP',
    terminalSize: 1.5,
    sealable: true,
  },
  {
    id: '2',
    name: 'Connector B',
    category: 'Connectors',
    image: '/images/products/connectors/connector_2.webp',
    description: 'Compact automotive connector',
    cavities: 8,
    productFamily: 'LCP',
    terminalSize: 2.8,
    sealable: false,
  },
  {
    id: '3',
    name: 'Connector C',
    category: 'Connectors',
    image: '/images/products/connectors/connector_3.webp',
    description: 'High density connector',
    cavities: 12,
    productFamily: 'HVP',
    terminalSize: 1.2,
    sealable: true,
  },
];
