import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

import { productCatalog } from '@/data/productCatalog';

import { useSavedParts } from '@/hooks/useSavedParts';

import { Button } from '@/components/ui/button';
import { CatalogCard } from '@/components/catalog/CatalogCard';

export function PartsPage() {
  const { savedParts } = useSavedParts();

  const savedCatalogItems = productCatalog.filter((item) => savedParts.includes(item.id));

  const hasParts = savedCatalogItems.length > 0;

  return (
    <section className="container mx-auto min-h-[calc(100dvh-65px)] pt-28 pb-12 px-6">
      {hasParts ? (
        <>
          <div className="mb-10 border-b pb-4">
            <p className="text-sm text-muted-foreground">
              SAVED PARTS
              <span className="ml-3 text-sm font-light text-gray-700 dark:text-gray-300">
                {savedCatalogItems.length}
              </span>
            </p>
          </div>

          <div className="grid gap-6 min-[0px]:grid-cols-1 min-[1025px]:grid-cols-2 xl:grid-cols-3">
            {savedCatalogItems.map((item) => (
              <CatalogCard key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex min-h-[calc(100dvh-160px)] items-center justify-center">
          <div className="flex max-w-86 flex-col items-center">
            <h1 className="mb-2 text-center text-[1.5rem] font-bold">THERE ARE NO SAVED PARTS</h1>

            <p className="text-center">
              Go to the catalog and find the parts
              <br />
              you're interested in
            </p>

            <div className="mt-5 flex w-full justify-center md:h-13.5">
              <Button
                variant="cta"
                className="group h-full w-full cursor-pointer rounded-none p-0 text-sm font-medium transition-colors select-none"
              >
                <Link className="h-full w-full" to="/search">
                  <div className="flex h-full items-center justify-between px-6 py-3 text-sm md:text-lg">
                    <span>Browse Catalog</span>

                    <MoveRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 md:size-7" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
