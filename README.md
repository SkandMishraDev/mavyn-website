# Mavyn LLC Website

A modern, responsive website for Mavyn LLC built with React, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The website is ready to deploy to Netlify, Vercel, or any static hosting platform.

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.**

### Quick Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Netlify automatically builds and deploys
4. Configure your domain (mavyn.ae)

## Project Structure

- `client/src/pages/` - Page components
- `client/src/components/` - Reusable UI components
- `client/src/contexts/` - React contexts (Router, Theme)
- `client/src/lib/` - Utility functions
- `public/` - Static assets and SPA routing rules
- `netlify.toml` - Netlify deployment configuration

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom hash-based routing (SPA)
- ✅ 7 pages (Home, About, Services, Service Details, Why MAVYN, Contact, 404)
- ✅ Contact form with validation
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure
- ✅ Production-ready code

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast build tool
- **Custom Router** - Hash-based SPA routing

## Documentation

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment instructions
- [userGuide.md](./userGuide.md) - User and feature guide

## License

© 2025 Mavyn LLC. All rights reserved.
