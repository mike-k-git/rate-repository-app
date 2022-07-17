import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ menuItem }) => {
  return (
    <Pressable>
      <Text color="white" fontSize="appBar">
        {menuItem}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
