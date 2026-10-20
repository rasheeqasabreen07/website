import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [bookingSectionService, setBookingSectionService] = useState<string>('');
  const [bookingSectionDuration, setBookingSectionDuration] = useState<string>('');

  const handleOpenBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookFromCard = (serviceName: string, duration?: string) => {
    setBookingSectionService(serviceName);
    setBookingSectionDuration(duration || '');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-800 antialiased font-sans selection:bg-sage-300 selection:text-forest-900">
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <AboutSection />
        <ServicesSection onBookService={handleBookFromCard} />
        <ExperienceSection />
        <BookingSection
          initialService={bookingSectionService}
          initialDuration={bookingSectionDuration}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
};

export default App;
