import Login from 'components/Login';
import Logo from 'components/Logo';
import { Container } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <Logo />
      <Login />
    </Container>
  );
};

export default LoginPage;
