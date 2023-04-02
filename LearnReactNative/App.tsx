import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      {/*왜 이게 나는 디폴트 세팅에 없지?*/}
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
