"use client";

import { Product } from "@/types/data";
import React from "react";
import { PlanetShape } from "../ui/shapes";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const addToCart = async () => {
    alert("Added to cart!");
  };

  return (
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 top-0 left-0 w-full h-full grid place-items-center">
      <PlanetShape className="w-24" />

      <button
        onClick={addToCart}
        className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 z-10 uppercase text-outline text-black text-2xl"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
