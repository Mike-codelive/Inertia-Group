import { CatalogCard } from '@/components/catalog/CatalogCard';
import type { Product } from '@/services/products/products.types';

type Props = {
  currentProduct: Product;
  products: Product[];
};

export function RelatedProducts({ currentProduct, products }: Props) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== currentProduct.id && item.category?.slug === currentProduct.category?.slug
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-2xl font-semibold uppercase">Related Products</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
