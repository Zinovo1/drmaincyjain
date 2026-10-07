"use client";

import LottieGraphic from "@/components/LottieGraphic/LottieGraphic";
import { useInView } from "@/hooks/useInView";
import { doctor } from "@/lib/doctor";

const StepCard = ({ step }) => {
  const { ref, inView } = useInView({ rootMargin: "60px" });

  return (
    <div className="col-md-4 mb-4 mb-md-0">
      <article ref={ref} className={`tr-step-card tr-reveal ${inView ? "is-visible" : ""}`}>
        {step.lottie && (
          <LottieGraphic
            src={step.lottie}
            className="tr-step-lottie"
            fallbackClassName="tr-step-lottie-fallback"
          />
        )}
        <span className="tr-step-num">{step.step}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </article>
    </div>
  );
};

const HowItWorks = () => {
  const steps = doctor.howItWorks || [];
  if (!steps.length) return null;

  return (
    <section className="tr-section tr-how" id="how-it-works">
      <div className="container">
        <div className="tr-section-head text-center">
          <p className="tr-eyebrow">Simple &amp; Caring</p>
          <h2>How this works</h2>
          <p className="tr-section-lead">
            Three gentle steps from your first call to personalised care.
          </p>
        </div>
        <div className="row">
          {steps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
