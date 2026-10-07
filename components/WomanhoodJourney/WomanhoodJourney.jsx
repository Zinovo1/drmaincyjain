import { doctor } from "@/lib/doctor";

const WomanhoodJourney = () => {
  const stages = doctor.womanhoodJourney || [];
  if (!stages.length) return null;

  return (
    <section className="section womanhood-section gray-bg" id="journey">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="section-eyebrow">Your women&apos;s health journey</p>
            <div className="section-title">
              <h2>
                Supporting You Through <em>Every Stage</em> of Womanhood
              </h2>
              <div className="divider mx-auto my-4"></div>
              <p className="section-lead">
                From family planning and pregnancy to childbirth and postpartum care,{" "}
                {doctor.shortName} provides compassionate, evidence-based healthcare tailored
                to every stage of a woman&apos;s life.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {stages.map((stage) => (
            <div key={stage.title} className="col-md-6 col-lg-4 mb-4">
              <article className="journey-card h-100">
                <span className="journey-step">
                  {stage.icon} {stage.step}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-2">
          <a href="#appoinment" className="btn btn-main btn-round-full">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default WomanhoodJourney;
