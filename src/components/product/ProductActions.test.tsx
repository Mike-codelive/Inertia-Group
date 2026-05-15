import type { CatalogItem } from '@/domain/catalog/catalog.types';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductActions } from './ProductActions';

const product: CatalogItem = {
  id: 'connector-a',
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

describe('ProductActions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders product action buttons and prints the page', () => {
    const print = jest.spyOn(window, 'print').mockImplementation(() => undefined);

    render(<ProductActions product={product} />);

    expect(screen.getByRole('button', { name: /save part/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /datasheet/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /print/i }));

    expect(print).toHaveBeenCalled();
  });

  it('toggles the save button label', () => {
    render(<ProductActions product={product} />);

    fireEvent.click(screen.getByRole('button', { name: /save part/i }));

    expect(screen.getByRole('button', { name: /saved/i })).toBeInTheDocument();
    expect(localStorage.getItem('saved-parts')).toBe(JSON.stringify(['connector-a']));
  });
});
