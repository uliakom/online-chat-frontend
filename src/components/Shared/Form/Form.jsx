import { Formik, Form } from 'formik';
import { Container, Title } from './Form.styled';

const StyledForm = ({ initialValues, children, schema, action }) => {
  return (
    <Container>
      {action === 'registration' ? <Title>Registration</Title> : <Title>Login</Title>}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {formik => <Form>{children}</Form>}
      </Formik>
    </Container>
  );
};

export default StyledForm;
