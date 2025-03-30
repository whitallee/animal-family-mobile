import TaskListCondensed from "@/components/TaskListCondensed";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#25292e',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TaskListCondensed />
    </View>
  );
}
