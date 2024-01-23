"use client";

import React from "react";
import { useCartStore } from "@/stores/cart";
import CartItem from "../cart/cart-item";
import { formatPrice } from "@/lib/utils";

const CheckoutSummary = () => {
  const { items, totalPrice } = useCartStore();

  return (
    <section className="max-h-screen container grid grid-rows-[1fr,20px] gap-y-10 pb-20">
      <ul className="overflow-y-auto flex flex-col gap-y-4 min-h-[500px] max-h-[50vh]">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <p className="text-2xl font-bold">
        Total: <span className="font-bold">{formatPrice(totalPrice)}</span>
      </p>
    </section>
  );
};

export default CheckoutSummary;
