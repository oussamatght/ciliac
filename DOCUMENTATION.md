# CILIAC - دليلك الشامل لحياة خالية من الغلوتين

## Comprehensive Project Documentation

---

# Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [Project Structure](#3-project-structure)
4. [State Management with Zustand](#4-state-management-with-zustand)
5. [Multi-Language Support System](#5-multi-language-support-system)
6. [Pages & Features](#6-pages--features)
7. [Components](#7-components)
8. [Styling & Theming](#8-styling--theming)
9. [Authentication System](#9-authentication-system)
10. [API Integration](#10-api-integration)
11. [Deployment Guide](#11-deployment-guide)
12. [Troubleshooting](#12-troubleshooting)

---

# 1. Project Overview

## 1.1 Introduction

**CILIAC** is a comprehensive web application designed to assist people with celiac disease in Algeria. The application provides:

- **Barcode Scanner**: Scan products to check if they're gluten-free
- **Nutrition Guide**: Information about allowed and forbidden foods
- **Recipes**: Delicious gluten-free recipes
- **Location Map**: Find gluten-free stores, bakeries, and restaurants
- **Medical Prescription Upload**: Send prescriptions for consultation
- **Health Tips**: Daily tips for living with celiac disease
- **Mental Health Support**: Psychological support resources
- **Clinics Directory**: Find specialized doctors
- **Research Articles**: Latest scientific research on celiac disease

## 1.2 Target Audience

- People diagnosed with celiac disease
- Family members and caregivers
- Healthcare professionals
- Anyone interested in gluten-free lifestyle

## 1.3 Key Features

| Feature           | Description                                  |
| ----------------- | -------------------------------------------- |
| Multi-language    | Arabic, French, English support with RTL/LTR |
| Dark/Light Theme  | User-preferred theme settings                |
| Responsive Design | Works on all device sizes                    |
| Offline Capable   | PWA-ready architecture                       |
| Accessible        | WCAG 2.1 compliant                           |

---

# 2. Technical Architecture

## 2.1 Technology Stack

### Frontend Framework

```
Next.js 14 (App Router)
├── React 18
├── TypeScript
└── Server Components + Client Components
```

### State Management

```
Zustand
├── useAuthStore (Authentication)
├── useLanguageStore (i18n)
└── useSplashStore (Splash screen)
```

### Styling

```
Tailwind CSS
├── Custom CSS Variables (oklch colors)
├── shadcn/ui Components
└── Framer Motion (animations)
```

### Additional Libraries

```
react-leaflet - Interactive maps
lucide-react - Icons
next-themes - Theme management
zod - Schema validation
```

## 2.2 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      CILIAC Application                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │   Pages (App    │  │   Components    │  │    Hooks    │  │
│  │     Router)     │  │   (Reusable)    │  │             │  │
│  └────────┬────────┘  └────────┬────────┘  └──────┬──────┘  │
│           │                    │                   │         │
│           ▼                    ▼                   ▼         │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    State Management                      ││
│  │                       (Zustand)                          ││
│  │  ┌──────────┐  ┌──────────────┐  ┌──────────────────┐   ││
│  │  │  Auth    │  │   Language   │  │      Splash      │   ││
│  │  │  Store   │  │    Store     │  │      Store       │   ││
│  │  └──────────┘  └──────────────┘  └──────────────────┘   ││
│  └─────────────────────────────────────────────────────────┘│
│           │                    │                   │         │
│           ▼                    ▼                   ▼         │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    Utilities & Config                    ││
│  │  ┌──────────┐  ┌──────────────┐  ┌──────────────────┐   ││
│  │  │  Utils   │  │ Translations │  │     Themes       │   ││
│  │  └──────────┘  └──────────────┘  └──────────────────┘   ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

# 3. Project Structure

```
ciliac-pro/
├── public/
│   ├── favicon.ico          # App icon
│   ├── Logo.png             # Logo image
│   └── ...                  # Static assets
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home/Splash page
│   │   ├── login/
│   │   │   └── page.tsx     # Login/Register page
│   │   └── dashboard/
│   │       ├── layout.tsx   # Dashboard layout with sidebar
│   │       ├── page.tsx     # Dashboard home
│   │       ├── scanner/     # Barcode scanner
│   │       ├── nutrition/   # Nutrition guide
│   │       ├── recipes/     # Recipes
│   │       ├── tips/        # Health tips
│   │       ├── sport/       # Sports & fitness
│   │       ├── mental/      # Mental health
│   │       ├── clinics/     # Clinics directory
│   │       ├── maps/        # Location map
│   │       ├── research/    # Research articles
│   │       ├── partners/    # Partners
│   │       ├── prescription/# Prescription upload
│   │       ├── contact/     # Contact form
│   │       └── about/       # About page
│   │
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── ...
│   │   ├── splash/          # Splash screen
│   │   ├── LanguageSwitcher.tsx
│   │   └── providers/       # Context providers
│   │
│   ├── lib/
│   │   ├── store.ts         # Zustand stores
│   │   ├── translations.ts  # i18n translations
│   │   └── utils.ts         # Utility functions
│   │
│   └── hooks/               # Custom React hooks
│       └── use-toast.ts
│
├── components.json          # shadcn/ui config
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

---

# 4. State Management with Zustand

## 4.1 Why Zustand?

Zustand was chosen for state management because:

- **Minimal boilerplate**: No providers, reducers, or actions
- **TypeScript support**: Full type inference
- **Persistence**: Built-in middleware for localStorage
- **Small bundle size**: ~1KB gzipped
- **React 18 ready**: Concurrent rendering support

## 4.2 Store Implementation

### Authentication Store

```typescript
// src/lib/store.ts

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email, password) => {
        // API call simulation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (email && password) {
          set({
            user: { id: "1", name: email.split("@")[0], email },
            isAuthenticated: true,
          });
          return true;
        }
        return false;
      },

      register: async (name, email, password) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (name && email && password) {
          set({
            user: { id: "1", name, email },
            isAuthenticated: true,
          });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "ciliac-auth" }, // localStorage key
  ),
);
```

### Language Store

```typescript
interface LanguageState {
  language: Language; // 'ar' | 'fr' | 'en'
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "ar", // Default to Arabic
      setLanguage: (lang) => set({ language: lang }),
    }),
    { name: "ciliac-language" },
  ),
);
```

### Splash Store

```typescript
interface SplashState {
  hasSeenSplash: boolean;
  setSplashSeen: () => void;
}

export const useSplashStore = create<SplashState>()(
  persist(
    (set) => ({
      hasSeenSplash: false,
      setSplashSeen: () => set({ hasSeenSplash: true }),
    }),
    { name: "ciliac-splash" },
  ),
);
```

## 4.3 Using Stores in Components

```tsx
// Example usage in a component
function MyComponent() {
  const { user, logout } = useAuthStore();
  const { language, setLanguage } = useLanguageStore();

  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button onClick={() => setLanguage("fr")}>Switch to French</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

---

# 5. Multi-Language Support System

## 5.1 Supported Languages

| Language | Code | Direction |
| -------- | ---- | --------- |
| Arabic   | `ar` | RTL       |
| French   | `fr` | LTR       |
| English  | `en` | LTR       |

## 5.2 Translation Structure

```typescript
// src/lib/translations.ts

export type Language = "ar" | "fr" | "en";

export const translations = {
  nav: {
    home: { ar: "الرئيسية", fr: "Accueil", en: "Home" },
    scanner: { ar: "ماسح الباركود", fr: "Scanner", en: "Scanner" },
    // ... more navigation items
  },
  auth: {
    login: { ar: "تسجيل الدخول", fr: "Connexion", en: "Login" },
    // ... more auth items
  },
  common: {
    search: { ar: "بحث", fr: "Rechercher", en: "Search" },
    // ... more common items
  },
  // ... more sections
};
```

## 5.3 Translation Helper Function

```typescript
export function t(key: string, lang: Language): string {
  const keys = key.split(".");
  let value: unknown = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if not found
    }
  }

  if (value && typeof value === "object" && lang in value) {
    return (value as Record<Language, string>)[lang];
  }

  return key;
}

// Usage
t("nav.home", "ar"); // Returns: 'الرئيسية'
t("nav.home", "fr"); // Returns: 'Accueil'
t("nav.home", "en"); // Returns: 'Home'
```

## 5.4 Direction Helper

```typescript
export function getDirection(lang: Language): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}
```

## 5.5 Language Switcher Component

```tsx
// src/components/LanguageSwitcher.tsx

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  const languages = [
    { code: "ar", name: "العربية", flag: "🇩🇿" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="w-4 h-4" />
          {currentLang.flag} {currentLang.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}>
            {lang.flag} {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

# 6. Pages & Features

## 6.1 Home/Splash Page (`/`)

**Purpose**: Welcome screen with app introduction

**Features**:

- Animated splash screen on first visit
- App branding and logo
- "Get Started" button
- Language selection

## 6.2 Login Page (`/login`)

**Purpose**: User authentication

**Features**:

- Login form with email/password
- Registration form with name/email/password
- Form validation
- Animated transitions
- Password visibility toggle

## 6.3 Dashboard Home (`/dashboard`)

**Purpose**: Main dashboard overview

**Features**:

- Welcome message with user name
- Quick access cards to all features
- Daily health tip
- Statistics overview

## 6.4 Barcode Scanner (`/dashboard/scanner`)

**Purpose**: Scan products to check gluten content

**Features**:

- Camera-based barcode scanning
- Manual barcode entry
- Product database lookup
- Gluten-free verification
- Product details display

## 6.5 Nutrition Guide (`/dashboard/nutrition`)

**Purpose**: Educational content about foods

**Features**:

- Categorized food lists
- Allowed foods (green)
- Forbidden foods (red)
- Caution foods (yellow)
- Search functionality

## 6.6 Recipes (`/dashboard/recipes`)

**Purpose**: Gluten-free recipe collection

**Features**:

- Recipe cards with images
- Ingredients list
- Step-by-step instructions
- Prep/cook time
- Serving sizes
- Difficulty levels

## 6.7 Location Map (`/dashboard/maps`)

**Purpose**: Find gluten-free friendly locations

**Features**:

- Interactive Leaflet map
- 16+ real locations in Algeria
- Category filters (store, bakery, restaurant, supermarket)
- Location details with contact info
- Click-to-call functionality
- External links to Facebook/websites

**Technical Implementation**:

```tsx
// Dynamic import for client-side only rendering
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
```

## 6.8 Prescription Upload (`/dashboard/prescription`)

**Purpose**: Upload medical prescriptions for consultation

**Features**:

- File upload (JPG, PNG, PDF)
- File size validation (max 5MB)
- Image preview
- Additional notes field
- Submission confirmation
- Progress indicator

## 6.9 Other Pages

| Page          | Path                  | Purpose                  |
| ------------- | --------------------- | ------------------------ |
| Tips          | `/dashboard/tips`     | Health tips and advice   |
| Sports        | `/dashboard/sport`    | Exercise guidance        |
| Mental Health | `/dashboard/mental`   | Psychological support    |
| Clinics       | `/dashboard/clinics`  | Doctor directory         |
| Research      | `/dashboard/research` | Scientific articles      |
| Partners      | `/dashboard/partners` | Supporting organizations |
| Contact       | `/dashboard/contact`  | Contact form             |
| About         | `/dashboard/about`    | App information          |

---

# 7. Components

## 7.1 UI Components (shadcn/ui)

| Component    | File                | Usage                   |
| ------------ | ------------------- | ----------------------- |
| Button       | `button.tsx`        | All interactive buttons |
| Card         | `card.tsx`          | Content containers      |
| Input        | `input.tsx`         | Form inputs             |
| Label        | `label.tsx`         | Form labels             |
| Badge        | `badge.tsx`         | Status indicators       |
| Avatar       | `avatar.tsx`        | User profiles           |
| Sidebar      | `sidebar.tsx`       | Navigation sidebar      |
| Separator    | `separator.tsx`     | Visual dividers         |
| Textarea     | `textarea.tsx`      | Multi-line inputs       |
| Toast        | `sonner.tsx`        | Notifications           |
| DropdownMenu | `dropdown-menu.tsx` | Dropdown selections     |

## 7.2 Custom Components

### LanguageSwitcher

- Dropdown menu for language selection
- Displays flag and language name
- Persists selection to localStorage

### SplashScreen

- Animated welcome screen
- Shows only on first visit
- Wheat/bread themed animations
- Logo reveal animation

### ThemeProvider

- Manages dark/light theme
- System preference detection
- Persists user preference

---

# 8. Styling & Theming

## 8.1 Tailwind CSS Configuration

```typescript
// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more colors
      },
    },
  },
};
```

## 8.2 CSS Variables

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

## 8.3 OKLCH Colors

The app uses modern OKLCH color space for vibrant, consistent colors:

```css
/* Example gradient */
background: linear-gradient(
  135deg,
  oklch(0.55 0.2 145) 0%,
  oklch(0.45 0.18 145) 100%
);
```

## 8.4 RTL Support

```tsx
// Dynamic direction based on language
<div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
```

---

# 9. Authentication System

## 9.1 Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Splash    │────▶│    Login    │────▶│  Dashboard  │
│    Page     │     │    Page     │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Register   │
                    │    Form     │
                    └─────────────┘
```

