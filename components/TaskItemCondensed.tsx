import { StyleSheet, Text, View } from "react-native";

export default function TaskItemCondensed() {
    // WILL RECEIVE PROPS OF TASK OBJECT
  return (
    <View
      style={styles.container}
    >
      <Text>Task List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      padding: 8,
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'flex-start'
    },
  });