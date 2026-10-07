import { doctor } from "@/lib/doctor";

const TopBar = () => (
  <div className="tr-topbar">
    <div className="container tr-topbar-inner">
      <div className="tr-topbar-contact">
        <a href={`tel:${doctor.phoneTel}`}>
          <i className="icofont icofont-phone" aria-hidden="true" />
          {doctor.phoneDisplay}
        </a>
        <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <i className="icofont icofont-brand-whatsapp" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <a href="#appoinment" className="tr-topbar-cta">
        Book an appointment
      </a>
    </div>
  </div>
);

export default TopBar;
