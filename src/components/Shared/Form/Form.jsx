import { Formik, Form } from 'formik';
import { Container, Title } from './Form.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operation';

const StyledForm = ({ initialValues, children, schema, action }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    switch (action) {
      case 'registration':
        dispatch(register(initialValues));
        break;
      case 'login':
        console.log(initialValues);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      {action === 'registration' ? <Title>Registration</Title> : <Title>Login</Title>}
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {formik => <Form>{children}</Form>}
      </Formik>
    </Container>
  );
};

export default StyledForm;
