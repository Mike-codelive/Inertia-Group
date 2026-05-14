import { renderHook, waitFor } from '@testing-library/react';

import { useCatalog } from './useCatalog';

import { getCatalog } from '@/services/catalog/catalog.service';

import type { CatalogItem } from '@/services/catalog/catalog.types';

jest.mock('@/services/catalog/catalog.service', () => ({
  getCatalog: jest.fn(),
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
    jest.clearAllMocks();

    jest.mocked(getCatalog).mockResolvedValue(catalog);
  });

  it('loads catalog data by query', async () => {
    const { result } = renderHook(() => useCatalog('connector'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(getCatalog).toHaveBeenCalledWith('connector');

    expect(result.current.data).toEqual(catalog);

    expect(result.current.error).toBeNull();
  });

  it('uses empty query when query is undefined', async () => {
    renderHook(() => useCatalog());

    await waitFor(() => expect(getCatalog).toHaveBeenCalledWith(undefined));
  });

  it('exposes errors from catalog service', async () => {
    const error = new Error('Catalog unavailable');

    jest.mocked(getCatalog).mockRejectedValue(error);

    const { result } = renderHook(() => useCatalog('connector'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe(error);
  });
});
