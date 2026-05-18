import { useEffect, useRef, useState } from 'react';

import { CatalogCard } from '@/components/catalog/CatalogCard';
import { CatalogCardSkeleton } from '@/components/catalog/CatalogCardSkeleton';
import { NoResults } from '@/components/search/NoResults';
import { SearchSidebar } from '@/components/search/SearchSidebar';
import { SearchSidebarSkeleton } from '@/components/search/SearchSidebarSkeleton';
import { ErrorState } from '@/components/ui/error-state';
import { Spinner } from '@/components/ui/spinner';

import { useSearchProducts } from '@/hooks/useSearchProducts';

import type { CatalogFilters } from '@/types/search';

const ITEMS_PER_PAGE = 12;

type Props = {
  query: string;
  filters: CatalogFilters;
  setFilters: (filters: CatalogFilters) => void;
};

function SearchResultsContent({ query, filters, setFilters }: Props) {
  const [page, setPage] = useState(1);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { products, loading, error, hasMore } = useSearchProducts({
    query,
    categories: filters.categories,
    productFamilies: filters.productFamilies,
    page,
    limit: ITEMS_PER_PAGE,
  });

  const categories = [
    ...new Set(
      products
        .map((item) => item.category?.slug)
        .filter((slug): slug is string => typeof slug === 'string')
    ),
  ];

  const productFamilies = [
    ...new Set(
      products
        .map((item) => item.productFamily)
        .filter((family): family is string => typeof family === 'string')
    ),
  ];

  const count = products.length;

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target || loading || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: '300px',
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [loading]);

  if (error) {
    return <ErrorState title="Unable to load catalog" description={error} />;
  }

  return (
    <div className="container mx-auto min-h-[calc(100dvh-120px)] px-6">
      {loading && page === 1 ? (
        <div className="relative">
          <div className="fixed top-16.25 left-0 right-0 z-30 border-b bg-background">
            <div className="container mx-auto px-6 py-4">
              <div className="h-4 w-32 animate-pulse bg-muted" />
            </div>
          </div>

          <div className="mt-29 gap-10 md:grid md:grid-cols-[240px_1fr]">
            <div className="relative hidden md:block">
              <div className="fixed top-29 bottom-0 w-60 pt-5">
                <SearchSidebarSkeleton />
              </div>
            </div>

            <div className="mb-12 min-w-0">
              <div className="mt-5 grid gap-6 min-[0px]:grid-cols-1 min-[1025px]:grid-cols-2 xl:grid-cols-3">
                {Array.from({
                  length: ITEMS_PER_PAGE,
                }).map((_, index) => (
                  <CatalogCardSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="fixed top-16.25 left-0 right-0 z-30 border-b bg-background">
            <div className="container mx-auto px-6 py-4">
              <p className="text-sm text-muted-foreground">
                <span>
                  RESULTS
                  {query ? ` FOR ${query}` : ''}
                </span>

                <span className="ml-3 text-sm font-light text-gray-700 dark:text-gray-300">
                  {count}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-29 gap-10 md:grid md:grid-cols-[240px_1fr]">
            <div className="relative hidden md:block">
              <div className="fixed top-29 bottom-0 w-60 border-r pt-5">
                <SearchSidebar
                  filters={filters}
                  setFilters={setFilters}
                  categories={categories}
                  productFamilies={productFamilies}
                  onFilterChange={() => undefined}
                />
              </div>
            </div>

            <div className="mb-12 min-w-0">
              {count === 0 ? (
                <div className="flex min-h-[calc(100dvh-180px)] items-center justify-center">
                  <NoResults query={query} />
                </div>
              ) : (
                <>
                  <div className="mt-5 grid gap-6 min-[0px]:grid-cols-1 min-[1025px]:grid-cols-2 xl:grid-cols-3">
                    {products.map((item) => (
                      <CatalogCard key={item.id} item={item} />
                    ))}
                  </div>

                  {loading && page > 1 && (
                    <div className="flex justify-center py-10">
                      <Spinner />
                    </div>
                  )}

                  {!loading && hasMore && <div ref={loadMoreRef} className="h-10" />}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchResults(props: Props) {
  return (
    <SearchResultsContent
      key={JSON.stringify({
        query: props.query,
        filters: props.filters,
      })}
      {...props}
    />
  );
}
