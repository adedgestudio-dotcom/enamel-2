"use client";

import { client } from "@/config/client";
import { useState } from "react";

export default function Services() {
  const [imgError, setImgError] = useState(false);
  const fallbackClinic =
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80";

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-50 border border-navy-100 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-navy-500" />
            <p className="text-xs sm:text-sm font-semibold text-navy-700 uppercase tracking-wider">
              What We Offer
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 sm:mb-4 px-4">
            Our Dental Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-navy-600 max-w-2xl mx-auto px-4">
            Comprehensive dental care for the whole family with modern equipment
            and expert care
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {client.services.map((svc, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-gray-200
                            shadow-sm hover:shadow-2xl hover:-translate-y-2
                            hover:border-gold-300 transition-all duration-300 cursor-pointer
                            relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold-50/0 to-gold-100/0
                              group-hover:from-gold-50/50 group-hover:to-gold-100/30
                              transition-all duration-300 pointer-events-none"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 lg:mb-6
                                bg-gradient-to-br from-navy-50 to-navy-100 border border-navy-200
                                group-hover:from-gold-50 group-hover:to-gold-100
                                group-hover:border-gold-300 group-hover:scale-110
                                transition-all duration-300 shadow-sm"
                >
                  {svc.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy-900 mb-2 sm:mb-3 group-hover:text-gold-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-navy-600">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic showcase - Modern split design */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-navy-900 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Image side */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src={imgError ? fallbackClinic : client.images.clinic}
              alt="Enamel -2 Dental Clinic"
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/50 to-transparent" />
          </div>

          {/* Content side */}
          <div className="p-6 sm:p-8 lg:p-12 lg:pr-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
                            bg-gold-400/20 border border-gold-400/40 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <p className="text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                State-of-the-art Technology
              </p>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-3 sm:mb-4 leading-tight">
              Modern Equipment
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Expert Care
              </span>
            </h3>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Advanced dental technology for precise, comfortable treatment with
              the latest innovations in dental care
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "🔬", text: "Digital X-Ray Technology" },
                { icon: "💉", text: "Painless Procedures" },
                { icon: "🦷", text: "Advanced Sterilization" },
                { icon: "⚡", text: "Quick & Efficient" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm
                                            rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 border border-white/20
                                            hover:bg-white/20 transition-all group/item"
                >
                  <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
