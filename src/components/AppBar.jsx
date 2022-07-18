import { StyleSheet, View, ScrollView } from 'react-native';
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
    // flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
  },
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <AppBarTab text="Repositories" to="/" />
        <AppBarTab text="Sign In" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
