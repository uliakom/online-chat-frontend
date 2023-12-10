import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';

const ChatPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getUserToken);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/register');
    }
  }, [isLoggedIn]);

  return <div>Chat</div>;
};

export default ChatPage;
