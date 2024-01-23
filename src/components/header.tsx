import React from "react";
import Link from "next/link";
import Logo from "./ui/logo";

const Header = () => {
  return (
    <header className="my-6 container w-full flex">
      <Link href="/" className="font-bold">
        <Logo className="w-32" />
      </Link>
    </header>
  );
};

export default Header;
