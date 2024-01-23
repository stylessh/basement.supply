import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return formattedPrice;
}
