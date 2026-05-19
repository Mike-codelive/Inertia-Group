import { supabase } from '@/services/supabase/client';

import { mapProduct } from './products.mapper';

import type { Product, SearchProductsParams } from './products.types';

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select(`
      id,
      name,
      slug,
      description,
      image_url,
      cavities,
      product_family,
      terminal_size,
      created_at,
      sealable,
      category:categories (
        id,
        name,
        slug
      )
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      id,
      name,
      slug,
      description,
      image_url,
      cavities,
      product_family,
      terminal_size,
      created_at,
      sealable,
      category:categories (
        id,
        name,
        slug
      )
    `
    )
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapProduct(data);
}

export async function searchProducts({
  query,
  categories,
  productFamilies,
  page = 1,
  limit = 12,
}: SearchProductsParams): Promise<Product[]> {
  let request = supabase.from('products').select(`
      id,
      name,
      slug,
      description,
      image_url,
      cavities,
      product_family,
      sealable,
      terminal_size,
      created_at,
      category:categories (
        id,
        name,
        slug
      )
    `);

  if (query) {
    const terms = query.trim().toLowerCase().split(/\s+/);

    for (const term of terms) {
      request = request.or(
        [
          `name.ilike.%${term}%`,
          `description.ilike.%${term}%`,
          `product_family.ilike.%${term}%`,
        ].join(',')
      );
    }
  }

  if (productFamilies?.length) {
    request = request.in('product_family', productFamilies);
  }

  const from = (page - 1) * limit;

  const to = from + limit - 1;

  request = request.range(from, to);

  const { data, error } = await request;

  if (error) {
    throw new Error(error.message);
  }

  let mappedProducts = data.map(mapProduct);

  if (categories?.length) {
    mappedProducts = mappedProducts.filter((product) =>
      categories.includes(product.category?.slug ?? '')
    );
  }

  return mappedProducts;
}
