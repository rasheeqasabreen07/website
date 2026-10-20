import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Leaf } from 'lucide-react';
import { therapistInfo } from '../data/spaData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-beige-50 relative overflow-hidden">
      {/* Decorative subtle botanical background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200/60 text-forest-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Freelance Mobile Massage Therapy</span>
          </div>
          <h2 className="serif-title text-3xl sm:text-4xl lg:text-5xl text-forest-900 font-semibold mb-4">
            Meet Your Massage Therapist
          </h2>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-charcoal-800/80 text-base sm:text-lg leading-relaxed">
            RAAZ WELLNESSS & MASSAGE provides personalized massage treatments at clients' preferred locations. The therapist travels to your home or another requested address, subject to availability.
          </p>
        </div>

        {/* Main Content Grid: Image + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Therapist Photo with Luxury Border & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sage-300/60 to-gold-400/30 blur-sm transform -rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-cream-50 border-2 border-beige-200">
                <img
                  src={therapistInfo.avatarUrl}
                  alt="Massage treatment setting"
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-cream-50/95 backdrop-blur-md p-4 rounded-xl border border-beige-300 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                        Professional Experience
                      </p>
                      <p className="text-sm font-medium text-charcoal-800">
                        {therapistInfo.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bio and Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Therapist Name and Title */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sage-700 block mb-1">
                Your Mobile Therapist
              </span>
              <h3 className="serif-title text-3xl sm:text-4xl text-forest-900 font-semibold mb-2">
                {therapistInfo.name}
              </h3>
              <p className="text-sm font-medium text-forest-800/80">
                Qualification: {therapistInfo.qualification}
              </p>
            </div>

            {/* Treatment Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-cream-100 border-l-4 border-gold-500 shadow-sm mb-6">
              <p className="serif-title italic text-base sm:text-lg text-forest-950 leading-relaxed">
                {therapistInfo.philosophy}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-charcoal-800 leading-relaxed mb-6 font-light text-base">
              {therapistInfo.bio}
            </p>

          </div>
        </div>

        {/* Core Pillars: Personalized Care, Hygiene, Comfort, Natural */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-beige-300">
          {therapistInfo.corePillars.map((pillar, index) => {
            const icons = {
              HeartHandshake: HeartHandshake,
              ShieldCheck: ShieldCheck,
              Sparkles: Sparkles,
              Leaf: Leaf,
            };
            const IconComponent = icons[pillar.icon as keyof typeof icons] || Sparkles;

            return (
              <div
                key={index}
                className="bg-cream-100/80 hover:bg-cream-50 p-6 rounded-2xl border border-beige-200 shadow-sm hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="serif-title text-lg font-semibold text-forest-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
