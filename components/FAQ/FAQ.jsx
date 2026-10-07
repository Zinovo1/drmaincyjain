"use client";

import { useState } from "react";
import { doctor } from "@/lib/doctor";

const FAQ = () => {
  const faqs = doctor.faqs || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  return (
    <section className="section faq-section gray-bg tr-faq" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center tr-section-head">
            <p className="tr-eyebrow">Good to Know</p>
            <div className="section-title">
              <h2>Frequently asked questions</h2>
              <p className="tr-section-lead">
                Common questions about consultations, appointments, and care with {doctor.name}.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-list">
              {faqs.map((item, index) => (
                <div key={item.q} className={`faq-item ${openIndex === index ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    aria-expanded={openIndex === index}
                  >
                    {item.q}
                    <i className="icofont icofont-simple-down"></i>
                  </button>
                  {openIndex === index ? <div className="faq-answer">{item.a}</div> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
