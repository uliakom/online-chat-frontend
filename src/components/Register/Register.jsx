import * as Yup from 'yup';
import { useState } from 'react';
import StyledForm from 'components/Shared/Form';
import Button from 'components/Shared/Button/Button';
import { Container, Link, InputWrapper, IconEye, IconEyeConfirm } from './Register.styled';
import CustomInput from '../Shared/Input/Input';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

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
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const handleClickVisible = () => {
    setVisible(!visible);
  };
  const handleClickVisibleConfirm = () => {
    setVisibleConfirm(!visibleConfirm);
  };

  return (
    <Container>
      <StyledForm
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        action="registration"
        schema={RegisterSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <CustomInput
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          autoComplete="off"
        />
        <CustomInput type="email" name="email" id="email" placeholder="Email" />

        <InputWrapper>
          <CustomInput
            type={visible ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Password"
          />
          <IconEye onClick={handleClickVisible}>{visible ? <ImEye /> : <ImEyeBlocked />}</IconEye>
        </InputWrapper>

        <InputWrapper>
          <CustomInput
            type={visibleConfirm ? 'text' : 'password'}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
          />
          <IconEyeConfirm onClick={handleClickVisibleConfirm}>
            {visibleConfirm ? <ImEye /> : <ImEyeBlocked />}
          </IconEyeConfirm>
        </InputWrapper>
        <Button type="submit">create user</Button>
        <p>
          Already have an account?
          <span>
            <Link to="/login">LOGIN</Link>
          </span>
        </p>
      </StyledForm>
    </Container>
  );
};

export default RegisterForm;
