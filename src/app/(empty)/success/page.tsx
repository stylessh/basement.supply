"use client";

import Button from "@/components/ui/button";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    const confetti = new JSConfetti();
    confetti.addConfetti();
  }, []);

  return (
    <main className="h-screen grid place-items-center container">
      <article className="flex flex-col items-center justify-center text-center">
        <h1 className="title font-black text-[10vw] uppercase text-center mx-auto leading-[.87] text-balance">
          You have <span className="text-outline text-black">pretty</span> good
          taste.
        </h1>

        <p className="mt-10 text-[#999] text-sm md:text-base">
          Thank you for your purchase. You will receive an email confirmation
          shortly.
        </p>

        <Button className="mt-10">
          <a href="/">Back to the store</a>
        </Button>
      </article>
    </main>
  );
}
