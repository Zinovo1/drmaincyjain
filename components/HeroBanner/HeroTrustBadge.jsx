"use client";

import LottieGraphic from "@/components/LottieGraphic/LottieGraphic";

const HeroTrustBadge = ({ experienceYears }) => (
  <div className="tr-hero-badge-wrap">
    <LottieGraphic
      src="/lottie/hero-pulse-ring.json"
      className="tr-hero-badge-ring"
      fallbackClassName="tr-hero-badge-ring-fallback"
    />
    <div className="tr-hero-badge">
      <span className="tr-star tr-hero-badge-star" aria-hidden="true">
        ✳
      </span>
      <span className="tr-hero-badge-label">
        {experienceYears}+ yrs
        <small>Trusted care</small>
      </span>
    </div>
  </div>
);

export default HeroTrustBadge;
