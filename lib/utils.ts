import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// O chip mono da identidade visual do viniciusaguiardev.com.br.
export const MONO_CHIP =
  "border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mu"
