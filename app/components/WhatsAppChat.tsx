import Link from "next/link";
import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/4915906419166?text=Hallo!%20Ich%20interessiere%20mich%20für%20ein%20kostenloses%20Probetraining%20bei%20der%20Next%20Level%20Academy.";

export default function WhatsAppChat() {
  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Kontakt"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_12px_35px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-600 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-slate-950/90 px-3 py-2 text-sm font-medium text-slate-100 shadow-lg backdrop-blur md:block">
          Fragen? Schreiben Sie uns auf WhatsApp!
        </span>
      </Link>
    </div>
  );
}
