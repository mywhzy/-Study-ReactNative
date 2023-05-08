## Learn React Naviagation

- [x] 5.2 App.tsx 내부 onPress 파라미터 에러 해결하기
      => onPress가 현재 HeaderBackButton Props에 속하지 않음(사용되지 않음) 동일 역할 수행하는 navigation.pop()으로 대체
- [x] 5.2 route.params.id type 미정의에 따른 에러 => RootStackParamList type 지정 후 createNativeStackNavigator호출 시 제네릭으로 명시

- [x] 5.3.1 drawerPosition props 에러 해결 => screenOptions Props 내부 옵션으로 변경된 것으로 확인

- [x] bottomTabNavigator -> tabBarOptions 에러 => screenOptions Props의 tabBar~로 수정

- [x] MaterialBottomTabs -> Tab.screen 내부 tabBarColor Props 적용 에러 => react-native-paper 버전 5.7.2 -> 4.7.2 다운그레이드로 해결

- [ ] screens 폴더 내부 파일 tsx로 변경하기

### 5.4 Navigation Hooks

Screen으로 사용되지 않는 다른 컴포넌트에서 navigation, route Props 사용 불가에 따른 구현 방법

1. onPress 함수를 Props로 받아오기
2. Props에 navigation 객체를 바로 넘겨주기
3. useNavigation Hook 사용 => Screen으로 사용되지 않는 컴포넌트에서도 navigation 객체 사용

- useNavigation: Screen으로 사용되고 있지 않은 컴포넌트에서도 navigation 객체 사용 가능
- useRoute: Screen이 아닌 컴포넌트에서 route 객체 사용 가능
- useFocusEffect: 다른 화면을 열었다가 돌아왔을 때 특정 작업 하고 싶은 경우 / 현재 화면에서 다른 화면으로 넘어갈 때 특정 작업 하고 싶은 경우 사용 +useCallback과 꼭! 같이 사용해야한다. 컴포넌트 리렌더링 시 useFocusEffect에 등록한 함수 호출되는 것 방지
