import { useSearchParams } from 'react-router-dom';
import { productCatalog } from '@/data/productCatalog';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { searchCatalog } from '@/lib/searchCatalog';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filtered = searchCatalog(productCatalog, query);
  const count = filtered.length;

  return (
    <div className="container mx-auto px-6 py-16">
      <p className="text-sm text-muted-foreground mb-2">RESULTS FOR</p>

      <h1 className="text-3xl font-semibold mb-4">{query ? `"${query}"` : 'ALL PRODUCTS'}</h1>

      <p className="text-sm text-muted-foreground mb-10">
        {count} {count === 1 ? 'match' : 'matches'} found
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
