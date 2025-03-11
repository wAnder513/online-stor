export interface Product {
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  description: string;
}

export interface ProductCard extends Product {
  id: number;
}
