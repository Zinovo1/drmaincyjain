import Link from "next/link";
import JsonLd from "@/components/Seo/JsonLd";
import { doctor } from "@/lib/doctor";
import { buildBreadcrumbJsonLd, buildServicesItemListJsonLd } from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/site";
import { TREATMENT_PAGES } from "@/lib/seoTreatments";

export const metadata = {
  title: "Treatments & Services in Gurugram",
  description:
    "Obstetrics and gynaecology treatments in Gurugram with Dr Maincy Jain — pregnancy, delivery, PCOS, infertility, laparoscopic surgery, and more at Navkar Clinic, Sector 63.",
  alternates: {
    canonical: "/treatments/",
  },
  openGraph: {
    title: "Treatments & Services in Gurugram | Dr Maincy Jain",
    url: `${SITE_URL}/treatments/`,
  },
};

export default function TreatmentsIndexPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments/" },
  ]);

  return (
    <main className="tr-section tr-treatments-index">
      <JsonLd data={[buildServicesItemListJsonLd(), breadcrumbs]} />
      <div className="container">
        <div className="tr-section-head text-center">
          <p className="tr-eyebrow">Treatments &amp; Services</p>
          <h1>Gynaecology &amp; obstetrics care in Gurugram</h1>
          <p className="tr-section-lead">
            {doctor.name} offers comprehensive women&apos;s healthcare at {doctor.hospitalShort}.
            Explore services below or{" "}
            <Link href="/#appoinment">book an appointment</Link>.
          </p>
        </div>
        <ul className="tr-treatment-index-list">
          {TREATMENT_PAGES.map((item) => (
            <li key={item.slug}>
              <Link href={item.path} className="tr-treatment-index-link">
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-4">
          <Link href="/" className="tr-btn tr-btn-outline">
            Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
