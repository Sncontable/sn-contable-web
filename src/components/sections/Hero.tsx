import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Sparkle, Dot } from "@/components/Decor";

const trustItems = [
  {
    icon: "/mockups/icon-cercanos.png",
    title: "Cercanos",
    text: "Te acompañamos en cada paso de tu negocio.",
  },
  {
    icon: "/mockups/icon-confiables.png",
    title: "Confiables",
    text: "Información segura y asesoría profesional siempre.",
  },
  {
    icon: "/mockups/icon-a-tiempo.png",
    title: "A tiempo",
    text: "Cumplimos tus obligaciones sin estrés ni atrasos.",
  },
  {
    icon: "/mockups/icon-a-medida.png",
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
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              <Heart size={16} className="fill-pink text-pink" />
              Contabilidad clara, cercana y confiable
            </span>

            <h1
              className="mt-6 text-4xl font-extrabold text-balance sm:text-5xl lg:text-[3.4rem]"
              style={{
                fontFamily: "var(--font-poppins)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              <span className="block text-[#082C73]">Contabilidad,</span>
              <span className="block text-[#ED68AC]">remuneraciones y</span>
              <span className="block text-[#082C73]">asesoría tributaria</span>
              <span className="block text-[#ED68AC]">a tu medida</span>
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

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Image
              src="/mockups/hero-illustration.png"
              alt={`Asesora de ${site.name} trabajando en su notebook`}
              width={1317}
              height={817}
              priority
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Image
                src={icon}
                alt={title}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 object-contain"
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
