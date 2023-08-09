import React from 'react';
import AuthSection from './AuthSection';
import Description from './Description';
import ReviewsSlider from './ReviewsSlider';

const MainPage = ({ isLoggedIn, reviews }) => {
  if (isLoggedIn) {
    // Перенаправлення на іншу сторінку для авторизованих користувачів
  }

  return (
    <div>
      <AuthSection />
      <Description />
      <ReviewsSlider reviews={reviews} />
    </div>
  );
};

export default MainPage;
