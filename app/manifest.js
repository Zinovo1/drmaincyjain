import { SITE_URL } from "@/lib/site";
import { doctor } from "@/lib/doctor";

export default function manifest() {
  return {
    name: `${doctor.name} — Gynecologist in Gurugram`,
    short_name: doctor.shortName,
    description: doctor.seoDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff5fb",
    theme_color: "#c084fc",
    lang: "en-IN",
    icons: [
      {
        src: "/images/about/portrait-desk.jpg",
        sizes: "768x1024",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    id: SITE_URL,
  };
}
