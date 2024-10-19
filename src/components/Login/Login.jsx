import GoogleBtn from './GoogleBtn';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Link } from 'components/Register/Register.styled';
import { Title, BtnWrapp, ErrorMsg } from './Login.styled';
import Button from 'components/Shared/Button/Button';
import CustomInput from '../Shared/Input/Input';
import { logIn } from 'redux/operation';
import authSelectors from 'redux/authSelectors';
import { Report } from 'notiflix/build/notiflix-report-aio';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Loginform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatusCode = useSelector(authSelectors.selectErrorCode);
  const isUserLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      console.log('User loggined', isUserLoggedIn);
      navigate('/chat');
    }
  }, [isUserLoggedIn]);

  const handleSubmit = async values => {
    const { email, password } = values;
    const response = await dispatch(logIn({ email, password }));

    if (loginStatusCode === 403) {
      Report.failure(' Failure', 'Email not verified', 'Ok');
    }
    if (loginStatusCode === 401) {
      Report.failure(' Failure', 'Email or password is wrong', 'Ok');
    }
  };

  return (
    <div>
      <Container>
        <Title>Login</Title>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {formik => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
              dirty,
            } = formik;
            return (
              <Form action="login" onSubmit={handleSubmit}>
                {errors.email && touched.email ? <ErrorMsg>{errors.email}</ErrorMsg> : null}
                <CustomInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                <CustomInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <BtnWrapp>
                  <Button type="submit" disabled={!(dirty && isValid)}>
                    login
                  </Button>
                  <GoogleBtn />
                </BtnWrapp>
                <p>
                  Don't have an account?
                  <span>
                    <Link to="/register">REGISTER</Link>
                  </span>
                </p>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
};

export default Loginform;
