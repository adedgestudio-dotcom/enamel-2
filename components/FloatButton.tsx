"use client";
import { useReveal } from "./useReveal";
import { client } from "@/config/client";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatButton() {
  useReveal();
  return (
    <a
      href={`https://wa.me/${client.whatsapp}?text=Hello%20${encodeURIComponent(
        client.name
      )}%2C%20I%20need%20an%20appointment.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full
                  flex items-center justify-center
                  bg-gradient-to-br from-green-400 to-green-600
                  text-white shadow-xl animate-wa-pulse
                  hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
