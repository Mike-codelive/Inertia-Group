export function CatalogCardSkeleton() {
  return (
    <div
      data-testid="catalog-skeleton"
      className="grid grid-cols-[150px_1fr] border border-black/20 bg-white dark:border-white/20 dark:bg-transparent"
    >
      <div className="flex items-center justify-center border-r border-black/10 px-4 dark:border-white/10">
        <div className="h-28 w-full animate-pulse bg-muted" />
      </div>

      <div className="flex flex-col justify-between py-4 pr-4">
        <div className="pl-4">
          <div className="mb-2 h-3 w-16 animate-pulse bg-muted" />

          <div className="mb-4 h-5 w-32 animate-pulse bg-muted" />

          <div className="h-4 w-6 animate-pulse bg-muted" />
        </div>

        <div className="mt-4 border-t border-black/10 pl-4 pt-3 dark:border-white/10">
          <div className="mb-2 h-3 w-full animate-pulse bg-muted" />

          <div className="mb-2 h-3 w-full animate-pulse bg-muted" />

          <div className="h-3 w-full animate-pulse bg-muted" />
        </div>
      </div>
    </div>
  );
}
