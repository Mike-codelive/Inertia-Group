import { useState } from 'react';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCatalog } from '@/hooks/useCatalog';

const ITEMS_PER_PAGE = 12;

type Props = {
  query: string;
};

function SearchResultsContent({ query }: Props) {
  const { data = [], loading } = useCatalog(query);

  const count = data.length;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleItems = data.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-6 py-16">
      <p className="text-sm text-muted-foreground mb-2">RESULTS FOR</p>

      <h1 className="text-3xl font-semibold mb-4">{query ? `"${query}"` : 'ALL PRODUCTS'}</h1>

      <p className="text-sm text-muted-foreground mb-10">
        {loading ? 'Loading...' : `${count} ${count === 1 ? 'match' : 'matches'} found`}
      </p>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item) => (
              <CatalogCard key={item.id} item={item} />
            ))}
          </div>

          {visibleCount < count && (
            <div className="flex justify-center mt-12">
              <Button
                variant="cta"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="group cursor-pointer flex justify-between items-center gap-20 text-sm font-medium px-6 transition-colors select-none"
              >
                LOAD MORE
                <MoveRight className="group-hover:translate-x-1 transition-transform duration-200 size-5" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function SearchResults({ query }: Props) {
  return <SearchResultsContent key={query} query={query} />;
}
