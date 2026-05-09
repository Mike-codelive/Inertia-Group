import { getCatalog } from './catalogService';
import { productCatalog } from '@/data/productCatalog';

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

    await expect(catalogPromise).resolves.toBe(productCatalog);
  });
});
