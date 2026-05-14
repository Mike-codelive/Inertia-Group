import { useEffect, useRef, useState } from 'react';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { Button } from '@/components/ui/button';
import { useCatalog } from '@/hooks/useCatalog';
import { Spinner } from '@/components/ui/spinner';
import { NoResults } from '@/components/search/NoResults';
import { SearchSidebar } from '@/components/search/SearchSidebar';
import type { CatalogFilters } from '@/types/search';

const ITEMS_PER_PAGE = 12;

type Props = {
  query: string;
  initialCategory?: string;
};

function SearchResultsContent({ query, initialCategory }: Props) {
  const { data = [], loading } = useCatalog(query);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [filters, setFilters] = useState<CatalogFilters>({
    categories: initialCategory ? [initialCategory] : [],
    productFamilies: [],
  });

  const categories = [...new Set(data.map((item) => item.category))];

  const productFamilies = [...new Set(data.map((item) => item.productFamily))];

  const filteredItems = data.filter((item) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.some((category) => category.toLowerCase() === item.category.toLowerCase());

    const familyMatch =
      filters.productFamilies.length === 0 || filters.productFamilies.includes(item.productFamily);

    return categoryMatch && familyMatch;
  });

  const count = filteredItems.length;

  const visibleItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev >= count) return prev;

            return prev + ITEMS_PER_PAGE;
          });
        }
      },
      {
        rootMargin: '300px',
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [count]);

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
                  onFilterChange={() => setVisibleCount(ITEMS_PER_PAGE)}
                />
              </div>
            </div>

            <div className="min-w-0 mb-12">
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
                    <div ref={loadMoreRef} className="flex justify-center py-10">
                      <Spinner />
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

export function SearchResults({ query, initialCategory }: Props) {
  return (
    <SearchResultsContent
      key={`${query}-${initialCategory}`}
      query={query}
      initialCategory={initialCategory}
    />
  );
}
