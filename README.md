# Hong Yan AB Website

A modern, responsive website for Hong Yan AB built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🚀 Built with Next.js 16 App Router
- 📱 Mobile-first approach
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔧 Easy to customize

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd HongYanAB-vercel-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
hongyanab/HongYanAB-vercel-next/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

## Customization

### Colors

The primary colors are configured in `tailwind.config.ts`:
- Primary (Red): `#dc2626`
- Secondary (Dark Blue): `#1e293b`

### Content

Update the content in the component files located in the `components/` directory.

## License

© 2025 Hong Yan AB. All rights reserved.