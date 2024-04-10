import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../styles/theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from "../shared/buttons";
import { useDispatch } from "react-redux";
import { deleteSavedTimer } from "../../redux/actions/actions";
import { presetButtons } from "../../configs/ButtonConfigs";
import TimerModal from "../shared/timerModal/timerModal";

export default function PresetTimers({ item, handleSelectTimer }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const onAddPress = () => {
    handleSelectTimer(item.key)
    alert(`${item.name} added to Active Timers.`)
  };
  // const handleDeleteSavedTimer = () => {
  //   dispatch(deleteSavedTimer(item.key));
  //   alert(`${item.name} deleted.`)
  // };
  const handleDeleteSavedTimer = () => {
    // Show confirmation alert
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${item.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // Execute delete action if user confirms
            dispatch(deleteSavedTimer(item.key));
            alert(`${item.name} deleted.`);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const modalToggler = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.presetTimers}>
      <View style={styles.presetName}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.presetTimerContent}>
        <TouchableOpacity style={styles.valueContent} onPress={modalToggler}>
          <Text style={styles.value}>{item.value}</Text>
        </TouchableOpacity>
        {presetButtons.map((button, index) => (
          <Buttons
            key={index}
            size={45}
            bgColor={button.name === "add" ? Colors.PURPLE : Colors.RED}
            event={button.name}
            onAddPress={onAddPress}
            onDeletePress={handleDeleteSavedTimer}
          >
            <MaterialIcons name={button.icon} color={Colors.LIGHT} size={23} />
          </Buttons>
        ))}
        {/* MODAL */}
        <Modal animationType="slide" visible={modal}>
          <TimerModal
            modalToggler={modalToggler}
            savedTimerDetail={true}
            savedTimerDetailHeader={"Edit Timer"}
            savedTimerDetailName={item.name}
            savedTimerDetailValue={item.value}
            savedTimerDetailKey={item.key}
          />
        </Modal>
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
