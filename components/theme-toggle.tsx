"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const emptySubscribe = () => () => {}

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  // O tema só é conhecido no client: até hidratar, o ícone fica neutro.
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const dark = !mounted || resolvedTheme !== "light"

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      className="grid size-8 cursor-pointer place-items-center border border-line text-mu transition-colors hover:border-field hover:text-fg"
    >
      {dark ? <Moon aria-hidden className="size-3.5" /> : <Sun aria-hidden className="size-3.5" />}
    </button>
  )
}
