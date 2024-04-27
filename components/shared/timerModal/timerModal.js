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
  addToActiveTimer,
  editSavedTimer,
} from "../../../redux/actions/actions.js";
import {
  getLoopingData,
  handleSaveTimer,
  handleAddtoActiveTimer,
} from "../../../lib/utils.ts";

export default function TimerModal({
  modalToggler,
  savedTimerDetail,
  savedTimerDetailHeader,
  savedTimerDetailName,
  savedTimerDetailKey,
}) {
  const [inputValue, setInputValue] = useState(savedTimerDetailName || "");
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);
  const hoursData = getLoopingData(25);
  const minutesSecondsData = getLoopingData(60);

  const dispatch = useDispatch();

  const handleAddtoActiveTimer = () => {
    const timerValue = `${hour}:${minute}:${second}`;
    if (validateTimer(timerValue)) {
      const newTimer = {
        key: Math.random().toString(),
        name: inputValue,
        value: timerValue,
      };
      dispatch(addToActiveTimer(newTimer));
      alert(`${newTimer.name} added to Active Timer`);
      modalToggler();
    } else {
      alert("Timer value must be at least 00:00:01");
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
      alert(`${updatedTimer.name} updated.`);
      modalToggler();
    } else {
      alert("Timer value must be at least 00:00:01");
    }
  };

  const handleUndoTimerValues = () => {
    setInputValue("");
    alert("Timer reset.");
  };

  const validateTimer = (timerValue) => {
    const parts = timerValue.split(":").map((part) => parseInt(part));
    const [hours, minutes, seconds] = parts;
    return (
      !isNaN(hours) &&
      !isNaN(minutes) &&
      !isNaN(seconds) &&
      hours >= 0 &&
      minutes >= 0 &&
      seconds >= 0
    );
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const selectedHour = (hourValue) => {
    if (hourValue !== undefined) {
      setHour(hourValue);
    } else {
      return hour; // Return the selected hour value
    }
  };

  const selectedMinute = (minuteValue) => {
    if (minuteValue !== undefined) {
      setMinute(minuteValue);
    } else {
      return minute; // Return the selected minute value
    }
  };

  const selectedSecond = (secondValue) => {
    if (secondValue !== undefined) {
      setSecond(secondValue);
    } else {
      return second; // Return the selected second value
    }
  };

  const renderHourItem = ({ item }) => {
    const selectedHourValue = selectedHour();
    return (
      <Text
        style={[
          styles.item,
          item === selectedHourValue && {
            color: Colors.LIGHT,
            fontFamily: "Regular",
          },
        ]}
        onPress={() => selectedHour(item)}
      >
        {item}
      </Text>
    );
  };

  const renderMinuteSecondItem = ({ item }) => {
    const selectedMinuteValue = selectedMinute();
    return (
      <Text
        style={[
          styles.item,
          item === selectedMinuteValue && {
            color: Colors.LIGHT,
            fontFamily: "Regular",
          },
        ]}
        onPress={() => selectedMinute(item)}
      >
        {item}
      </Text>
    );
  };

  const renderSecondItem = ({ item }) => {
    const selectedSecondValue = selectedSecond();
    return (
      <Text
        style={[
          styles.item,
          item === selectedSecondValue && {
            color: Colors.LIGHT,
            fontFamily: "Regular",
          },
        ]}
        onPress={() => selectedSecond(item)}
      >
        {item}
      </Text>
    );
  };

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
        selectSecond={selectedSecond}
      />
      <View style={styles.buttonContainer}>
        {inputButtons.map((item, index) => {
          return (
            <Buttons
              bgColor={item.bgColor}
              key={index}
              size={50}
              event={item.name && item.name}
              handleSaveTimer={handleSaveTimer}
              handleAddtoActiveTimer={handleAddtoActiveTimer}
              handleUpdateTimer={handleUpdateTimer}
              handleUndoTimerValues={handleUndoTimerValues}
              savedTimerKey={savedTimerDetailKey}
              savedTimerDetail={savedTimerDetail}
              hour={hour}
              minute={minute}
              second={second}
              modalToggler={modalToggler}
              inputValue={inputValue}
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
    fontFamily: "ExtraLight",
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
