export function SearchSidebarSkeleton() {
  return (
    <aside data-testid="catalog-sidebar-skeleton" className="h-fit border-r border-black/10 pr-6">
      <div className="space-y-8">
        <div>
          <div className="mb-4 h-4 w-24 animate-pulse bg-muted" />

          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 w-28 animate-pulse bg-muted" />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 h-4 w-32 animate-pulse bg-muted" />

          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 w-24 animate-pulse bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
