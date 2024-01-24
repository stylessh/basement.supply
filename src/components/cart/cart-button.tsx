"use client";

import React, { useState } from "react";
import Button from "../ui/button";

import * as Dialog from "@radix-ui/react-dialog";
import CartMenu from "./cart-menu";
import { useCartStore } from "@/stores/cart";

const CartButton = () => {
  const count = useCartStore((state) => state.itemsCount);
  const [open, setOpen] = useState(false);

  const isClient = typeof window !== "undefined";

  return (
    <Dialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Dialog.Trigger asChild>
        <Button className="font-bold" suppressHydrationWarning>
          Cart ({isClient ? count : "?"})
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 h-screen w-full fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50" />

        <Dialog.Content className="max-w-2xl bg-background border fixed top-0 right-0 w-full z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-40 data-[state=closed]:slide-out-to-right-40 data-[state=closed]:fade-out-0 ease-in-out duration-300">
          <CartMenu onClose={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartButton;
