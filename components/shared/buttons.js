import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Buttons({
  children,
  bgColor,
  onAddPress,
  onDeletePress,
  handlePlayPause,
  handleSaveTimer,
  handleAddtoActiveTimer,
  handleUndoTimerValues,
  handleUpdateTimer,
  savedTimerKey,
  savedTimerDetail,
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
      case "save":
        return savedTimerDetail
          ? handleUpdateTimer(savedTimerKey)
          : handleSaveTimer();
      case "addToActiveTimer":
        return handleAddtoActiveTimer();
      case "undo":
        return handleUndoTimerValues()
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
