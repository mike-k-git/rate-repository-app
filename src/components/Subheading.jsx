import { StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const { fontSize, fontWeight } = StyleSheet.create({
  fontSize: theme.fontSizes.subheading,
  fontWeight: theme.fontWeights.bold,
});

const Subheading = ({ ...props }) => {
  return <Text fontSize={fontSize} fontWeight={fontWeight} {...props} />;
};

export default Subheading;
