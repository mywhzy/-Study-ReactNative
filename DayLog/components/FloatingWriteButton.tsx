import { useNavigation } from '@react-navigation/native';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FeedScreenProps } from '../screens/FeedScreen';

const FloatingWriteButton = () => {
  const navigation = useNavigation<FeedScreenProps['navigation']>();

  const onPress = () => {
    navigation.navigate('Write');
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{ color: 'white' }}
        onPress={onPress}
      >
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    // iOS 전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 안드로이드 전용 그림자 설정
    elevation: 5,
    overflow: Platform.select({ android: 'hidden' }), // 안드로이드에서 물결 효과 영역 밖에 안 나가게 함. iOS는 hidden일 때 그림자 보이지 않음.
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;
