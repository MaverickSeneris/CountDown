import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addSavedTimer, addToActiveTimer } from "../../redux/actions/actions";

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
  hour,
  minute,
  second,
  modalToggler,
  inputValue,
}) {
  const dispatch = useDispatch();

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
          : handleSaveTimer(
              hour,
              minute,
              second,
              inputValue,
              addSavedTimer,
              dispatch,
              modalToggler
            );
      case "addToActiveTimer":
        return handleAddtoActiveTimer(
          hour,
          minute,
          second,
          inputValue,
          dispatch,
          modalToggler,
          addToActiveTimer
        );
      case "undo":
        return handleUndoTimerValues();
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
