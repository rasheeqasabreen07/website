import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppNumber } from '../data/spaData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = getWhatsAppNumber();
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello RAAZ WELLNESSS & MASSAGE, I would like to request a mobile massage appointment.')}`
    : '#contact';

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 bg-forest-900/95 text-cream-50 text-xs font-medium rounded-xl shadow-card backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Book a Home Visit
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target={whatsappNumber ? '_blank' : undefined}
        rel={whatsappNumber ? 'noopener noreferrer' : undefined}
        aria-label="WhatsApp booking for a home visit"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-elevated hover:scale-105 active:scale-95 transition-all duration-200 relative"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
