// Placeholder configuration — brief §56: never hard-code real company
// facts until supplied. Swap these for values pulled from the `settings`
// table (see prisma/seed.ts `company.*` keys) once the API layer is live.
export const siteConfig = {
  companyName: "ALP Solar South Punjab",
  logoUrl: "/images/logo.png?v=25",
  phone: "+92 302 3333499",
  whatsappNumber: "+923023333499", // digits only, e.g. "92XXXXXXXXXX" — used to build wa.me links
  email: "info@alpsolar.pk",
  address: "MA Jinnah Road, Multan, Pakistan",
  googleMapsUrl: "https://www.google.com/maps/place/30%C2%B013'27.3%22N+71%C2%B030'54.5%22E/@30.2248076,71.5088609,16.33z/data=!4m4!3m3!8m2!3d30.2242589!4d71.5151427?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Solar Solutions", href: "/solar-systems" },
    { label: "Packages", href: "/packages" },
    { label: "Products", href: "/products" },
    { label: "Calculator", href: "/solar-calculator" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

/** Builds a wa.me link with an optional pre-filled message. */
export function buildWhatsAppLink(message?: string) {
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
