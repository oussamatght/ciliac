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
  ScanBarcode
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
import { useAuthStore } from "@/lib/store"
import { useTheme } from "next-themes"
import { useEffect } from "react"

const menuItems = [
  { title: "الرئيسية", href: "/dashboard", icon: Home },
  { title: "ماسح الباركود", href: "/dashboard/scanner", icon: ScanBarcode },
  { title: "التغذية", href: "/dashboard/nutrition", icon: Salad },
  { title: "الوصفات", href: "/dashboard/recipes", icon: UtensilsCrossed },
  { title: "النصائح", href: "/dashboard/tips", icon: BookOpen },
  { title: "الرياضة", href: "/dashboard/sport", icon: Dumbbell },
  { title: "الصحة النفسية", href: "/dashboard/mental", icon: Brain },
  { title: "العيادات", href: "/dashboard/clinics", icon: Stethoscope },
  { title: "الخريطة", href: "/dashboard/maps", icon: MapPin },
  { title: "الأبحاث", href: "/dashboard/research", icon: FlaskConical },
  { title: "الشركاء", href: "/dashboard/partners", icon: Handshake },
  { title: "تواصل معنا", href: "/dashboard/contact", icon: Phone },
  { title: "عن التطبيق", href: "/dashboard/about", icon: Info },
]

function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const { theme, setTheme } = useTheme()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0"
            style={{
              background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.18 145) 100%)"
            }}
          >
            <Image src="/Logo.png" alt="CILIAC" width={40} height={40} className="rounded-full" />
          </motion.div>
          <span className="text-xl font-bold group-data-[collapsible=icon]:hidden">CILIAC</span>
        </Link>
      </SidebarHeader>

      <Separator className="mx-4" />

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground px-2">
            القائمة الرئيسية
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`transition-all duration-200 ${
                        isActive 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "hover:bg-sidebar-accent"
                      }`}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 shrink-0" />
                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
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
            {theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
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
            <p className="text-sm font-medium">{user?.name || "مستخدم"}</p>
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
          <span className="group-data-[collapsible=icon]:hidden">تسجيل الخروج</span>
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
  const router = useRouter()

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
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <main className="flex-1 flex flex-col min-h-screen">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
            <SidebarTrigger />
            <div className="flex-1" />
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
