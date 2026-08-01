"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, User, Lock, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { site, whatsappLink } from "@/lib/site";
import WhatsappIcon from "@/components/WhatsappIcon";
import { Dot } from "@/components/Decor";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [consulta, setConsulta] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = [
      `Hola, soy ${nombre || "un/a interesado/a"}.`,
      correo ? `Mi correo es ${correo}.` : null,
      consulta ? `Consulta: ${consulta}` : null,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden scroll-mt-20 bg-section-gradient py-20"
    >
      {/* Decoración 3D */}
      <Image src="/mockups/esc-barchart.png" alt="" aria-hidden width={440} height={360} className="pointer-events-none absolute left-[1%] bottom-6 z-0 hidden w-24 select-none lg:block xl:w-28" />
      <Image src="/mockups/esc-plant.png" alt="" aria-hidden width={300} height={420} className="pointer-events-none absolute right-[1%] bottom-4 z-0 hidden w-24 select-none lg:block xl:w-28" />
      <Image src="/mockups/deco-sparkle-purple.png" alt="" aria-hidden width={128} height={128} className="pointer-events-none absolute right-[7%] top-10 z-0 hidden w-10 select-none sm:block" />
      <Image src="/mockups/deco-sparkle-pink.png" alt="" aria-hidden width={128} height={128} className="pointer-events-none absolute left-[43%] top-24 z-0 hidden w-8 select-none lg:block" />
      <Dot className="absolute right-[4%] top-1/2 hidden sm:block" color="var(--color-primary)" size={11} delay={1.3} />
      <Dot className="absolute left-[9%] bottom-1/3 hidden lg:block" color="var(--color-pink)" size={9} delay={2.1} />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative">
            {/* Ilustración del sobre */}
            <Image
              src="/mockups/esc-envelope.png"
              alt=""
              aria-hidden
              width={480}
              height={480}
              className="pointer-events-none absolute -top-4 right-0 z-0 hidden w-56 select-none lg:block xl:-right-8 xl:w-72"
            />
            <Image
              src="/mockups/esc-plane.png"
              alt=""
              aria-hidden
              width={200}
              height={140}
              className="pointer-events-none absolute left-[39%] top-[47%] z-0 hidden w-11 select-none lg:block"
            />
            <h2
              className="relative z-10 text-4xl font-extrabold text-balance text-navy sm:text-5xl"
              style={{
                fontFamily: "var(--font-poppins)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
              }}
            >
              Escríbenos
            </h2>
            <p className="relative z-10 mt-5 max-w-[15rem] text-lg text-navy/70">
              Estamos aquí para ayudarte. Cuéntanos cómo podemos apoyar a tu negocio,{" "}
              <span className="font-semibold text-pink-dark">¡será un gusto atenderte!</span>
            </p>

            <ul className="relative z-10 mt-8 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5FE197] to-[#25D366] text-white shadow-md shadow-[#25D366]/25">
                  <WhatsappIcon size={24} />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy">WhatsApp</p>
                  <a
                    href={whatsappLink("Hola, quisiera más información sobre sus servicios.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy/70 hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C9B8F5] to-[#9B82E7] text-white shadow-md shadow-primary/25">
                  <Mail size={24} />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy">Correo electrónico</p>
                  <a href={`mailto:${site.email}`} className="text-navy/70 hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md shadow-pink/25">
                  <FaInstagram size={24} />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy">Instagram</p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy/70 hover:underline"
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal relative z-10 rounded-[28px] bg-white p-7 shadow-xl shadow-primary/10 ring-1 ring-black/5 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/mockups/esc-chat.png"
                alt=""
                aria-hidden
                width={114}
                height={108}
                className="h-11 w-11 shrink-0 object-contain"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">Cuéntanos tu consulta</h3>
                <p className="text-sm text-navy/60">Te responderemos a la brevedad.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/60 px-4 py-3">
                <User size={18} className="text-navy/40" />
                <input
                  required
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent text-navy outline-none placeholder:text-navy/40"
                />
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/60 px-4 py-3">
                <Mail size={18} className="text-navy/40" />
                <input
                  required
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full bg-transparent text-navy outline-none placeholder:text-navy/40"
                />
              </label>

              <label className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white/60 px-4 py-3">
                <MessageCircle size={18} className="mt-1 text-navy/40" />
                <textarea
                  required
                  placeholder="Tu consulta"
                  rows={4}
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  className="w-full resize-none bg-transparent text-navy outline-none placeholder:text-navy/40"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-[#F368AE] to-[#EC4E9C] py-3.5 font-heading text-lg font-semibold text-white shadow-lg shadow-pink/30 transition-transform hover:scale-[1.02]"
            >
              Contáctanos
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-navy/50">
              <Lock size={12} />
              Tu información está segura con nosotros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
