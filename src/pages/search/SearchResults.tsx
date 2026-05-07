import { useState } from 'react';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCatalog } from '@/hooks/useCatalog';
import { Spinner } from '@/components/ui/spinner';
import { NoResults } from '@/components/search/NoResults';

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
    <div className="container h-[calc(100dvh-65px)] mx-auto px-6">
      {loading ? (
        <div className="flex h-[calc(100dvh-65px)] items-center justify-center">
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Loading...
          </Button>
        </div>
      ) : (
        <div className="h-full">
          <div className="chunck-1 sticky top-16.25 z-30 border-b bg-background py-4 pl-1">
            <p className="text-sm text-muted-foreground">
              <span>RESULTS {query ? `FOR ${query}` : ''}</span>
              <span className="ml-3 text-sm font-light text-gray-700 dark:text-gray-300">
                {count}
              </span>
            </p>
          </div>

          {count === 0 ? (
            <div className=" h-[calc(100%-52.8px)]">
              <NoResults query={query} />
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleItems.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>

              {visibleCount < count && (
                <div className="py-12 flex justify-center">
                  <Button
                    variant="cta"
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                    className="group flex items-center justify-between gap-20 px-6 text-sm font-medium transition-colors select-none"
                  >
                    LOAD MORE
                    <MoveRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function SearchResults({ query }: Props) {
  return <SearchResultsContent key={query} query={query} />;
}
