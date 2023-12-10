import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operation';
import Button from 'components/Shared/Button/Button';
import Verification from 'components/Verification';
import {
  Container,
  Title,
  Link,
  InputWrapper,
  IconEye,
  IconEyeConfirm,
  ErrorMsg,
} from './Register.styled';
import CustomInput from '../Shared/Input/Input';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { Report } from 'notiflix/build/notiflix-report-aio';

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');

  const handleClickVisible = () => {
    setVisible(!visible);
  };
  const handleClickVisibleConfirm = () => {
    setVisibleConfirm(!visibleConfirm);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, username, password, confirmPassword } = values;

    if (!email || !username || !password) {
      return Report.failure(' Failure', 'Please enter all fields', 'Ok');
    }
    if (confirmPassword !== password) {
      return Report.failure(' Failure', 'Please check password', 'Ok');
    }

    dispatch(register({ username, email, password }));
    setEmail(email);
    resetForm();
    setDisabled(true);
    setVerificationOpen(true);
  };

  return (
    <Container>
      <Title>Registration</Title>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={RegisterSchema}
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
            <Form action="registration" onSubmit={handleSubmit}>
              {errors.username && touched.username ? <ErrorMsg>{errors.username}</ErrorMsg> : null}
              <CustomInput
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                autoComplete="off"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.email && touched.email ? <ErrorMsg>{errors.email}</ErrorMsg> : null}
              <CustomInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.password && touched.password ? <ErrorMsg>{errors.password}</ErrorMsg> : null}
              <InputWrapper>
                <CustomInput
                  type={visible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <IconEye onClick={handleClickVisible}>
                  {visible ? <ImEye /> : <ImEyeBlocked />}
                </IconEye>
              </InputWrapper>

              {errors.confirmPassword && touched.confirmPassword ? (
                <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
              ) : null}
              <InputWrapper>
                <CustomInput
                  type={visibleConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  autoComplete="off"
                />
                <IconEyeConfirm onClick={handleClickVisibleConfirm}>
                  {visibleConfirm ? <ImEye /> : <ImEyeBlocked />}
                </IconEyeConfirm>
              </InputWrapper>

              <Button type="submit" disabled={!(dirty && isValid) && disabled}>
                create user
              </Button>
              <p>
                Already have an account?
                <span>
                  <Link to="/login">LOGIN</Link>
                </span>
              </p>
            </Form>
          );
        }}
      </Formik>
      {verificationOpen && <Verification email={email} />}
    </Container>
  );
};

export default RegisterForm;
