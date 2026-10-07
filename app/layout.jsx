import { Cormorant_Garamond, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "@icon/icofont/icofont.css";
import "./globals.css";
import "./tr-theme.css";
import { doctor } from "@/lib/doctor";
import { buildFaqJsonLd, buildPhysicianJsonLd } from "@/lib/jsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const Header = dynamic(() => import("@/components/Header/Header"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));
const StickyMobileCta = dynamic(() => import("@/components/StickyMobileCta/StickyMobileCta"));
const AmbientParticles = dynamic(() => import("@/components/AmbientParticles/AmbientParticles"));

export const metadata = {
  title: `${doctor.name} | ${doctor.specialty} | ${doctor.hospitalShort}`,
  description: `${doctor.name} — ${doctor.title}. ${doctor.tagline}. Book at Navkar Clinic, Sector 63, Gurugram.`,
  keywords: [
    "gynaecologist Gurugram",
    "obstetrician Sector 63",
    "Dr Maincy Jain",
    "Navkar Clinic Paras Trinity",
    "pregnancy doctor Gurugram",
    "laparoscopic gynaecology",
    "Cloudnine Motherhood Max Hospital",
  ],
  openGraph: {
    title: `${doctor.name} | ${doctor.hospitalShort}`,
    description: doctor.tagline,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const physicianLd = buildPhysicianJsonLd(doctor);
  const faqLd = buildFaqJsonLd(doctor);
  const jsonLd = faqLd ? [physicianLd, faqLd] : [physicianLd];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`tr-body ${poppins.className} ${cormorant.variable} has-sticky-cta`}>
        <AmbientParticles />
        <Header />
        <div>{children}</div>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
