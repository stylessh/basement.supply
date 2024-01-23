"use client";

import { Root as ScrollyTellingRoot } from "@bsmnt/scrollytelling";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollyTellingRoot>
      <>{children}</>
    </ScrollyTellingRoot>
  );
};
