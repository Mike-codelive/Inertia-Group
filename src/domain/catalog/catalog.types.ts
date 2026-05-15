export type CatalogRecord = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  cavities: number;
  product_family: string;
  terminal_size: number;
  sealable: boolean;
};

export type CatalogItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  cavities: number;
  productFamily: string;
  terminalSize: number;
  sealable: boolean;
};
