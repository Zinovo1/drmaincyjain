const SectionWave = ({ from = "#faf7f4", to = "#ffffff" }) => (
  <div
    className="tr-section-wave"
    style={{ "--wave-from": from, "--wave-to": to }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none">
      <path d="M0,36 C240,8 480,48 720,28 C960,8 1200,44 1440,24 L1440,56 L0,56 Z" />
    </svg>
  </div>
);

export default SectionWave;
