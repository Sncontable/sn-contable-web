"use client";

import { useEffect } from "react";

/**
 * Observa todos los elementos con clase `.reveal` y les agrega
 * `.reveal-visible` cuando entran en el viewport (aparición suave al scrollear).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("reveal-visible");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.querySelectorAll(".reveal").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const els = document.querySelectorAll(".reveal:not(.reveal-visible)");
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
