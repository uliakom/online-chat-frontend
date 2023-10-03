
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from 'styles/global.styles';
import Loader from 'components/Loader';




const Auth = lazy(() => import('pages/Auth/Auth'));
const Chat = lazy(() => import('pages/Chat/Chat'));

function App() {
  // замінити на хук getUser
  const [user, setUser] = useState('');  

  return (
    <BrowserRouter basename='/online-chat-frontend/'>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={ user?<Chat/>:<Auth/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
