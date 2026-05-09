import { useParams } from 'react-router-dom';
import { productCatalog } from '@/data/productCatalog';

import { ProductHero } from '@/components/product/ProductHero';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { RelatedProducts } from '@/components/product/RelatedProducts';

export function ProductDetailsPage() {
  const { slug } = useParams();

  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="container mx-auto px-6 py-24 h-dvh">
        <h1 className="text-4xl font-semibold">Product not found</h1>

        <p className="mt-4 text-muted-foreground">
          The product you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="print-container">
        <ProductHero product={product} />
        <ProductSpecs product={product} />
      </div>

      <div className="no-print">
        <RelatedProducts currentProduct={product} products={productCatalog} />
      </div>
    </section>
  );
}
