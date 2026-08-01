import { Heart, Star, Users, MessageCircle, HeartHandshake, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Carla",
    quote:
      "Siempre están disponibles para resolver mis dudas y me entregan todo al día. Me dan mucha tranquilidad saber que mi negocio está en buenas manos.",
  },
  {
    name: "Felipe",
    quote:
      "Excelentes profesionales, muy cercanos y comprometidos. Gracias a su asesoría hemos podido crecer y ordenarnos financieramente.",
  },
  {
    name: "Valentina",
    quote:
      "Me encanta su atención personalizada y la rapidez con la que responden. 100% recomendados, se nota que realmente les importa.",
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, quote }) => (
            <div
              key={name}
              className="flex flex-col rounded-3xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 font-heading font-bold text-primary-dark">
                  {name[0]}
                </span>
                <div className="flex gap-0.5 text-pink">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-pink text-pink" />
                  ))}
                </div>
              </div>
              <p className="mt-4 flex-1 text-navy/75">&ldquo;{quote}&rdquo;</p>
              <p className="mt-4 font-heading font-bold text-navy">{name}</p>
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
