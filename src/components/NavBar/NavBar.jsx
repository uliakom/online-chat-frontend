import { Container, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Container>
      <StyledLink>Profile</StyledLink>
      <StyledLink>Logout</StyledLink>
    </Container>
  );
};

export default NavBar;
