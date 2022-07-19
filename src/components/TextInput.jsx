import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  formInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.formInput, style, error && styles.error];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
