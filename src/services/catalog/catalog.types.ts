export type CatalogItem = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;

  category: string;
  productFamily: string;

  cavities: number;
  terminalSize: number;

  sealable: boolean;
};
