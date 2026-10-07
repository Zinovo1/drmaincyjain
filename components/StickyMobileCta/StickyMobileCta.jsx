"use client";

import { doctor } from "@/lib/doctor";

const StickyMobileCta = () => (
  <div className="sticky-mobile-cta d-lg-none" aria-label="Quick contact">
    <a href={`tel:${doctor.phoneTel}`} className="sticky-cta-item">
      <i className="icofont icofont-phone"></i>
      <span>Call</span>
    </a>
    <a
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-cta-item sticky-cta-primary"
    >
      <i className="icofont icofont-brand-whatsapp"></i>
      <span>WhatsApp</span>
    </a>
    <a href="#appoinment" className="sticky-cta-item">
      <i className="icofont icofont-calendar"></i>
      <span>Book</span>
    </a>
  </div>
);

export default StickyMobileCta;
