import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity , Modal,  Image} from "react-native";

function GoalInput(props) {
  const [task, setTask] = useState("");

  function handleEnterTask(text) {
    setTask(text);
  }

  function addGoalHandler() {
    props.onAddGoals(task);
    setTask("");
  }


  return(
    <Modal 
    visible={props.visible}
    animationType="slide"
    >
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#311b6b',

    }}
  >
    <Image 
    style={{width: 100, height: 100}}
    source={require('../../assets/images/goal.png')}
    />
    <TextInput
      style={{
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: '#120438',
        borderWidth: 1,
        margin: 16,
        width: "70%",
        height: 40,
        borderRadius: 15,
      }}
      value={task}
      onChangeText={handleEnterTask}
    />
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity
      onPress={addGoalHandler}
      style={{
        backgroundColor: "#5e0acc",
        height: 40,
        width: 100,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5

      }}
    >
      <Text style={{ color: "white" }}>Add a goal</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={props.onCancel}
      style={{
        backgroundColor: "#f31282",
        height: 40,
        width: 100,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5
      }}
    >
      <Text style={{ color: "white" }}>Cancel</Text>
    </TouchableOpacity>
    </View>
  </View>
  </Modal>
  )
}

export default GoalInput;
