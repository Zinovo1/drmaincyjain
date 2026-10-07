import { SITE_URL } from "./site";

function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Schema.org JSON-LD for search engines. */
export function buildPhysicianJsonLd(doctor) {
  const sameAs = [
    doctor.profileUrl,
    doctor.reviewsUrl,
    doctor.googleReviewsUrl,
    doctor.googleWriteReviewUrl,
    doctor.bookUrl,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.seoDescription || doctor.tagline,
    medicalSpecialty: ["Obstetrics", "Gynecologic", "Laparoscopic Surgery"],
    image: absoluteUrl(doctor.photo),
    telephone: doctor.phoneTel,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122011",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "50",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: doctor.hospital,
      url: SITE_URL,
      telephone: doctor.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.address,
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    sameAs,
  };
}

export function buildWebSiteJsonLd(doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: doctor.brandName,
    url: SITE_URL,
    description: doctor.seoDescription || doctor.tagline,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Physician",
      name: doctor.name,
    },
  };
}

export function buildFaqJsonLd(doctor) {
  const faqs = doctor.faqs || [];
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
