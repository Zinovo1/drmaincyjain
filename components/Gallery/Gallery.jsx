"use client";

import { useCallback, useEffect, useState } from "react";
import { doctor } from "@/lib/doctor";
import { useSwipe } from "@/hooks/useSwipe";

const AUTOPLAY_MS = 6000;

const Gallery = () => {
  const items = doctor.gallery || [];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index) => setActive((index + items.length) % items.length),
    [items.length]
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  const swipe = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev });

  useEffect(() => {
    if (paused || items.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused, items.length]);

  if (!items.length) return null;

  const counter = String(active + 1).padStart(2, "0");
  const total = String(items.length).padStart(2, "0");
  const activeItem = items[active];

  return (
    <section className="tr-section tr-gallery-crystal" id="gallery">
      <div className="container">
        <div className="tr-section-head text-center">
          <p className="tr-eyebrow">Patient moments</p>
          <h2>Delivering Smiles</h2>
          <p className="tr-section-lead">
            Consultations, deliveries, and postpartum care across Gurugram.
          </p>
        </div>

        <div className="tr-gallery-crystal-wrap">
          <div
            className="tr-gallery-crystal-stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={swipe.onTouchStart}
            onTouchEnd={swipe.onTouchEnd}
          >
            {items.map((item, index) => (
              <div
                key={item.src}
                className={`tr-gallery-crystal-slide ${index === active ? "is-active" : ""}`}
                aria-hidden={index !== active}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="tr-gallery-crystal-img"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}

            <span className="tr-gallery-crystal-veil" aria-hidden="true" />
            <span className="tr-gallery-crystal-prism" aria-hidden="true" />

            <div className="tr-gallery-crystal-overlay">
              <span className="tr-gallery-crystal-counter-glass">
                {counter}
                <span className="tr-gallery-crystal-counter-sep">/</span>
                {total}
              </span>

              <p className="tr-gallery-crystal-caption">{activeItem.caption}</p>

              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="tr-gallery-crystal-arrow tr-gallery-crystal-arrow--prev"
                    onClick={goPrev}
                    aria-label="Previous photo"
                  >
                    <i className="icofont icofont-simple-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="tr-gallery-crystal-arrow tr-gallery-crystal-arrow--next"
                    onClick={goNext}
                    aria-label="Next photo"
                  >
                    <i className="icofont icofont-simple-right" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
          </div>

          {items.length > 1 ? (
            <div className="tr-gallery-crystal-controls">
              <div className="tr-gallery-crystal-progress" aria-hidden="true">
                <span
                  key={active}
                  className={`tr-gallery-crystal-progress-bar ${paused ? "is-paused" : ""}`}
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              </div>

              <div
                className="tr-gallery-crystal-dock"
                role="tablist"
                aria-label="Gallery photos"
              >
                {items.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    role="tab"
                    className={`tr-gallery-crystal-thumb ${index === active ? "is-active" : ""}`}
                    aria-label={item.caption}
                    aria-selected={index === active}
                    onClick={() => goTo(index)}
                  >
                    <img src={item.src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>

              <p className="tr-gallery-crystal-hint d-lg-none" aria-hidden="true">
                Swipe to browse
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
