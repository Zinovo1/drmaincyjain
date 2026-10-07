import { doctor } from "@/lib/doctor";
import HeroGraphics from "./HeroGraphics";
import HeroPhotoBackdrop from "./HeroPhotoBackdrop";
import HeroStarSparkle from "./HeroStarSparkle";
import HeroTrustBadge from "./HeroTrustBadge";

const HeroBanner = () => {
  const banner = doctor.heroBanner;
  const marquee = [...(doctor.marqueeServices || []), ...(doctor.marqueeServices || [])];

  return (
    <section className="tr-hero tr-hero-animated" id="heroBanner">
      <HeroGraphics />
      <div className="container tr-hero-content">
        <div className="row align-items-center tr-hero-row">
          <div className="col-lg-6">
            <p className="tr-hero-eyebrow">{banner?.eyebrow}</p>
            <h1 className="tr-hero-title">
              {doctor.seoHeadline || "Best Gynecologist in Gurugram"}
            </h1>
            <p className="tr-hero-title-accent">
              {doctor.heroTagline || banner?.title}
              <HeroStarSparkle />
            </p>
            <p className="tr-hero-lead">{doctor.heroLead || banner?.intro}</p>
            <div className="tr-hero-actions">
              <a href="#appoinment" className="tr-btn tr-btn-primary">
                Book a Consultation
              </a>
              <a href={`tel:${doctor.phoneTel}`} className="tr-btn tr-btn-outline">
                {doctor.phoneDisplay}
              </a>
            </div>
            <div className="tr-hero-rating">
              <strong>4.9</strong>
              <span>from verified Practo patients</span>
            </div>
            <p className="tr-hero-clinic">
              <strong>Navkar Clinic</strong> · Sector 63, Gurugram
            </p>
          </div>

          <div className="col-lg-6">
            <div className="tr-hero-visual">
              <HeroPhotoBackdrop />
              <img
                src={banner?.photo || doctor.photo}
                alt={`${doctor.name}, ${doctor.title}`}
                className="tr-hero-photo"
              />
              <HeroTrustBadge experienceYears={doctor.experienceYears} />
            </div>
          </div>
        </div>
      </div>

      <div className="tr-marquee" aria-hidden="true">
        <div className="tr-marquee-track">
          {marquee.map((item, index) => (
            <span key={`${item}-${index}`} className="tr-marquee-item">
              {item} <span className="tr-star">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
