import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={whatsappLink("Hola, quisiera más información sobre sus servicios.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${site.phone}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-heading font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle size={22} className="fill-white text-[#25D366]" />
      <span className="hidden sm:inline">¡Contáctame!</span>
    </a>
  );
}
