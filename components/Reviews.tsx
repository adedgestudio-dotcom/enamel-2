"use client";

import { client } from "@/config/client";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-50 border border-navy-100 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-navy-500" />
            <p className="text-xs sm:text-sm font-semibold text-navy-700 uppercase tracking-wider">
              Patient Testimonials
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 sm:mb-4 px-4">
            What Our Patients Say
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-navy-600 max-w-2xl mx-auto px-4">
            Real experiences from real people who trust us with their smiles
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {client.reviews.map((review, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-gray-200
                         shadow-sm hover:shadow-2xl hover:-translate-y-2
                         transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold-50/0 to-gold-100/0
                           group-hover:from-gold-50/30 group-hover:to-gold-100/20
                           transition-all duration-300 pointer-events-none"
              />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-navy-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-100 to-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-900 font-bold text-base sm:text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-sm sm:text-base">
                      {review.name}
                    </div>
                    <div className="text-xs sm:text-sm text-navy-500">
                      Verified Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: "⭐", text: "4.9/5 Rating", sub: "Based on 500+ reviews" },
            {
              icon: "🏆",
              text: "Award Winning",
              sub: "Best Dental Clinic 2024",
            },
            { icon: "✓", text: "100% Satisfaction", sub: "Guaranteed results" },
            { icon: "🔒", text: "Safe & Secure", sub: "Advanced protocols" },
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                {badge.icon}
              </div>
              <div className="font-bold text-navy-900 text-sm sm:text-base mb-1">
                {badge.text}
              </div>
              <div className="text-xs sm:text-sm text-navy-500">
                {badge.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
