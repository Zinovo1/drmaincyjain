"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import LottiePlayOnce from "@/components/LottieGraphic/LottiePlayOnce";
import { doctor } from "@/lib/doctor";

const Appoinment = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Pregnancy / antenatal consult",
    date: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingWhatsAppUrl, setPendingWhatsAppUrl] = useState("");
  const whatsAppOpenedRef = useRef(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openWhatsApp = useCallback((url) => {
    if (whatsAppOpenedRef.current) return;
    whatsAppOpenedRef.current = true;
    window.open(url, "_blank", "noopener,noreferrer");
    setShowSuccess(false);
    setPendingWhatsAppUrl("");
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Appointment request for ${doctor.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date || "Flexible"}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");
    const url = `https://api.whatsapp.com/send/?phone=${doctor.phoneTel.replace("+", "")}&text=${encodeURIComponent(text)}`;
    whatsAppOpenedRef.current = false;
    setPendingWhatsAppUrl(url);
    setShowSuccess(true);
  };

  const onSuccessComplete = useCallback(() => {
    if (pendingWhatsAppUrl) {
      openWhatsApp(pendingWhatsAppUrl);
    }
  }, [openWhatsApp, pendingWhatsAppUrl]);

  useEffect(() => {
    if (!showSuccess || !pendingWhatsAppUrl) return undefined;
    const fallback = setTimeout(onSuccessComplete, 2400);
    return () => clearTimeout(fallback);
  }, [showSuccess, pendingWhatsAppUrl, onSuccessComplete]);

  return (
    <section className="section appoinment" id="appoinment">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appoinment-content">
              <img
                src={doctor.photoConsult || doctor.photo}
                alt={`${doctor.name} in consultation`}
                className="img-fluid"
              />
              <div className="emergency">
                <h2 className="text-lg">
                  <i className="icofont icofont-phone-circle text-lg"></i>
                  <a href={`tel:${doctor.phoneTel}`} className="text-white">
                    {doctor.phoneDisplay}
                  </a>
                </h2>
              </div>
            </div>
            <p className="mt-3 small">
              <strong>{doctor.hospital}</strong>
              <br />
              {doctor.address}
              <br />
              OPD: {doctor.opd}
            </p>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap mt-5 mt-lg-0 tr-appoinment-form-wrap">
              {showSuccess && (
                <div className="tr-appoinment-success" role="status" aria-live="polite">
                  <LottiePlayOnce
                    src="/lottie/checkmark-success.json"
                    play={showSuccess}
                    className="tr-appoinment-success-lottie"
                    onComplete={onSuccessComplete}
                  />
                  <p>Opening WhatsApp…</p>
                </div>
              )}
              <h2 className="mb-2 title-color">Book appointment</h2>
              <p className="mb-4">
                Send a WhatsApp appointment request using the form below, or call{" "}
                <a href={`tel:${doctor.phoneTel}`}>{doctor.phoneDisplay}</a>.
              </p>
              <form className="appoinment-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="service"
                        value={form.service}
                        onChange={onChange}
                      >
                        <option>Pregnancy / antenatal consult</option>
                        <option>Pre & post delivery care</option>
                        <option>Gynaecology consult</option>
                        <option>Laparoscopic surgery</option>
                        <option>Infertility counselling</option>
                        <option>Women’s wellness screening</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="date"
                        type="date"
                        className="form-control"
                        value={form.date}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        required
                        value={form.name}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Phone number"
                        required
                        value={form.phone}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Briefly describe your concern"
                    value={form.message}
                    onChange={onChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-main btn-round-full">
                  Send via WhatsApp
                  <i className="icofont icofont-simple-right ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
