import { Link } from 'react-router-dom';
import { Sparkles, Palette, Smartphone, Lock, FileText, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-card/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-onyx-card border border-onyx-border mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-onyx-text-secondary">Available on iOS</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Premium Wallpapers
              <br />
              <span className="bg-gradient-to-r from-white to-onyx-text-secondary bg-clip-text text-transparent">
                for iOS
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-onyx-text-secondary max-w-2xl mx-auto mb-10">
              Curated high-quality wallpapers to elevate your device. 
              Discover stunning artwork designed to inspire.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://apps.apple.com/app/onyx-wallpapers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white text-onyx-black rounded-2xl font-semibold hover:bg-onyx-text-secondary transition-all hover:scale-105 shadow-xl shadow-white/10"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download on App Store</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 border-t border-onyx-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Why ONYX?</h2>
          <p className="text-onyx-text-secondary text-center mb-16 max-w-2xl mx-auto">
            We believe your wallpaper should be as unique as you. Here's what makes ONYX special.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="w-10 h-10" />}
              title="Curated Quality"
              description="Every wallpaper is handpicked for exceptional quality and aesthetic appeal."
            />
            <FeatureCard 
              icon={<Palette className="w-10 h-10" />}
              title="Diverse Categories"
              description="From abstract to nature, find the perfect wallpaper for your style."
            />
            <FeatureCard 
              icon={<Smartphone className="w-10 h-10" />}
              title="Optimized for iOS"
              description="Perfect resolution and aspect ratio for all iPhone models."
            />
          </div>
        </div>
      </section>
      
      {/* Legal Section */}
      <section className="py-24 bg-onyx-dark border-t border-onyx-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Legal & Support</h2>
          <p className="text-onyx-text-secondary text-center mb-12">
            Transparency and trust are at the core of what we do.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <LegalCard 
              to="/privacy"
              icon={<Lock className="w-8 h-8" />}
              title="Privacy Policy"
              description="Learn how we protect your data"
            />
            <LegalCard 
              to="/terms"
              icon={<FileText className="w-8 h-8" />}
              title="Terms of Service"
              description="Our terms and conditions"
            />
            <LegalCard 
              to="/support"
              icon={<MessageCircle className="w-8 h-8" />}
              title="Support"
              description="Get help with ONYX"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-onyx-card border border-onyx-border hover:border-onyx-muted transition-colors">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-onyx-text-secondary text-sm">{description}</p>
    </div>
  );
}

function LegalCard({ to, icon, title, description }: { to: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link 
      to={to}
      className="p-6 rounded-2xl bg-onyx-card border border-onyx-border hover:border-onyx-muted transition-all hover:scale-[1.02] group"
    >
      <div className="text-white mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-onyx-text-secondary transition-colors">{title}</h3>
      <p className="text-onyx-text-muted text-sm">{description}</p>
    </Link>
  );
}
