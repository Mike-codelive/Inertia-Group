export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type ProductRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  cavities: number | null;
  product_family: string | null;
  terminal_size: number | null;
  created_at: string;
  category: Category | Category[] | null;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string;
  sealable: boolean;
  cavities: number | null;
  productFamily: string | null;
  terminalSize: number | null;
  createdAt: string;
  category: Category | null;
};

export type SearchProductsParams = {
  query?: string;
  categories?: string[];
  productFamilies?: string[];
  page?: number;
  limit?: number;
};
