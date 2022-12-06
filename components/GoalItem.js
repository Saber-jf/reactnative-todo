import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View key={itemData.item.key} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
