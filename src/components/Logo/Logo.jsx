import { Container, StyledLogo } from './Logo.styled';
import darkLogo from 'images/logo/logo-dark-theme.png';
import whiteLogo from 'images/logo/logo-white-theme.png';

const Logo = ({ theme }) => {
  return (
    <Container>
      <StyledLogo src={darkLogo} alt="logo" />
    </Container>
  );
};

export default Logo;
