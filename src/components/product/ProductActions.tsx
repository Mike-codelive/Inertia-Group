import { Download, Bookmark, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSavedPart } from '@/hooks/useSavedPart';
import type { CatalogItem } from '@/types/catalog';

type Props = {
  product: CatalogItem;
};

export function ProductActions({ product }: Props) {
  const { saved, toggleSaved } = useSavedPart(product.id, product.name);

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button variant="cta" className="gap-3 px-6 cursor-pointer" onClick={toggleSaved}>
        <Bookmark className={`size-4 ${saved ? 'fill-white' : ''}`} />

        {saved ? 'Saved' : 'Save Part'}
      </Button>

      <Button variant="outline" className="gap-3 rounded-none cursor-pointer">
        <Download className="size-4" />
        Datasheet
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => window.print()}
        className="gap-3 rounded-none cursor-pointer"
      >
        <Printer className="size-4" />
        Print
      </Button>
    </div>
  );
}
