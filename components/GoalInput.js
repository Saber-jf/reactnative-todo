import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

export default function GoalInpute({
  goalInputHandler,
  addGoalHandler,
  modalIsVisible,
  endAddGoalHandler,
}) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/akademi.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="close" onPress={endAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",

    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,

    resizeMode: "contain",
  },
});
