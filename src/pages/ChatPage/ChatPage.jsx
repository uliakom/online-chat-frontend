import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';
import darkLogo from 'images/logo/logo-dark-theme.png';
import NavBar from 'components/NavBar';
import Logs from 'components/Logs';
import { Container, ChatContainer, LogsContainer, MessagesContainer } from './Chat.styled';

const ChatPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getUserToken);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <Container>
      <NavBar />
      <ChatContainer>
        <LogsContainer>
          <div>
            <img src={darkLogo} alt="logo" width="80" />
          </div>
          <Logs />
        </LogsContainer>
        <MessagesContainer></MessagesContainer>
      </ChatContainer>
    </Container>
  );
};

export default ChatPage;
