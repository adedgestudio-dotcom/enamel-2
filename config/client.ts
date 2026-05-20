// ─────────────────────────────────────────
//  CLIENT CONFIG — only edit this file
// ─────────────────────────────────────────

export const client = {
  name: "Enamel -2 Dental Clinic",
  doctor: "Dr. A. Sathik",
  role: "Dental Surgeon",
  qual: "BDS — Dental Surgeon",
  experience: "20 Years",
  tagline: "20 Years of Trusted Dental Care in Chennai",
  subline:
    "Expert dental treatment with a gentle touch — right in the heart of Madhavaram.",
  phone: "+91 98416 92815",
  whatsapp: "919841692815",
  email: "",
  address:
    "80, Sulochana Apartment, Madavaram Red Hills Rd, KKR Nagar, Madhavaram, Chennai — 600060",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  hours: "10AM – 2PM · 5:30PM – 9PM",
  days: "Mon – Sat",
  rating: "4.8",
  reviewCount: "45",

  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "4.8★", label: "Google Rating" },
    { value: "45+", label: "Patient Reviews" },
    { value: "6", label: "Days Open / Week" },
  ],

  services: [
    {
      icon: "🦷",
      title: "Root Canal Treatment",
      desc: "Painless RCT with modern rotary systems. Save your natural tooth without the fear.",
    },
    {
      icon: "🏅",
      title: "Dental Implants",
      desc: "Permanent natural-looking implants. Restore your smile and bite with confidence.",
    },
    {
      icon: "✨",
      title: "Teeth Whitening",
      desc: "Professional bleaching for a brighter, whiter smile in just one visit.",
    },
    {
      icon: "👑",
      title: "Crowns & Bridges",
      desc: "High-quality ceramic crowns and bridges crafted for strength and aesthetics.",
    },
    {
      icon: "📐",
      title: "Braces & Aligners",
      desc: "Metal braces and clear aligners to straighten teeth for any age.",
    },
    {
      icon: "🧒",
      title: "Paediatric Dentistry",
      desc: "Gentle child-friendly dental care in a calm and welcoming environment.",
    },
    {
      icon: "✂️",
      title: "Tooth Extractions",
      desc: "Safe, quick extractions including wisdom teeth with minimal discomfort.",
    },
    {
      icon: "😁",
      title: "Smile Makeover",
      desc: "Veneers, composites and a full aesthetic plan to transform your smile.",
    },
    {
      icon: "🩺",
      title: "General Checkup",
      desc: "Routine cleaning, fillings and preventive care to keep your teeth healthy.",
    },
  ],

  // Image paths — place your 3 photos in /public/
  images: {
    doctor: "/doctor.jpg?v=3", // Hero section - treatment room with patient
    exterior: "/clinic.jpg?v=3", // About section (Meet Your Doctor) - doctor at desk
    clinic: "/exterior.jpg?v=3", // Services section - waiting room
  },

  qualifications: [
    "BDS — Bachelor of Dental Surgery",
    "20+ Years of Clinical Experience",
    "Specialized in Root Canal Treatment",
    "Expert in Dental Implants & Cosmetic Dentistry",
  ],

  about:
    "With over 20 years of experience in dental care, Dr. A. Sathik has been serving the Madhavaram community with dedication and expertise. Known for gentle, patient-centered care and modern treatment techniques.",

  reviews: [
    {
      name: "Ramesh K.",
      text: "Dr. Sathik has been treating our family for over 10 years. Always gentle, always thorough. Best dentist in Madhavaram.",
    },
    {
      name: "Priya M.",
      text: "Got my root canal done here. Completely painless experience. The clinic is very clean and the doctor explains everything clearly.",
    },
    {
      name: "Arun S.",
      text: "Very professional and experienced doctor. Fair pricing, no unnecessary procedures. Highly recommend to everyone in Madhavaram.",
    },
  ],
};
