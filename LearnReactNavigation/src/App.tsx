import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
  Headerless: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerBackVisible: false,
            headerTitle: () => (
              <View>
                <Text>{`상세 정보 - ${route.params.id}`}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
