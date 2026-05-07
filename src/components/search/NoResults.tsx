import { Search, X } from 'lucide-react';

type Props = {
  query: string;
};

export function NoResults({ query }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="relative text-red-700">
        <Search className="size-10" />
        <X className="absolute bottom-0 left-0 size-5.5" />
      </div>

      <h2 className="text-lg font-semibold mb-2">No results found</h2>

      <p className="text-sm text-muted-foreground max-w-md">
        {query
          ? `We couldn’t find any matches for "${query}". Try adjusting your search or filters.`
          : 'No products available.'}
      </p>
    </div>
  );
}
