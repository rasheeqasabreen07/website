export interface SpaService {
  id: string;
  name: string;
  tagline: string;
  category: 'Full Body' | 'Targeted' | 'Holistic';
  durationOptions: string[];
  defaultDuration: string;
  price: string; // Editable placeholder
  priceDetails: { duration: string; price: string }[];
  description: string;
  benefits: string[];
  imageUrl: string;
  imageAlt: string;
  recommendedFor: string;
}

export interface TherapistInfo {
  name: string;
  qualification: string;
  avatarUrl: string;
  bio: string;
  philosophy: string;
  experience: string;
  corePillars: { title: string; description: string; icon: string }[];
}

export interface SpaBusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  welcomeIntro: string;
  phoneDisplay: string;
  phoneCallable: string;
  whatsappNumber: string; // International format without spaces, e.g., 15552345678
  email: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
}

export const spaBusinessConfig: SpaBusinessConfig = {
  name: "RAAZ WELLNESSS & MASSAGE",
  shortName: "RAAZ WELLNESSS & MASSAGE",
  tagline: "Professional massage therapy, delivered to your preferred location.",
  welcomeIntro: "RAAZ WELLNESSS & MASSAGE is a freelance mobile massage therapy service. Personalized treatments are provided at your home or another preferred location.",
  phoneDisplay: "+91 9962956258",
  phoneCallable: "+919962956258",
  whatsappNumber: "919962956258",
  email: "raazmassage1996@gmail.com",
  openingHours: [{ days: "Working hours", hours: "10:00 AM to 7:00 PM" }],
};

export const getWhatsAppNumber = (): string => {
  const digits = spaBusinessConfig.whatsappNumber.replace(/\D/g, '');
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : '';
};

export const therapistInfo: TherapistInfo = {
  name: "RAAZ MOHAMMED",
  qualification: "Ayurveda Panchakarma Therapy",
  avatarUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
  bio: "RAAZ WELLNESSS & MASSAGE is a freelance, mobile massage therapy service providing personalized treatments at clients' homes or other preferred locations. Each visit is arranged around the requested treatment and location, subject to therapist availability.",
  philosophy: "“Personalized massage therapy, delivered in the comfort of your preferred location.”",
  experience: "6 years",
  corePillars: [
    {
      title: "Personalized Care",
      description: "No two bodies are alike. Every therapy begins with a brief consultation to adjust pressure, focus areas, and natural essential oils.",
      icon: "HeartHandshake"
    },
    {
      title: "Prepared for Your Visit",
      description: "Visit details and any setup requirements are discussed before the appointment.",
      icon: "ShieldCheck"
    },
    {
      title: "At Your Preferred Location",
      description: "Request a treatment at home or another location, subject to service-area availability.",
      icon: "Sparkles"
    },
    {
      title: "Advance Booking",
      description: "Appointments require advance booking and therapist confirmation of availability.",
      icon: "Leaf"
    }
  ]
};

