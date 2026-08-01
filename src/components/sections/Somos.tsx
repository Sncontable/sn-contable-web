import Image from "next/image";
import { Heart, Calculator, FileCheck, Sprout } from "lucide-react";
import { site } from "@/lib/site";
import { Sparkle, Dot, FloatingBadge } from "@/components/Decor";

export default function Somos() {
  return (
    <section id="somos" className="relative overflow-hidden scroll-mt-20 bg-hero-gradient py-20">
      <FloatingBadge
        className="left-[4%] top-28 hidden text-primary-dark lg:flex"
        color="var(--color-primary-light)"
        delay={0.3}
      >
        <Calculator size={24} />
      </FloatingBadge>
      <FloatingBadge
        className="right-[5%] top-32 hidden text-pink-dark sm:flex"
        color="var(--color-pink-light)"
        delay={1.6}
      >
        <FileCheck size={24} />
      </FloatingBadge>
      <FloatingBadge
        className="bottom-16 left-[6%] hidden text-sky-700 sm:flex"
        color="var(--color-sky-light)"
        delay={2.4}
      >
        <Sprout size={22} />
      </FloatingBadge>
      <Sparkle className="absolute right-[8%] bottom-20 hidden lg:block" color="var(--color-primary-light)" delay={1} />
      <Dot className="absolute left-[10%] top-8 hidden sm:block" color="var(--color-pink)" size={10} delay={0.6} />

      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
          Quiénes Somos
        </h2>
        <div className="mx-auto mt-3 h-1.5 w-28 rounded-full bg-pink" />

        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/70">
          En {site.name} creemos que una buena contabilidad es clave para el
          crecimiento de tu negocio. Por eso, ofrecemos un servicio cercano,
          personalizado y transparente, adaptado a las necesidades de cada
          emprendedor y empresa.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {site.founders.map(({ name, role, subrole, photo }, i) => (
            <div
              key={name}
              className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-black/5"
            >
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full ring-4 ring-white ${
                  i === 0 ? "bg-primary" : "bg-pink"
                }`}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">{name}</h3>
              <p className="mt-1 text-navy/70">{role}</p>
              <p className="text-sm text-navy/50">{subrole}</p>
              <Heart size={18} className="mx-auto mt-4 fill-pink text-pink" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
