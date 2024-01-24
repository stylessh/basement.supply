import React from "react";
import { LevelsShape } from "./ui/shapes";

const Footer = () => {
  return (
    <footer className="container relative mt-10">
      <LevelsShape className="absolute -top-5 left-[10%] w-24 md:top-5 md:left-[25%] sm:w-[16vw]" />

      <h3 className="font-black text-[14vw] uppercase text-right leading-[.87]">
        Wear
        <span className="text-outline block">Everyday</span>
      </h3>
    </footer>
  );
};

export default Footer;
