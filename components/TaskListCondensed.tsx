import { StyleSheet, Text, View } from "react-native";

export default function TaskListCondensed() {
  return (
    <View
      style={styles.container}
    >
      <Text>TaskList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
  });