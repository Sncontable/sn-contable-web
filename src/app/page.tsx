import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Testimonios from "@/components/sections/Testimonios";
import Recursos from "@/components/sections/Recursos";
import Somos from "@/components/sections/Somos";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Testimonios />
      <Recursos />
      <Somos />
      <Contacto />
    </>
  );
}
