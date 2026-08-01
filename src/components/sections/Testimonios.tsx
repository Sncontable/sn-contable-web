import Image from "next/image";
import { Heart, Users, MessageCircle, HeartHandshake, TrendingUp } from "lucide-react";
import { Sparkle, Dot } from "@/components/Decor";

const testimonials = [
  { name: "klaudiamerica", image: "/testimonials/klaudiamerica.jpg" },
  { name: "Claudia Castro", image: "/testimonials/claudia-castro.jpg" },
  { name: "insignia.spa", image: "/testimonials/insignia-spa.jpg" },
];

const trustItems = [
  { icon: Users, title: "Confianza", text: "Más de 200 clientes nos recomiendan." },
  { icon: MessageCircle, title: "Cercanía", text: "Atención rápida, clara y personalizada." },
  { icon: HeartHandshake, title: "Compromiso", text: "Nos involucramos en el crecimiento de tu negocio." },
  { icon: TrendingUp, title: "Resultados", text: "Orden financiero y tranquilidad para tomar mejores decisiones." },
];

export default function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-section-gradient py-20">
      <Sparkle className="absolute left-[5%] top-14 hidden sm:block" color="var(--color-pink-light)" delay={0.4} />
      <Sparkle className="absolute right-[6%] top-28 hidden lg:block" size={18} color="var(--color-primary-light)" delay={1.9} />
      <Dot className="absolute left-[8%] bottom-24 hidden lg:block" color="var(--color-sky)" size={12} delay={1.2} />
      <Dot className="absolute right-[4%] bottom-12 hidden sm:block" color="var(--color-pink)" size={10} delay={2.4} />

      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <h2 className="flex flex-wrap items-center justify-center gap-3 font-heading text-3xl font-extrabold sm:text-4xl">
          <span className="text-navy">Recomendación de</span>
          <span className="text-pink-dark">Clientes</span>
          <Heart size={30} className="fill-pink text-pink" />
        </h2>
        <p className="mt-4 text-navy/70">
          La <span className="font-semibold text-pink-dark">confianza</span> de nuestros
          clientes es nuestro mayor <span className="font-semibold text-pink-dark">orgullo</span>.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, image }) => (
            <div
              key={name}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <Image
                src={image}
                alt={`Recomendación de ${name} sobre ${"SN Contable"}`}
                width={720}
                height={960}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light/50 text-primary-dark">
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
