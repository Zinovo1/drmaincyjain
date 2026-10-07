import Link from "next/link";
import { doctor } from "@/lib/doctor";
import { TREATMENT_PAGES } from "@/lib/seoTreatments";

/** Visible local SEO copy + internal links for crawlers and users. */
const SeoLocalSummary = () => (
  <section className="tr-section tr-seo-local" aria-labelledby="seo-local-heading">
    <div className="container">
      <h2 id="seo-local-heading" className="tr-seo-local-title">
        Obstetrician &amp; gynaecologist in Gurugram (Gurgaon)
      </h2>
      <p className="tr-seo-local-text">
        {doctor.name} is an experienced {doctor.title.toLowerCase()} consulting at{" "}
        {doctor.hospital}, {doctor.address}. Families across Gurugram choose Dr Maincy for
        pregnancy care, normal and painless delivery, high-risk obstetrics, PCOS, infertility
        counselling, and laparoscopic gynaecological surgery. Visiting consultant privileges
        include Cloudnine Hospital, Motherhood Hospital, and Max Hospital, Gurugram.
      </p>
      <p className="tr-seo-local-text">
        Book by phone at{" "}
        <a href={`tel:${doctor.phoneTel}`}>{doctor.phoneDisplay}</a> or use the appointment
        form on this website. Read verified patient stories on{" "}
        <a href={doctor.reviewsUrl} target="_blank" rel="noopener noreferrer">
          Practo
        </a>
        .
      </p>
      <nav aria-label="Treatment pages in Gurugram">
        <ul className="tr-seo-local-links">
          {TREATMENT_PAGES.map((item) => (
            <li key={item.slug}>
              <Link href={item.path}>{item.title} in Gurugram</Link>
            </li>
          ))}
          <li>
            <Link href="/treatments/">View all treatments</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default SeoLocalSummary;
