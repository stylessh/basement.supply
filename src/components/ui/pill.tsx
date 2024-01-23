import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Pill = ({ children, className }: PillProps) => {
  return (
    <div
      className={cn("border border-white rounded-full grid place-items-center w-10 aspect-video text-xs md:text-base", className)}
    >
      {children}
    </div>
  );
};

export default Pill;
