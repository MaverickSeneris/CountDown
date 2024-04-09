import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../header.js";
import TimePicker from "./timePicker.js";
import NameInput from "./nameInput.js";
import Buttons from "../buttons.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { inputButtons } from "../../../configs/ButtonConfigs.js";
import { Colors } from "../../../styles/theme/Colors.js";
import { useDispatch } from "react-redux";
import {
  addSavedTimer,
  addToActiveTimer,
  editSavedTimer,
} from "../../../redux/actions/actions.js";
import getLoopingData from "../../../utils/timeLooping.js";


export default function TimerModal({
  modalToggler,
  savedTimerDetail,
  savedTimerDetailHeader,
  savedTimerDetailValue,
  savedTimerDetailName,
  savedTimerDetailKey,
}) {
  const [inputValue, setInputValue] = useState("");
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);
  const hoursData = getLoopingData(25);
  const minutesSecondsData = getLoopingData(60);

  const dispatch = useDispatch();

  const handleSaveTimer = () => {
    const timerValue = `${hour}:${minute}:${second}`;
    if (validateTimer(timerValue)) {
      const newTimer = {
        key: Math.random().toString(),
        name: inputValue,
        value: timerValue,
      };
      dispatch(addSavedTimer(newTimer));
      modalToggler();
    } else {
      alert('Timer value must be at least 00:00:01');
    }
  };
  
  const handleAddtoActiveTimer = () => {
    const timerValue = `${hour}:${minute}:${second}`;
    if (validateTimer(timerValue)) {
      const newTimer = {
        key: Math.random().toString(),
        name: inputValue,
        value: timerValue,
      };
      dispatch(addToActiveTimer(newTimer));
      modalToggler();
    } else {
      alert('Timer value must be at least 00:00:01');
    }
  };
  
  const handleUpdateTimer = () => {
    const timerValue = `${hour}:${minute}:${second}`;
    if (validateTimer(timerValue)) {
      const updatedTimer = {
        name: inputValue,
        value: timerValue,
        key: savedTimerDetailKey,
      };
      dispatch(editSavedTimer(savedTimerDetailKey, updatedTimer));
      modalToggler();
      // console.log("UPDATED TIMER: ", updatedTimer);
    } else {
      alert('Timer value must be at least 00:00:01');
    }
  };
  
  const validateTimer = (timerValue) => {
    const parts = timerValue.split(':').map(part => parseInt(part));
    const [hours, minutes, seconds] = parts;
    return hours > 0 || minutes > 0 || seconds >= 1;
  };
  

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const selectedHour = (hourValue) => {
    // console.log("hour: " + hourValue);
    setHour(hourValue);
  };

  const selectedMinute = (minuteValue) => {
    console.log("minute: " + minuteValue);
    setMinute(minuteValue);
  };
  const selectSecond = (secondValue) => {
    // console.log("second: " + secondValue);
    setSecond(secondValue);
  };

  const renderHourItem = ({ item }) => (
    <Text
      style={[styles.item, item === selectedHour && { color: Colors.LIGHT }]}
      onPress={() => selectedHour(item)}
    >
      {item}
    </Text>
  );

  const renderMinuteSecondItem = ({ item }) => (
    <Text
      style={[styles.item, item === selectedMinute && { color: Colors.LIGHT }]}
      onPress={() => selectedMinute(item)}
    >
      {item}
    </Text>
  );

  const renderSecondItem = ({ item }) => (
    <Text
      style={[styles.item, item === selectSecond && { color: Colors.LIGHT }]}
      onPress={() => selectSecond(item)}
    >
      {item}
    </Text>
  );

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={modalToggler}>
        <Text style={styles.close}>&#10799;</Text>
      </TouchableOpacity>
      <Header
        title={savedTimerDetail ? savedTimerDetailHeader : "Add Timer"}
        logoName={"alarm-plus"}
        icnBgColor={Colors.RED}
        icnColor={Colors.LIGHT}
        icon={true}
      />
      <NameInput
        title={savedTimerDetail ? savedTimerDetailName : "Title"}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        savedTimerDetail={savedTimerDetail}
        savedTimerDetailName={savedTimerDetailName}
      />
      <TimePicker
        hoursData={hoursData}
        renderHourItem={renderHourItem}
        renderMinuteSecondItem={renderMinuteSecondItem}
        renderSecondItem={renderSecondItem}
        minutesSecondsData={minutesSecondsData}
        selectedHour={selectedHour}
        selectedMinute={selectedMinute}
        selectSecond={selectSecond}
      />
      <View style={styles.buttonContainer}>
        {inputButtons.map((item, index) => {
          return (
            <Buttons
              bgColor={item.bgColor}
              key={index}
              size={50}
              event={savedTimerDetail ? "edit" : item.name && item.name}
              handleSaveTimer={handleSaveTimer}
              handleAddtoActiveTimer={handleAddtoActiveTimer}
              handleUpdateTimer={handleUpdateTimer}
              savedTimerKey={savedTimerDetailKey}
            >
              <MaterialCommunityIcons
                name={item.icon}
                color={item.iconColor}
                size={35}
              />
            </Buttons>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
  close: {
    textAlign: "right",
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: -90,
    color: Colors.LIGHT,
    fontSize: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK,
    marginBottom: 170,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.DARK_GRAY,
  },
  item: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.DARK_GRAY,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
});


