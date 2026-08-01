import { Heart } from "lucide-react";
import { site } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w, i) => i === 0 || i === 1)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Somos() {
  return (
    <section id="somos" className="scroll-mt-20 bg-hero-gradient py-20">
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
          {site.founders.map(({ name, role, subrole }, i) => (
            <div
              key={name}
              className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-black/5"
            >
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full font-heading text-3xl font-bold text-white ring-4 ring-white ${
                  i === 0 ? "bg-primary" : "bg-pink"
                }`}
              >
                {initials(name)}
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
