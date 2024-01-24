import { ProductItem } from "@/actions/products";

export interface Sizes {
  name: string;
  stock: number;
}

export interface CartItem extends ProductItem {
  quantity: number;
  selectedSize?: Sizes;
}
