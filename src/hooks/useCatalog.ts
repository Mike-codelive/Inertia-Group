import { useEffect, useState } from 'react';

import { searchCatalog } from '@/lib/searchCatalog';

import { getCatalog } from '@/services/catalogService';

import type { CatalogItem } from '@/domain/catalog/catalog.types';
import type { AppError } from '@/types/error';

export function useCatalog(query?: string) {
  const [data, setData] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);

        const catalog = await getCatalog();

        if (!isMounted) return;

        const normalizedQuery = query ?? '';

        const filtered = searchCatalog(catalog, normalizedQuery);

        setData(filtered);

        setError(null);
      } catch (err) {
        if (!isMounted) return;

        setError({
          message: err instanceof Error ? err.message : 'Unknown error',
        });
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}
