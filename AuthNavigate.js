import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavigate = ({ route, text }) => (
  <Link to={route}>{text}</Link>
);

export default AuthNavigate;
