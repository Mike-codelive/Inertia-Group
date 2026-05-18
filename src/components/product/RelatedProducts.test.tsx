import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { Product } from '@/services/products/products.types';
import { RelatedProducts } from './RelatedProducts';

const baseProduct: Product = {
  id: '1',
  slug: 'connector-a',
  name: 'Connector A',
  category: {
    id: 'connectors',
    name: 'Connectors',
    slug: 'connectors',
  },
  image: '/connector.webp',
  description: 'Connector',
  cavities: 2,
  productFamily: 'HCP',
  terminalSize: 1.5,
  sealable: true,
  created_at: '2026-01-01T00:00:00.000Z',
};

const relatedProduct: Product = {
  ...baseProduct,
  id: '2',
  slug: 'connector-b',
  name: 'Connector B',
};

describe('RelatedProducts', () => {
  it('renders products from the same category or family', () => {
    render(
      <MemoryRouter>
        <RelatedProducts currentProduct={baseProduct} products={[baseProduct, relatedProduct]} />
      </MemoryRouter>
    );

    expect(screen.getByText('Related Products')).toBeInTheDocument();
    expect(screen.getByText('Connector B')).toBeInTheDocument();
  });

  it('renders nothing when no products are related', () => {
    const unrelated = {
      ...baseProduct,
      id: '3',
      slug: 'seal-a',
      name: 'Seal A',
      category: {
        id: 'seals',
        name: 'Seals',
        slug: 'seals',
      },
      productFamily: 'SCP',
    };

    const { container } = render(
      <MemoryRouter>
        <RelatedProducts currentProduct={baseProduct} products={[baseProduct, unrelated]} />
      </MemoryRouter>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
