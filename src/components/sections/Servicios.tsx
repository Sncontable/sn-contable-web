import { Laptop, ClipboardList, Home as HomeIcon, CalendarCheck, Check, MessageCircle, HeartHandshake, ShieldCheck, Clock, Ruler } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const plans = [
  {
    icon: Laptop,
    title: "Contabilidad Mensual",
    price: "19.990",
    period: "/mes + IVA",
    features: [
      "Registro y clasificación de operaciones",
      "Libro de compras y ventas",
      "Conciliaciones bancarias",
      "Estados financieros mensuales",
      "Soporte contable permanente",
    ],
  },
  {
    icon: ClipboardList,
    title: "Remuneraciones",
    price: "14.990",
    period: "/mes + IVA",
    features: [
      "Cálculo de sueldos e imposiciones",
      "Liquidaciones de sueldo",
      "Libro de remuneraciones",
      "Previred y cumplimiento normativo",
      "Asesoría laboral básica",
    ],
  },
  {
    icon: HomeIcon,
    title: "Formalización de Empresas",
    price: "69.990",
    period: "Pago único",
    features: [
      "Asesoría para elegir tu mejor opción",
      "Constitución de la empresa",
      "Obtención de RUT e iniciación SII",
      "Trámites y documentos incluidos",
      "Acompañamiento personalizado",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Asesoría Tributaria",
    price: "29.990",
    period: "/hora + IVA",
    features: [
      "Revisión y planificación tributaria",
      "Declaraciones de impuestos",
      "Optimización de carga tributaria",
      "Representación ante el SII",
      "Asesoría personalizada",
    ],
  },
];

const trustItems = [
  { icon: HeartHandshake, title: "Cercanía y confianza", text: "Te acompañamos en cada paso de tu negocio." },
  { icon: ShieldCheck, title: "100% transparente", text: "Precios claros y sin costos ocultos." },
  { icon: Clock, title: "Ahorra tiempo", text: "Nos encargamos de lo contable por ti." },
  { icon: Ruler, title: "Hecho a tu medida", text: "Planes flexibles según las necesidades de tu negocio." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-section-gradient scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 font-heading font-semibold text-pink-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            Nuestros servicios y planes
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
            <span className="text-navy">Contabilidad a tu medida, </span>
            <span className="text-pink-dark">para que tú te enfoques en crecer.</span>
          </h2>
          <p className="mt-4 text-navy/70">
            Planes flexibles, claros y sin letra chica. Tú eliges, nosotros nos
            encargamos del resto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ icon: Icon, title, price, period, features }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-dark">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm text-navy/60">Desde</p>
              <p className="font-heading text-3xl font-extrabold text-pink-dark">
                ${price}
                <span className="ml-1 text-sm font-semibold text-navy/50">{period}</span>
              </p>

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
                <MessageCircle size={18} />
                Cotiza por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-light/50 text-pink-dark">
                <Icon size={20} />
              </span>
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
