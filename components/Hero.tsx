"use client";

import { client } from "@/config/client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-22 sm:pt-26 lg:pt-28"
    >
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-navy-50 to-gold-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-gold-100 to-navy-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 py-12 sm:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-navy-50 to-gold-50 border border-navy-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-navy-700">
                Available for appointments
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-tight">
              Your Smile,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                Our Priority
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-navy-600 leading-relaxed max-w-xl">
              Experience world-class dental care with cutting-edge technology
              and compassionate service in the heart of Chennai.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#booking"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-navy-900 text-white font-semibold rounded-xl sm:rounded-2xl
                         hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl
                         hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Book Appointment
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
              <a
                href={`https://wa.me/${client.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-navy-900 font-semibold rounded-xl sm:rounded-2xl
                         border-2 border-navy-200 hover:border-navy-900 transition-all duration-300
                         flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {[
                { num: "20+", label: "Years" },
                { num: "10K+", label: "Patients" },
                { num: "50+", label: "Services" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-navy-900">
                    {stat.num}
                  </div>
                  <div className="text-xs sm:text-sm text-navy-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={client.images.doctor}
                alt="Dental Treatment"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
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
                  <div>
                    <div className="font-bold text-navy-900 text-sm sm:text-base">
                      100% Safe & Hygienic
                    </div>
                    <div className="text-xs sm:text-sm text-navy-600">
                      Advanced sterilization
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements - hidden on mobile */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-gold-400 rounded-3xl opacity-20 rotate-12" />
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-navy-900 rounded-3xl opacity-10 -rotate-12" />
          </div>
        </div>
      </div>

      {/* Scroll indicator - visible on all screens */}
      <div
        className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-navy-400 text-xs sm:text-sm font-medium">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-navy-400 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
