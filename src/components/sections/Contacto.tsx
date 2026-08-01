"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle, User, Lock, Send } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

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
    <section id="contacto" className="scroll-mt-20 bg-section-gradient py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
              Escríbenos
            </h2>
            <p className="mt-5 max-w-md text-lg text-navy/70">
              Estamos aquí para ayudarte. Cuéntanos cómo podemos apoyar a tu negocio,{" "}
              <span className="font-semibold text-pink-dark">¡será un gusto atenderte!</span>
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-light/50 text-pink-dark">
                  <Phone size={22} />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy">Teléfono</p>
                  <a href={`tel:${site.phoneHref}`} className="text-navy/70 hover:underline">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light/50 text-primary-dark">
                  <Mail size={22} />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy">Correo electrónico</p>
                  <a href={`mailto:${site.email}`} className="text-navy/70 hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#1c9950]">
                  <MessageCircle size={22} />
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
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-8"
          >
            <h3 className="font-heading text-xl font-bold text-navy">Cuéntanos tu consulta</h3>
            <p className="mt-1 text-sm text-navy/60">Te responderemos a la brevedad.</p>

            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 rounded-2xl border border-navy/10 px-4 py-3">
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

              <label className="flex items-center gap-3 rounded-2xl border border-navy/10 px-4 py-3">
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

              <label className="flex items-start gap-3 rounded-2xl border border-navy/10 px-4 py-3">
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
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-pink py-3.5 font-heading text-lg font-semibold text-white shadow-lg shadow-pink/30 transition-transform hover:scale-[1.02]"
            >
              <Send size={18} />
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
