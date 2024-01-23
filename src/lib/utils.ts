import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...args: ClassNameValue[]) {
  return clsx(twMerge(...args));
}
