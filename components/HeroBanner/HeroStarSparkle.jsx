"use client";

import LottieGraphic from "@/components/LottieGraphic/LottieGraphic";

const HeroStarSparkle = () => (
  <span className="tr-hero-star-wrap">
    <LottieGraphic
      src="/lottie/star-sparkle.json"
      className="tr-hero-star-lottie"
      fallbackClassName="tr-hero-star-fallback"
    />
    <span className="tr-star tr-hero-star-icon" aria-hidden="true">
      ✳
    </span>
  </span>
);

export default HeroStarSparkle;
