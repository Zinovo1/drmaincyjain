import { SITE_URL } from "@/lib/site";
import { TREATMENT_PAGES } from "@/lib/seoTreatments";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/treatments/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const treatmentRoutes = TREATMENT_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
