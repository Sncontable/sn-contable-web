export const site = {
  name: "SN Contable",
  tagline: "Contabilidad a tu medida",
  description:
    "Contabilidad, remuneraciones y asesoría tributaria a tu medida. Asesoría personalizada, cercana y transparente para emprendedores, pymes y empresas en Chile.",
  url: "https://sncontable.cl",
  phone: "+56 9 5182 7375",
  phoneHref: "+56951827375",
  whatsapp: "56951827375",
  whatsappHref: "https://wa.me/56951827375",
  email: "contacto@sncontable.cl",
  instagram: "https://instagram.com/sncontable",
  instagramHandle: "@sncontable",
  hours: "Lunes a Viernes de 09:00 a 20:00 horas",
  paymentMethods: "Transferencia",
  founders: [
    {
      name: "Camila Altamirano Araya",
      role: "Contadora Pública y Auditora",
      subrole: "Técnico en Administración de Recursos Humanos",
      photo: "/team/camila.jpg",
    },
    {
      name: "Matías Fernández Orellana",
      role: "Ingeniero en Recursos Humanos",
      subrole: "Técnico en Administración de Recursos Humanos",
      photo: "/team/matias.jpg",
    },
  ],
} as const;

export function whatsappLink(message: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}
