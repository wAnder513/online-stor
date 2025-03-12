export interface Product {
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  description: string;
}

export interface ProductCard {
  id: number;
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  description: string;
}
