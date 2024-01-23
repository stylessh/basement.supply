"use client";

import React, { FormEvent } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useCartStore } from "@/stores/cart";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const router = useRouter();

  const submitOrder = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    /**
     * In here we should store and process the order data,
     * for example, send it to an API endpoint.
     */

    // log data
    console.log({ data });

    // clear cart state
    useCartStore.persist.clearStorage();
    router.push("/success");
  };

  return (
    <section className="container">
      <header className="mb-10">
        <h1 className="text-5xl md:text-8xl font-bold uppercase">Checkout</h1>
      </header>

      <form className="flex flex-col gap-y-10" onSubmit={submitOrder}>
        <Input type="text" placeholder="First Name" required name="firstName" />
        <Input type="text" placeholder="Last Name" required name="lastName" />
        <Input type="email" placeholder="Email" required name="email" />

        <Button type="submit" className="!mt-16">
          Complete Order
        </Button>
      </form>
    </section>
  );
};

export default CheckoutForm;
