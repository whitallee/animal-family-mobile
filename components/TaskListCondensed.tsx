import { StyleSheet, Text, View } from "react-native";
import TaskItemCondensed from "./TaskItemCondensed";

export default function TaskListCondensed() {
  return (
    <View
      style={styles.container}
    >
      <TaskItemCondensed />
      <TaskItemCondensed />
      <TaskItemCondensed />
      <TaskItemCondensed />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#8ca87c',
      alignItems: 'center',
      padding: 8,
      margin: 32,
      borderRadius: 8,
      width: 320
    },
  });