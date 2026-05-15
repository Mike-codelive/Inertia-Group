import { ProductActions } from '@/components/product/ProductActions';
import { ProductBreadcrumbs } from '@/components/product/ProductBreadcrumbs';
import type { CatalogItem } from '@/domain/catalog/catalog.types';

type Props = {
  product: CatalogItem;
};

export function ProductHero({ product }: Props) {
  return (
    <section className="print:mb-4">
      <div className="no-print">
        <ProductBreadcrumbs category={product.category} productName={product.name} />
      </div>

      <div className="grid gap-14 print:gap-6 lg:grid-cols-[1fr_500px] print:grid-cols-2">
        <div className="h-fit border border-black/10 dark:border-white/10">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full object-contain p-5 print:max-h-72 print:p-2"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground print:text-xs">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-semibold uppercase print:mt-2 print:text-2xl">
            {product.name}
          </h1>

          <p className="mt-8 leading-relaxed text-muted-foreground print:mt-4 print:text-sm">
            {product.description} offers high-performance, ultra-compact, light-weight,
            cost-effective systems engineered for optimal performance anywhere in the vehicle for
            industrial standard interfaces.
          </p>

          <div className="no-print">
            <ProductActions product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
