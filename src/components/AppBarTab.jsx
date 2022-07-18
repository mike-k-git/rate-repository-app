import { View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ to, text }) => {
  return (
    <View>
      <Link to={to}>
        <Text color="white" fontSize="appBar">
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
