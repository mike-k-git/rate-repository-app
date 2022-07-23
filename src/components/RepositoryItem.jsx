import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryItemHeader from './RepositoryItemHeader';
import RepositoryItemMetrics from './RepositoryItemMetrics';

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.white,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item} testID="repositoryItem">
      <RepositoryItemHeader
        uri={item.ownerAvatarUrl}
        name={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RepositoryItemMetrics
        metrics={{
          stars: item.stargazersCount,
          forks: item.forksCount,
          reviews: item.reviewCount,
          rating: item.ratingAverage,
        }}
      />
    </View>
  );
};

export default RepositoryItem;
