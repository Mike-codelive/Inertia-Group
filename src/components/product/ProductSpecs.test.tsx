import type { CatalogItem } from '@/domain/catalog/catalog.types';
import { render, screen } from '@testing-library/react';
import { ProductSpecs } from './ProductSpecs';

const product: CatalogItem = {
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
