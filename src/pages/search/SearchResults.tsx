import { useState } from 'react';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCatalog } from '@/hooks/useCatalog';
import { Spinner } from '@/components/ui/spinner';
import { NoResults } from '@/components/search/NoResults';
import { SearchSidebar } from '@/components/search/SearchSidebar';
import type { CatalogFilters } from '@/types/search';

const ITEMS_PER_PAGE = 12;

type Props = {
  query: string;
};

function SearchResultsContent({ query }: Props) {
  const { data = [], loading } = useCatalog(query);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const [filters, setFilters] = useState<CatalogFilters>({
    categories: [],
    productFamilies: [],
  });

  const categories = [...new Set(data.map((item) => item.category))];

  const productFamilies = [...new Set(data.map((item) => item.productFamily))];

  const filteredItems = data.filter((item) => {
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(item.category);

    const familyMatch =
      filters.productFamilies.length === 0 || filters.productFamilies.includes(item.productFamily);

    return categoryMatch && familyMatch;
  });

  const count = filteredItems.length;

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="container mx-auto min-h-[calc(100dvh-120px)] px-6">
      {loading ? (
        <div className="flex h-[calc(100dvh-65px)] items-center justify-center">
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Loading...
          </Button>
        </div>
      ) : (
        <div className="relative">
          <div className="fixed top-16.25 left-0 right-0 z-30 border-b bg-background">
            <div className="container mx-auto px-6 py-4">
              <p className="text-sm text-muted-foreground">
                <span>RESULTS {query ? `FOR ${query}` : ''}</span>

                <span className="ml-3 text-sm font-light text-gray-700 dark:text-gray-300">
                  {count}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-29 md:grid grid-cols-[240px_1fr] gap-10">
            <div className="hidden md:block relative">
              <div className="fixed top-29 bottom-0 pt-5 w-60 border-r">
                <SearchSidebar
                  filters={filters}
                  setFilters={setFilters}
                  categories={categories}
                  productFamilies={productFamilies}
                />
              </div>
            </div>

            <div className="min-w-0">
              {count === 0 ? (
                <div className="flex min-h-[calc(100dvh-180px)] items-center justify-center">
                  <NoResults query={query} />
                </div>
              ) : (
                <>
                  <div className="mt-5 grid gap-6 min-[0px]:grid-cols-1 min-[1025px]:grid-cols-2 xl:grid-cols-3">
                    {visibleItems.map((item) => (
                      <CatalogCard key={item.id} item={item} />
                    ))}
                  </div>

                  {visibleCount < count && (
                    <div className="flex justify-center py-12">
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
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchResults({ query }: Props) {
  return <SearchResultsContent key={query} query={query} />;
}
