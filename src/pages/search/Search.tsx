import { useSearchParams } from 'react-router-dom';

import { SearchResults } from './SearchResults';

import { createSearchParams, getSearchStateFromParams } from '@/lib/searchParams';

import type { CatalogFilters } from '@/types/search';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { query, filters } = getSearchStateFromParams(searchParams);

  const setFilters = (nextFilters: CatalogFilters) => {
    const params = createSearchParams(query, nextFilters);

    setSearchParams(params);
  };

  return <SearchResults query={query} filters={filters} setFilters={setFilters} />;
}
