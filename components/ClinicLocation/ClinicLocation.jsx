import { doctor } from "@/lib/doctor";

const ClinicLocation = () => {
  const clinics = doctor.clinics || [];
  const primary = clinics[0];
  const mapSrc = primary
    ? `https://maps.google.com/maps?q=${encodeURIComponent(primary.mapQuery)}&z=15&output=embed`
    : null;

  return (
    <section className="section clinic-section" id="clinic">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2>Clinic &amp; Location</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Consult {doctor.name} at Navkar Clinic, Paras Trinity, Sector 63 — with visiting
                consultant privileges at Cloudnine, Motherhood, and Max Hospital, Gurugram.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {clinics.map((clinic) => (
            <div key={clinic.name} className="col-lg-6 col-xl-3 mb-4">
              <div className="clinic-card h-100">
                <span className="clinic-tag">{clinic.tag}</span>
                <h4>{clinic.name}</h4>
                <p className="clinic-address">
                  <i className="icofont icofont-location-pin mr-2"></i>
                  {clinic.address}
                </p>
                <ul className="clinic-meta list-unstyled">
                  <li>
                    <i className="icofont icofont-clock-time mr-2"></i>
                    {clinic.hours} · {clinic.days}
                  </li>
                  <li>
                    <i className="icofont icofont-phone mr-2"></i>
                    <a href={`tel:${doctor.phoneTel}`}>{clinic.phone}</a>
                  </li>
                </ul>
                <a href="#appoinment" className="btn btn-main btn-round-full mt-2">
                  Request appointment
                </a>
              </div>
            </div>
          ))}
        </div>

        {mapSrc ? (
          <div className="clinic-map-wrap mt-2">
            <iframe
              title={`Map — ${primary.name}`}
              src={mapSrc}
              className="clinic-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ClinicLocation;
