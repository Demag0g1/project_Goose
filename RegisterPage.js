import React from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import AuthNavigate from './AuthNavigate';

const RegisterPage = ({ isLoggedIn, handleRegistration }) => {
  if (isLoggedIn) {
    return <Redirect to="/calendar/month" />;
  }

  return (
    <div>
      <h1>Register Page</h1>
      <RegisterForm onSubmit={handleRegistration} />
      <AuthNavigate route="/login" text="Already have an account? Login" />
    </div>
  );
};

export default RegisterPage;
