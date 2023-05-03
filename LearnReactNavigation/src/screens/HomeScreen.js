import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() =>
          navigation.push('Detail', {
            id: 1,
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
