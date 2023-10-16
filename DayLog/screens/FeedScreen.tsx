import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

export type FeedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Feeds'
>;

const FeedScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedScreen;
