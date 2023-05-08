import { registerRootComponent } from 'expo';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const nameMap = {
  //nameMap: {[key:string]:string} === Record<string,string> 근데 string이란 type의 범위가 매우 넓기에 얘보다 routeName 자체의 범위를 좁히는게 낫다.
  Home: '홈',
  Search: '검색',
  Notification: '알림',
  Message: '메시지',
};

type KeyOfNameMap = keyof typeof nameMap;

const getHeaderTitle = (route: RouteProp<ParamListBase, 'Main'>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  return nameMap[routeName as KeyOfNameMap];
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({ route }) => ({ title: getHeaderTitle(route) })}
          // MaterialTopTab은 header 보여주지 않으므로 headerShown:flase 옵션 제거
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
