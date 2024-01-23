"use client";

import React from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { SixFacesShape } from "./ui/shapes";

const ParallaxShapes = () => {
  return (
    <div className="hidden md:block">
      <Scrollytelling.Root>
        <Scrollytelling.Animation
          tween={{
            start: 0,
            end: 10,
            to: {
              y: -100,
              scale: 1.5,
            },
          }}
        >
          <SixFacesShape className="absolute -bottom-20 left-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50" />
        </Scrollytelling.Animation>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Animation
          tween={{
            start: 0,
            end: 10,
            to: {
              y: -100,
              scale: 1.5,
            },
          }}
        >
          <SixFacesShape className="absolute bottom-0 right-10 w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] z-50 rotate-90" />
        </Scrollytelling.Animation>
      </Scrollytelling.Root>
    </div>
  );
};

export default ParallaxShapes;
