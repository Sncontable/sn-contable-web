import Image from "next/image";
import { Heart, Users, MessageCircle, HeartHandshake, TrendingUp } from "lucide-react";

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
    <section className="bg-section-gradient py-20">
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
