import React from "react";
import Pill from "./ui/pill";
import Marquee from "./marquee";
import ParallaxShapes from "./parallax-shapes";

const Hero = () => {
  return (
    <section className="grid place-items-center h-max w-full relative">
      <article className="relative container">
        <h1 className="font-black text-[14vw] uppercase text-center mx-auto leading-[.87]">
          Basement
          <span className="text-outline block text-black">Supply</span>
        </h1>

        <Pill className="absolute bottom-4 md:bottom-6 left-[5%] w-[8vw]">
          EST
        </Pill>
        <Pill className="absolute bottom-4 md:bottom-6 right-[5%] w-[8vw]">
          2K19
        </Pill>
      </article>

      {/* shapes */}
      <ParallaxShapes />

      {/* marquee */}
      <Marquee />
    </section>
  );
};

export default Hero;
