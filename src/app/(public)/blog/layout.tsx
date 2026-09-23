import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Guides, Articles & Knowledge Base | ALP Solar South Punjab",
  description: "Read expert guides on MEPCO net metering, hybrid vs on-grid solar systems, Tier-1 N-Type solar panels, and solar maintenance in South Punjab.",
  keywords: [
    "mepco net metering multan",
    "solar system guide pakistan",
    "hybrid solar vs on grid",
    "solar panel maintenance punjab",
    "solar inverter guide pakistan",
    "alp solar south punjab blog"
  ],
  openGraph: {
    title: "Solar Guides & Knowledge Base | ALP Solar South Punjab",
    description: "Read expert guides on MEPCO net metering, hybrid vs on-grid solar systems, Tier-1 N-Type solar panels, and solar maintenance in South Punjab.",
    url: "https://alpsolarsp.com/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
