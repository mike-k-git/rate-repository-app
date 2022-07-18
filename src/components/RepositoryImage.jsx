import { Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 50,
    height: 50,
  },
});

const RepositoryImage = ({ uri }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri }} />
    </View>
  );
};

export default RepositoryImage;
