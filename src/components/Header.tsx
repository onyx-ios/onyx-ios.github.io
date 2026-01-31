import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-onyx-black/80 backdrop-blur-xl border-b border-onyx-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/removed-background-logo.png" 
              alt="ONYX Logo" 
              className="w-9 h-9 group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-semibold text-white tracking-tight">ONYX</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/privacy" active={location.pathname === '/privacy'}>Privacy</NavLink>
            <NavLink to="/terms" active={location.pathname === '/terms'}>Terms</NavLink>
            <NavLink to="/support" active={location.pathname === '/support'}>Support</NavLink>
          </nav>
          
          {/* App Store Button */}
          <a 
            href="https://apps.apple.com/app/onyx-wallpapers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-onyx-black rounded-full text-sm font-medium hover:bg-onyx-text-secondary transition-colors"
          >
            <AppleIcon />
            <span>Get the App</span>
          </a>
          
          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors ${
        active 
          ? 'text-white' 
          : 'text-onyx-text-secondary hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 -mr-2">
          <Menu className="w-6 h-6 text-white" />
        </summary>
        <div className="absolute right-0 mt-2 w-48 bg-onyx-card border border-onyx-border rounded-xl shadow-2xl py-2 z-50">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/privacy">Privacy Policy</MobileNavLink>
          <MobileNavLink to="/terms">Terms of Service</MobileNavLink>
          <MobileNavLink to="/support">Support</MobileNavLink>
          <div className="border-t border-onyx-border my-2" />
          <a 
            href="https://apps.apple.com/app/onyx-wallpapers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-onyx-muted transition-colors"
          >
            <AppleIcon />
            <span>Get the App</span>
          </a>
        </div>
      </details>
    </div>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to}
      className="block px-4 py-2 text-sm text-onyx-text-secondary hover:text-white hover:bg-onyx-muted transition-colors"
    >
      {children}
    </Link>
  );
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}
