import React from "react";
import { doctor } from "@/lib/doctor";

const Services = () => {
  return (
    <section className="section service gray-bg" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2>Speciality care</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Complete obstetrics, gynaecology, and laparoscopic care for women at{" "}
                {doctor.hospitalShort}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {doctor.services.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className={`icofont ${service.icon} text-lg`}></i>
                  <h4 className="mt-3 mb-3">{service.title}</h4>
                </div>
                <div className="content">
                  <p className="mb-4">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
