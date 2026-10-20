import React from 'react';
import { Sparkles, Calendar, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-40 pb-16 sm:pt-32 lg:pt-40 overflow-hidden">
      {/* Background with subtle warm gradient and high-res relaxing spa imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Calm massage treatment setting with warm lighting and natural botanicals"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Multilayered luxury overlay: cream, sage, and subtle vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100/95 via-cream-100/90 to-cream-100/70 md:to-cream-100/40" />
        <div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/90 border border-sage-300 text-forest-900 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Freelance Mobile Massage Therapy</span>
          </div>

          {/* Business Name and Tagline */}
          <h1 className="serif-title text-4xl sm:text-5xl lg:text-6xl text-forest-900 font-semibold tracking-tight leading-[1.15] mb-4">
            Professional Massage Therapy at Your Doorstep
          </h1>

          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-light mb-8 max-w-xl">
            Relax and rejuvenate in the comfort of your own home. Book a personalized massage session, and our therapist will travel to your preferred location.
          </p>

          {/* Prominent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-forest-900 text-cream-50 hover:bg-forest-800 text-sm font-semibold tracking-wider uppercase transition-all shadow-card hover:shadow-elevated active:scale-95 group"
            >
              <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Book a Home Visit</span>
            </button>

            <a
              href="#therapies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50/90 hover:bg-cream-50 text-forest-900 border border-sage-300 text-sm font-semibold tracking-wider uppercase transition-all hover:border-forest-900 shadow-sm"
            >
              <span>Explore Our Therapies</span>
              <ArrowDown className="w-4 h-4 text-sage-600" />
            </a>
          </div>

          <div className="pt-6 border-t border-beige-300/80">
            <p className="text-[11px] sm:text-xs font-bold text-forest-900 leading-relaxed">
              Mobile Massage Service <span className="text-sage-600">|</span> Home Visits <span className="text-sage-600">|</span> Advance Booking Required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
