import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "@icon/icofont/icofont.css";
import "./globals.css";
import "./tr-theme.css";
import { doctor } from "@/lib/doctor";
import {
  buildFaqJsonLd,
  buildMedicalClinicJsonLd,
  buildPhysicianJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/jsonLd";
import { SITE_URL, siteMetadata } from "@/lib/site";

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
  category: "healthcare",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
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
  const clinicLd = buildMedicalClinicJsonLd(doctor);
  const faqLd = buildFaqJsonLd(doctor);
  const jsonLd = faqLd
    ? [websiteLd, clinicLd, physicianLd, faqLd]
    : [websiteLd, clinicLd, physicianLd];

  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-poppins: 'Poppins', sans-serif;
                --font-display: 'Cormorant Garamond', serif;
              }
              body.tr-body {
                font-family: var(--font-poppins);
              }
            `,
          }}
        />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        {doctor.googleSiteVerification ? (
          <meta
            name="google-site-verification"
            content={doctor.googleSiteVerification}
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="tr-body has-sticky-cta">
        <AmbientParticles />
        <Header />
        <div>{children}</div>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
