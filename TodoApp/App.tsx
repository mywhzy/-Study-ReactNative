import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppTodo from "./components/AppTodo";
import Empty from "./components/Empty";

export default function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: "padding" })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          <Empty />
          <AppTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  },
  avoid: {
    flex: 1,
  },
});
