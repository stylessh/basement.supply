"use client";

import React from "react";
import { SixFacesShape } from "./ui/shapes";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ParallaxShapes = () => {
  useGSAP(() => {
    gsap.to(".shape", {
      scrollTrigger: {
        trigger: ".shape",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },

      duration: 1.5,

      ease: "power2.inOut",

      y: (i) => {
        return i % 2 === 0 ? "-=50" : "+=50";
      },

      rotate: (i) => {
        return i % 2 === 0 ? "-=45" : "+=45";
      },
    });
  });

  return (
    <div className="hidden md:block">
      <SixFacesShape className="shape absolute -bottom-20 left-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50" />
      <SixFacesShape className="shape absolute -bottom-10 right-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50 rotate-90" />
    </div>
  );
};

export default ParallaxShapes;
