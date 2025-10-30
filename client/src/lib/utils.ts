import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Toast notification system
 */
export const toast = {
  info: (message: string) => console.log(`INFO: ${message}`),
  success: (message: string) => console.log(`SUCCESS: ${message}`),
  error: (message: string) => console.error(`ERROR: ${message}`),
};
