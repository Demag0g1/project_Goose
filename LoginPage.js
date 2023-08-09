import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import AuthNavigate from './AuthNavigate';

const LoginPage = ({ isLoggedIn, handleLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/calendar/month" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
      <AuthNavigate route="/register" text="Don't have an account? Register" />
    </div>
  );
};

export default LoginPage;
