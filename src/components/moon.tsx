"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline" aria-label="Select theme">
        {theme === "light" && (
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        )}
        {theme === "dark" && (
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        )}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-32 dark:border-neutral-700">
      <DropdownMenuItem onClick={() => setTheme("light")}>
        <Sun
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        <Moon
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
        <span>Dark</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        <Monitor
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
        <span>System</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

















