import Register from 'components/Register/Register';
import Logo from 'components/Logo';
import { Container } from './Auth.styled';

const Auth = () => {
  return (
    <Container>
      <Logo />
      <Register />
    </Container>
  );
};

export default Auth;
