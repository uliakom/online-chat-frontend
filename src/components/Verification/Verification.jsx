import { Container, Title, ErrorMsg } from './Verification.styled';
import Button from 'components/Shared/Button/Button';
import CustomInput from '../Shared/Input/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const VerifySchema = Yup.object().shape({
  confirmPassword: Yup.number('Confirmation code must be number').required('Required'),
});

const Verification = () => {
  const handleSubmit = values => {};

  return (
    <Container>
      <Title>Verification</Title>
      <Formik
        initialValues={{
          confirmPassword: null,
        }}
        validationSchema={VerifySchema}
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
            <Form action="verification" onSubmit={handleSubmit}>
              {errors.confirmPassword && touched.confirmPassword ? (
                <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
              ) : null}
              <CustomInput
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter verification code"
                autoComplete="off"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type="submit" disabled={!(dirty && isValid)}>
                Verify
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Verification;
