import type { CatalogItem } from '@/domain/catalog/catalog.types';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RelatedProducts } from './RelatedProducts';

const baseProduct: CatalogItem = {
  id: '1',
  slug: 'connector-a',
  name: 'Connector A',
  category: 'Connectors',
  image: '/connector.webp',
  description: 'Connector',
  cavities: 2,
  productFamily: 'HCP',
  terminalSize: 1.5,
  sealable: true,
};

const relatedProduct: CatalogItem = {
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
      category: 'Seals',
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
