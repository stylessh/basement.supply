import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "border border-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
