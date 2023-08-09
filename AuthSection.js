import React from 'react';
import { Link } from 'react-router-dom';

const AuthSection = () => {
  const viewportHeight = window.innerHeight;

  return (
    <section style={{ height: viewportHeight }}>
      <div>
        <h2>Welcome!</h2>
        <p>Explore the app's features by logging in or registering.</p>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </section>
  );
};

export default AuthSection;
