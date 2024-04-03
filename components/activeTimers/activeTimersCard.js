import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Card from "../shared/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";
import Buttons from "../shared/buttons";
import { deleteActiveTimer } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Header from "../shared/header";
import ActiveTimersDetail from "./activeTimersDetail";

const timeStringToSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const secondsToTimeString = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

export default ActiveTimersCard = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(
    timeStringToSeconds(item.value)
  );
  const [isRunning, setIsRunning] = useState(false);
  const timerInterval = useRef(null);

  const buttons = [
    !isRunning ? { name: "play" } : { name: "pause" },
    { name: "stop" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning) {
      timerInterval.current = setInterval(() => {
        console.log("Decrementing totalSeconds");
        setTotalSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(timerInterval.current);
            setIsRunning(false);
            console.log(`${item.name} has elapsed, resetting`);
            return timeStringToSeconds(item.value);
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerInterval.current);
    }

    return () => clearInterval(timerInterval.current);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      console.log("Resetting totalSeconds");
      setTotalSeconds(timeStringToSeconds(item.value));
    }
  }, [item]);

  const handlePlayPause = () => {
    setIsRunning((prevState) => {
      prevState
        ? console.log(item.name, "timer is paused")
        : console.log(item.name, "timer is running");
      return !prevState;
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    console.log(item.name, "stopping timer and resetting");
    setTotalSeconds(timeStringToSeconds(item.value));
  };

  const handleDeleteActiveTimer = () => {
    dispatch(deleteActiveTimer(item.key));
  };

  const modalToggler = () => {
    setModal(!modal);
  };

  return (
    <Card
      backgroundColor={isRunning ? Colors.PURPLE : Colors.DARK_GRAY}
      modalToggler={modalToggler}
      modal={true}
    >
      <View style={styles.topContent}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity onPress={handleDeleteActiveTimer}>
          <MaterialCommunityIcons
            name="close-circle-outline"
            color={Colors.LIGHT}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.value}>{secondsToTimeString(totalSeconds)}</Text>
        {buttons.map((button, index) => (
          <Buttons
            key={index}
            size={35}
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
              size={30}
              color={Colors.LIGHT}
            />
          </Buttons>
        ))}
      </View>
      <Modal style={styles.modalContent} visible={modal} animationType="slide">
        <ActiveTimersDetail
          item={item}
          modalToggler={modalToggler}
          secondsToTimeString={secondsToTimeString}
          totalSeconds={totalSeconds}
          isRunning={isRunning}
          handlePlayPause={handlePlayPause}
          handleStop={handleStop}
        />
      </Modal>
    </Card>
  );
};

const styles = StyleSheet.create({
  topContent: {
    flexDirection: "row",
  },
  bottomContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: "Regular",
    fontSize: 40,
    color: Colors.LIGHT_GRAY,
    marginRight: "auto",
  },
  value: {
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.LIGHT,
    marginRight: "auto",
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});
