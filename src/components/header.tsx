import React from "react";
import Link from "next/link";
import Logo from "./ui/logo";
import Advisory from "./ui/advisory";

const Header = () => {
  return (
    <header className="mt-6 mb-10 container w-full flex justify-between items-center">
      <Link href="/" className="font-bold">
        <Logo className="w-10 md:w-32" />
      </Link>

      <div className="hidden md:block">
        <Advisory />
      </div>

      <button>test</button>
    </header>
  );
};

export default Header;
