import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();
  // замінити на хук getUser
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('user is logged in');
    } else {
      navigate('/register');
    }
  }, [isLoggedIn]);

  return <div>Chat</div>;
};

export default ChatPage;
