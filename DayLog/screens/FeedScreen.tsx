import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import LogContext from '../contexts/LogContext';

export type FeedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Feeds'
>;

const FeedScreen = () => {
  const { logs } = useContext(LogContext);
  console.log(JSON.stringify(logs, null, 2));

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
