import React from "react";
import { doctor } from "@/lib/doctor";

const FEATURES = [
  {
    icon: "icofont-surgeon-alt",
    label: "Book OPD",
    title: "Clinic appointment",
    body: `Schedule a consultation at ${doctor.hospitalShort} by phone or WhatsApp. Walk-ins subject to availability.`,
    cta: { href: "#appoinment", label: "Make an appointment", className: "btn btn-main btn-round-full" },
  },
  {
    icon: "icofont-ui-clock",
    label: "OPD timings",
    title: "Clinic hours",
    isHours: true,
  },
  {
    icon: "icofont-support",
    label: "Appointments desk",
    title: doctor.phoneDisplay,
    body: `Call Navkar Clinic to book with ${doctor.name}, or send a WhatsApp request from the form below.`,
    cta: { href: `tel:${doctor.phoneTel}`, label: "Call now", className: "btn btn-main btn-round-full mt-2" },
  },
];

const FeatureCard = ({ feature }) => (
  <div className="feature-item">
    <div className="feature-icon mb-4">
      <i className={`icofont ${feature.icon}`}></i>
    </div>
    <span>{feature.label}</span>
    <h4 className="mb-3">{feature.title}</h4>
    {feature.isHours ? (
      <ul className="w-hours list-unstyled">
        <li className="d-flex justify-content-between">
          By appointment <span>Navkar Clinic</span>
        </li>
        <li className="d-flex justify-content-between">
          Location <span>Sector 63</span>
        </li>
        <li className="d-flex justify-content-between">
          City <span>Gurugram</span>
        </li>
      </ul>
    ) : (
      <>
        <p className={feature.cta ? "mb-4" : "mb-0"}>{feature.body}</p>
        {feature.cta ? (
          <a href={feature.cta.href} className={feature.cta.className}>
            {feature.cta.label}
          </a>
        ) : null}
      </>
    )}
  </div>
);

const Features = () => (
  <section className="features">
    <div className="container">
      <div className="features-scroll-wrap">
        <div className="feature-block d-lg-flex">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
      <p className="features-scroll-hint d-lg-none" aria-hidden="true">
        Swipe for clinic info
      </p>
    </div>
  </section>
);

export default Features;
