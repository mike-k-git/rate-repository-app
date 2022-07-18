import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  appBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
  },
  container: {
    padding: 16,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <View style={styles.container}>
        <AppBarTab text="Repositories" to="/" />
        <AppBarTab text="Sign In" to="/signin" />
      </View>
    </View>
  );
};

export default AppBar;
