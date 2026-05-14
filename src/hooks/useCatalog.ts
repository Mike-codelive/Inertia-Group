import { useEffect, useState } from 'react';

import { getCatalog } from '@/services/catalog/catalog.service';

import type { CatalogItem } from '@/services/catalog/catalog.types';

export function useCatalog(query?: string) {
  const [data, setData] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);

        const catalog = await getCatalog(query);

        if (!isMounted) return;

        setData(catalog);
      } catch (err) {
        if (!isMounted) return;

        setError(err);
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
