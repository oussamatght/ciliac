<p align="center">
  <img src="public/Logo.png" alt="CILIAC Logo" width="120" height="120" style="border-radius: 50%;">
</p>

<h1 align="center">🌾 CILIAC</h1>

<p align="center">
  <strong>دليلك الشامل لحياة خالية من الغلوتين</strong><br>
  <em>Your Complete Guide to a Gluten-Free Life</em>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Maintained-Yes-success.svg?style=flat-square" alt="Maintained">
</p>

---

## 📖 About

**CILIAC** is a comprehensive web application designed specifically for people with celiac disease in Algeria. It provides essential tools, information, and resources to help users maintain a healthy, gluten-free lifestyle.

### 🎯 Mission

To make gluten-free living easier and more accessible for everyone affected by celiac disease in Algeria and the broader MENA region.

### 🌍 Multi-Language Support

<p align="center">
  <img src="https://img.shields.io/badge/🇩🇿_Arabic-RTL-green?style=flat-square" alt="Arabic">
  <img src="https://img.shields.io/badge/🇫🇷_French-LTR-blue?style=flat-square" alt="French">
  <img src="https://img.shields.io/badge/🇬🇧_English-LTR-red?style=flat-square" alt="English">
</p>

---

## ✨ Features

### 🔍 Barcode Scanner

Scan product barcodes to instantly check if they're safe for celiac patients.

### 🥗 Nutrition Guide

Comprehensive guide to allowed and forbidden foods with detailed explanations.

### 👨‍🍳 Gluten-Free Recipes

Delicious, tested recipes that are 100% gluten-free and easy to make.

### 🗺️ Location Map

Find gluten-free stores, bakeries, and restaurants near you with 16+ verified locations across Algeria.

### 📋 Prescription Upload

Upload medical prescriptions for expert consultation and personalized advice.

### 💪 Health & Wellness

- Sports & exercise guidance
- Mental health support
- Daily health tips

### 🏥 Medical Resources

- Specialized clinics directory
- Latest research articles
- Partner organizations

### 🌙 Dark Mode

Beautiful dark theme for comfortable viewing at any time.

---

## 🚀 Demo

### Screenshots

<table>
  <tr>
    <td><img src="docs/screenshots/home.png" alt="Home" width="200"/></td>
    <td><img src="docs/screenshots/dashboard.png" alt="Dashboard" width="200"/></td>
    <td><img src="docs/screenshots/map.png" alt="Map" width="200"/></td>
  </tr>
  <tr>
    <td align="center">Home</td>
    <td align="center">Dashboard</td>
    <td align="center">Map</td>
  </tr>
</table>

### Live Demo

