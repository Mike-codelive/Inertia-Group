import { Link } from 'react-router-dom';
import { slugify } from '@/lib/slugify';
import type { CatalogItem } from '@/types/catalog';

type Props = {
  item: CatalogItem;
};

export function CatalogCard({ item }: Props) {
  return (
    <Link to={`/catalog/${slugify(item.category)}/${item.slug}`}>
      <div className="group cursor-pointer grid grid-cols-[150px_1fr] border border-black/20 dark:border-white/20 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
        <div className="flex items-center justify-center">
          <div>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="object-contain  border-r px-4 border-black/10 dark:border-white/10"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between py-4 pr-4">
          <div className="pl-4">
            <p className="text-[10px] uppercase text-muted-foreground tracking-wide mb-1">
              {item.productFamily}
            </p>

            <p className="text-sm font-semibold uppercase leading-tight group-hover:text-red-600 transition-colors">
              {item.name}
            </p>
          </div>

          <div className="mt-4 border-t pl-4 border-black/10 dark:border-white/10 pt-3 text-[11px]">
            <div className="flex justify-between">
              <span className="text-muted-foreground">No. of cavities</span>
              <span>{item.cavities}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Terminal size</span>
              <span>{item.terminalSize} mm</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Sealable</span>
              <span>{item.sealable ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
