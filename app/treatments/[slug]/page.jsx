import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/Seo/JsonLd";
import { doctor } from "@/lib/doctor";
import {
  buildBreadcrumbJsonLd,
  buildTreatmentServiceJsonLd,
} from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/site";
import {
  TREATMENT_PAGES,
  getAllTreatmentSlugs,
  getTreatmentBySlug,
} from "@/lib/seoTreatments";

export function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) return {};

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: {
      canonical: treatment.path,
    },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url: `${SITE_URL}${treatment.path}`,
    },
  };
}

export default function TreatmentPage({ params }) {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) notFound();

  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments/" },
    { name: treatment.title, path: treatment.path },
  ]);

  return (
    <main className="tr-section tr-treatment-page">
      <JsonLd data={[buildTreatmentServiceJsonLd(treatment, doctor), breadcrumbs]} />
      <div className="container">
        <nav className="tr-treatment-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/treatments/">Treatments</Link>
          <span aria-hidden="true"> / </span>
          <span>{treatment.title}</span>
        </nav>

        <div className="tr-section-head">
          <p className="tr-eyebrow">Gurugram · Navkar Clinic Sector 63</p>
          <h1>{treatment.title} in Gurugram</h1>
          <p className="tr-section-lead">{treatment.summary}</p>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <p className="tr-treatment-intro">{treatment.intro}</p>
            <ul className="tr-treatment-bullets">
              {treatment.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="tr-treatment-meta">
              Consult <strong>{doctor.name}</strong>, {doctor.title}, at{" "}
              {doctor.hospital}, {doctor.address}. Call{" "}
              <a href={`tel:${doctor.phoneTel}`}>{doctor.phoneDisplay}</a> or{" "}
              <Link href="/#appoinment">request an appointment online</Link>.
            </p>
          </div>
          <div className="col-lg-4">
            <aside className="tr-treatment-aside">
              <h2 className="h5">Book a consultation</h2>
              <p>Navkar Clinic · Paras Trinity · Sector 63 · Gurugram</p>
              <a href={`tel:${doctor.phoneTel}`} className="tr-btn tr-btn-primary btn-block mb-2">
                Call {doctor.phoneDisplay}
              </a>
              <Link href="/#appoinment" className="tr-btn tr-btn-outline btn-block">
                WhatsApp appointment
              </Link>
            </aside>
          </div>
        </div>

        <p className="mt-4">
          <Link href="/treatments/">All treatments</Link>
          {" · "}
          <Link href="/">Homepage</Link>
        </p>
      </div>
    </main>
  );
}
