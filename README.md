# Jybek Home Care

A modern, production-ready home care services web application built with Next.js 14, TypeScript, and Tailwind CSS. This platform connects families with trusted caregivers, featuring a comprehensive marketing website and lead generation system.

![Jybek Home Care](https://via.placeholder.com/1200x630/2563eb/ffffff?text=Jybek+Home+Care)

## ✨ Features

### Marketing Website
- **Home Page** - Hero section, services overview, stats, testimonials, and CTAs
- **Services Page** - Detailed breakdown of all care services with pricing
- **About Page** - Company story, mission, values, and leadership team
- **Contact Page** - Contact form, info, and FAQ section
- **Resources Page** - Educational content and caregiving guides

### Lead Generation System
- **Find Care Wizard** - Multi-step care matching form
- **Care Assessment** - Comprehensive needs evaluation tool
- **Lead Capture** - Integrated forms throughout the site

### Design System
- Reusable UI components (Button, Input, Card, Badge, Select, Textarea)
- Consistent blue brand color palette
- Dark mode support ready
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── services/             # Services page
│   ├── resources/            # Resources page
│   ├── find-care/            # Lead generation wizard
│   └── assessment/           # Care needs assessment
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Select.tsx
│   │   └── Textarea.tsx
│   ├── layout/               # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── marketing/            # Marketing sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       ├── HowItWorks.tsx
│       └── CTA.tsx
├── lib/
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jybek-homecare.git
cd jybek-homecare
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Brand Colors

The application uses a consistent blue brand palette:

```css
brand-50:  #eff6ff
brand-100: #dbeafe
brand-200: #bfdbfe
brand-300: #93c5fd
brand-400: #60a5fa
brand-500: #3b82f6  /* Primary */
brand-600: #2563eb  /* Primary Dark */
brand-700: #1d4ed8
brand-800: #1e40af
brand-900: #1e3a8a
brand-950: #172554
```

Accent colors:
- Teal: `#0d9488`
- Emerald: `#059669`
- Amber: `#d97706`
- Rose: `#e11d48`

## 📦 Available Scripts

```bash
# Development
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

## 🔧 Configuration

### Tailwind Configuration

The `tailwind.config.ts` file includes:
- Custom brand color palette
- Extended spacing and border radius
- Custom shadow styles
- Animation keyframes
- Custom background patterns

### TypeScript

Strict TypeScript configuration with path aliases (`@/*` → `./src/*`).

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is configured and ready. To enable:
1. Add `dark` class to the `<html>` element
2. Components automatically switch to dark variants

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, stats, testimonials |
| `/about` | Company information, mission, team |
| `/services` | Detailed services breakdown |
| `/contact` | Contact form and FAQ |
| `/resources` | Educational content |
| `/find-care` | Lead generation wizard |
| `/assessment` | Care needs evaluation |

## 🔒 Best Practices

- Server Components for static content
- Client Components for interactivity
- Accessible design (ARIA attributes, good contrast)
- SEO optimized metadata
- Performance optimized with Next.js Image
- Clean, modular component structure

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for families who care

