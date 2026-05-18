import { useEffect, useState } from 'react';

import { searchProducts } from '@/services/products/products.service';

import type { Product, SearchProductsParams } from '@/services/products/products.types';

export function useSearchProducts({
  query,
  categories,
  productFamilies,
  page = 1,
  limit = 12,
}: SearchProductsParams) {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        const data = await searchProducts({
          query,
          categories,
          productFamilies,
          page,
          limit,
        });

        setHasMore(data.length === limit);

        setProducts((prev) => (page === 1 ? data : [...prev, ...data]));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to search products');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [query, categories, productFamilies, page, limit]);

  return {
    products,
    loading,
    error,
    hasMore,
  };
}
