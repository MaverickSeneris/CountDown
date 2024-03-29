import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from "../shared/buttons";


export default function PresetTimers({ item }) {
  const presetButtons = [
    { name: "add", icon: "add-alarm", bgColor: Colors.PURPLE },
    { name: "delete", icon: "delete", bgColor: Colors.RED },
  ];

  return (
    <View style={styles.presetTimerContent}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </TouchableOpacity>
      {presetButtons.map((button) => (
        <Buttons bgColor={button.name === "add" ? Colors.PURPLE : Colors.RED}>
          <MaterialIcons name={button.icon} color={Colors.LIGHT} size={23}/>
        </Buttons>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  presetTimerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: Colors.LIGHT_GRAY,
    fontSize: 24,
    fontFamily: "Regular",
  },
  value: {
    fontSize: 55,
    fontFamily: "Light",
    color: Colors.LIGHT,
  },
});
