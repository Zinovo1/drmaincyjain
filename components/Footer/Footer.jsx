"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { doctor } from "@/lib/doctor";
import { TREATMENT_PAGES } from "@/lib/seoTreatments";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="tr-footer footer py-5 position-relative">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="footer-heading">{doctor.name}</h5>
            <p className="footer-text">
              {doctor.title} with {doctor.experienceYears}+ years of experience, dedicated to
              compassionate women&apos;s healthcare in Gurugram.
            </p>
            <p className="footer-text small mb-0">
              <Link href="/">Homepage</Link>
              {" · "}
              <Link href="/treatments/">All treatments</Link>
            </p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="footer-heading">Treatments in Gurugram</h5>
            <ul className="footer-links list-unstyled">
              {TREATMENT_PAGES.slice(0, 8).map((item) => (
                <li key={item.slug}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/treatments/">More services</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="footer-heading">Contact</h5>
            <p className="footer-text small mb-2">{doctor.address}</p>
            <p className="footer-text">
              <a href={`tel:${doctor.phoneTel}`}>{doctor.phoneDisplay}</a>
            </p>
            <p className="footer-text small mb-0">{doctor.opd}</p>
          </div>
        </div>

        <div className="row align-items-center border-top pt-4 tr-footer-bottom">
          <div className="col-md-8 text-center text-md-left mb-2 mb-md-0">
            <div className="copyright">
              © {new Date().getFullYear()} {doctor.name}. All Rights Reserved.
            </div>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <a href={doctor.profileUrl} target="_blank" rel="noopener noreferrer" className="footer-text">
              Practo Profile
            </a>
          </div>
        </div>
      </div>

      {showTopBtn ? (
        <button
          type="button"
          className="tr-back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <i className="icofont icofont-arrow-up" />
        </button>
      ) : null}
    </footer>
  );
};

export default Footer;
