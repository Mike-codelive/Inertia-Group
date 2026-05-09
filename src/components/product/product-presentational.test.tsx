import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductBreadcrumbs } from './ProductBreadcrumbs';
import { ProductHero } from './ProductHero';
import type { CatalogItem } from '@/types/catalog';

const product: CatalogItem = {
  id: '1',
  slug: 'connector-a',
  name: 'Connector A',
  category: 'Connectors',
  image: '/connector.webp',
  description: 'Connector description',
  cavities: 2,
  productFamily: 'HCP',
  terminalSize: 1.5,
  sealable: true,
};

describe('product presentational components', () => {
  it('renders product breadcrumbs', () => {
    render(
      <MemoryRouter>
        <ProductBreadcrumbs category="Connectors" productName="Connector A" />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Connectors' })).toHaveAttribute(
      'href',
      '/search?q=connectors'
    );
    expect(screen.getByText('Connector A')).toBeInTheDocument();
  });

  it('renders product hero details', () => {
    render(
      <MemoryRouter>
        <ProductHero product={product} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Connector A' })).toBeInTheDocument();
    expect(screen.getByAltText('Connector A')).toBeInTheDocument();
    expect(screen.getByText(/Connector description offers/)).toBeInTheDocument();
  });
});
