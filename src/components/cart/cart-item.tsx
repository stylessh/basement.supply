import React from "react";
import { CartItem } from "@/types/data";
import Image from "next/image";

interface CartItemProps {
  item: CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(item.price);

  return (
    <li className="border p-4 grid grid-cols-[1fr,2fr] gap-x-4">
      <figure className="relative p-4 grid place-items-center bg-gradient-to-t from-[#FAFAFA]/10 to-black h-full">
        <Image src={item.image} alt={item.name} width={150} height={150} />
      </figure>

      <article className="flex flex-col justify-between">
        <div>
          <h3 className="uppercase font-bold text-2xl line-clamp-1">
            {item.name}
          </h3>
          <p className="font-bold text-[#999] line-clamp-1">
            {item.description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p>quantity: {item.quantity}</p>
            <p>sizes: {item.sizes.map((s) => s.name).join(", ")}</p>
          </div>

          <p className="text-2xl font-bold">{formattedPrice}</p>
        </div>
      </article>
    </li>
  );
};

export default CartItem;
