"use client";

import { useState } from "react";
import { getHeroMobileFit } from "@/lib/heroImageFit";

const HeroMobilePhoto = ({ src, alt = "" }) => {
  const [objectPosition, setObjectPosition] = useState("center center");

  const handleLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setObjectPosition(getHeroMobileFit(naturalWidth, naturalHeight).objectPosition);
  };

  return (
    <div className="hero-mobile-photo">
      <img
        src={src}
        alt={alt}
        className="hero-mobile-photo-img"
        style={{ objectPosition }}
        onLoad={handleLoad}
        loading={src.includes("portrait") ? "eager" : "lazy"}
      />
    </div>
  );
};

export default HeroMobilePhoto;
