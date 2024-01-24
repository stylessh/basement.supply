import React from "react";
import { CartItem } from "@/types/data";
import Image from "next/image";
import { useCartStore } from "@/stores/cart";
import CartItemQuantitySelector from "./cart-quantity-selector";
import CartItemSizeSelector from "./cart-size-selector";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem, addItem, updateSize } = useCartStore();

  const formattedPrice = formatPrice(item.price);

  return (
    <li className="border border-foreground p-4 grid grid-cols-1 sm:grid-cols-[150px,1fr] md:grid-cols-[1fr,2fr] gap-4">
      <figure className="relative p-4 grid place-items-center bg-gradient-to-t from-[#FAFAFA]/10 to-black h-full">
        <Image
          src={item.image.rawUrl}
          alt={item.name}
          width={150}
          height={150}
        />
      </figure>

      <article className="flex flex-col justify-between gap-y-6">
        <div>
          <h3 className="uppercase font-bold text-2xl line-clamp-1">
            {item.name}
          </h3>
          <p className="font-bold text-muted line-clamp-1">
            {item.description}
          </p>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-y-6">
          <ul className="flex flex-col gap-y-2">
            <li className="flex items-center gap-x-4">
              <span className="font-bold uppercase">Quantity:</span>

              <CartItemQuantitySelector
                quantity={item.quantity}
                onDecrement={() => removeItem(item)}
                onIncrement={() => addItem(item)}
              />
            </li>

            <li className="flex items-center gap-x-4">
              <span className="font-bold uppercase">Sizes:</span>

              <CartItemSizeSelector
                selectedSize={item.selectedSize}
                onSizeChange={(size) => {
                  updateSize(item, size);
                }}
              />
            </li>
          </ul>

          <p className="text-2xl font-bold">{formattedPrice}</p>
        </div>
      </article>
    </li>
  );
};

export default CartItem;
