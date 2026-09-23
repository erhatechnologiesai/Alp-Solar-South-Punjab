import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Clock, Sparkles, MessageCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site";

export default function BlogPage() {
  const posts = [
    {
      id: "mepco-net-metering-2026",
      category: "Net Metering & Regulations",
      title: "MEPCO Net Metering Rules & Complete Step-by-Step Process (2026 Guide)",
      date: "August 2026",
      readTime: "6 min read",
      desc: "Everything you need to know about applying for a green bi-directional meter with MEPCO in Multan, Bahawalpur, D.G. Khan, and Rahim Yar Khan. Learn required documents, NEPRA compliance, and NOC approval timelines.",
      highlights: [
        "Required documentation & site inspection criteria",
        "NEPRA and MEPCO 3-phase sanction load requirements",
        "How bi-directional green meters export units back to the grid",
      ],
    },
    {
      id: "on-grid-vs-hybrid-systems",
      category: "System Comparison",
      title: "On-Grid vs Hybrid Solar Systems: Which is Best for Your House or Factory?",
      date: "August 2026",
      readTime: "5 min read",
      desc: "A comprehensive technical comparison of energy storage batteries, inverter backup runtime during loadshedding, and payback calculations for residential and commercial users in Pakistan.",
      highlights: [
        "Grid-tied inverters vs battery-integrated hybrid inverters",
        "Load shedding continuity: keeping ACs and refrigeration running",
        "Capital expenditure vs long-term ROI comparison",
      ],
    },
    {
      id: "solar-panel-summer-maintenance",
      category: "Maintenance & Engineering",
      title: "How to Maintain Solar Panels for Maximum Efficiency in Summer Heat",
      date: "July 2026",
      readTime: "4 min read",
      desc: "Essential cleaning techniques, thermal coefficient considerations, and dust management tips designed specifically for high-ambient temperatures and dust storm conditions in South Punjab.",
      highlights: [
        "Optimal morning cleaning schedules to avoid thermal shock",
        "Effects of high heat on voltage and power degradation",
        "Routine junction box and cable inspection guidelines",
      ],
    },
    {
      id: "n-type-topcon-vs-p-type",
      category: "Technology Insights",
      title: "N-Type TOPCon vs P-Type Mono PERC Panels: Why N-Type is the Future in Pakistan",
      date: "July 2026",
      readTime: "7 min read",
      desc: "Why Tier-1 N-Type TOPCon solar panels deliver higher generation in extreme heat, superior low-light performance, and lower year-one degradation compared to older P-type technology.",
      highlights: [
        "Lower temperature coefficient (-0.30%/°C vs -0.35%/°C)",
        "Zero Light Induced Degradation (LID) in TOPCon cells",
        "30-year linear performance warranty advantage",
      ],
    },
    {
      id: "solar-tubewell-south-punjab",
      category: "Agricultural Solutions",
      title: "Solar Tubewell Systems for Farmers in South Punjab: Diesel & Grid Elimination",
      date: "June 2026",
      readTime: "5 min read",
      desc: "How solar VFD pump controllers allow farmers across Multan and Southern Punjab to run 15HP to 50HP agricultural tubewells with zero diesel expenditure and stable water delivery.",
      highlights: [
        "Variable Frequency Drive (VFD) soft-start motor protection",
        "Direct solar water pumping from 8:00 AM to 5:00 PM daily",
        "Payback period often achieved in under 18 months",
      ],
    },
    {
      id: "lithium-vs-tubular-batteries",
      category: "Energy Storage",
      title: "Lithium Iron Phosphate (LiFePO4) vs Tubular Lead-Acid: The Smart Battery Choice",
      date: "May 2026",
      readTime: "5 min read",
      desc: "Comparing initial costs, cycle life (6000 cycles vs 1200 cycles), and depth of discharge for modern hybrid solar installations in Pakistan.",
      highlights: [
        "10-15 years life expectancy with LiFePO4 chemistry",
        "90% usable depth of discharge with zero acid maintenance",
        "Compact wall-mountable footprints for modern homes",
      ],
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0a203d] via-[#0F2D52] to-[#163a69] py-14 sm:py-18 text-white text-center px-4 shadow-lg">
        {/* Sky Glow & Subtle Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.4) 1px, transparent 1px),
                                linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute -top-10 left-1/3 h-[280px] w-[500px] rounded-full bg-[#4bc4f9]/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-12 h-[320px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2 border border-cyan-400/30 shadow-md">
              <BookOpen className="h-4 w-4 text-cyan-300" /> Solar Insights & News
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
            Solar Guides & Knowledge Base
          </h1>

          <p className="mt-3 text-slate-100 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Essential solar engineering insights, MEPCO net-metering regulations, equipment selection guides, and maintenance tips for homeowners and businesses in Pakistan.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0F2D52] hover:text-cyan-700 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {post.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Takeaways:</div>
                  <ul className="space-y-1.5">
                    {post.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={buildWhatsAppLink(`Hi ALP Solar, I read your article about: "${post.title}". I would like to get more information from an engineer.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0F2D52] hover:text-cyan-600 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>Ask Solar Engineer About This Topic</span>
                  <ArrowRight className="h-4 w-4 text-cyan-600" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 bg-gradient-to-r from-[#0a203d] via-[#0F2D52] to-[#163a69] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-cyan-500/30">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase tracking-widest border border-cyan-400/30">
              <Sparkles className="h-4 w-4 text-cyan-300" /> Ready to Go Solar?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Get an Engineered Solar Proposal for Your Property
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              Calculate your system capacity, monthly bill savings, and payback period, or speak directly with our PEC certified engineers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/solar-calculator"
              className="w-full sm:w-auto text-center py-4 px-8 rounded-2xl bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:bg-cyan-300 transition-all hover:scale-105"
            >
              Calculate Solar Savings
            </Link>
            <a
              href={buildWhatsAppLink("Hi ALP Solar! I would like to schedule a site survey and consultation for my property.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center py-4 px-8 rounded-2xl bg-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:bg-emerald-500 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
