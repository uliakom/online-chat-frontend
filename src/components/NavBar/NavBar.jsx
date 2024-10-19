import { Container, StyledLink, UserName, ExitButton } from './NavBar.styled';
import authSelectors from 'redux/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operation';

const NavBar = () => {
  const userName = useSelector(authSelectors.selectUser);
  const dispatch = useDispatch();
  console.log(userName);

  const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <UserName> {userName?.name} </UserName>
      <StyledLink>Profile</StyledLink>
      <ExitButton onClick={handleLogOut}>Logout</ExitButton>
    </Container>
  );
};

export default NavBar;
