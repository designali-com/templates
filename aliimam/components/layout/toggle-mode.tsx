"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import type { JSX } from "react"
import { useSyncExternalStore } from "react" 
import { useTheme } from "next-themes"
import { MonitorIcon, SunIcon, MoonIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element
  value: string
  isActive?: boolean
  onClick: (value: string) => void
}) {
  return (
    <button
      data-active={isActive}
      className="relative flex size-8 items-center justify-center text-muted-foreground transition-[color] hover:text-foreground data-[active=true]:text-foreground [&_svg]:size-4"
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <span
          
           
          className="absolute inset-0 border"
        />
      )}
    </button>
  )
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: "system",
  },
  {
    icon: <SunIcon />,
    value: "light",
  },
  {
    icon: <MoonIcon />,
    value: "dark",
  },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!isMounted) {
    return <div className="flex h-8 w-24" />
  }

  return (
    <div
      key={String(isMounted)} 
      className="inline-flex items-center overflow-clip border border-dotted bg-background"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </div>
  )
}
