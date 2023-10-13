import GoogleBtn from './GoogleBtn';
import * as Yup from 'yup';

import { Container, Link } from 'components/Register/Register.styled';
import { BtnWrapp } from './Login.styled';
import StyledForm from 'components/Shared/Form';
import Button from 'components/Shared/Button/Button';
import CustomInput from '../Shared/Input/Input';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Loginform = () => {
  return (
    <div>
      <Container>
        <StyledForm
          initialValues={{
            email: '',
            password: '',
          }}
          action="login"
          schema={LoginSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <CustomInput type="email" name="email" id="email" placeholder="Email" />

          <CustomInput type="password" name="password" id="password" placeholder="Password" />

          <BtnWrapp>
            <Button type="submit">login</Button>
            <GoogleBtn />
          </BtnWrapp>
          <p>
            Don't have an account?
            <span>
              <Link to="/register">REGISTER</Link>
            </span>
          </p>
        </StyledForm>
      </Container>
    </div>
  );
};

export default Loginform;
