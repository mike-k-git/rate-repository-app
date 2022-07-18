import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Subheading from './Subheading';

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

const SignInForm = ({ onSubmit, isValid }) => {
  const stylesInput = [styles.formControl, styles.formInput];
  const stylesButton = [styles.formControl, styles.formButton];
  return (
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
      <Pressable onPress={onSubmit} style={stylesButton} disabled={!isValid}>
        <Subheading color="white">Sign in</Subheading>
      </Pressable>
    </View>
  );
};

export default SignInForm;
