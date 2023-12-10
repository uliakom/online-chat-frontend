import { Container, Title, ErrorMsg } from './Verification.styled';
import Button from 'components/Shared/Button/Button';
import CustomInput from '../Shared/Input/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { verifyMail } from 'redux/operation';
import authSelectors from 'redux/authSelectors';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useNavigate } from 'react-router-dom';

const VerifySchema = Yup.object().shape({
  verificationCode: Yup.string().required('Required'),
});

const Verification = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifyErrorCode = useSelector(authSelectors.selectVerifyErrorCode);

  const handleSubmit = values => {
    const { verificationCode } = values;
    dispatch(verifyMail({ email, verificationCode }));
    if (verifyErrorCode === 404) {
      Report.failure(' Failure', 'Email not found', 'Ok');
    }
    if (verifyErrorCode === 400) {
      Report.failure(' Failure', 'Code is not valid', 'Ok');
    }
    if (verifyErrorCode === 204) {
      Report.success('Succsess', 'User is verified. Please login', 'Ok');
      navigate('/login');
    }
  };

  return (
    <Container>
      <Title>Verification</Title>
      <Formik
        initialValues={{
          verificationCode: null,
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
              {errors.verificationCode && touched.verificationCode ? (
                <ErrorMsg>{errors.verificationCode}</ErrorMsg>
              ) : null}
              <CustomInput
                type="text"
                name="verificationCode"
                id="verificationCode"
                placeholder="Enter verification code"
                autoComplete="off"
                value={values.verificationCode}
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
