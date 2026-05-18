import { getProductImageUrl } from '@/services/supabase/storage';

import type { Product, ProductRow } from './products.types';

export function mapProduct(product: ProductRow): Product {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    imageUrl: getProductImageUrl(product.image_url),
    cavities: product.cavities,
    productFamily: product.product_family,
    terminalSize: product.terminal_size,
    createdAt: product.created_at,
    category: Array.isArray(product.category) ? product.category[0] : product.category,
  };
}
