import React, { useState, useEffect } from 'react';

const ReviewsSlider = ({ reviews }) => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section>
      <div>
        <h2>Reviews</h2>
        <p>{reviews[currentReview]}</p>
        <div>
          <button onClick={handlePrevReview}>Previous</button>
          <button onClick={handleNextReview}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
