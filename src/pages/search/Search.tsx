import { useSearchParams } from 'react-router-dom';
import { SearchResults } from './SearchResults';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') ?? '';

  return <SearchResults key={query} query={query} initialCategory={category} />;
}
