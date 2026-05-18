import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { Product } from '@/services/products/products.types';
import { CatalogCard } from './CatalogCard';

const item: Product = {
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

describe('CatalogCard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders catalog item details and link', () => {
    render(
      <MemoryRouter>
        <CatalogCard item={item} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/products/connectors/connector-a');
    expect(screen.getByText('Connector A')).toBeInTheDocument();
    expect(screen.getByText('1.5 mm')).toBeInTheDocument();
  });

  it('saves a part without navigating through the card link', () => {
    render(
      <MemoryRouter>
        <CatalogCard item={item} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /save part/i }));

    expect(localStorage.getItem('saved-parts')).toBe(JSON.stringify(['1']));
    expect(screen.getByRole('button', { name: /remove saved part/i })).toBeInTheDocument();
  });
});
