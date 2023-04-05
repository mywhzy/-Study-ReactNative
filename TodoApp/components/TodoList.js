import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle }) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />} // ListItem사이 구분선 지정 Props
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});

export default TodoList;
