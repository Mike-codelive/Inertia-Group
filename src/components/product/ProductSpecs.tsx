import type { Product } from '@/services/products/products.types';

type Props = {
  product: Product;
};

export function ProductSpecs({ product }: Props) {
  const specs = [
    {
      label: 'Category',
      value: product.category?.name,
    },
    {
      label: 'Product Family',
      value: product.productFamily,
    },
    {
      label: 'No. of Cavities',
      value: product.cavities,
    },
    {
      label: 'Terminal Size',
      value: `${product.terminalSize} mm`,
    },
    {
      label: 'Sealable',
      value: product.sealable ? 'Yes' : 'No',
    },
  ];

  return (
    <section className="mt-14">
      <h2 className="mb-6 text-2xl font-semibold uppercase">Specifications</h2>

      <div className="divide-y border border-black/10 dark:border-white/10">
        {specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-2 gap-4 px-6 py-4 text-sm">
            <span className="text-muted-foreground">{spec.label}</span>

            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
