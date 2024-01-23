import React from "react";
import Marquee from "./marquee";
import ParallaxShapes from "./parallax-shapes";
import Visualizer from "./visualizer";

const Hero = () => {
  return (
    <section className="grid place-items-center h-max w-full relative">
      <Visualizer />

      {/* shapes */}
      <ParallaxShapes />

      {/* marquee */}
      <Marquee />
    </section>
  );
};

export default Hero;
