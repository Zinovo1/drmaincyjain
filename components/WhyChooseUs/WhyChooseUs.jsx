import { doctor } from "@/lib/doctor";

const WhyChooseUs = () => {
  const items = doctor.whyChooseUs || [];
  if (!items.length) return null;

  return (
    <section className="section why-choose" id="why-choose">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2>Why Choose {doctor.shortName}?</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Trusted obstetric and gynaecological care in Gurugram — combining tertiary-hospital
                training with a warm, patient-first approach at {doctor.hospitalShort}.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-3 mb-4">
              <div className="why-card h-100">
                <div className="why-icon">
                  <i className={`icofont ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
