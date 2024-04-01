import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";
import Card from "../shared/card";

export default function EmptyState({ navigation }) {
  const handleNavigateToCreateTimer = () => {
    navigation.navigate("Your Timers"); // Replace "CreateTimerScreen" with the name of the screen you want to navigate to
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="timer-off-outline"
        size={300}
        color={Colors.DARK_GRAY}
      />
      <Text style={styles.text}>No active timers </Text>

      <TouchableOpacity onPress={handleNavigateToCreateTimer}>
        <Text style={styles.addTimerNav}>+ select a timer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 90,
  },
  text: {
    color: Colors.DARK_GRAY,
    fontFamily: "Regular",
    fontSize: 30,
  },
  addTimerNav: {
    marginTop: 30,
    fontFamily: "Light",
    color: Colors.LIGHT,
    fontSize: 30,
  },
});
