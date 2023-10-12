import * as Yup from 'yup';
import { useState } from 'react';
import StyledForm from 'components/Shared/Form';
import Button from 'components/Shared/Button/Button';
import { Link } from 'react-router-dom';
import { Container } from './Register.styled';
import CustomInput from '../Shared/Input/Input';

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const RegisterForm = () => {
  return (
    <Container>
      <StyledForm
        initialvalues={{
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
        <form>
          <CustomInput
            type="text"
            name="username"
            id="username"
            placeholder="User name"
            autoComplete="off"
          />
          <CustomInput type="email" name="email" id="email" placeholder="Email" />
          <CustomInput type="password" name="password" id="password" placeholder="password" />
          <Button type="submit">create user</Button>
          <p>
            Already have an account? <Link to="/login">LOGIN.</Link>
          </p>
        </form>
      </StyledForm>
    </Container>
  );
};

export default RegisterForm;
