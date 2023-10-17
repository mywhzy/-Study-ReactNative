import { useState, useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';

export type WriteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Write'
>;

const WriteScreen = ({ navigation }: WriteScreenProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { onCreate } = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
