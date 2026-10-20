import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Info
} from 'lucide-react';
import { getWhatsAppNumber, spaBusinessConfig, spaServices } from '../data/spaData';

interface BookingSectionProps {
  initialService?: string;
  initialDuration?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = '',
  initialDuration = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || spaServices[0].name,
    duration: initialDuration || spaServices[0].defaultDuration,
    date: '',
    time: '10:00 AM',
    address: '',
    area: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update selected service if changed externally
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
        duration: initialDuration || spaServices.find((service) => service.name === initialService)?.defaultDuration || prev.duration,
      }));
    }
  }, [initialService, initialDuration]);

  // Set default minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9+()\- ]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a massage service.';
    if (!formData.date) {
      newErrors.date = 'Please select your preferred appointment date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a preferred time slot.';
    }
    if (!formData.address.trim()) newErrors.address = 'Please provide the complete treatment address.';
    if (!formData.area.trim()) newErrors.area = 'Please provide the area or locality.';

    const whatsappNumber = getWhatsAppNumber();
    if (!whatsappNumber) newErrors.whatsappNumber = 'Business WhatsApp number is not configured yet.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Appointment request for RAAZ WELLNESSS & MASSAGE\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nService: ${formData.service} (${formData.duration})\nPreferred date: ${formData.date}\nPreferred time: ${formData.time}\nTreatment address: ${formData.address}\nArea/locality: ${formData.area}\nAdditional notes: ${formData.notes || 'None'}\n\nThis is a request only. Please confirm service-area and appointment availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = getWhatsAppNumber();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    setGeneratedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    // Automatically prompt WhatsApp in new tab for smooth booking
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: spaServices[0].name,
      duration: '60 min',
      date: '',
      time: '10:00 AM',
      address: '',
      area: '',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200/70 text-forest-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-sage-600" />
            <span>Begin Your Restoration</span>
          </div>
          <h2 className="serif-title text-3xl sm:text-4xl lg:text-5xl text-forest-900 font-semibold mb-4">
            Contact & Appointment Booking
          </h2>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-charcoal-800/80 text-base sm:text-lg leading-relaxed">
            Request a home visit below. The therapist will confirm location coverage and appointment availability before your booking is confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Service Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-cream-50 rounded-3xl p-7 border border-beige-300 shadow-soft">
              <h3 className="serif-title text-2xl font-semibold text-forest-900 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-forest-900 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-900">
                      Telephone
                    </p>
                    {spaBusinessConfig.phoneCallable ? (
                      <a href={`tel:${spaBusinessConfig.phoneCallable}`} className="text-sm font-semibold text-charcoal-800 hover:text-forest-900 transition-colors">
                        {spaBusinessConfig.phoneDisplay}
                      </a>
                    ) : <p className="text-sm font-semibold text-charcoal-800">{spaBusinessConfig.phoneDisplay}</p>}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-900">
                      WhatsApp Booking
                    </p>
                    <a
                      href={getWhatsAppNumber() ? `https://wa.me/${getWhatsAppNumber()}` : '#contact'}
                      target={getWhatsAppNumber() ? '_blank' : undefined}
                      rel={getWhatsAppNumber() ? 'noopener noreferrer' : undefined}
                      className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{getWhatsAppNumber() ? 'Book on WhatsApp' : 'WhatsApp booking (number to be added)'}</span>
                    </a>
                    <p className="text-[11px] text-charcoal-800/60">Ask about a home visit and location availability</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-forest-900 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-900">
                      Email Inquiries
                    </p>
                    {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(spaBusinessConfig.email) ? (
                      <a href={`mailto:${spaBusinessConfig.email}`} className="text-sm font-medium text-charcoal-800 hover:text-forest-900 break-all transition-colors">
                        {spaBusinessConfig.email}
                      </a>
                    ) : <p className="text-sm font-medium text-charcoal-800 break-all">{spaBusinessConfig.email}</p>}
                  </div>
                </div>

              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="bg-cream-50 rounded-3xl p-7 border border-beige-300 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold-500" />
                <h3 className="serif-title text-xl font-semibold text-forest-900">
                  Opening Hours
                </h3>
              </div>
              <ul className="space-y-3">
                {spaBusinessConfig.openingHours.map((schedule, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-beige-200/80 last:border-0"
                  >
                    <span className="font-medium text-forest-900">{schedule.days}</span>
                    <span className="font-semibold text-charcoal-800">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-sage-50 rounded-xl text-[11px] text-sage-700 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                      <span>Advance booking is required. The therapist will confirm your location and appointment availability; submitting a request does not confirm an appointment.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-50 rounded-3xl p-7 sm:p-10 border border-beige-300 shadow-elevated relative">
              {/* Form Heading */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-sage-700 font-bold block mb-1">
                  Online Reservation
                </span>
                <h3 className="serif-title text-2xl sm:text-3xl font-semibold text-forest-900 mb-2">
                  Book Your Treatment
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 font-light">
                  Send a request with your preferred service, time, and treatment location. The therapist will confirm availability with you.
                </p>
              </div>

              {/* Backend transparency alert */}
              <div className="mb-6 p-4 rounded-2xl bg-sage-100/70 border border-sage-300/80 flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-forest-900 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-forest-950 leading-relaxed">
                  <strong className="font-semibold">Home visit request:</strong> The therapist travels to your requested location. Your appointment is not confirmed until the therapist replies and confirms availability.
                </div>
              </div>

              {isSubmitted ? (
                /* Success Feedback State */
                <div className="p-8 text-center bg-cream-100 rounded-2xl border border-sage-300 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="serif-title text-2xl font-bold text-forest-900 mb-2">
                    Request Ready to Send
                  </h4>
                  <p className="text-sm text-charcoal-800/85 mb-6 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-forest-900">{formData.name}</strong>. Your request for <strong className="text-forest-900">{formData.service}</strong> on <strong className="text-forest-900">{formData.date}</strong> at <strong className="text-forest-900">{formData.time}</strong> is prepared. This is not a confirmed appointment; the therapist must confirm availability for your location.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue in WhatsApp</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-beige-300 bg-cream-50 hover:bg-beige-100 text-forest-900 font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="booking-email" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Selected Service */}
                    <div className="sm:col-span-2">
                      <label htmlFor="booking-service" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Select Massage Service *
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => {
                          const service = spaServices.find((item) => item.name === e.target.value);
                          setFormData({ ...formData, service: e.target.value, duration: service?.defaultDuration || '' });
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900 transition-all"
                      >
                        {spaServices.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name} ({service.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label htmlFor="booking-duration" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Duration *
                      </label>
                      <select
                        id="booking-duration"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900 transition-all"
                      >
                        {spaServices.find((service) => service.name === formData.service)?.priceDetails.map((option) => (
                          <option key={option.duration} value={option.duration}>{option.duration} ({option.price})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="booking-date" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        id="booking-date"
                        name="date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                          errors.date ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                        }`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="booking-time" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Preferred Time *
                      </label>
                      <select
                        id="booking-time"
                        name="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900 transition-all"
                      >
                        <option value="09:30 AM">09:30 AM (Morning)</option>
                        <option value="11:00 AM">11:00 AM (Morning)</option>
                        <option value="01:00 PM">01:00 PM (Afternoon)</option>
                        <option value="02:30 PM">02:30 PM (Afternoon)</option>
                        <option value="04:00 PM">04:00 PM (Late Afternoon)</option>
                        <option value="05:30 PM">05:30 PM (Evening)</option>
                        <option value="07:00 PM">07:00 PM (Evening)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="booking-address" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Full Treatment Address *
                      </label>
                      <input
                        id="booking-address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Street, building, unit, and other directions"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                          errors.address ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                        }`}
                      />
                      {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                    </div>
                    <div>
                      <label htmlFor="booking-area" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Area or Locality *
                      </label>
                      <input
                        id="booking-area"
                        name="area"
                        type="text"
                        autoComplete="address-level2"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="Your area or locality"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 transition-all ${
                          errors.area ? 'border-red-400 bg-red-50/20' : 'border-beige-300 focus:border-forest-900'
                        }`}
                      />
                      {errors.area && <p className="mt-1 text-xs text-red-600">{errors.area}</p>}
                    </div>
                  </div>
                  <p className="-mt-2 text-xs text-forest-800" role="note">
                    Please provide your complete address so the therapist can confirm service availability for your location.
                  </p>

                  {/* Special Requests / Notes */}
                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                      Special Requests, Pressure Preference, or Focus Areas (Optional)
                    </label>
                    <textarea
                      id="booking-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Focus on neck and shoulder tightness, light aromatherapy scent preferred, first-time massage..."
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-card hover:shadow-elevated active:scale-[0.99] group"
                    >
                      <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                      <span>Send Booking Request via WhatsApp</span>
                    </button>
                    <p className="mt-3 text-center text-[11px] text-charcoal-800/60 font-light">
                      Your request opens in WhatsApp. The therapist must confirm availability; no appointment is confirmed automatically.
                    </p>
                    {errors.whatsappNumber && (
                      <p className="mt-2 text-center text-xs text-red-700" role="alert">
                        {errors.whatsappNumber} Update the number in src/data/spaData.ts using the international country code and digits only.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
