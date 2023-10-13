import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const GoogleBtn = () => {
  const onSuccess = res => {
    console.log('LOGIN success!');
    //   console.log('LOGIN success!', res);
  };

  const onError = res => {
    console.log('Login Failed', res.error);
  };
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          type="standard"
          size="medium"
          text="signin"
          shape="pill"
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleBtn;
