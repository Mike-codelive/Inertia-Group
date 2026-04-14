import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoveRight, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchBarProps = {
  variant?: 'default' | 'navbar';
};

export function SearchBar({ variant = 'default' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  if (variant === 'navbar') {
    return (
      <div className="flex relative items-center w-full bg-white hover:bg-gray-100 dark:text-black">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="SEARCH BY PART # OR KEYWORD"
          className="h-10 lg:h-7 rounded-none border border-black/20 border-r-0 pl-10 placeholder:text-xs w-full lg:min-w-55 xl:w-87.5"
        />

        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Button
          type="button"
          onClick={handleSearch}
          aria-label="submit search"
          className="group relative h-10 lg:h-7 rounded-none bg-red-600 px-4 lg:px-6 hover:bg-red-700 text-white"
        >
          <MoveRight className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="flex w-full items-center">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="SEARCH BY PART # OR KEYWORD"
            className="h-10 md:h-14 rounded-none border dark:border-white/20 border-black/20 border-r-0 outline -outline-offset-1 dark:outline-black/80 focus:border-r-0 focus-visible:dark:border-white focus-visible:border-black focus-visible:border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:md:text-sm placeholder:text-xs"
          />
          <Button
            onClick={handleSearch}
            className="group relative h-10 md:h-14 rounded-none bg-red-600 px-6 hover:bg-red-700 text-white"
          >
            SEARCH
            <MoveRight className="ml-2 size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
