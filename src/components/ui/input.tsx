import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "border-b border-muted p-4 bg-transparent w-full ring-0 outline-foreground hover:border-foreground transition-colors",
        className
      )}
      {...props}
    />
  );
};

export default Input;
