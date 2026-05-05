import { useEffect, useState } from 'react';
import { getCatalog } from '@/services/catalogService';
import type { CatalogItem } from '@/types/catalog';
import { searchCatalog } from '@/lib/searchCatalog';

export function useCatalog(query?: string) {
  const [data, setData] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

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
      } catch (err) {
        if (!isMounted) return;
        setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return { data, loading, error };
}
