import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App = () => {
  // Додайте логіку стану авторизації і дані про відгуки
  const isLoggedIn = false; // Замініть на логіку авторизації
  const reviews = ['Відгук 1', 'Відгук 2', 'Відгук 3']; // Додайте дані відгуків з серверу

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/register">
          <RegisterPage isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/">
          <MainPage isLoggedIn={isLoggedIn} reviews={reviews} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
