import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchResults } from './SearchResults';
import { useCatalog } from '@/hooks/useCatalog';
import type { CatalogItem } from '@/types/catalog';

jest.mock('@/hooks/useCatalog', () => ({
  useCatalog: jest.fn(),
}));

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

    render(<SearchResults query="connector" />);

    expect(screen.getByRole('button', { name: /loading/i })).toBeDisabled();
  });

  it('shows an empty result message', () => {
    jest.mocked(useCatalog).mockReturnValue({ data: [], loading: false, error: null });

    render(<SearchResults query="missing" />);

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
        <SearchResults query="connector" />
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
