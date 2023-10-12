import { Container } from 'pages/LoginPage/LoginPage.styled';
import RegisterForm from 'components/Register/Register';
import Logo from 'components/Logo';

const RegisterPage = () => {
  return (
    <Container>
      <Logo />
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
