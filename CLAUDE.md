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

## Adding New Features
1. Create component in appropriate subfolder under `src/components/`
2. Add any data to `src/lib/constants.ts`
3. Define TypeScript types in `src/types/index.ts`
4. Import and use in relevant page components