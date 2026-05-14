import type { CatalogFilters } from '@/types/search';

type SearchParamsState = {
  query: string;
  filters: CatalogFilters;
};

export function getSearchStateFromParams(searchParams: URLSearchParams): SearchParamsState {
  return {
    query: searchParams.get('q') ?? '',
    filters: {
      categories: searchParams.getAll('category'),
      productFamilies: searchParams.getAll('family'),
    },
  };
}

export function createSearchParams(query: string, filters: CatalogFilters) {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.set('q', query);
  }

  filters.categories.forEach((category) => {
    params.append('category', category);
  });

  filters.productFamilies.forEach((family) => {
    params.append('family', family);
  });

  return params;
}