## 9.2 Protected Routes

```tsx
// Dashboard layout checks authentication
export default function DashboardLayout({ children }) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
```

## 9.3 Session Persistence

Authentication state is persisted using Zustand's persist middleware:

```typescript
persist(
  (set) => ({
    /* state and actions */
  }),
  { name: "ciliac-auth" }, // localStorage key
);
```

---

# 10. API Integration

## 10.1 Current Implementation

The app currently uses simulated API calls for:

- User authentication
- Product barcode lookup
- Prescription submission

## 10.2 Future API Endpoints

| Endpoint                 | Method | Purpose             |
| ------------------------ | ------ | ------------------- |
| `/api/auth/login`        | POST   | User login          |
| `/api/auth/register`     | POST   | User registration   |
| `/api/products/:barcode` | GET    | Product lookup      |
| `/api/prescriptions`     | POST   | Submit prescription |
| `/api/locations`         | GET    | Get store locations |

## 10.3 Example API Integration

```typescript
// Future implementation
const login = async (email: string, password: string) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { user, token } = await response.json();
    set({ user, isAuthenticated: true });
    localStorage.setItem("token", token);
    return true;
  }
  return false;
};
```

---

# 11. Deployment Guide

## 11.1 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 11.2 Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

## 11.3 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
```

## 11.4 Deployment Platforms

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

# 12. Troubleshooting

## 12.1 Common Issues

### Map Not Loading

```
Problem: Map shows loading spinner indefinitely
Solution: Ensure `isClient` state is properly set
```

```tsx
const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);
```

### Hydration Errors

```
Problem: Server/client content mismatch
Solution: Use dynamic imports or client-only rendering
```

```tsx
const Component = dynamic(() => import("./Component"), { ssr: false });
```

### Language Not Persisting

```
Problem: Language resets on page refresh
Solution: Check localStorage permissions and Zustand persist config
```

## 12.2 Performance Optimization

1. **Code Splitting**: Use dynamic imports for heavy components
2. **Image Optimization**: Use Next.js Image component
3. **Bundle Analysis**: Run `npm run analyze`

## 12.3 Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 90+             |
| Firefox | 88+             |
| Safari  | 14+             |
| Edge    | 90+             |

---

# Appendix A: Component Props Reference

## Button Props

```typescript
interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  disabled?: boolean;
}
```

## Card Props

```typescript
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
```

---

# Appendix B: Translation Keys Reference

```
nav.home, nav.scanner, nav.nutrition, nav.recipes
nav.tips, nav.sport, nav.mental, nav.clinics
nav.maps, nav.research, nav.partners, nav.prescription
nav.contact, nav.about

auth.login, auth.register, auth.logout
auth.welcomeBack, auth.createAccount
auth.fullName, auth.email, auth.password

common.search, common.filter, common.loading
common.error, common.retry, common.save
common.cancel, common.confirm, common.delete
common.language, common.arabic, common.french, common.english
```

---

# Appendix C: Color Palette

| Name            | OKLCH Value            | Usage                 |
| --------------- | ---------------------- | --------------------- |
| Primary Green   | `oklch(0.55 0.2 145)`  | Primary actions       |
| Accent Gold     | `oklch(0.65 0.15 80)`  | Highlights            |
| Background Dark | `oklch(0.25 0.08 145)` | Dark theme background |
| Text Light      | `oklch(0.95 0.01 0)`   | Light text on dark    |

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Author**: CILIAC Development Team

---

_This document is intended for developers and stakeholders involved in the CILIAC project. For user documentation, please refer to the in-app help section._
