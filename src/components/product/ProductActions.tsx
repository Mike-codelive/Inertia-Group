import { Download, Bookmark, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button variant="cta" className="gap-3 px-6 cursor-pointer">
        <Bookmark className="size-4" />
        Save Part
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
