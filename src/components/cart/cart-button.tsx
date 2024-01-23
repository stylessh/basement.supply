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
        <Dialog.Overlay className="bg-black/50 h-screen w-full fixed inset-0" />

        <Dialog.Content className="max-w-2xl bg-black border fixed top-0 right-0 w-full z-50">
          <CartMenu onClose={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartButton;
