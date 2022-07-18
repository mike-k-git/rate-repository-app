import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryImage from './RepositoryImage';
import Subheading from './Subheading';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
  },
  text: {
    display: 'flex',
    paddingLeft: 12,
    alignItems: 'baseline',
  },
  tag: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    padding: 4,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
});

const RepositoryItemHeader = ({ uri, name, description, language }) => {
  return (
    <View style={styles.container}>
      <RepositoryImage uri={uri} />
      <View style={styles.text}>
        <Subheading>{name}</Subheading>
        <Text color="textSecondary">{description}</Text>
        <View style={styles.tag}>
          <Text color="white">{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemHeader;
