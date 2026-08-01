import Image from "next/image";
import { ArrowRight, Lightbulb } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsappIcon from "@/components/WhatsappIcon";
import { Dot } from "@/components/Decor";

const resources = [
  {
    icon: "/mockups/rec-f29.png",
    tag: "Impuestos",
    tagClass: "bg-primary-light/50 text-primary-dark",
    title: "Recuerda pagar tu F29",
    text: "Información clave sobre plazos, formulario 29 y cómo evitar multas e intereses.",
  },
  {
    icon: "/mockups/rec-piechart.png",
    tag: "Gestión",
    tagClass: "bg-sky-light text-sky-700",
    title: "3 señales de que tu negocio necesita contabilidad",
    text: "Descubre cómo una buena contabilidad puede ayudarte a tomar mejores decisiones.",
  },
  {
    icon: "/mockups/rec-shop.png",
    tag: "Emprendimiento",
    tagClass: "bg-pink-light/50 text-pink-dark",
    title: "Formaliza tu negocio",
    text: "Te contamos los pasos, beneficios y documentos que necesitas para formalizar tu emprendimiento.",
  },
  {
    icon: "/mockups/rec-calendar.png",
    tag: "Calendario",
    tagClass: "bg-sky-light text-sky-700",
    title: "Calendario Tributario 2026",
    text: "Fechas importantes y obligaciones mensuales para mantener tu negocio al día.",
  },
];

export default function Recursos() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20">
      {/* Íconos 3D flotando */}
      <Image src="/mockups/rec-cal-bell.png" alt="" aria-hidden width={306} height={241} className="animate-float pointer-events-none absolute left-[2%] top-20 z-0 hidden w-24 select-none lg:block xl:w-32" style={{ animationDelay: "0.3s" }} />
      <Image src="/mockups/rec-envelope-alert.png" alt="" aria-hidden width={248} height={220} className="animate-float pointer-events-none absolute right-[2%] top-24 z-0 hidden w-20 select-none lg:block xl:w-24" style={{ animationDelay: "1.4s" }} />
      {/* Estrellitas con movimiento */}
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute left-[22%] top-16 z-0 hidden w-8 select-none sm:block" style={{ animationDelay: "0.4s" }} />
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute right-[24%] top-14 z-0 hidden w-9 select-none sm:block" style={{ animationDelay: "1.2s" }} />
      <Image src="/mockups/deco-star-pink.png" alt="" aria-hidden width={96} height={96} className="animate-twinkle pointer-events-none absolute right-[2%] bottom-24 z-0 hidden w-8 select-none lg:block" style={{ animationDelay: "0.8s" }} />
      <Dot className="absolute left-[7%] top-16 hidden sm:block" color="var(--color-primary)" size={11} delay={0.6} />
      <Dot className="absolute right-[6%] bottom-1/3 hidden lg:block" color="var(--color-pink)" size={10} delay={1.7} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-pink-light/40 px-4 py-1.5 text-sm font-heading font-bold uppercase tracking-wide text-pink-dark">
            Recursos tributarios
          </span>
          <h2
            className="mt-4 text-4xl font-extrabold text-balance sm:text-5xl"
            style={{
              fontFamily: "var(--font-poppins)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            <span className="block text-navy">Aprende, infórmate y crece</span>{" "}
            <span className="relative inline-block text-pink-dark">
              con tu negocio
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-1 left-0 h-3 w-full text-pink"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M4 9C46 3 150 3 216 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-navy/70">
            Consejos, fechas importantes y recursos prácticos para que estés siempre al
            día con tus obligaciones tributarias.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(({ icon, tag, tagClass, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-[28px] bg-white p-6 shadow-lg shadow-primary/10 ring-1 ring-black/5"
            >
              <Image
                src={icon}
                alt={title}
                width={96}
                height={96}
                className="h-20 w-20 object-contain"
              />
              <span className={`mt-4 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tagClass}`}>
                {tag}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy/65">{text}</p>
              <a
                href={whatsappLink(`Hola, quiero más información sobre "${title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1 font-heading font-semibold text-pink-dark hover:underline"
              >
                Quiero más información
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[28px] bg-white p-6 shadow-lg shadow-primary/10 ring-1 ring-black/5 sm:flex-row">
          <p className="flex items-center gap-3 font-heading font-semibold text-navy">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F9B8DD] to-[#EE7CBC] text-white shadow-md shadow-pink/25">
              <Lightbulb size={20} />
            </span>
            ¿Tienes dudas sobre tus obligaciones? Nuestro equipo está aquí para ayudarte.
          </p>
          <a
            href={whatsappLink("Hola, tengo dudas sobre mis obligaciones tributarias.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-navy-light"
          >
            <WhatsappIcon size={18} />
            Consulta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
