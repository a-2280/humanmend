# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack (faster)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 application for HumanMend, a psychotherapy practice specializing in eating disorder and anxiety therapy in NYC. The project combines a marketing website with a Sanity CMS backend for content management.

### Key Components:
- **Next.js App Router**: Uses the `app/` directory structure with file-based routing
- **Sanity CMS Integration**: Content management system mounted at `/studio` route
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Custom UI Components**: Reusable components in `components/ui/`

### Project Structure:
- `app/` - Next.js app router pages and layouts
- `components/ui/` - Reusable UI components (Navbar, Footer, forms, etc.)
- `sanity/` - Sanity CMS configuration and schema definitions
- `public/` - Static assets (images, fonts, documents)

### Content Management:
- Sanity Studio accessible at `/app/studio/[[...tool]]/page.jsx`
- Schema types defined in `sanity/schemaTypes/` for different page types
- Content fetched using `next-sanity` client library

### Styling:
- Global styles in `app/globals.css`
- Tailwind CSS with custom configuration
- Background texture image applied globally
- Custom fonts: Outfit and Pitch loaded from `/public/fonts/`

## Development Notes

- The app uses client-side components with "use client" directive where needed
- Landing page has animated image reveals with useState and useEffect
- Mobile-responsive design with different layouts for desktop/mobile
- All page routes correspond to therapy services (anxiety, eating disorders, group therapy, etc.)