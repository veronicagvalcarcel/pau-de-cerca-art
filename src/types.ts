export interface Product {
  id: number;
  name: string;
  category: string;
  collection: string;

  image: string;
  backImage?: string;

  description: string;

  material?: string;
  measures?: string;

  variants?: {
    color?: string;
    images?: string[];
  };
}