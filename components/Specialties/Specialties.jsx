"use client";

import { useState } from "react";
import { doctor } from "@/lib/doctor";

const Specialties = () => {
  const groups = doctor.specialtyGroups || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (!groups.length) return null;

  return (
    <section className="section specialties-section gray-bg" id="specialties">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2>Treatment &amp; Specialities</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Comprehensive obstetrics and gynaecology services for women of all ages — from
                pregnancy care to laparoscopic surgery — under one specialist in Gurugram.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="specialty-list">
              {groups.map((group, index) => (
                <button
                  key={group.title}
                  type="button"
                  className={`specialty-tab ${openIndex === index ? "is-active" : ""}`}
                  onClick={() => setOpenIndex(index)}
                  aria-expanded={openIndex === index}
                >
                  <i className={`icofont ${group.icon}`}></i>
                  <span>
                    <strong>{group.title}</strong>
                    <small>{group.summary}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            {groups.map((group, index) =>
              openIndex === index ? (
                <div key={group.title} className="specialty-panel">
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <ul className="specialty-items">
                    {group.items.map((item) => (
                      <li key={item}>
                        <i className="icofont icofont-check-circled"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#appoinment" className="btn btn-main btn-round-full mt-3">
                    Book for {group.title.toLowerCase()}
                  </a>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