🔗 **[View Live Demo](https://ciliac.vercel.app)** _(Coming Soon)_

---

## 🛠️ Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0+ or **yarn** 1.22+
- **Git**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ciliac-pro.git

# Navigate to project directory
cd ciliac-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url

# Map Configuration (optional)
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
```

---

## 📁 Project Structure

```
ciliac-pro/
├── 📂 public/              # Static assets
│   ├── favicon.ico
│   └── Logo.png
├── 📂 src/
│   ├── 📂 app/             # Next.js App Router
│   │   ├── 📂 dashboard/   # Dashboard pages
│   │   │   ├── 📂 scanner/
│   │   │   ├── 📂 nutrition/
│   │   │   ├── 📂 recipes/
│   │   │   ├── 📂 maps/
│   │   │   └── ...
│   │   ├── 📂 login/
│   │   └── page.tsx
│   ├── 📂 components/      # React components
│   │   ├── 📂 ui/          # shadcn/ui
│   │   └── LanguageSwitcher.tsx
│   ├── 📂 lib/             # Utilities
│   │   ├── store.ts        # Zustand stores
│   │   ├── translations.ts # i18n
│   │   └── utils.ts
│   └── 📂 hooks/           # Custom hooks
├── 📄 tailwind.config.ts
├── 📄 next.config.mjs
└── 📄 package.json
```

---

## 🔧 Tech Stack

### Frontend

| Technology                                      | Purpose         |
| ----------------------------------------------- | --------------- |
| [Next.js 14](https://nextjs.org/)               | React Framework |
| [TypeScript](https://www.typescriptlang.org/)   | Type Safety     |
| [Tailwind CSS](https://tailwindcss.com/)        | Styling         |
| [shadcn/ui](https://ui.shadcn.com/)             | UI Components   |
| [Framer Motion](https://www.framer.com/motion/) | Animations      |

### State Management

| Technology                                                | Purpose          |
| --------------------------------------------------------- | ---------------- |
| [Zustand](https://zustand-demo.pmnd.rs/)                  | Global State     |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme Management |

### Maps & Location

| Technology                                      | Purpose          |
| ----------------------------------------------- | ---------------- |
| [React Leaflet](https://react-leaflet.js.org/)  | Interactive Maps |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map Tiles        |

### Icons & Assets

| Technology                          | Purpose |
| ----------------------------------- | ------- |
| [Lucide React](https://lucide.dev/) | Icons   |

---

## 📱 Pages Overview

| Page            | Route                     | Description             |
| --------------- | ------------------------- | ----------------------- |
| 🏠 Home         | `/`                       | Welcome & splash screen |
| 🔐 Login        | `/login`                  | Authentication          |
| 📊 Dashboard    | `/dashboard`              | Main dashboard          |
| 📷 Scanner      | `/dashboard/scanner`      | Barcode scanning        |
| 🥗 Nutrition    | `/dashboard/nutrition`    | Food guide              |
| 👨‍🍳 Recipes      | `/dashboard/recipes`      | Recipe collection       |
| 💡 Tips         | `/dashboard/tips`         | Health tips             |
| 🏋️ Sports       | `/dashboard/sport`        | Exercise guide          |
| 🧠 Mental       | `/dashboard/mental`       | Mental health           |
| 🏥 Clinics      | `/dashboard/clinics`      | Doctor directory        |
| 🗺️ Map          | `/dashboard/maps`         | Store locations         |
| 📚 Research     | `/dashboard/research`     | Scientific articles     |
| 🤝 Partners     | `/dashboard/partners`     | Partner orgs            |
| 📋 Prescription | `/dashboard/prescription` | Upload prescriptions    |
| 📞 Contact      | `/dashboard/contact`      | Contact form            |
| ℹ️ About        | `/dashboard/about`        | About the app           |

---

## 🌐 Internationalization (i18n)

CILIAC supports three languages with full RTL support for Arabic:

```typescript
// Usage example
import { useLanguageStore } from '@/lib/store'
import { t } from '@/lib/translations'

function MyComponent() {
  const { language } = useLanguageStore()

  return <h1>{t('nav.home', language)}</h1>
}
```

### Adding New Translations

Edit `src/lib/translations.ts`:

```typescript
export const translations = {
  mySection: {
    myKey: {
      ar: "النص بالعربية",
      fr: "Texte en français",
      en: "English text",
    },
  },
};
```

---

## 🎨 Theming

### Color System

CILIAC uses modern OKLCH color space for vibrant, consistent colors:

```css
/* Primary Green */
oklch(0.55 0.2 145)

/* Accent Gold */
oklch(0.65 0.15 80)
```

### Dark Mode

Toggle dark mode using the sidebar button or system preference.

---

## 📜 Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm start`          | Start production server  |
| `npm run lint`       | Run ESLint               |
| `npm run type-check` | Run TypeScript check     |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

<table>
  <tr>
    <td align="center">
      <strong>CILIAC Team</strong><br>
      <em>Development & Design</em>
    </td>
  </tr>
</table>

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting
- [OpenStreetMap](https://www.openstreetmap.org/) contributors
- All the gluten-free stores in Algeria for their locations data

---

## 📞 Contact

- **Email**: contact@ciliac.com
- **Website**: [ciliac.com](https://ciliac.com)
- **Twitter**: [@CiliacApp](https://twitter.com/CiliacApp)

---

<p align="center">
  Made with ❤️ in Algeria 🇩🇿
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
