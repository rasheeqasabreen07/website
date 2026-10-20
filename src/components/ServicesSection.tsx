import React, { useState } from 'react';
import { spaServices } from '../data/spaData';
import { ServiceCard } from './ServiceCard';
import { Sparkles, Flower2 } from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceName: string, duration?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Body', 'Targeted', 'Holistic'];

  const filteredServices = activeCategory === 'All'
    ? spaServices
    : spaServices.filter((s) => s.category === activeCategory);

  return (
    <section id="therapies" className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200/70 text-forest-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Flower2 className="w-3.5 h-3.5 text-sage-600" />
            <span>Mobile Massage Treatments</span>
          </div>
          <h2 className="serif-title text-3xl sm:text-4xl lg:text-5xl text-forest-900 font-semibold mb-4">
            Our Massage Therapies
          </h2>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-charcoal-800/80 text-base sm:text-lg leading-relaxed">
            Choose from seven massage treatments. Your therapist brings the selected service to your home or preferred location, subject to availability.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-forest-900 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-50 text-charcoal-800 border border-beige-300 hover:bg-beige-100 hover:border-beige-400'
              }`}
            >
              {cat === 'All' ? 'All 7 Therapies' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid (All 7 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onBookService}
            />
          ))}
        </div>

        {/* Complimentary Inclusions Banner */}
        <div className="mt-16 bg-cream-50 rounded-3xl border border-beige-300 p-8 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-forest-900 flex-shrink-0">
                <Sparkles className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <h4 className="serif-title text-lg font-semibold text-forest-900">
                  Every Session Includes Our Signature Comfort Touches
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-800/75 font-light">
                  Pre-treatment consultation, heated organic flaxseed packs, hot towel compress, and personalized botanical aromatherapy diffusion.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-xs font-semibold px-4 py-2 rounded-full bg-sage-200/80 text-forest-900 border border-sage-300">
                100% Satisfaction & Comfort
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
