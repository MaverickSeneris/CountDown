import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Buttons({
  children,
  bgColor,
  onAddPress,
  onDeletePress,
  handlePlayPause,
  handleStop,
  event,
  size,
}) {
  const handlePress = () => {
    switch (event) {
      case "add":
        return onAddPress();
      case "delete":
        return onDeletePress();
      case "play":
      case "pause":
        return handlePlayPause();
      case "stop":
        return handleStop();
      default:
        return;
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        { backgroundColor: bgColor, width: size, height: size },
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 10,
  },
});
