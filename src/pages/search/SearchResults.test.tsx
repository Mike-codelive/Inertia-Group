import type { CatalogItem } from '@/domain/catalog/catalog.types';
import { useCatalog } from '@/hooks/useCatalog';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchResults } from './SearchResults';

jest.mock('@/hooks/useCatalog', () => ({
  useCatalog: jest.fn(),
}));

const filters = {
  categories: [],
  productFamilies: [],
};

const setFilters = jest.fn();

const makeProduct = (id: number): CatalogItem => ({
  id: String(id),
  slug: `connector-${id}`,
  name: `Connector ${id}`,
  category: id % 2 === 0 ? 'Connectors' : 'Seals',
  image: '/connector.webp',
  description: 'Connector',
  cavities: id,
  productFamily: id % 2 === 0 ? 'HCP' : 'SCP',
  terminalSize: 1.5,
  sealable: true,
});

describe('SearchResults', () => {
  let intersectionCallback: IntersectionObserverCallback | undefined;

  beforeEach(() => {
    intersectionCallback = undefined;

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: jest.fn((callback: IntersectionObserverCallback) => {
        intersectionCallback = callback;

        return {
          observe: jest.fn(),
          unobserve: jest.fn(),
          disconnect: jest.fn(),
        };
      }),
    });
  });

  it('shows the loading state while catalog data is loading', () => {
    jest.mocked(useCatalog).mockReturnValue({ data: [], loading: true, error: null });

    render(<SearchResults query="connector" filters={filters} setFilters={setFilters} />);

    expect(screen.getAllByTestId('catalog-skeleton')).toHaveLength(12);
    expect(screen.getByTestId('catalog-sidebar-skeleton')).toBeInTheDocument();
  });

  it('shows an empty result message', () => {
    jest.mocked(useCatalog).mockReturnValue({ data: [], loading: false, error: null });

    render(<SearchResults query="missing" filters={filters} setFilters={setFilters} />);

    expect(screen.getByText(/We couldn’t find any matches for "missing"/)).toBeInTheDocument();
  });

  it('renders results and loads more items when the sentinel intersects', () => {
    jest.mocked(useCatalog).mockReturnValue({
      data: Array.from({ length: 13 }, (_, index) => makeProduct(index + 1)),
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <SearchResults query="connector" filters={filters} setFilters={setFilters} />
      </MemoryRouter>
    );

    expect(screen.getByText('Connector 1')).toBeInTheDocument();
    expect(screen.queryByText('Connector 13')).not.toBeInTheDocument();

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(screen.getByText('Connector 13')).toBeInTheDocument();
  });
});
