import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 4,
  },
});

const AppBarTab = ({ to, text }) => {
  return (
    <View style={styles.tab}>
      <Link to={to}>
        <Text color="white" fontSize="appBar">
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
