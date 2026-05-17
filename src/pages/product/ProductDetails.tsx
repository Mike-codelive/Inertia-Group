import { useParams } from 'react-router-dom';
// import { productCatalog } from '@/data/productCatalog';
import { useProduct } from '@/hooks/useProducts';
import { ProductHero } from '@/components/product/ProductHero';
import { ProductSpecs } from '@/components/product/ProductSpecs';
// import { RelatedProducts } from '@/components/product/RelatedProducts';

export function ProductDetailsPage() {
  const { slug } = useParams();

  const { product, loading, error } = useProduct(slug ?? '');

  if (loading) {
    return <div>Loading product...</div>;
  }

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="print-container">
        <ProductHero product={product} />
        <ProductSpecs product={product} />
      </div>

      <div className="no-print">
        {/* <RelatedProducts currentProduct={product} products={productCatalog} /> */}
        Related products coming soon
      </div>
    </section>
  );
}