export const spaServices: SpaService[] = [
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    tagline: "Gentle Relaxation & Full-Body Harmony",
    category: "Full Body",
    durationOptions: ["60 min", "90 min"],
    defaultDuration: "60 min",
    price: "₹2000",
    priceDetails: [
      { duration: "60 min", price: "₹2000" },
      { duration: "90 min", price: "₹2500" },
    ],
    description: "The classic gold-standard of relaxation therapy. Utilizing long, fluid gliding strokes (effleurage), gentle kneading (petrissage), and light friction, this therapy melts daily stress, boosts oxygen flow in blood, and leaves you in a state of tranquil peace.",
    benefits: [
      "Dissolves surface muscle tension and fatigue",
      "Stimulates blood circulation and lymphatic drainage",
      "Lowers cortisol levels and promotes restful deep sleep",
      "Calms the sympathetic nervous system"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Calm Swedish massage therapy session with warm soothing oil",
    recommendedFor: "First-time massage clients, stress reduction, and overall bodily relaxation."
  },
  {
    id: "aroma-massage",
    name: "Aroma Massage",
    tagline: "Sensory Rejuvenation with Pure Botanical Oils",
    category: "Full Body",
    durationOptions: ["60 min", "90 min"],
    defaultDuration: "60 min",
    price: "₹2000",
    priceDetails: [
      { duration: "60 min", price: "₹2000" },
      { duration: "90 min", price: "₹2500" },
    ],
    description: "An evocative sensory journey harmonizing warm, flowing massage with bespoke therapeutic essential oils. We select pure botanicals such as French lavender, Roman chamomile, frankincense, or eucalyptus to nurture your emotional equilibrium and soothe muscles.",
    benefits: [
      "Relieves emotional overwhelm and mental tension",
      "Deeply hydrates and nourishes skin with organic botanical oils",
      "Enhances respiratory wellness and mental clarity",
      "Induces a profound meditative state"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aromatherapy massage with pure botanical essential oils and warm candles",
    recommendedFor: "Clients seeking emotional calm, stress relief, and aromatic sensory bliss."
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Targeted Pressure for Chronic Muscle Knots",
    category: "Targeted",
    durationOptions: ["60 min", "90 min"],
    defaultDuration: "60 min",
    price: "₹2500",
    priceDetails: [
      { duration: "60 min", price: "₹2500" },
      { duration: "90 min", price: "₹3000" },
    ],
    description: "A focused therapeutic treatment targeting sub-surface layers of muscle and fascia. Using deliberate slow strokes, firm thumb pressure, and forearm compression, this massage breaks up rigid adhesions (knots) and relieves persistent tightness.",
    benefits: [
      "Releases stubborn chronic knots and muscle adhesions",
      "Alleviates lower back, neck, and shoulder stiffness",
      "Enhances athletic recovery and physical range of motion",
      "Corrects posture imbalances caused by prolonged sitting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Therapeutic deep tissue massage releasing chronic muscle tightness",
    recommendedFor: "Desk workers, athletes, and individuals with chronic tightness or stiff muscles."
  },
  {
    id: "lomi-lomi-massage",
    name: "Lomi Lomi Massage",
    tagline: "Sacred Hawaiian Rhythmic Flow & Healing Touch",
    category: "Holistic",
    durationOptions: ["60 min", "90 min"],
    defaultDuration: "60 min",
    price: "₹2500",
    priceDetails: [
      { duration: "60 min", price: "₹2500" },
      { duration: "90 min", price: "₹3000" },
    ],
    description: "Rooted in ancient Hawaiian healing traditions, Lomi Lomi (Loving Hands) uses continuous, wave-like forearm and palm strokes that flow effortlessly over the entire body. The rhythmic, ocean-inspired movements open energetic channels and invite a profound sense of lightness.",
    benefits: [
      "Continuous sweeping strokes mimic ocean waves for deep mental peace",
      "Releases emotional blockages and energetic stagnation",
      "Improves joint flexibility and soft-tissue elasticity",
      "Creates an all-encompassing sense of warmth and being nurtured"
    ],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Holistic Hawaiian Lomi Lomi massage with natural spa botanicals",
    recommendedFor: "Anyone seeking holistic mind-body rejuvenation, renewal, and gentle energetic flow."
  },
  {
    id: "foot-massage",
    name: "Foot Massage",
    tagline: "Revitalizing Relief for Tired Feet & Calves",
    category: "Targeted",
    durationOptions: ["30 min", "45 min"],
    defaultDuration: "30 min",
    price: "₹1000",
    priceDetails: [
      { duration: "30 min", price: "₹1000" },
      { duration: "45 min", price: "₹1500" },
    ],
    description: "Begin with a comforting warm herbal compress to soften the skin and warm the arches. Your therapist then applies targeted manual techniques across the soles, heels, Achilles tendons, and lower legs to alleviate heavy, tired sensations.",
    benefits: [
      "Relieves plantar soreness, arch fatigue, and ankle tension",
      "Reduces lower extremity swelling and fluid accumulation",
      "Promotes immediate feeling of lightness and effortless stride",
      "Deeply relaxing soothing experience"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Therapeutic foot massage with herbal compress and nourishing cream",
    recommendedFor: "People who stand for hours, runners, commuters, and tired travelers."
  },
  {
    id: "foot-reflexology",
    name: "Foot Reflexology",
    tagline: "Ancient Meridian Balance & Full-Body Wellness",
    category: "Holistic",
    durationOptions: ["45 min", "60 min"],
    defaultDuration: "45 min",
    price: "₹1500",
    priceDetails: [
      { duration: "45 min", price: "₹1500" },
      { duration: "60 min", price: "₹2000" },
    ],
    description: "An ancient healing science based on the principle that specific reflex zones on the feet correspond directly to major internal organs and physiological systems. Precise micro-pressure stimulates innate self-regulation and vitality throughout the entire body.",
    benefits: [
      "Stimulates internal organ function and equilibrium",
      "Assists in clearing metabolic waste and supporting natural detox",
      "Balances vital meridian energy (Qi) flow",
      "Eases chronic migraines and systemic fatigue"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Foot treatment with a therapist applying massage techniques",
    recommendedFor: "Individuals seeking holistic vitality, digestive balance, and systemic rejuvenation."
  },
  {
    id: "head-and-shoulder-massage",
    name: "Head and Shoulder Massage",
    tagline: "Instant Stress Relief for Upper Body & Mind",
    category: "Targeted",
    durationOptions: ["30 min", "45 min"],
    defaultDuration: "30 min",
    price: "₹1000",
    priceDetails: [
      { duration: "30 min", price: "₹1000" },
      { duration: "45 min", price: "₹1500" },
    ],
    description: "Designed for immediate, powerful relief where tension gathers fastest. Focusing deeply on the neck muscles, trapezius, shoulder blades, occipital ridge, and scalp to release digital eye strain, tech-neck stiffness, and mental fog.",
    benefits: [
      "Rapidly relieves tension headaches and ocular fatigue",
      "Releases 'desk slump' tightness in shoulders and neck",
      "Improves cranial blood flow and mental clarity",
      "Quick, highly restorative midday or post-work therapy"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Relaxing head, neck and shoulder massage therapy",
    recommendedFor: "Desk and computer workers, drivers, study fatigue, and busy schedules."
  }
 ];
