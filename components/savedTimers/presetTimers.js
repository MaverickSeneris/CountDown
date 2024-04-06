import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../styles/theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from "../shared/buttons";
import { useDispatch } from "react-redux";
import { deleteSavedTimer } from "../../redux/actions/actions";
import { presetButtons } from "../../configs/ButtonConfigs";
import NewTimerModal from "./newTimerModal";

export default function PresetTimers({ item, handleSelectTimer }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const onAddPress = () => handleSelectTimer(item.key);
  const handleDeleteSavedTimer = () => {
    dispatch(deleteSavedTimer(item.key));
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
          <View style={{ flex: 1, padding: 100, backgroundColor: Colors.DARK}}>
            <Button onPress={modalToggler} title="CLOSE" />
          </View>
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
