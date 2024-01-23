import React, { Suspense } from "react";
import Link from "next/link";

import Logo from "./ui/logo";
import Advisory from "./ui/advisory";
import CartButton from "./cart/cart-button";

const Header = () => {
  return (
    <header className="relative mt-6 mb-10 container w-full flex justify-between items-center">
      <Link href="/" className="font-bold">
        <Logo className="w-10 md:w-32" />
      </Link>

      <div className="hidden md:block">
        <Advisory />
      </div>

      <CartButton />
    </header>
  );
};

export default Header;
