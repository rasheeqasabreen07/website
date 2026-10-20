import React, { useState } from 'react';
import { Clock, Check, Calendar, Sparkles } from 'lucide-react';
import { SpaService } from '../data/spaData';

interface ServiceCardProps {
  service: SpaService;
  onBook: (serviceName: string, duration?: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const activePricing = service.priceDetails[selectedDurationIndex] || {
    duration: service.defaultDuration,
    price: service.price,
  };

  return (
    <article className="flex flex-col bg-cream-50 rounded-3xl overflow-hidden border border-beige-300/80 shadow-soft hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1">
      {/* Service Image with Category & Badge */}
      <div className="relative h-60 w-full overflow-hidden bg-beige-200">
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cream-50/90 text-forest-900 backdrop-blur-sm shadow-sm">
            {service.category}
          </span>
        </div>

        {/* Dynamic Pricing pill in photo */}
        <div className="absolute bottom-4 right-4 bg-forest-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/30 text-cream-50 flex items-center gap-1.5 shadow-md">
          <span className="text-xs text-sage-200">From</span>
          <span className="text-base font-bold text-gold-300">{activePricing.price}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Tagline */}
          <div className="mb-3">
            <h3 className="serif-title text-2xl font-semibold text-forest-900 mb-1 group-hover:text-forest-800 transition-colors">
              {service.name}
            </h3>
            <p className="text-xs font-medium text-sage-700 italic">
              {service.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-charcoal-800/85 font-light leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Duration Selector Tabs */}
          <div className="mb-5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-forest-900 flex items-center gap-1.5 mb-2">
              <Clock className="w-3.5 h-3.5 text-sage-600" />
              <span>Select Treatment Length:</span>
            </label>
            <div className="flex gap-2">
              {service.priceDetails.map((detail, idx) => (
                <button
                  key={detail.duration}
                  type="button"
                  onClick={() => setSelectedDurationIndex(idx)}
                  className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                    selectedDurationIndex === idx
                      ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                      : 'bg-cream-100 text-charcoal-800 border-beige-300 hover:bg-beige-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{detail.duration}</span>
                    <span className={selectedDurationIndex === idx ? 'text-gold-300' : 'text-forest-900 font-bold'}>
                      {detail.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-6 pt-4 border-t border-beige-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-forest-900 mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-gold-500" />
              <span>Key Therapeutic Benefits</span>
            </p>
            <ul className="space-y-1.5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-charcoal-800/90 font-light">
                  <Check className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => onBook(service.name, activePricing.duration)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-forest-900 text-cream-50 hover:bg-forest-800 active:scale-[0.98] transition-all text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow group/btn"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-400 group-hover/btn:scale-110 transition-transform" />
            <span>Book This Service</span>
          </button>
        </div>
      </div>
    </article>
  );
};
