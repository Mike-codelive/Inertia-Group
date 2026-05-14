import { Button } from '@/components/ui/button';
import type { CatalogFilters } from '@/types/search';

type Props = {
  filters: CatalogFilters;
  setFilters: (filters: CatalogFilters) => void;
  categories: string[];
  productFamilies: string[];
  onFilterChange?: () => void;
};

const initialFilters: CatalogFilters = {
  categories: [],
  productFamilies: [],
};

export function SearchSidebar({
  filters,
  setFilters,
  categories,
  productFamilies,
  onFilterChange,
}: Props) {
  const toggleFilter = (key: keyof CatalogFilters, value: string) => {
    const exists = filters[key].some((item) => item.toLowerCase() === value.toLowerCase());

    const nextFilters = {
      ...filters,
      [key]: exists
        ? filters[key].filter((item) => item.toLowerCase() !== value.toLowerCase())
        : [...filters[key], value],
    };

    setFilters(nextFilters);

    onFilterChange?.();
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.productFamilies.length > 0;

  const clearFilters = () => {
    setFilters(initialFilters);

    onFilterChange?.();
  };

  return (
    <aside className="h-fit border-r border-black/10 pr-6">
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide">Category</h3>

          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleFilter('categories', category)}
                className={`cursor-pointer text-left text-sm transition-colors ${
                  filters.categories.some((item) => item.toLowerCase() === category.toLowerCase())
                    ? 'font-medium text-red-600'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide">Product Family</h3>

          <div className="flex flex-col gap-3">
            {productFamilies.map((family) => (
              <button
                key={family}
                onClick={() => toggleFilter('productFamilies', family)}
                className={`cursor-pointer text-left text-sm transition-colors ${
                  filters.productFamilies.includes(family)
                    ? 'font-medium text-red-600'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {family}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <div>
            <Button
              variant="cta"
              onClick={clearFilters}
              className="h-auto w-full cursor-pointer text-sm"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
