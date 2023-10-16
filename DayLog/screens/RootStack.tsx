import MainTab from './MainTab';
import WriteScreen from './WriteScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
