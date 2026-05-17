import { renderHook, waitFor } from '@testing-library/react';

import { useCatalog } from './useCatalog';

import { getCatalog } from '@/services/catalogService';

import type { CatalogItem } from '@/domain/catalog/catalog.types';

jest.mock('@/services/catalogService', () => ({
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

    expect(getCatalog).toHaveBeenCalled();

    expect(result.current.data).toEqual(catalog);

    expect(result.current.error).toBeNull();
  });

  it('uses empty query when query is undefined', async () => {
    renderHook(() => useCatalog());

    await waitFor(() => expect(getCatalog).toHaveBeenCalled());
  });

  it('exposes errors from catalog service', async () => {
    const error = new Error('Catalog unavailable');

    jest.mocked(getCatalog).mockRejectedValue(error);

    const { result } = renderHook(() => useCatalog('connector'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toEqual({ message: error.message });
  });
});
