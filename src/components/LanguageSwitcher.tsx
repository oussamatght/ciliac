"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguageStore, Language } from "@/lib/store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ar', label: 'العربية', flag: '🇩🇿' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
]

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "compact" }) {
  const { language, setLanguage } = useLanguageStore()

  const currentLang = languages.find(l => l.code === language) || languages[0]

  if (variant === "compact") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-orange-400">
            <Globe className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={language === lang.code ? "bg-accent" : ""}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className="flex gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="gap-1 text-xs"
        >
          <span>{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  )
}
