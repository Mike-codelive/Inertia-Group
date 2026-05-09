import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CatalogCard } from './CatalogCard';
import type { CatalogItem } from '@/types/catalog';

const item: CatalogItem = {
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

describe('CatalogCard', () => {
  it('renders catalog item details and link', () => {
    render(
      <MemoryRouter>
        <CatalogCard item={item} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/catalog/connectors/connector-a');
    expect(screen.getByText('Connector A')).toBeInTheDocument();
    expect(screen.getByText('1.5 mm')).toBeInTheDocument();
  });
});
