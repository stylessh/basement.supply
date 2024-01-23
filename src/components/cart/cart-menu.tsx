import { useCartStore } from "@/stores/cart";
import React from "react";
import CartItem from "./cart-item";
import { formatPrice } from "@/lib/utils";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const { totalPrice, items, itemsCount } = useCartStore();

  const formattedTotalPrice = formatPrice(totalPrice);

  return (
    <aside className="max-h-screen h-screen md:h-auto grid grid-rows-[1fr,auto,60px]">
      <header className="px-4 py-6 w-full flex flex-col gap-y-4">
        <button
          onClick={onClose}
          className="ml-auto w-max py-2 px-6 font-bold uppercase"
        >
          → Close
        </button>

        <h2 className="font-black text-8xl md:text-7xl uppercase text-center mx-auto md:text-left md:m-0 leading-[.87]">
          Your <span className="text-outline text-black">Cart</span>
        </h2>
      </header>

      <ul className="px-4 py-6 flex flex-col gap-y-6 overflow-y-auto min-h-[300px]">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {items.length === 0 && (
          <p className="text-center md:text-left text-xl font-bold uppercase px-4 text-[#999]">
            Your cart is empty, for now...
          </p>
        )}
      </ul>

      <footer className="border-t grid grid-cols-[2fr,1fr]">
        <p className="uppercase font-bold md:text-xl p-4 border-r">
          Total: {formattedTotalPrice}
        </p>

        <button
          disabled={itemsCount === 0}
          className="w-ful h-full grid place-items-center text-outline text-black md:text-2xl uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
        >
          Checkout
        </button>
      </footer>
    </aside>
  );
};

export default CartMenu;
