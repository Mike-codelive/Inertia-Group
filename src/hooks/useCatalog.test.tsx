import { renderHook, waitFor } from '@testing-library/react';
import { useCatalog } from './useCatalog';
import { getCatalog } from '@/services/catalogService';
import { searchCatalog } from '@/lib/searchCatalog';
import type { CatalogItem } from '@/types/catalog';

jest.mock('@/services/catalogService', () => ({
  getCatalog: jest.fn(),
}));

jest.mock('@/lib/searchCatalog', () => ({
  searchCatalog: jest.fn(),
}));

const catalog: CatalogItem[] = [
  {
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
  },
];

describe('useCatalog', () => {
  beforeEach(() => {
    jest.mocked(getCatalog).mockResolvedValue(catalog);
    jest.mocked(searchCatalog).mockReturnValue(catalog);
  });

  it('loads and filters catalog data by query', async () => {
    const { result } = renderHook(() => useCatalog('connector'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(getCatalog).toHaveBeenCalled();
    expect(searchCatalog).toHaveBeenCalledWith(catalog, 'connector');
    expect(result.current.data).toEqual(catalog);
    expect(result.current.error).toBeNull();
  });

  it('uses an empty query when no query is provided', async () => {
    renderHook(() => useCatalog());

    await waitFor(() => expect(searchCatalog).toHaveBeenCalledWith(catalog, ''));
  });

  it('exposes errors from the catalog service', async () => {
    const error = new Error('Catalog unavailable');
    jest.mocked(getCatalog).mockRejectedValue(error);

    const { result } = renderHook(() => useCatalog('connector'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe(error);
  });
});
