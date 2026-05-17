import { supabase } from '@/services/supabase/client';
import type { Product } from './products.types';

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
      category:categories (
        id,
        name,
        slug
      )
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    image: product.image_url,
    cavities: product.cavities,
    productFamily: product.product_family,
    terminalSize: product.terminal_size,
    sealable: false,
    created_at: product.created_at,
    category: product.category?.[0] ?? null,
  }));
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

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    description: data.description,
    image: data.image_url,
    cavities: data.cavities,
    productFamily: data.product_family,
    terminalSize: data.terminal_size,
    sealable: false,
    created_at: data.created_at,
    category: data.category?.[0] ?? null,
  };
}
