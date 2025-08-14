# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page application for a suite of kettlebell tracking web applications. It's built with Vite as the build tool and configured for deployment to Firebase Hosting.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## Architecture

### Build System
- **Vite** - Modern build tool providing fast HMR and optimized production builds
- Configuration: `vite.config.js` uses React plugin for JSX transformation

### Framework & Libraries
- **React 19.1.0** - UI framework using functional components
- **React DOM** - DOM rendering for React components
- Entry point: `src/main.jsx` mounts the app in StrictMode

### Project Structure
- `/src/App.jsx` - Main application component containing all page sections
- `/src/index.css` - Global styles (Tailwind CSS utilities)
- `/dist/` - Production build output directory
- `/public/` - Static assets served directly

### Component Architecture
The application follows a single-file component pattern in `App.jsx`:
- **App** - Main orchestrator component managing data and layout
- **HeroSection** - Landing hero with CTA
- **AppCard** - Reusable card component for displaying individual tracker apps
- **AboutSection** - Mission statement section
- **Footer** - Copyright and footer information

### Deployment
- **Firebase Hosting** configured to serve from `/dist` directory
- SPA configuration with all routes rewritten to `/index.html`
- Deployment target: Firebase Hosting (requires Firebase CLI for deployment)

### Styling Approach
- Tailwind CSS classes used inline for styling
- Dark theme with gray-950 base background
- Teal accent colors for CTAs and interactive elements
- Responsive design with mobile-first breakpoints

## Code Conventions

- React functional components with hooks
- Component names in PascalCase
- Inline Tailwind CSS classes for styling
- Props destructuring in component parameters
- Comments explaining major sections and components