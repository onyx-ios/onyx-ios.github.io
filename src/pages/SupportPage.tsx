import { useState } from 'react';
import { Mail, Star, ArrowRight, ChevronDown } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onyx-card border border-onyx-border mb-4">
          <span className="text-sm text-onyx-text-secondary">Help Center</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">How can we help?</h1>
        <p className="text-onyx-text-secondary max-w-xl mx-auto">
          Find answers to common questions or get in touch with our support team.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <a
          href="mailto:support@onyxwalls.com"
          className="p-6 rounded-2xl bg-onyx-card border border-onyx-border hover:border-onyx-muted transition-all hover:scale-[1.02] group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-onyx-muted flex items-center justify-center text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-onyx-text-secondary transition-colors">
                Email Support
              </h3>
              <p className="text-onyx-text-muted text-sm">support@onyxwalls.com</p>
            </div>
          </div>
        </a>

        <a
          href="https://apps.apple.com/app/onyx-wallpapers"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-onyx-card border border-onyx-border hover:border-onyx-muted transition-all hover:scale-[1.02] group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-onyx-muted flex items-center justify-center text-white">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-onyx-text-secondary transition-colors">
                Rate & Review
              </h3>
              <p className="text-onyx-text-muted text-sm">Leave feedback on the App Store</p>
            </div>
          </div>
        </a>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <FAQItem
            question="How do I restore my purchases?"
            answer="Go to Settings in the app and tap 'Restore Purchases'. This will restore any active subscriptions linked to your Apple ID."
          />
          <FAQItem
            question="How do I cancel my subscription?"
            answer="Subscriptions are managed through Apple. Go to iPhone Settings → [Your Name] → Subscriptions → ONYX → Cancel Subscription. Your access will continue until the end of your billing period."
          />
          <FAQItem
            question="Why can't I download certain wallpapers?"
            answer="Some wallpapers are exclusive to ONYX Pro subscribers. Upgrade to Pro to access our entire collection of premium wallpapers."
          />
          <FAQItem
            question="How do I save a wallpaper to my photos?"
            answer="Open any wallpaper and tap the download button. The wallpaper will be saved to your Photos library. Make sure you've granted ONYX permission to access your photo library."
          />
          <FAQItem
            question="Can I use ONYX wallpapers commercially?"
            answer="No, ONYX wallpapers are licensed for personal use only. They cannot be used for commercial purposes, redistributed, or sold."
          />
          <FAQItem
            question="How do I delete my account?"
            answer="Go to Settings in the app → scroll to the bottom → tap 'Delete Account'. This will permanently delete your account and all associated data."
          />
          <FAQItem
            question="The app is not loading wallpapers. What should I do?"
            answer="Try these steps: 1) Check your internet connection, 2) Force close and reopen the app, 3) Update to the latest version, 4) Contact support if the issue persists."
          />
          <FAQItem
            question="Do you offer refunds?"
            answer="Refunds are handled by Apple. To request a refund, visit reportaproblem.apple.com or contact Apple Support."
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center p-8 rounded-2xl bg-onyx-card border border-onyx-border">
        <h2 className="text-xl font-semibold text-white mb-2">Still need help?</h2>
        <p className="text-onyx-text-secondary mb-6">
          Our support team typically responds within 24 hours.
        </p>
        <a
          href="mailto:support@onyxwalls.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-onyx-black rounded-xl font-medium hover:bg-onyx-text-secondary transition-colors"
        >
          <span>Contact Support</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-onyx-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-onyx-card hover:bg-onyx-muted/50 transition-colors"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-onyx-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-onyx-dark border-t border-onyx-border">
          <p className="text-onyx-text-secondary">{answer}</p>
        </div>
      )}
    </div>
  );
}
