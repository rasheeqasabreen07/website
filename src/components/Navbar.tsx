import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { spaBusinessConfig } from '../data/spaData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Massage Therapies', href: '#therapies' },
    { name: 'Your Visit', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-beige-200 py-3'
          : 'bg-cream-100/80 backdrop-blur-sm border-b border-beige-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="/favicon.png"
              alt="Raaz Wellness & Massage logo"
              className="w-10 h-10 rounded-full object-cover border border-gold-400 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="serif-title text-2xl font-semibold tracking-wider text-forest-900 group-hover:text-forest-800 transition-colors">
                RAAZ WELLNESSS & MASSAGE
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-sage-700">
                Mobile Massage Therapy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-800 hover:text-forest-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {spaBusinessConfig.phoneCallable && <a
              href={`tel:${spaBusinessConfig.phoneCallable}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-forest-900 hover:text-sage-700 transition-colors px-3 py-2 rounded-full border border-beige-300 bg-cream-50 hover:bg-beige-100"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600" />
              <span>{spaBusinessConfig.phoneDisplay}</span>
            </a>}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-forest-900 text-cream-50 hover:bg-forest-800 active:scale-95 transition-all shadow-sm hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-forest-900 text-cream-50 hover:bg-forest-800 transition-colors"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:text-forest-900 hover:bg-beige-200/60 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 border-t border-beige-200 bg-cream-50 rounded-2xl px-4 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-base font-medium text-charcoal-800 hover:text-forest-900 hover:bg-beige-100 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-beige-200 flex flex-col gap-2.5">
                {spaBusinessConfig.phoneCallable && <a
                  href={`tel:${spaBusinessConfig.phoneCallable}`}
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-forest-900 bg-sage-100 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-forest-900" />
                  <span>Call {spaBusinessConfig.phoneDisplay}</span>
                </a>}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-wider bg-forest-900 text-cream-50 rounded-xl shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book an Appointment</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
