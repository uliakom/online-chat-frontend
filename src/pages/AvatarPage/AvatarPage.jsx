import { Container } from './AvatarPage.styled';
import Button from 'components/Shared/Button/Button';

const AvatarPage = () => {
  return (
    <Container>
      <h2>Choose an avatar as your profile picture</h2>
      <Button>SET AS AVATAR</Button>
    </Container>
  );
};

export default AvatarPage;
