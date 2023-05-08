import { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import OpenDetailButton from '../compoenents/OpenDetailButton';

const HomeScreen = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, [])
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

export default HomeScreen;
