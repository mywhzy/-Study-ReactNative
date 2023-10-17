# 하루를 기록하는 간단 다이어리 앱 - DayLog

1. 교재 내부에 적힌 tabBarOptions가 아닌 screenOptions 내부 tabBar prefix가 적힌 option을 사용할것!
2. 컴포넌트 내부에서 navigation 기능 이용 시 `const navigation = useNavigation<FeedScreenProps['navigation']>();` **<FeedScreenProps['navigation']** 이런 형태로 이용하기 <<< TypeScript
3. uuid 사용 전 `import 'react-native-get-random-values';` 먼저 해주기
