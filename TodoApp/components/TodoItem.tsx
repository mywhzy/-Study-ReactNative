import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface TodoItemProps {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem = ({ id, text, done, onToggle, onRemove }: TodoItemProps) => {
  const remove = () => {
    Alert.alert(
      "삭제", // 제목
      "정말로 삭제하시겠어요?", // 내용
      [
        // 버튼 배열
        { text: "취소", onPress: () => {}, style: "cancel" },
        { text: "삭제", onPress: () => onRemove(id), style: "destructive" },
      ],
      {
        // 옵션 객체
        cancelable: true, // 안드로이드에서 Alert 바깥 영역 터치 or back 버튼 클릭 시 적용되는 옵션
        onDismiss: () => {},
      }
    );
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require("../assets/icons/check_white/check_white.png")}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#26a69a",
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26a69a",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#212121",
  },
  lineThrough: {
    color: "#9e9e9e",
    textDecorationLine: "line-through",
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
