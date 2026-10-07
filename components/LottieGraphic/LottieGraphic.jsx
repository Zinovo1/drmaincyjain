"use client";

import { Lottie } from "lottie-react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const LottieGraphic = ({
  src,
  className = "",
  loop = true,
  fallbackClassName = "",
}) => {
  const { ref, inView } = useInView({ rootMargin: "120px" });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduceMotion) {
    return (
      <div
        ref={ref}
        className={`tr-lottie-fallback ${fallbackClassName} ${className}`.trim()}
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={ref} className={`tr-lottie-wrap ${className}`.trim()} aria-hidden="true">
      {inView && src ? (
        <Lottie src={src} loop={loop} autoplay />
      ) : (
        <div className={`tr-lottie-fallback ${fallbackClassName}`.trim()} />
      )}
    </div>
  );
};

export default LottieGraphic;
