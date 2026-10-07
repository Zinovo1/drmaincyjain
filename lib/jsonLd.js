/** Schema.org JSON-LD for search engines. */
export function buildPhysicianJsonLd(doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.tagline,
    medicalSpecialty: ["Obstetrics", "Gynecologic", "Laparoscopic Surgery"],
    image: doctor.photo,
    telephone: doctor.phoneTel,
    url: doctor.profileUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122011",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: doctor.hospital,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.address,
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    sameAs: [doctor.profileUrl, doctor.googleReviewsUrl, doctor.bookUrl].filter(Boolean),
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
