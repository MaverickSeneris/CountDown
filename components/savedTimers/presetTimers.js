import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from "../shared/buttons";
import { useDispatch } from "react-redux";
import { deleteSavedTimer } from "../../redux/actions/actions";

export default function PresetTimers({ item, handleSelectTimer }) {
  const dispatch = useDispatch();
  const presetButtons = [
    { name: "add", icon: "add-alarm" },
    { name: "delete", icon: "delete" },
  ];

  const onAddPress = () => handleSelectTimer(item.key);
  const handleDeleteSavedTimer = () => {
    dispatch(deleteSavedTimer(item.key));
  };

  return (
    <View style={styles.presetTimers}>
      <View style={styles.presetName}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.presetTimerContent}>
        <TouchableOpacity style={styles.valueContent}>
          <Text style={styles.value}>{item.value}</Text>
        </TouchableOpacity>
        {presetButtons.map((button, index) => (
          <Buttons
            key={index}
            bgColor={button.name === "add" ? Colors.PURPLE : Colors.RED}
            event={button.name}
            onAddPress={onAddPress}
            onDeletePress={handleDeleteSavedTimer}
          >
            <MaterialIcons name={button.icon} color={Colors.LIGHT} size={23} />
          </Buttons>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  presetTimers: {
    marginBottom: 12,
  },
  presetName: {
    marginBottom: -8,
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
  valueContent: {
    marginRight: "auto",
  },
  value: {
    fontSize: 55,
    fontFamily: "Light",
    color: Colors.LIGHT,
  },
});
