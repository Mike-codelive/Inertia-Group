import { useSearchParams } from 'react-router-dom';
import { SearchResults } from './SearchResults';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return <SearchResults key={query} query={query} />;
}
