import Image from "next/image";
import { Heart } from "lucide-react";
import { site } from "@/lib/site";
import { Dot } from "@/components/Decor";

export default function Somos() {
  return (
    <section id="somos" className="relative overflow-hidden scroll-mt-20 bg-hero-gradient py-20">
      {/* Íconos 3D flotando en las esquinas */}
      <Image src="/mockups/somos-calculator.png" alt="" aria-hidden width={402} height={490} className="animate-float pointer-events-none absolute left-[2%] top-24 z-0 hidden w-20 select-none lg:block xl:w-28" style={{ animationDelay: "0.2s" }} />
      <Image src="/mockups/somos-document.png" alt="" aria-hidden width={402} height={520} className="animate-float pointer-events-none absolute right-[2%] top-24 z-0 hidden w-20 select-none lg:block xl:w-24" style={{ animationDelay: "1.3s" }} />
      <Image src="/mockups/esc-plant.png" alt="" aria-hidden width={300} height={420} className="animate-float pointer-events-none absolute left-[2%] bottom-10 z-0 hidden w-20 select-none lg:block xl:w-24" style={{ animationDelay: "2s" }} />
      <Image src="/mockups/somos-coins.png" alt="" aria-hidden width={410} height={402} className="animate-float pointer-events-none absolute right-[2%] bottom-10 z-0 hidden w-20 select-none lg:block xl:w-28" style={{ animationDelay: "0.9s" }} />

      {/* Estrellitas con movimiento */}
      <Image src="/mockups/deco-sparkle-pink.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute left-[19%] top-16 z-0 hidden w-8 select-none sm:block" style={{ animationDelay: "0.3s" }} />
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute right-[22%] top-14 z-0 hidden w-9 select-none sm:block" style={{ animationDelay: "1.1s" }} />
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute left-[13%] top-1/2 z-0 hidden w-7 select-none lg:block" style={{ animationDelay: "1.9s" }} />
      <Image src="/mockups/deco-sparkle-pink.png" alt="" aria-hidden width={128} height={128} className="animate-twinkle pointer-events-none absolute right-[12%] top-[46%] z-0 hidden w-8 select-none lg:block" style={{ animationDelay: "0.7s" }} />
      <Dot className="absolute left-[28%] top-10 hidden sm:block" color="var(--color-pink)" size={10} delay={0.6} />
      <Dot className="absolute right-[30%] top-24 hidden lg:block" color="var(--color-primary)" size={9} delay={1.5} />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center lg:px-8">
        <h2
          className="reveal text-4xl font-extrabold text-balance text-navy sm:text-5xl"
          style={{
            fontFamily: "var(--font-poppins)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
          }}
        >
          Quiénes Somos
        </h2>
        <svg
          viewBox="0 0 240 16"
          className="mx-auto mt-2 h-3.5 w-56 text-pink"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M4 11C50 4 120 3 168 6C196 7.8 220 9 236 6"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-navy/70">
          En {site.name} creemos que una buena contabilidad es clave para el
          crecimiento de tu negocio. Por eso, ofrecemos un servicio cercano,
          personalizado y transparente, adaptado a las necesidades de cada
          emprendedor y empresa.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {site.founders.map(({ name, role, subrole, photo }) => (
            <div
              key={name}
              className="reveal hover-zoom rounded-[28px] bg-white/70 p-8 text-center shadow-lg shadow-primary/10 ring-1 ring-white/60"
            >
              <Image
                src={photo}
                alt={name}
                width={160}
                height={160}
                className="mx-auto h-32 w-32 rounded-full object-cover object-center shadow-lg shadow-primary/15 ring-4 ring-white sm:h-36 sm:w-36"
              />

              <div className="mt-4 flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-pink" />
                <span className="h-2 w-2 rounded-full bg-pink-light" />
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">{name}</h3>
              <p className="mt-1 text-navy/70">{role}</p>
              {subrole && <p className="text-sm text-navy/50">{subrole}</p>}

              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-navy/10" />
                <Heart size={18} className="fill-pink text-pink" />
                <span className="h-px w-16 bg-navy/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
