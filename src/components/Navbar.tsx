"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#somos", label: "Somos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavClick(e: React.MouseEvent, href: string) {
    // Solo interceptamos enlaces internos de esta misma página (inicio y anclas)
    if (href !== "/" && !href.startsWith("/#")) return;
    e.preventDefault();
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    if (href === "/") {
      window.scrollTo({ top: 0, behavior });
      window.history.pushState(null, "", "/");
      return;
    }
    const id = href.split("#")[1];
    const el = id ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior, block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-trimmed.png"
            alt={`${site.name} - ${site.tagline}`}
            width={220}
            height={68}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading text-[17px] font-semibold text-navy transition-colors hover:text-primary-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Hola, quisiera más información sobre sus servicios.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-pink/40 bg-pink/10 px-5 py-2.5 font-heading font-semibold text-pink-dark transition-colors hover:bg-pink/20 lg:flex"
        >
          <MessageCircle size={18} />
          Escríbenos
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          className="text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-heading text-lg font-semibold text-navy"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink("Hola, quisiera más información sobre sus servicios.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 rounded-full bg-pink px-5 py-2.5 font-heading font-semibold text-white"
              >
                <MessageCircle size={18} />
                Escríbenos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
