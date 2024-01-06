export type Category = string;

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: number;
  category: string;
  thumbnail: string;
  images: string[];
}
