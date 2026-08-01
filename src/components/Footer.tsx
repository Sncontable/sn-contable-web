import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MessageCircle, CreditCard, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Image
              src="/brand/logo-trimmed.png"
              alt={`${site.name} - ${site.tagline}`}
              width={220}
              height={68}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-white/80">
              Nos encargamos de tu contabilidad para que tú te enfoques en hacer{" "}
              <span className="text-pink-light">crecer tu negocio.</span>
            </p>
            <p className="mt-4 flex items-center gap-2 text-primary-light">
              <Heart size={16} className="fill-pink-light text-pink-light" />
              Contabilidad cercana, simple y confiable.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-pink-light">
              Contáctanos
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-pink-light" />
                <div>
                  <a href={`tel:${site.phoneHref}`} className="font-semibold hover:underline">
                    {site.phone}
                  </a>
                  <p className="text-sm text-white/70">Llámanos o escríbenos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-pink-light" />
                <div>
                  <a href={`mailto:${site.email}`} className="font-semibold hover:underline">
                    {site.email}
                  </a>
                  <p className="text-sm text-white/70">Te responderemos a la brevedad</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold">Horario de atención</p>
                  <p className="text-sm text-white/70">{site.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-pink-light">Síguenos</h3>
            <div className="mt-4 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-5 py-4 text-center transition-colors hover:bg-white/20"
              >
                <FaInstagram size={22} />
                <span className="text-sm">{site.instagramHandle}</span>
              </a>
              <a
                href={whatsappLink("Hola, quisiera más información sobre sus servicios.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-5 py-4 text-center transition-colors hover:bg-white/20"
              >
                <MessageCircle size={22} />
                <span className="text-sm">Escríbenos</span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-white/80">
              <CreditCard size={20} className="text-sky" />
              <span>
                Formas de pago: <span className="font-semibold">{site.paymentMethods}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p className="flex items-center gap-2">
            <Heart size={14} className="fill-pink-light text-pink-light" />
            Gracias por confiar en nosotros.
          </p>
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <Link href="/#contacto" className="hover:text-white">
            Contáctanos
          </Link>
        </div>
      </div>
    </footer>
  );
}
