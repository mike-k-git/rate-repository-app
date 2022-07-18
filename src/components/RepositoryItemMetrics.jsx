import { StyleSheet, View } from 'react-native';
import Subheading from './Subheading';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
});

const formatNumber = (n) => {
  if (n < 1000) return `${n}`;
  return `${(n / 1000).toFixed(1)}k`;
};

const RepositoryItemMetrics = ({ metrics }) => {
  return (
    <View style={styles.container}>
      {Object.keys(metrics).map((k) => (
        <View key={k}>
          <Subheading>{formatNumber(metrics[k])}</Subheading>
          <Text color="textSecondary">{k}</Text>
        </View>
      ))}
    </View>
  );
};

export default RepositoryItemMetrics;
