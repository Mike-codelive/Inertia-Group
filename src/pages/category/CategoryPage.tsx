import { useParams } from 'react-router-dom';

import { SearchResults } from '@/pages/search/SearchResults';

export function CategoryPage() {
  const { categorySlug } = useParams();

  if (!categorySlug) {
    return null;
  }

  return (
    <SearchResults
      query=""
      filters={{
        categories: [categorySlug],
        productFamilies: [],
      }}
      setFilters={() => {}}
    />
  );
}
