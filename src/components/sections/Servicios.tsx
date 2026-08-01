import Image from "next/image";
import { Check } from "lucide-react";
import WhatsappIcon from "@/components/WhatsappIcon";
import { whatsappLink } from "@/lib/site";
import { Sparkle, Dot } from "@/components/Decor";

const plans = [
  {
    icon: "/mockups/icon-plan-basico.png",
    title: "Plan Básico",
    tagline: "Perfecto para emprendedores que están comenzando.",
    price: "19.990",
    period: "/mes",
    features: [
      "Declaración de Impuestos Mensual F29",
      "Recordatorios de pagos",
      "Revisión de ventas, compras y honorarios",
      "Envío de certificados tributarios",
      "Peticiones administrativas",
      "Modificaciones de actividades o domicilio",
      "Asesoría personalizada vía WhatsApp",
    ],
  },
  {
    icon: "/mockups/icon-plan-intermedio.png",
    title: "Plan Intermedio",
    tagline: "Ideal para negocios en crecimiento.",
    price: "34.990",
    period: "/mes",
    features: [
      "Declaración de Impuestos Mensual F29",
      "Recordatorio de pago",
      "Balance anual",
      "Revisión de ventas, compras y honorarios",
      "Envío de certificados tributarios",
      "Peticiones administrativas",
      "Modificaciones de actividades o domicilio",
      "Asesoría personalizada vía WhatsApp",
    ],
  },
  {
    icon: "/mockups/icon-plan-remuneraciones.png",
    title: "Plan Remuneraciones",
    tagline: "Todo lo que necesitas para manejar a tu equipo.",
    price: "9.990",
    period: "/mes por trabajador",
    note: "A mayor cantidad de trabajadores, mayor descuento.",
    features: [
      "Cálculo de liquidación de sueldo",
      "Carga de Previred",
      "Recordatorio de pago de imposiciones",
      "Tramitación de licencias médicas",
      "Confección de anexos de contratos y comprobantes de vacaciones",
      "Asesoría personalizada vía WhatsApp",
    ],
  },
  {
    icon: "/mockups/icon-plan-formalizate.png",
    title: "Plan Formalízate",
    tagline: "Especial para emprendedores que quieran formalizarse.",
    price: "49.990",
    period: "Pago único",
    features: [
      "Creación de empresa",
      "Asesoría sobre el tipo de empresa y régimen tributario",
      "Inicio de actividades",
      "E-RUT",
      "Asesoría para inscripción de boletas y facturación electrónica",
      "Asesoría para abrir cuenta bancaria de la empresa",
      "1 mes gratis del Plan Básico de contabilidad mensual",
    ],
  },
];

const trustItems = [
  { icon: "/mockups/icon-cercanos.png", title: "Cercanía y confianza", text: "Te acompañamos en cada paso de tu negocio." },
  { icon: "/mockups/icon-confiables.png", title: "100% transparente", text: "Precios claros y sin costos ocultos." },
  { icon: "/mockups/icon-a-tiempo.png", title: "Ahorra tiempo", text: "Nos encargamos de lo contable por ti." },
  { icon: "/mockups/icon-a-medida.png", title: "Hecho a tu medida", text: "Planes flexibles según las necesidades de tu negocio." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-section-gradient scroll-mt-20 py-20">
      <Sparkle className="absolute left-[4%] top-16 hidden lg:block" color="var(--color-pink-light)" delay={0.5} />
      <Sparkle className="absolute right-[5%] top-40 hidden sm:block" size={18} color="var(--color-primary-light)" delay={1.8} />
      <Dot className="absolute right-[3%] top-12 hidden lg:block" color="var(--color-sky)" size={12} delay={1} />
      <Dot className="absolute left-[6%] bottom-16 hidden sm:block" color="var(--color-pink)" size={10} delay={2.2} />

      {/* Íconos 3D flotando a los costados del encabezado */}
      <Image src="/mockups/svc-calc-coins.png" alt="" aria-hidden width={386} height={291} className="animate-float pointer-events-none absolute left-[1%] top-24 z-0 hidden w-28 select-none lg:block xl:w-36" style={{ animationDelay: "0.4s" }} />
      <Image src="/mockups/svc-clipboard-check.png" alt="" aria-hidden width={271} height={337} className="animate-float pointer-events-none absolute right-[1%] top-24 z-0 hidden w-24 select-none lg:block xl:w-32" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 font-heading font-semibold text-pink-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            Nuestros servicios y planes
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold text-balance sm:text-4xl"
            style={{
              fontFamily: "var(--font-poppins)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            <span className="text-[#082C73]">Contabilidad a tu medida, </span>
            <span className="text-[#ED68AC]">para que tú te enfoques en crecer.</span>
          </h2>
          <p className="mt-4 text-navy/70">
            Planes flexibles, claros y sin letra chica. Tú eliges, nosotros nos
            encargamos del resto.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary-dark">
            Todos nuestros planes están exentos de IVA.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ icon, title, tagline, price, period, note, features }) => (
            <div
              key={title}
              className="reveal hover-zoom flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <Image
                src={icon}
                alt={title}
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h3>
              <p className="mt-1 text-sm text-navy/60">{tagline}</p>
              <p className="mt-3 font-heading text-3xl font-extrabold text-pink-dark">
                ${price}
                <span className="ml-1 text-sm font-semibold text-navy/50">{period}</span>
              </p>
              {note && <p className="mt-1 text-xs text-navy/50">{note}</p>}

              <ul className="mt-5 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy/75">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary-dark" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hola, me interesa cotizar el plan "${title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 font-heading font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <WhatsappIcon size={18} />
                Cotiza por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Image
                src={icon}
                alt={title}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 object-contain"
              />
              <div>
                <p className="font-heading font-bold text-navy">{title}</p>
                <p className="text-sm text-navy/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
