import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '@/lib/slugify';

type Props = {
  category: string;
  productName: string;
};

export function ProductBreadcrumbs({ category, productName }: Props) {
  return (
    <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
      <Link to="/" className="hover:text-foreground transition-colors">
        Home
      </Link>

      <ChevronRight className="size-4" />

      <Link
        to={`/search?q=${slugify(category)}`}
        className="hover:text-foreground transition-colors"
      >
        {category}
      </Link>

      <ChevronRight className="size-4" />

      <span className="text-foreground">{productName}</span>
    </nav>
  );
}
