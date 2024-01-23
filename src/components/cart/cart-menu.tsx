import { useCartStore } from "@/stores/cart";
import React from "react";
import CartItem from "./cart-item";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const { totalPrice, items } = useCartStore();

  const formattedTotalPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    <aside className="max-h-screen grid grid-rows-[1fr,auto,1fr]">
      <header className="px-4 py-6 w-full flex flex-col gap-y-4">
        <button
          onClick={onClose}
          className="ml-auto w-max py-2 px-6 font-bold uppercase"
        >
          → Close
        </button>

        <h2 className="font-black text-7xl uppercase text-center mx-auto md:text-left md:m-0 leading-[.87]">
          Your <span className="text-outline text-black">Cart</span>
        </h2>
      </header>

      <ul className="px-4 py-6 flex flex-col gap-y-6 md:overflow-y-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <footer className="border-t grid grid-cols-[2fr,1fr]">
        <p className="uppercase font-bold text-xl p-4 border-r">
          Total: {formattedTotalPrice}
        </p>

        <button className="w-ful h-full grid place-items-center text-outline text-black text-2xl uppercase">
          Checkout
        </button>
      </footer>
    </aside>
  );
};

export default CartMenu;
