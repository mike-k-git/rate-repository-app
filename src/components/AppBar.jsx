import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

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
  const { data, loading } = useQuery(ME);
  if (loading) return null;
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <AppBarTab text="Repositories" to="/" />
        {data.me ? (
          <AppBarTab text="Sign out" to="/signout" />
        ) : (
          <AppBarTab text="Sign in" to="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
