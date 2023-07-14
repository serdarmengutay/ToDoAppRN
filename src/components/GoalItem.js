import { View, Text, Pressable } from "react-native";

function GoalItem({ tasks, onDeleteTask, id }) {
  return (
    <View
      style={{
        backgroundColor: "#5e0acc",
        borderRadius: 8,
        marginVertical: 10,
      }}
    >
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({pressed}) =>  pressed && {opacity: 0.5,}}
        onPress={onDeleteTask.bind(this, id)}
      >
        <Text style={{ color: "white", padding: 8 }}>{tasks}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
