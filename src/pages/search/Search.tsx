import { useSearchParams } from 'react-router-dom';

import { SearchResults } from './SearchResults';

import { useDebounce } from '@/hooks/useDebounce';

import type { CatalogFilters } from '@/types/search';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  const debouncedQuery = useDebounce(query, 300);

  const filters: CatalogFilters = {
    categories: searchParams.getAll('category'),
    productFamilies: searchParams.getAll('family'),
  };

  const setFilters = (nextFilters: CatalogFilters) => {
    const nextParams = new URLSearchParams();

    if (query) {
      nextParams.set('q', query);
    }

    nextFilters.categories.forEach((category) => {
      nextParams.append('category', category);
    });

    nextFilters.productFamilies.forEach((family) => {
      nextParams.append('family', family);
    });

    setSearchParams(nextParams);
  };

  return <SearchResults query={debouncedQuery} filters={filters} setFilters={setFilters} />;
}
