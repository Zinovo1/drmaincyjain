import { doctor } from "@/lib/doctor";

const ServicesGrid = () => {
  const cards = (doctor.treatmentCards || []).slice(0, 6);
  if (!cards.length) return null;

  return (
    <section className="tr-section tr-services" id="services">
      <div className="container">
        <div className="tr-section-head text-center">
          <p className="tr-eyebrow">Our Expertise</p>
          <h2>Complete care, at every stage</h2>
          <p className="tr-section-lead">
            With expertise and dedication, you can expect the finest care for all your
            women&apos;s health concerns at Navkar Clinic and partner hospitals in Gurugram.
          </p>
        </div>

        <div className="row">
          {cards.map((card) => (
            <div key={card.title} className="col-md-6 col-lg-4 mb-4">
              <article className="tr-service-card h-100">
                <div className="tr-service-icon">
                  <i className={`icofont ${card.icon}`} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <a href="#appoinment" className="tr-service-link">
                  Learn more <i className="icofont icofont-simple-right" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
