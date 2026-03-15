import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoveRight } from 'lucide-react';

export function Search() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="flex w-full items-center">
          <Input
            type="search"
            placeholder="SEARCH BY PART # OR KEYWORD"
            className="h-10 md:h-14 rounded-none
    border dark:border-white/20 border-black/20 border-r-0
    outline -outline-offset-1 dark:outline-black/80 focus:border-r-0
        focus-visible:dark:border-white
        focus-visible:border-black
    focus-visible:border-r-0
    focus-visible:ring-0
    focus-visible:ring-offset-0
    placeholder:md:text-sm
    placeholder:text-xs
  "
          />

          <Button className="group relative h-10 md:h-14 rounded-none bg-red-600 px-6 hover:bg-red-700 text-white">
            SEARCH
            <MoveRight
              className="ml-2 size-5
      transition-transform duration-200 ease-out
      group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
