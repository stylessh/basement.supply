export interface Product {
  id: number;
  name: string;
  description: string;

  sizes: Sizes[];

  price: number;
  image: string;
}

export interface Sizes {
  name: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: Sizes;
}
