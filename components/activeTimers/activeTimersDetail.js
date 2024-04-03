import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";
import Buttons from "../shared/buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ActiveTimersDetail({
  item,
  modalToggler,
  secondsToTimeString,
  totalSeconds,
  isRunning,
  handlePlayPause,
  handleStop,
}) {
  const buttons = [
    !isRunning ? { name: "play" } : { name: "pause" },
    { name: "stop" },
  ];

  return (
    <View
      style={[
        styles.modal,
        {
          backgroundColor: isRunning ? Colors.PURPLE : Colors.DARK_GRAY,
        },
      ]}
    >
      <TouchableOpacity onPress={modalToggler}>
        <Text style={styles.close}>&#10799;</Text>
      </TouchableOpacity>
      <Header title={item.name} icon={false} />
      <View style={styles.countDownTime}>
        <Text style={styles.value}>{secondsToTimeString(totalSeconds)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Buttons
            key={index}
            size={60}
            bgColor={
              button.name === "play"
                ? isRunning
                  ? Colors.DARK_GRAY
                  : Colors.PURPLE
                : button.name === "pause"
                ? isRunning
                  ? Colors.DARK_GRAY
                  : Colors.GRAY
                : Colors.RED
            }
            event={button.name}
            handlePlayPause={handlePlayPause}
            handleStop={handleStop}
          >
            <MaterialCommunityIcons
              name={button.name}
              size={50}
              color={Colors.LIGHT}
            />
          </Buttons>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  close: {
    textAlign: "right",
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: -90,
    color: Colors.LIGHT,
    fontSize: 50,
  },
  countDownTime: {
    marginVertical: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    color: Colors.LIGHT,
    fontFamily: "Light",
    fontSize: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
