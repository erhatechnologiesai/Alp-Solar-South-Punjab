import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

const headquarters = [
  "No. 15 Hengyang Road, Guxian Subdistrict, Yantai Economic and Technological Development Zone, Shandong Province",
  "No. 1-4 Floors, South Building, C2 Building, Innovation Industrial Park, High-tech Zone, Hefei City, Anhui Province",
  "Room 3, Building B, Tongfang Kexing Science Park, No. 11 Langshan Road, Nanshan District, Shenzhen",
  "No. 59 Gaoliangxiejie, Haidian District, Beijing",
];

const footerColumns = [
  {
    title: "Solar Solutions",
    links: [
      { label: "Residential Solar", href: "/solar-systems/residential" },
      { label: "Commercial Solar", href: "/solar-systems/commercial" },
      { label: "Hybrid Solar", href: "/solar-systems/hybrid" },
      { label: "Off-Grid Solar", href: "/solar-systems/off-grid" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Solar Panels", href: "/products/solar-panels" },
      { label: "Inverters", href: "/products/inverters" },
      { label: "Batteries", href: "/products/batteries" },
      { label: "Mounting Structures", href: "/products/mounting-structures" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Solar Calculator", href: "/solar-calculator" },
      { label: "Blog", href: "/blog" },
      { label: "Net Metering", href: "/net-metering" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#081b2e] via-[#0F2D52] to-[#163a69] text-white shadow-2xl border-t border-slate-700/60">
      {/* Background Ambient Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-[350px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-[350px] w-[500px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="container-page relative z-10 grid gap-8 sm:gap-10 py-14 sm:py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_1.85fr]">
        {/* Column 1: Brand & Contacts */}
        <div>
          <div className="inline-block rounded-xl bg-white p-4 shadow-md">
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.companyName}
              width={320}
              height={100}
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90 font-medium">
            Professional solar design, installation, and after-sales support for homes and
            businesses across Pakistan.
          </p>
          <div className="mt-6 h-px w-12 bg-amber-400" aria-hidden="true" />
          <div className="mt-6 space-y-3 text-sm text-white font-medium">
            <a href={`tel:${siteConfig.phone}`} suppressHydrationWarning className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors">
              <Phone className="h-4 w-4 text-white" aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors">
              <Mail className="h-4 w-4 text-white" aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Columns 2, 3, 4: Navigation Links */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-white/90 hover:text-amber-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 5 (Right Side): Regional Center & Headquarters */}
        <div className="space-y-6">
          {/* Regional Sales and Services Center */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cyan-300 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Regional Sales and Services Center
            </h3>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <div className="text-xs">
                  <p className="font-bold text-white leading-snug">
                    MA Jinnah Road, Multan, Pakistan
                  </p>
                  <a
                    href="https://www.google.com/maps/place/30%C2%B013'27.3%22N+71%C2%B030'54.5%22E/@30.2248076,71.5088609,16.33z/data=!4m4!3m3!8m2!3d30.2242589!4d71.5151427?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Headquarters */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cyan-300 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Headquarters
            </h3>
            <ul className="mt-3 space-y-2">
              {headquarters.map((hq, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-200 leading-relaxed">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>{hq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-white font-medium sm:flex-row">
          <span className="text-white">© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-white hover:text-amber-300 transition-colors">Terms & Conditions</Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-white" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
