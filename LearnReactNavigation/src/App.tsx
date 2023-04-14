import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        // Drawer 컴포넌트 나타나는 영역에 다른 UI 보여주고 싶은 경우
        /*  drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              onPress={() => navigation.closeDrawer()}
              title="Drawer 닫기"
            />
          </SafeAreaView>
        )}  */
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: '설정' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
