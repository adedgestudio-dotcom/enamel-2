"use client";

import { client } from "@/config/client";

export default function Booking() {
  return (
    <section id="booking" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-50 border border-navy-100 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-navy-500" />
                <p className="text-xs sm:text-sm font-semibold text-navy-700 uppercase tracking-wider">
                  Get In Touch
                </p>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 sm:mb-4">
                Book Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                  Appointment
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-navy-600">
                Schedule your visit today and take the first step towards a
                healthier, brighter smile.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {/* Phone */}
              <a
                href={`tel:${client.phone}`}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-navy-50 to-white rounded-xl sm:rounded-2xl border border-navy-100
                         hover:border-navy-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-900 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-navy-500 mb-1">
                    Call Us
                  </div>
                  <div className="font-bold text-navy-900 text-base sm:text-lg">
                    {client.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${client.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-green-50 to-white rounded-xl sm:rounded-2xl border border-green-100
                         hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-green-600 mb-1">
                    WhatsApp
                  </div>
                  <div className="font-bold text-navy-900 text-base sm:text-lg">
                    Chat with us
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-gold-50 to-white rounded-xl sm:rounded-2xl border border-gold-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gold-600 mb-1">
                    Visit Us
                  </div>
                  <div className="font-bold text-navy-900 text-sm sm:text-base">
                    {client.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-navy-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Opening Hours
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-gold-400">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-gold-400">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src={client.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enamel -2 Dental Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
