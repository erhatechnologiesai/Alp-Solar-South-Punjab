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

      <div className="container-page relative z-10 grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
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
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white font-medium">
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
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white hover:text-amber-300 transition-colors"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" /> {siteConfig.address}
            </a>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-white hover:text-amber-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Headquarters & Regional Sales and Services Center Section */}
      <div className="relative z-10 border-t border-white/15 bg-slate-950/40 py-12">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          {/* Regional Sales and Services Center */}
          <div className="lg:col-span-5">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-cyan-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Regional sales and services center
            </h3>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg space-y-3.5 backdrop-blur-xs">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white leading-relaxed">
                    MA Jinnah Road, Multan, Pakistan
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Official authorized sales, engineering & warranty center for South Punjab.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/30%C2%B013'27.3%22N+71%C2%B030'54.5%22E/@30.2248076,71.5088609,16.33z/data=!4m4!3m3!8m2!3d30.2242589!4d71.5151427?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F2D52] to-[#1a4b85] hover:from-[#153f70] hover:to-[#225ea6] px-4 py-2.5 text-xs font-bold text-cyan-200 border border-cyan-400/30 transition-all hover:scale-[1.02] shadow-md group"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-3 w-3 text-cyan-300 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Headquarters */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-cyan-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Headquarters
            </h3>

            <div className="mt-4 space-y-3">
              {headquarters.map((hq, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-xs sm:text-sm text-slate-200 leading-relaxed hover:bg-white/[0.06] transition-colors"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>{hq}</span>
                </div>
              ))}
            </div>
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
