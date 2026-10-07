"use client";

import { Lottie } from "lottie-react";
import { useEffect, useState } from "react";

const LottiePlayOnce = ({ src, play, className = "", onComplete }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion && play) {
      onComplete?.();
    }
  }, [reduceMotion, play, onComplete]);

  if (!play || reduceMotion) {
    return null;
  }

  return (
    <div className={`tr-lottie-play-once ${className}`.trim()} aria-hidden="true">
      <Lottie
        src={src}
        loop={false}
        autoplay
        subscriptions={{
          complete: () => onComplete?.(),
        }}
      />
    </div>
  );
};

export default LottiePlayOnce;
