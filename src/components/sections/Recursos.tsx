import { FileText, PieChart, Store, CalendarClock, ArrowRight, Lightbulb, MessageCircle, Mail } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Sparkle, Dot, FloatingBadge } from "@/components/Decor";

const resources = [
  {
    icon: FileText,
    tag: "Impuestos",
    tagClass: "bg-primary-light/50 text-primary-dark",
    title: "Recuerda pagar tu F29",
    text: "Información clave sobre plazos, formulario 29 y cómo evitar multas e intereses.",
  },
  {
    icon: PieChart,
    tag: "Gestión",
    tagClass: "bg-sky-light text-sky-700",
    title: "3 señales de que tu negocio necesita contabilidad",
    text: "Descubre cómo una buena contabilidad puede ayudarte a tomar mejores decisiones.",
  },
  {
    icon: Store,
    tag: "Emprendimiento",
    tagClass: "bg-pink-light/50 text-pink-dark",
    title: "Formaliza tu negocio",
    text: "Te contamos los pasos, beneficios y documentos que necesitas para formalizar tu emprendimiento.",
  },
  {
    icon: CalendarClock,
    tag: "Calendario",
    tagClass: "bg-sky-light text-sky-700",
    title: "Calendario Tributario 2026",
    text: "Fechas importantes y obligaciones mensuales para mantener tu negocio al día.",
  },
];

export default function Recursos() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20">
      <FloatingBadge
        className="right-[5%] top-28 hidden text-primary-dark sm:flex"
        color="var(--color-primary-light)"
        delay={0.7}
      >
        <Mail size={24} />
      </FloatingBadge>
      <Sparkle className="absolute left-[5%] top-24 hidden lg:block" color="var(--color-pink-light)" delay={1.5} />
      <Dot className="absolute left-[7%] bottom-16 hidden sm:block" color="var(--color-sky)" size={12} delay={2.1} />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-pink-light/40 px-4 py-1.5 text-sm font-heading font-bold text-pink-dark">
            Recursos tributarios
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
            <span className="text-navy">Aprende, infórmate y crece </span>
            <span className="text-pink-dark">con tu negocio</span>
          </h2>
          <p className="mt-4 text-navy/70">
            Consejos, fechas importantes y recursos prácticos para que estés siempre al
            día con tus obligaciones tributarias.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(({ icon: Icon, tag, tagClass, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <Icon size={26} />
              </span>
              <span className={`mt-4 w-fit rounded-full px-3 py-1 text-xs font-bold ${tagClass}`}>
                {tag}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy/65">{text}</p>
              <a
                href={whatsappLink(`Hola, tengo una consulta sobre "${title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1 font-heading font-semibold text-pink-dark hover:underline"
              >
                Leer más
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:flex-row">
          <p className="flex items-center gap-3 font-heading font-semibold text-navy">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-light/50 text-pink-dark">
              <Lightbulb size={20} />
            </span>
            ¿Tienes dudas sobre tus obligaciones? Nuestro equipo está aquí para ayudarte.
          </p>
          <a
            href={whatsappLink("Hola, tengo dudas sobre mis obligaciones tributarias.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading font-semibold text-white hover:bg-navy-light"
          >
            <MessageCircle size={18} />
            Consulta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
