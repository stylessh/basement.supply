import React from "react";
import { SixFacesShape } from "./ui/shapes";

const ParallaxShapes = () => {
  return (
    <div className="hidden md:block">
      <SixFacesShape className="absolute -bottom-20 left-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50" />
      <SixFacesShape className="absolute -bottom-10 right-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50 rotate-90" />
    </div>
  );
};

export default ParallaxShapes;
