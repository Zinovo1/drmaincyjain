"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar/TopBar";
import { doctor } from "@/lib/doctor";

const NAV_LINKS = [
  { href: "#heroBanner", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/treatments/", label: "Treatments" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#clinic", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("tr-nav-open", menuOpen);
    return () => document.body.classList.remove("tr-nav-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="tr-header">
      <TopBar />
      <nav className="tr-nav" aria-label="Main navigation">
        <div className="container tr-nav-inner">
          <a className="tr-brand" href="/" onClick={closeMenu}>
            <img src={doctor.photo} alt="" className="tr-brand-avatar" />
            <span className="tr-brand-text">
              <span className="tr-brand-name">{doctor.name}</span>
              <span className="tr-brand-sub">
                MBBS · DNB OBGYN · Fellowship in Minimal Access Surgery
              </span>
            </span>
          </a>

          <ul className="tr-nav-links d-none d-lg-flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="tr-nav-actions d-none d-lg-flex">
            <a href="#appoinment" className="tr-btn tr-btn-primary tr-btn-sm">
              Make an Enquiry
            </a>
          </div>

          <button
            type="button"
            className={`tr-nav-toggle d-lg-none ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`tr-mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="tr-mobile-backdrop" onClick={closeMenu} aria-hidden="true" />
        <div className="tr-mobile-panel">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`tel:${doctor.phoneTel}`} className="tr-btn tr-btn-outline btn-block" onClick={closeMenu}>
            Call {doctor.phoneDisplay}
          </a>
          <a href="#appoinment" className="tr-btn tr-btn-primary btn-block mt-2" onClick={closeMenu}>
            Book appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
