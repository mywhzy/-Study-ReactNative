import { View, Text, Button } from 'react-native';

const SettingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingScreen;
