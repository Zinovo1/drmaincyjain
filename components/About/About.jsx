import { doctor } from "@/lib/doctor";

const About = () => (
  <section className="tr-section tr-about" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="tr-about-photo-wrap">
            <img
              src={doctor.photoAbout || doctor.photo}
              alt={doctor.name}
              className="tr-about-photo"
            />
          </div>
          <p className="tr-about-quote">{doctor.aboutPullQuote}</p>
        </div>

        <div className="col-lg-7">
          <p className="tr-eyebrow">About the Doctor</p>
          <h2>A trusted name in women&apos;s healthcare</h2>
          {doctor.about.map((para) => (
            <p key={para.slice(0, 30)} className="tr-about-text">
              {para}
            </p>
          ))}

          <ul className="tr-credential-list">
            <li>MBBS</li>
            <li>DNB (Obstetrics &amp; Gynaecology)</li>
            <li>Fellowship in Minimal Access Surgery</li>
            <li>High-risk pregnancy &amp; minimally invasive gynaecological surgery</li>
          </ul>

          <div className="tr-about-doctor-card">
            <strong>{doctor.name}</strong>
            <span>{doctor.title} · Navkar Clinic, Gurugram</span>
          </div>

          <a href="#appoinment" className="tr-btn tr-btn-primary mt-3">
            More About {doctor.shortName}
          </a>
        </div>
      </div>

      <div className="tr-stats-row">
        {(doctor.aboutStats || doctor.heroStats || []).map((stat) => (
          <div key={stat.label} className="tr-stat-box">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
