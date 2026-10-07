"use client";

import { useState } from "react";
import { doctor } from "@/lib/doctor";
import { useSwipe } from "@/hooks/useSwipe";

const StarRating = ({ rating = 5 }) => (
  <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`icofont ${i < rating ? "icofont-star" : "icofont-star-shape"}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article className="review-card-grid h-100">
    <div className="review-card-body">
      <div className="review-card-top">
        <span className="review-source-badge review-source-practo">Practo</span>
        {review.recommend ? (
          <span className="review-recommend-badge">
            <i className="icofont icofont-thumbs-up"></i> Recommends
          </span>
        ) : null}
      </div>
      {review.highlight ? (
        <p className="review-highlight-left">&ldquo;{review.highlight}&rdquo;</p>
      ) : null}
      <StarRating rating={review.rating || 5} />
      <h4>{review.title}</h4>
      <p className="review-meta-left">
        {review.patient}
        {review.location ? ` · ${review.location}` : ""}
        {review.when ? ` · ${review.when}` : ""}
      </p>
      <p className="review-text-left mb-0">{review.text}</p>
    </div>
  </article>
);

const Testimonial = () => {
  const reviews = doctor.reviews || [];
  const reviewsUrl = doctor.reviewsUrl || doctor.profileUrl;
  const googleUrl = doctor.googleReviewsUrl;
  const writeUrl = doctor.googleWriteReviewUrl;
  const [activeReview, setActiveReview] = useState(0);

  const goToReview = (index) => setActiveReview((index + reviews.length) % reviews.length);

  const reviewSwipe = useSwipe({
    onSwipeLeft: () => setActiveReview((prev) => (prev + 1) % reviews.length),
    onSwipeRight: () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length),
  });

  return (
    <section className="section section-elegant reviews-section tr-reviews" id="reviews">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center tr-section-head">
            <p className="tr-eyebrow">Kind Words</p>
            <div className="section-title">
              <h2>Loved by our patients</h2>
              <p className="section-lead">
                {reviews.length} verified Practo stories from families who trusted {doctor.shortName}{" "}
                for pregnancy, delivery, and gynaecological care in Gurugram.
              </p>
            </div>
          </div>
        </div>

        <div className="review-stats-row">
          <div className="review-stat">
            <StarRating rating={5} />
            <span>Recommended on Practo</span>
          </div>
          <div className="review-stat">
            <i className="icofont icofont-check-circled"></i>
            <span>{reviews.length} patient stories</span>
          </div>
          <div className="review-stat">
            <i className="icofont icofont-thumbs-up"></i>
            <span>Verified patient reviews</span>
          </div>
        </div>

        <div className="row review-cards-grid d-none d-lg-flex">
          {reviews.map((review) => (
            <div key={review.title} className="col-lg-4 mb-4">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div
          className="review-mobile-carousel d-lg-none"
          onTouchStart={reviewSwipe.onTouchStart}
          onTouchEnd={reviewSwipe.onTouchEnd}
        >
          <ReviewCard review={reviews[activeReview]} />
          <div className="review-mobile-dots" role="tablist" aria-label="Patient reviews">
            {reviews.map((review, index) => (
              <button
                key={review.title}
                type="button"
                className={`review-mobile-dot ${index === activeReview ? "is-active" : ""}`}
                aria-label={`Review ${index + 1}: ${review.title}`}
                aria-selected={index === activeReview}
                onClick={() => goToReview(index)}
              />
            ))}
          </div>
          <p className="review-swipe-hint" aria-hidden="true">
            Swipe for more stories
          </p>
        </div>

        <div className="review-actions-row">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-main btn-round-full"
          >
            View all on Practo
          </a>
          {googleUrl ? (
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-main-2 btn-round-full"
            >
              Google reviews
            </a>
          ) : null}
          {writeUrl ? (
            <a
              href={writeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid-border btn-round-full"
            >
              Write a review
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
