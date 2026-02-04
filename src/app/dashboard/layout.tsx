"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  Home,
  UtensilsCrossed,
  Salad,
  MapPin,
  Phone,
  Info,
  Dumbbell,
  Brain,
  Stethoscope,
  FlaskConical,
  Handshake,
  BookOpen,
  LogOut,
  Sun,
  Moon,
  ChevronRight,
  User,
  ScanBarcode,
  FileText
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAuthStore, useLanguageStore } from "@/lib/store"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { t, getDirection } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

// Menu items with translation keys
const menuItemsConfig = [
  { key: "home", href: "/dashboard", icon: Home },
  { key: "scanner", href: "/dashboard/scanner", icon: ScanBarcode },
  { key: "nutrition", href: "/dashboard/nutrition", icon: Salad },
  { key: "recipes", href: "/dashboard/recipes", icon: UtensilsCrossed },
  { key: "tips", href: "/dashboard/tips", icon: BookOpen },
  { key: "sport", href: "/dashboard/sport", icon: Dumbbell },
  { key: "mental", href: "/dashboard/mental", icon: Brain },
  { key: "clinics", href: "/dashboard/clinics", icon: Stethoscope },
  { key: "maps", href: "/dashboard/maps", icon: MapPin },
  { key: "research", href: "/dashboard/research", icon: FlaskConical },
  { key: "partners", href: "/dashboard/partners", icon: Handshake },
  { key: "prescription", href: "/dashboard/prescription", icon: FileText },
  { key: "contact", href: "/dashboard/contact", icon: Phone },
  { key: "about", href: "/dashboard/about", icon: Info },
]

function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const { theme, setTheme } = useTheme()
  const { language } = useLanguageStore()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  // Set sidebar side based on language direction
  const sidebarSide = language === 'ar' ? 'right' : 'left'

  return (
    <Sidebar side={sidebarSide} collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0"
            style={{
              background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.18 145) 100%)"
            }}
          >
            <Image src="/favicon.ico" alt="Logo" width={128} height={128} className="rounded-full" />
          </motion.div>
          <span className="text-xl font-bold group-data-[collapsible=icon]:hidden">CILIAC</span>
        </Link>
      </SidebarHeader>

      <Separator className="mx-4" />

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground px-2">
            {language === 'ar' ? 'القائمة الرئيسية' : language === 'fr' ? 'Menu principal' : 'Main Menu'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsConfig.map((item) => {
                const isActive = pathname === item.href
                const title = t(`nav.${item.key}`, language)
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={title}
                      className={`transition-all duration-200 ${
                        isActive 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "hover:bg-sidebar-accent"
                      }`}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 shrink-0" />
                        <span className="group-data-[collapsible=icon]:hidden">{title}</span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 mr-auto group-data-[collapsible=icon]:hidden" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-4">
        <Separator />
        
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full justify-start gap-3"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span className="group-data-[collapsible=icon]:hidden">
            {theme === "dark" ? t('common.lightMode', language) : t('common.darkMode', language)}
          </span>
        </Button>

        {/* User info */}
        <div className="flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium">{user?.name || (language === 'ar' ? 'مستخدم' : language === 'fr' ? 'Utilisateur' : 'User')}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>

        {/* Logout button */}
        <Button
          variant="destructive"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start gap-3"
        >
          <LogOut className="w-5 h-5" />
          <span className="group-data-[collapsible=icon]:hidden">{t('auth.logout', language)}</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAuthStore()
  const { language } = useLanguageStore()
  const router = useRouter()
  const direction = getDirection(language)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir={direction}>
        <AppSidebar />
        <main className="flex-1 flex flex-col min-h-screen">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <LanguageSwitcher />
          </header>
          <div className="flex-1 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
