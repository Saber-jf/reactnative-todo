import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ViewComponent,
  FlatList,
} from "react-native";
import GoalInpute from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHnadler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="ADD New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInpute
        modalIsVisible={modalIsVisible}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        endAddGoalHandler={endAddGoalHandler}
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                onDeleteItem={deleteGoalHnadler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },
});
