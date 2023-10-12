import Register from 'components/Register/Register';
import Login from 'components/Login';
import Logo from 'components/Logo';
import { Container } from './Auth.styled';
import { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <Container>
      <Logo />
      <h3>{isSignUp ? 'Login' : 'Register'}</h3>
      <Register />
      <Login />
    </Container>
  );
};

export default Auth;
