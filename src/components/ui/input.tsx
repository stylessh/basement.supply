import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "border-b border-[#999] p-4 bg-transparent w-full outline-white hover:border-white transition-colors",
        className
      )}
      {...props}
    />
  );
};

export default Input;
