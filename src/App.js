import { lazy, Suspense  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global.styles';
import Loader from 'components/Loader';

// const Auth = lazy(() => import('pages/Auth/Auth'));
const ChatPage = lazy(() => import('pages/ChatPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AvatarPage = lazy(() => import('pages/AvatarPage'));

function App() {


  return (
    <BrowserRouter basename="/">
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/setAvatar" element={<AvatarPage />} />
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
