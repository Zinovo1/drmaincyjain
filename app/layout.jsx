import { Cormorant_Garamond, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "@icon/icofont/icofont.css";
import "./globals.css";
import "./tr-theme.css";
import { doctor } from "@/lib/doctor";
import { buildFaqJsonLd, buildPhysicianJsonLd, buildWebSiteJsonLd } from "@/lib/jsonLd";
import { SITE_URL, siteMetadata } from "@/lib/site";

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

const ogImage = `${SITE_URL}/images/about/portrait-desk.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteMetadata.title,
    template: `%s | ${doctor.shortName}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: doctor.name }],
  creator: doctor.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: SITE_URL,
    siteName: doctor.brandName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 768,
        height: 1024,
        alt: `${doctor.name}, ${doctor.title} in Gurugram`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [ogImage],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const physicianLd = buildPhysicianJsonLd(doctor);
  const websiteLd = buildWebSiteJsonLd(doctor);
  const faqLd = buildFaqJsonLd(doctor);
  const jsonLd = faqLd ? [websiteLd, physicianLd, faqLd] : [websiteLd, physicianLd];

  return (
    <html lang="en-IN">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
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
