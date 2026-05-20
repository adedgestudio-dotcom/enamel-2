"use client";

import { client } from "@/config/client";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);
  const fallbackDoctor =
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80";

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={imgError ? fallbackDoctor : client.images.exterior}
                alt={client.doctor}
                className="w-full h-[400px] sm:h-[500px] object-cover"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />

              {/* Floating badge - small and compact */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gold-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-bold text-navy-900 text-sm leading-tight">
                      Certified
                    </div>
                    <div className="text-xs text-navy-600">20+ Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements - hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400 rounded-3xl opacity-20 rotate-12 -z-10" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 bg-navy-900 rounded-3xl opacity-10 -rotate-12 -z-10" />
          </div>

          {/* Content side */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-50 border border-navy-100">
              <span className="w-2 h-2 rounded-full bg-navy-500" />
              <p className="text-xs sm:text-sm font-semibold text-navy-700 uppercase tracking-wider">
                Meet Your Doctor
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              {client.doctor}
            </h2>

            <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
              {client.about}
            </p>

            {/* Qualifications */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              {client.qualifications.map((qual, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-gold-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-navy-700 font-medium">
                    {qual}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-navy-900 text-white font-semibold rounded-xl sm:rounded-2xl
                         hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              >
                Schedule Consultation
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
