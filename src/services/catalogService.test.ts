import { getCatalog } from './catalogService';
import { productCatalog } from '@/data/productCatalog';
import { mapCatalogRecord } from '@/domain/catalog/catalog.mapper';

jest.mock('@/config/env', () => ({
  env: {
    apiDelay: 500,
  },
}));

describe('getCatalog', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('resolves the product catalog after the simulated delay', async () => {
    const catalogPromise = getCatalog();

    jest.advanceTimersByTime(500);

    await expect(catalogPromise).resolves.toEqual(productCatalog.map(mapCatalogRecord));
  });
});
