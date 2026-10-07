"use client";

import { useEffect, useState } from "react";
import { doctor } from "@/lib/doctor";
import { useSwipe } from "@/hooks/useSwipe";
import HeroMobilePhoto from "@/components/HeroCarousel/HeroMobilePhoto";

const SLIDE_MS = 5500;

const HeroCarousel = () => {
  const slides = doctor.heroSlides || [];
  const [active, setActive] = useState(0);

  const goTo = (index) => setActive((index + slides.length) % slides.length);
  const goPrev = () => goTo(active - 1);

  const swipe = useSwipe({
    onSwipeLeft: () => setActive((prev) => (prev + 1) % slides.length),
    onSwipeRight: () => setActive((prev) => (prev - 1 + slides.length) % slides.length),
  });

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="hero-carousel banner"
      id="heroBanner"
      onTouchStart={swipe.onTouchStart}
      onTouchEnd={swipe.onTouchEnd}
    >
      <div className="hero-carousel-track">
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={`hero-slide ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <div
              className="hero-slide-bg d-none d-lg-block"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.title}
            />
            <div className="hero-slide-overlay d-none d-lg-block" aria-hidden="true" />

            <div className="container hero-slide-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-xl-7">
                  <div className="block">
                    <div className="hero-mobile-visual d-lg-none">
                      <HeroMobilePhoto src={slide.image} alt={slide.title} />
                    </div>

                    <div className="hero-copy-panel">
                      <div className="divider mb-3" />
                      <span className="text-uppercase text-sm letter-spacing hero-eyebrow">
                        {slide.eyebrow}
                      </span>
                      <h1 className="mb-2 mt-3">{slide.title}</h1>
                      <p className="mb-3 font-weight-bold text-dark hero-subtitle">{slide.subtitle}</p>
                      <p className="mb-3 hero-lead d-none d-lg-block">{slide.text}</p>
                      <p className="mb-3 hero-lead d-lg-none">{slide.mobileText || slide.text}</p>
                      {slide.cta ? (
                        <a href={slide.cta.href} className="btn btn-main-2 btn-icon btn-round-full">
                          {slide.cta.label}
                          <i className="icofont icofont-simple-right ml-2"></i>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
                  <div className="hero-slide-frame">
                    <img src={slide.image} alt="" className="hero-slide-photo" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="hero-carousel-controls">
          <div className="hero-carousel-dots" role="tablist" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.title}`}
                type="button"
                className={`hero-dot ${index === active ? "is-active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === active}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <p className="hero-swipe-hint d-lg-none" aria-hidden="true">
            Swipe to explore
          </p>
        </div>
      ) : null}

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            className="hero-nav hero-nav-prev d-none d-lg-flex"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <i className="icofont icofont-simple-left"></i>
          </button>
          <button
            type="button"
            className="hero-nav hero-nav-next d-none d-lg-flex"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
          >
            <i className="icofont icofont-simple-right"></i>
          </button>
        </>
      ) : null}
    </section>
  );
};

export default HeroCarousel;
