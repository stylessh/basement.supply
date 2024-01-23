"use client";

import { Product } from "@/types/data";
import React, { useEffect, useRef, useState } from "react";
import { PlanetShape } from "../ui/shapes";
import { useCartStore } from "@/stores/cart";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const planetRef = useRef<SVGSVGElement>(null);

  const [hasAdded, setHasAdded] = useState(false);
  const { addItem } = useCartStore();

  useEffect(() => {
    // remove the added to cart message after 1 second
    if (hasAdded) {
      setTimeout(() => {
        setHasAdded(false);
      }, 3000);
    }
  }, [hasAdded]);

  const addToCart = () => {
    addItem(product);
    setHasAdded(true);

    // animate the planet
    gsap.to(planetRef.current, {
      duration: 0.5,
      scale: 0.75,
      rotateY: 360,

      ease: "power1.out",
      onComplete: () => {
        gsap.to(planetRef.current, {
          duration: 0.5,
          scale: 1,
          ease: "power1.in",
        });
      },
    });
  };

  return (
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 top-0 left-0 w-full h-full grid place-items-center">
      <PlanetShape className="w-24" ref={planetRef} />

      <button
        onClick={addToCart}
        disabled={hasAdded}
        className={cn(
          "absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 z-10 uppercase text-2xl",
          { "animate-pulse": hasAdded }
        )}
      >
        {hasAdded ? (
          <span className="text-outline text-black">Added</span>
        ) : (
          <span className="text-outline text-black">Add to cart</span>
        )}
      </button>
    </div>
  );
};

export default AddToCart;
