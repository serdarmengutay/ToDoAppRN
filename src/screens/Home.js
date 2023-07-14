import { View, FlatList, Button } from "react-native";
import React, { useState } from "react";

import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

const Home = () => {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function handleAddTask(task) {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: task,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler()
  }

  function deleteTaskHandler(id) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  return (
    <View style={{ flex: 1,  backgroundColor: '#1e085a', padding: 16 }}>
      <Button title="add new task" color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput onAddGoals={handleAddTask} visible={modalIsVisible} onCancel={endAddGoalHandler}/>}
      <View style={{ flex: 5 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={goals}
          renderItem={({ item }) => (
            <GoalItem
              tasks={item.text}
              onDeleteTask={deleteTaskHandler}
              id={item.id}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
