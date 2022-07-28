import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Subheading from './Subheading';
import * as yup from 'yup';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    width: 280,
    height: 48,
    marginVertical: 5,
  },
  formButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

const SignInForm = ({ onSubmit }) => {
  const stylesInput = [styles.formControl, styles.formInput];
  const stylesButton = [styles.formControl, styles.formButton];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid }) => (
        <View style={styles.formContainer}>
          <FormikTextInput
            style={stylesInput}
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            style={stylesInput}
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Pressable
            onPress={handleSubmit}
            style={stylesButton}
            disabled={!isValid}
          >
            <Subheading color="white">Sign in</Subheading>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
