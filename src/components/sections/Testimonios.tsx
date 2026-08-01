import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Dot } from "@/components/Decor";

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
  { icon: "/mockups/icon-rec-confianza.png", title: "Confianza", text: "Más de 200 clientes nos recomiendan." },
  { icon: "/mockups/icon-rec-cercania.png", title: "Cercanía", text: "Atención rápida, clara y personalizada." },
  { icon: "/mockups/icon-rec-compromiso.png", title: "Compromiso", text: "Nos involucramos en el crecimiento de tu negocio." },
  { icon: "/mockups/icon-rec-resultados.png", title: "Resultados", text: "Orden financiero y tranquilidad para tomar mejores decisiones." },
];

export default function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-section-gradient py-20">
      {/* Decoración 3D */}
      <Image src="/mockups/deco-sparkle-pink.png" alt="" aria-hidden width={128} height={128} className="pointer-events-none absolute left-[4%] top-16 hidden w-11 select-none sm:block lg:w-14" />
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="pointer-events-none absolute right-[5%] top-12 hidden w-12 select-none sm:block lg:w-16" />
      <Image src="/mockups/deco-star-pink.png" alt="" aria-hidden width={96} height={96} className="pointer-events-none absolute left-[7%] bottom-28 hidden w-8 select-none lg:block lg:w-9" />
      <Image src="/mockups/deco-heart-bubble.png" alt="" aria-hidden width={200} height={200} className="pointer-events-none absolute right-[3%] bottom-32 hidden w-16 select-none sm:block lg:w-24" />
      <Image src="/mockups/deco-star-purple.png" alt="" aria-hidden width={96} height={96} className="pointer-events-none absolute right-[9%] bottom-20 hidden w-8 select-none lg:block lg:w-9" />
      <Dot className="absolute left-[10%] top-28 hidden lg:block" color="var(--color-sky)" size={11} delay={1.2} />
      <Dot className="absolute right-[14%] bottom-14 hidden sm:block" color="var(--color-pink)" size={9} delay={2.4} />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center lg:px-8">
        <h2
          className="text-4xl font-extrabold text-balance sm:text-5xl"
          style={{
            fontFamily: "var(--font-poppins)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
          }}
        >
          <span className="block text-[#082C73]">Recomendación</span>{" "}
          <span className="mt-2 flex items-center justify-center gap-2">
            <span className="text-[#082C73]">de</span>{" "}
            <span className="relative text-[#ED68AC]">
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

        <div className="mt-14 grid items-stretch gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, avatar, quote }) => (
            <div key={name} className="relative h-full">
              <div className="relative flex h-full flex-col rounded-[28px] bg-white p-6 text-left shadow-[0_20px_45px_-15px_rgba(124,92,214,0.22)] ring-1 ring-[#ece7f5]">
                <div className="flex items-center gap-3">
                  <Image
                    src={avatar}
                    alt={name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover object-center ring-2 ring-white"
                  />
                  <div className="flex gap-0.5 text-pink">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-pink text-pink" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 flex-1 text-navy/75">&ldquo;{quote}&rdquo;</p>
                <p className="mt-4 font-heading font-bold text-navy">{name}</p>
                {/* Colita del globo (pegada al borde inferior) */}
                <svg
                  viewBox="0 0 40 30"
                  className="absolute -bottom-[18px] left-[16%] h-[26px] w-[36px]"
                  aria-hidden="true"
                >
                  <path
                    d="M5 0 L35 0 C27 3 23 13 21 25 C20.5 28.5 19.5 28.5 19 25 C17 13 13 3 5 0 Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5 sm:grid-cols-4 lg:p-8">
          {trustItems.map(({ icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Image
                src={icon}
                alt={title}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 object-contain"
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
