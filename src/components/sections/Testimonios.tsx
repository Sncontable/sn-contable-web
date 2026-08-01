import Image from "next/image";
import { Heart, Star, Users, MessageCircle, HeartHandshake, TrendingUp } from "lucide-react";
import { Sparkle, Dot } from "@/components/Decor";

const testimonials = [
  {
    name: "coy_plussize",
    avatar: "/testimonials/coy-plussize.png",
    quote:
      "La mejor!!! La verdad es que he descansado en usted, era tremendo no tener respuestas con otros contadores o no sentir la confianza 100% gracias por todo!!",
  },
  {
    name: "insignia.spa",
    avatar: "/testimonials/insignia-spa.png",
    quote:
      "Sin duda el mejor servicio que pude haber encontrado muy responsable y muy transparente su trabajo ademas destacar la buena disposición siempre 💗✨",
  },
  {
    name: "grido.hualpen",
    avatar: "/testimonials/grido-hualpen.png",
    quote:
      "Muy buen servicio y sobre todo confiable que es lo que buscamos hoy en día, siempre atenta Camila a cualquier consulta y asesoramiento muchas gracias y felicidades que sean muchos más 💗",
  },
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
        <h2 className="font-heading text-4xl font-extrabold sm:text-5xl">
          <span className="block text-navy">Recomendación</span>
          <span className="mt-2 flex items-center justify-center gap-2">
            <span className="text-navy">de</span>
            <span className="relative text-pink-dark">
              Clientes
              <svg
                viewBox="0 0 120 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-pink"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C20 2 40 2 60 6C80 10 100 10 118 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <Heart size={30} className="fill-pink text-pink" />
          </span>
        </h2>
        <p className="mt-5 text-navy/70">
          La <span className="font-semibold text-pink-dark">confianza</span> de nuestros
          clientes es nuestro mayor <span className="font-semibold text-pink-dark">orgullo</span>.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, avatar, quote }) => (
            <div key={name} className="relative">
              <div className="flex flex-col rounded-3xl bg-white p-6 text-left shadow-md shadow-primary/10 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <Image
                    src={avatar}
                    alt={name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white"
                  />
                  <div className="flex gap-0.5 text-pink">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-pink text-pink" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 flex-1 text-navy/75">&ldquo;{quote}&rdquo;</p>
                <p className="mt-4 font-heading font-bold text-navy">{name}</p>
              </div>
              <span
                className="absolute -bottom-2 left-8 h-5 w-5 rotate-45 rounded-sm bg-white ring-1 ring-black/5"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
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
