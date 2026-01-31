# ONYX Website

Official website for the ONYX iOS wallpaper app. Hosts legal documents (Privacy Policy, Terms of Service) and provides app information.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

- `/` - Home page with app overview
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/support` - Support & FAQ

## Deployment

The site can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### GitHub Pages (Current)

The site is deployed to GitHub Pages at: **https://onyx-mobile.github.io**

The CNAME file in `/public` configures the custom domain.

## Structure

```
onyx-web/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── SupportPage.tsx
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json
```

## License

Private - ONYX
