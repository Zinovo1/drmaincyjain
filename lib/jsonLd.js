import { SITE_URL } from "./site";
import { TREATMENT_PAGES } from "./seoTreatments";

function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const CLINIC_GEO = {
  latitude: 28.4138,
  longitude: 77.3912,
};

export function buildMedicalClinicJsonLd(doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: doctor.hospital,
    description: doctor.seoDescription || doctor.tagline,
    url: SITE_URL,
    telephone: doctor.phoneTel,
    image: absoluteUrl(doctor.photo),
    priceRange: "$$",
    medicalSpecialty: ["Obstetrics", "Gynecologic", "Laparoscopic Surgery"],
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122011",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: {
      "@type": "City",
      name: "Gurugram",
    },
    sameAs: [doctor.googleReviewsUrl, doctor.profileUrl].filter(Boolean),
  };
}

/** Schema.org JSON-LD for search engines. */
export function buildPhysicianJsonLd(doctor) {
  const sameAs = [
    doctor.profileUrl,
    doctor.reviewsUrl,
    doctor.googleReviewsUrl,
    doctor.googleWriteReviewUrl,
    doctor.bookUrl,
    SITE_URL,
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
      ratingCount: "6",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: doctor.hospital,
      url: SITE_URL,
      telephone: doctor.phoneTel,
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
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Call for appointment",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `tel:${doctor.phoneTel}`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
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

export function buildServicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Gynaecology & obstetrics services in Gurugram",
    itemListElement: TREATMENT_PAGES.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.path),
    })),
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildTreatmentServiceJsonLd(treatment, doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${treatment.title} in Gurugram`,
    description: treatment.intro,
    url: absoluteUrl(treatment.path),
    procedureType: treatment.title,
    howPerformed: treatment.summary,
    followup: "Follow-up consultations at Navkar Clinic, Sector 63, Gurugram.",
    preparation: "Book by phone or WhatsApp before your visit.",
    performer: {
      "@type": "Physician",
      name: doctor.name,
      telephone: doctor.phoneTel,
    },
    location: {
      "@type": "MedicalClinic",
      name: doctor.hospital,
      address: doctor.address,
    },
  };
}
