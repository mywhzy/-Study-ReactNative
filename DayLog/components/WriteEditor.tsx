import { useRef, Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export type WriteEditorProps = {
  title: string;
  body: string;
  onChangeTitle: Dispatch<SetStateAction<string>>;
  onChangeBody: Dispatch<SetStateAction<string>>;
};

const WriteEditor = ({
  title,
  body,
  onChangeTitle,
  onChangeBody,
}: WriteEditorProps) => {
  const bodyRef = useRef<TextInput | null>(null);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current?.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1, padding: 16 },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
