export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  cavities: number | null;
  productFamily: string | null;
  terminalSize: number | null;
  sealable: boolean | null;
  created_at: string;
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
}
