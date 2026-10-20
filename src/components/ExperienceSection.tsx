import React from 'react';
import { Home, Clock, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const spaFeatures = [
    {
      title: "Your Preferred Location",
      desc: "The therapist travels to your home or another requested address, subject to service-area availability.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "A Personalized Treatment",
      desc: "Choose from seven massage therapies and share any preferences when you send your booking request.",
      img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Advance Booking",
      desc: "Appointments must be requested in advance. Your therapist will confirm the time and location before the visit.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-beige-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200/60 text-forest-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Mobile Home Visits</span>
          </div>
          <h2 className="serif-title text-3xl sm:text-4xl lg:text-5xl text-forest-900 font-semibold mb-4">
            Massage Therapy, On Your Terms
          </h2>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-charcoal-800/80 text-base sm:text-lg leading-relaxed">
            Enjoy a personalized massage treatment at home or another preferred location. Send a request with your address so availability can be confirmed.
          </p>
        </div>

        {/* Atmosphere Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {spaFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-3xl overflow-hidden border border-beige-300 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="serif-title text-xl font-semibold text-forest-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Home visit details */}
        <div className="bg-forest-900 text-cream-50 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-elevated">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
              Before You Book
            </span>
            <h3 className="serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              A Few Visit Details
            </h3>
            <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-xl mx-auto">
              Share your complete address and locality with your request. The therapist will check service coverage and confirm availability directly with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { title: 'Choose a service', detail: 'Select one of the seven massage therapies and a preferred duration.', icon: Sparkles },
              { title: 'Share your location', detail: 'Provide the complete treatment address and area or locality.', icon: Home },
              { title: 'Wait for confirmation', detail: 'The therapist will confirm availability before the appointment is booked.', icon: Clock },
            ].map(({ title, detail, icon: Icon }) => (
              <div key={title} className="bg-forest-950/60 border border-sage-500/20 rounded-2xl p-6">
                <Icon className="w-5 h-5 text-gold-400 mb-4" />
                <h4 className="serif-title text-lg font-semibold mb-2">{title}</h4>
                <p className="text-xs sm:text-sm text-cream-100/85 font-light leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
