# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pet Talk - A pet-friendly location review and warning platform website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Theme**: Dark/Light mode with next-themes
- **Icons**: Lucide React

## Development Commands
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint (if configured)
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Home page
│   ├── app/page.tsx     # App features page  
│   ├── about/page.tsx   # About us page
│   ├── contact/page.tsx # Contact page
│   ├── layout.tsx       # Root layout with theme provider
│   └── globals.css      # Global styles with theme variables
├── components/
│   ├── shared/          # Reusable shared components
│   │   ├── FAQItem.tsx  # Q&A question-answer component
│   │   ├── FeatureGrid.tsx # Three-column feature grid
│   │   ├── AppDownloadButtons.tsx # App store download buttons
│   │   ├── SocialLinks.tsx # Social media links
│   │   ├── BrandLogo.tsx # Pet Talk logo component
│   │   ├── PageHeader.tsx # Page title and subtitle
│   │   ├── ContactItem.tsx # Contact information item
│   │   └── index.ts     # Shared components export
│   ├── layout/          # Layout components
│   │   ├── Header.tsx   # Navigation with theme toggle
│   │   └── Footer.tsx   # Site footer
│   ├── home/           # Home page components
│   │   ├── Hero.tsx
│   │   ├── BrandConcept.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   └── AppDownloadCTA.tsx
│   ├── app-features/   # App features page components
│   │   └── FeatureCard.tsx
│   ├── about/          # About page components
│   │   ├── BrandStory.tsx
│   │   └── CharacterCard.tsx
│   ├── contact/        # Contact page components
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   ├── ui/             # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── sheet.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── theme-toggle.tsx
│   └── providers/      # Context providers
│       └── theme-provider.tsx
├── lib/
│   ├── utils.ts        # Utility functions (cn helper)
│   └── constants.ts    # App data (characters, features, testimonials)
└── types/
    └── index.ts        # TypeScript type definitions
```

## Key Features

### Pages
1. **Home (/)** - Landing page with hero, brand concept, features, testimonials, CTA
2. **App Features (/app)** - Detailed app functionality showcase  
3. **About (/about)** - Brand story and character introductions
4. **Contact (/contact)** - Contact form and information

### Characters
- **老實說狗狗** (Honest Dog) - "對的我會推薦，爛的我會直接吠！"
- **老實說貓貓** (Honest Cat) - "我不多話，但我說的你最好聽清楚。"

### Core Features
- **評價地圖** - Pet-friendly location reviews and maps
- **匿名發文** - Anonymous review posting with privacy protection
- **警示等級** - Safety warning system for locations  
- **狗狗成長階段推薦** - Age-appropriate recommendations

### Theme System
- Uses next-themes for dark/light mode switching
- Theme toggle button in header
- CSS custom properties for theme variables
- Supports system theme detection

## Data Management
- Static data stored in `src/lib/constants.ts`
- Placeholder images from placehold.co
- TypeScript interfaces in `src/types/index.ts`

## Styling Notes
- Uses Tailwind utility classes
- shadcn/ui provides consistent component styling
- Responsive design with mobile-first approach
- Custom theme variables for consistent branding

## Shared Components Architecture

The project follows a modular component architecture to reduce code duplication:

### Reusable Components (`src/components/shared/`)

- **FAQItem** - Question and answer format component
- **FeatureGrid** - Three-column feature layout with icon, title, description
- **AppDownloadButtons** - App Store and Google Play download buttons
- **SocialLinks** - Instagram and Facebook links with configurable layout
- **BrandLogo** - Pet Talk logo with optional link
- **PageHeader** - Page title and subtitle section
- **ContactItem** - Contact information display with icon and content

### Usage Examples

```tsx
// Import from shared components
import { PageHeader, FeatureGrid, AppDownloadButtons } from "@/components/shared"

// Use PageHeader for consistent page titles
<PageHeader 
  title="頁面標題" 
  subtitle="副標題描述" 
  className="mb-16" 
/>

// Use FeatureGrid for three-column layouts
const features = [
  { icon: "🎯", title: "標題", description: "描述" }
]
<FeatureGrid features={features} />

// Use AppDownloadButtons for app download sections
<AppDownloadButtons variant="secondary" />
```

### Benefits of This Architecture

1. **DRY Principle** - Eliminates code duplication across pages
2. **Consistency** - Ensures uniform UI patterns
3. **Maintainability** - Changes to shared components update everywhere
4. **Type Safety** - TypeScript interfaces ensure proper prop usage
5. **Reusability** - Components can be easily reused in new features

## Adding New Features
1. Check if needed UI pattern exists in `src/components/shared/`
2. If reusable, create new shared component with TypeScript interface
3. Create page-specific components in appropriate subfolder under `src/components/`
4. Add any data to `src/lib/constants.ts`
5. Define TypeScript types in `src/types/index.ts`
6. Import and use in relevant page components