import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'must be at least 3 characters long')
    .required('is required'),
  password: yup
    .string()
    .min(3, 'must be at least 3 characters long')
    .required('is required'),
});

const onSubmit = (values) => console.log(values);

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid }) => (
        <SignInForm onSubmit={handleSubmit} isValid={isValid} />
      )}
    </Formik>
  );
};

export default SignIn;
