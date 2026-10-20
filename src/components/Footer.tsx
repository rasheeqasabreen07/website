import React from 'react';
import { Sparkles, Phone, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppNumber, spaBusinessConfig, spaServices } from '../data/spaData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = getWhatsAppNumber();
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : '#contact';

  return (
    <footer className="bg-forest-950 text-cream-100 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-forest-900/80">
          {/* Brand & Philosophy Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center text-gold-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="serif-title text-2xl font-bold tracking-wider text-cream-50">
                  RAAZ WELLNESSS & MASSAGE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-sage-300">
                  Freelance Massage Therapy
                </span>
              </div>
            </div>
            <p className="text-sm text-cream-200/75 leading-relaxed font-light mb-6">
              {spaBusinessConfig.tagline} Mobile massage visits at your home or preferred location, by advance booking.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                target={whatsappNumber ? '_blank' : undefined}
                rel={whatsappNumber ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-emerald-700 flex items-center justify-center text-sage-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream-200/80">
              <li>
                <a href="#home" className="hover:text-gold-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-gold-300 transition-colors">Massage Therapies</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-300 transition-colors">Your Visit</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* All 7 Therapies Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Our Therapies
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              {spaServices.map((service) => (
                <li key={service.id}>
                  <a href="#therapies" className="hover:text-gold-300 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Home Visit Contact
            </h4>
            <div className="space-y-3 text-xs text-cream-200/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <a href={`tel:${spaBusinessConfig.phoneCallable}`} className="hover:text-gold-300">
                  {spaBusinessConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <a href={`mailto:${spaBusinessConfig.email}`} className="break-all hover:text-gold-300">
                  {spaBusinessConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <a href={whatsappHref} target={whatsappNumber ? '_blank' : undefined} rel={whatsappNumber ? 'noopener noreferrer' : undefined} className="hover:text-gold-300">
                  WhatsApp booking
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-forest-900/60">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-sage-400 mb-1">
                Hours of Operation
              </p>
              {spaBusinessConfig.openingHours.map((schedule) => (
                <p key={schedule.days} className="text-[11px] text-cream-200/70">{schedule.days}: {schedule.hours}</p>
              ))}
              <a href="#contact" className="inline-block mt-3 text-[11px] text-gold-300 hover:text-gold-200">
                Advance booking required
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-300/60 font-light">
          <p className="text-center md:text-left">
            © {currentYear} {spaBusinessConfig.name}. All rights reserved. Designed for wellness & tranquility.
          </p>
          <p className="text-center md:text-right text-[11px]">
            Booking requests are subject to therapist confirmation and service-area availability.
          </p>
        </div>
      </div>
    </footer>
  );
};
