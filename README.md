# RAAZ – Massage & Spa Therapy Website

A complete, modern, elegant, and responsive website built for **RAAZ – Massage & Spa Therapy** (*“Relax, Restore & Rejuvenate”*).

---

## 🌿 Overview & Key Features

- **Luxury Theme & Aesthetics**: Built with an earthy, calming palette of cream-white (`#FAF8F5`), sage green, deep forest green, soft warm beige, and champagne gold accents.
- **Typography**: Editorial serif typography (*Playfair Display*) paired with clean, accessible sans-serif (*Plus Jakarta Sans*).
- **Hero Sanctuary**: High-resolution relaxing spa background with soothing overlay, welcome introduction, and prominent dual CTAs.
- **Therapist Profile & Philosophy**: Dedicated "About Us" section highlighting therapist qualifications, board certifications, treatment philosophy, and core pillars (personalized pressure, medical-grade hygiene, heated tables, and organic botanical oils).
- **All 7 Curated Spa Therapies**:
  1. **Swedish Massage** – Gentle full-body tension release and circulation boost.
  2. **Aroma Massage** – Sensory rejuvenation with pure therapeutic-grade botanical oils.
  3. **Deep Tissue Massage** – Deliberate targeted pressure for persistent muscle knots and fascia release.
  4. **Lomi Lomi Massage** – Sacred Hawaiian ocean-wave continuous forearm flow.
  5. **Foot Massage** – Warm herbal compress and revitalizing lower-leg relief.
  6. **Foot Reflexology** – Ancient meridian acupressure mapping for systemic vital energy balance.
  7. **Head and Shoulder Massage** – Rapid relief for desk-neck, ocular fatigue, and tension headaches.
- **Interactive Duration & Pricing Selectors**: Each service card includes an interactive length selector (e.g. 60 min vs. 90 min) with live price updates.
- **Direct WhatsApp Booking Flow**:
  - Automatically compiles customer name, phone, email, selected therapy, duration, date, time slot, and special requests into a formatted WhatsApp message.
  - One-click launch connects the client directly to the therapist's WhatsApp business number.
- **Floating WhatsApp Button**: Persistent bottom-right quick action for mobile and desktop visitors.
- **Comprehensive Contact Section**: Phone, email, verified opening hours, interactive Google Maps embed, and complete appointment form.
- **SEO Ready**:
  - Full Schema.org `LocalBusiness` / `DaySpa` JSON-LD structured data.
  - Open Graph & Twitter Card tags for social media sharing.
  - `sitemap.xml` and `robots.txt` in `public/`.
  - Google Search Console verification meta tag ready.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom luxury color scheme
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display & Plus Jakarta Sans)

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Elegant botanical lotus favicon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # XML sitemap for Google indexing
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx            # Hero section with relaxing imagery and CTAs
│   │   ├── AboutSection.tsx    # Therapist credentials, philosophy, and pillars
│   │   ├── ServicesSection.tsx # Category filters and 7 service cards
│   │   ├── ServiceCard.tsx     # Individual card with duration toggle & booking
│   │   ├── ExperienceSection.tsx # Ambiance preview and client reflections
│   │   ├── BookingSection.tsx  # Contact info, Google map, and booking form
│   │   ├── BookingModal.tsx    # Modal pop-up for instant booking from any CTA
│   │   ├── FloatingWhatsApp.tsx# Fixed WhatsApp quick chat button
│   │   └── Footer.tsx          # Brand links, operating hours, disclaimer, copyright
│   ├── data/
│   │   └── spaData.ts          # Central configuration for all text, prices, phone, and services
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind CSS directives & custom styling
│   └── main.tsx                # React root entry point
├── index.html                  # HTML entry with SEO, JSON-LD Schema, and meta tags
├── package.json                # Project dependencies and build scripts
├── tailwind.config.js          # Custom colors (cream, forest, sage, beige, gold)
└── vite.config.ts              # Vite configuration
```

---

## ✏️ How to Customize Your Business Details

All business details, phone numbers, addresses, therapist credentials, and prices are centralized in:
👉 `src/data/spaData.ts`

- **Phone Number**: Change `phoneDisplay` and `phoneCallable`.
- **WhatsApp Number**: Change `whatsappNumber` (e.g. `"15551234567"` with country code and no plus/spaces).
- **Email**: Update `email`.
- **Address**: Update `address.fullAddress`.
- **Pricing & Durations**: Edit the `priceDetails` array in `spaServices`.
- **Therapist Credentials**: Update `therapistInfo.name`, `certifications`, `experience`, and `avatarUrl`.

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` folder.
