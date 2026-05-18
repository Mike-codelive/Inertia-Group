import { supabase } from './client';

const BUCKET = 'product-images';

export function getProductImageUrl(path?: string | null) {
  if (!path) {
    return '';
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);

  return data.publicUrl;
}
