import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: Array<[]>) {
  return twMerge(clsx(inputs));
}
