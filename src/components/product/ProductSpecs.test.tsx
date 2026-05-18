import { render, screen } from '@testing-library/react';
import type { Product } from '@/services/products/products.types';
import { ProductSpecs } from './ProductSpecs';

const product: Product = {
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

describe('ProductSpecs', () => {
  it('renders formatted product specifications', () => {
    render(<ProductSpecs product={product} />);

    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText('Connectors')).toBeInTheDocument();
    expect(screen.getByText('HCP')).toBeInTheDocument();
    expect(screen.getByText('1.5 mm')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });
});
