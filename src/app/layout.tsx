"use client"

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { useLanguageStore } from "@/lib/store";
import { getDirection } from "@/lib/translations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { language } = useLanguageStore()
  const direction = getDirection(language)
  
  return (
    <html lang={language} dir={direction} suppressHydrationWarning>
      <head>
        <title>CILIAC - دليلك الشامل لحياة خالية من الغلوتين</title>
        <meta name="description" content="تطبيق شامل لمرضى السيلياك يوفر وصفات، نصائح، ومعلومات طبية موثوقة" />
        <meta name="keywords" content="سيلياك، غلوتين، حساسية القمح، وصفات خالية من الغلوتين، celiac" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
