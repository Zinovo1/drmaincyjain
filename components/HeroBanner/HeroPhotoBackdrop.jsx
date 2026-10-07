"use client";

import LottieGraphic from "@/components/LottieGraphic/LottieGraphic";

const HeroPhotoBackdrop = () => (
  <div className="tr-hero-photo-backdrop" aria-hidden="true">
    <span className="tr-hero-orbit tr-hero-orbit--outer" />
    <span className="tr-hero-orbit tr-hero-orbit--inner" />
    <svg className="tr-hero-orbit-svg" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="88" className="tr-hero-orbit-stroke" />
      <circle cx="100" cy="100" r="72" className="tr-hero-orbit-stroke tr-hero-orbit-stroke--soft" />
    </svg>
    <LottieGraphic
      src="/lottie/hero-pulse-ring.json"
      className="tr-hero-photo-lottie"
      fallbackClassName="tr-hero-photo-lottie-fallback"
    />
  </div>
);

export default HeroPhotoBackdrop;
