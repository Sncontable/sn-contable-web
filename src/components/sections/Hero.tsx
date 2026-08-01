import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Clock, Smile, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Sparkle, Dot } from "@/components/Decor";

const trustItems = [
  {
    icon: Heart,
    iconClass: "bg-pink-light/50 text-pink-dark",
    title: "Cercanos",
    text: "Te acompañamos en cada paso de tu negocio.",
  },
  {
    icon: ShieldCheck,
    iconClass: "bg-primary-light/50 text-primary-dark",
    title: "Confiables",
    text: "Información segura y asesoría profesional siempre.",
  },
  {
    icon: Clock,
    iconClass: "bg-sky-light text-sky-700",
    title: "A tiempo",
    text: "Cumplimos tus obligaciones sin estrés ni atrasos.",
  },
  {
    icon: Smile,
    iconClass: "bg-pink-light/50 text-pink-dark",
    title: "A tu medida",
    text: "Planes flexibles según las necesidades de tu negocio.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <Sparkle className="absolute left-[6%] top-24 hidden lg:block" color="var(--color-primary-light)" delay={0.2} />
      <Sparkle className="absolute right-[8%] top-16 hidden sm:block" color="var(--color-pink-light)" size={20} delay={1.4} />
      <Dot className="absolute left-[3%] top-1/2 hidden lg:block" color="var(--color-sky)" size={16} delay={0.8} />
      <Dot className="absolute right-[4%] bottom-24 hidden sm:block" color="var(--color-pink)" size={10} delay={2} />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              <Heart size={16} className="fill-pink text-pink" />
              Contabilidad clara, cercana y confiable
            </span>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              <span className="text-navy">Contabilidad, </span>
              <span className="text-pink-dark">remuneraciones y </span>
              <span className="text-navy">asesoría tributaria </span>
              <span className="text-pink-dark">a tu medida</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-navy/70">
              Nos encargamos de tus números para que tú te enfoques en hacer crecer tu
              negocio.
            </p>

            <Link
              href="#servicios"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3.5 font-heading text-lg font-semibold text-white shadow-lg shadow-pink/30 transition-transform hover:scale-[1.03]"
            >
              Conoce nuestros planes
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/mockups/hero-illustration.png"
              alt={`Asesora de ${site.name} trabajando en su notebook`}
              width={1178}
              height={893}
              priority
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon: Icon, iconClass, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
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
