import type { CatalogItem } from '@/types/catalog';

type Props = {
  item: CatalogItem;
};

export function CatalogCard({ item }: Props) {
  return (
    <div className="flex flex-col border border-black/20 dark:border-white/20 rounded-none">
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />

      <div className="flex flex-col gap-4 p-4">
        <div>
          <p className="text-[10px] uppercase text-muted-foreground mb-1">{item.productFamily}</p>

          <h3 className="text-sm font-semibold uppercase">{item.name}</h3>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-3 text-[11px] space-y-1">
          <p>No. of cavities: {item.cavities}</p>
          <p>Terminal size: {item.terminalSize} mm</p>
          <p>{item.sealable ? 'Sealable' : 'Non-sealable'}</p>
        </div>
      </div>
    </div>
  );
}
