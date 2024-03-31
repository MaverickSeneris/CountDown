import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../shared/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";
import Buttons from "../shared/buttons";
import { deleteActiveTimer } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const [totalSeconds, setTotalSeconds] = useState(
    timeStringToSeconds(item.value)
  );
  const [isRunning, setIsRunning] = useState(false);
  const buttons = [
    !isRunning ? { name: "play" } : { name: "pause" },
    { name: "stop" },
  ];

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        console.log("Decrementing totalSeconds");
        setTotalSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            console.log("Timer has elapsed, resetting");
            return timeStringToSeconds(item.value); // Reset timer to initial value when it elapses
          }
          console.log("Previous totalSeconds:", prevSeconds);
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval); // Clear interval when not running
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isRunning, item]);

  useEffect(() => {
    if (!isRunning) {
      console.log("Resetting totalSeconds");
      setTotalSeconds(timeStringToSeconds(item.value)); // Reset timer when item value changes
    }
  }, [item, isRunning]);

  const handlePlayPause = () => {
    setIsRunning((prevState) => {
      console.log("Toggling isRunning");
      return !prevState;
    });
  };

  
  const handleStop = () => {
    setIsRunning(false);
    console.log("Stopping timer and resetting");
    setTotalSeconds(timeStringToSeconds(item.value)); // Reset timer to initial value
  };

  const handleDeleteActiveTimer = () => {
    dispatch(deleteActiveTimer(item.key));
  };

  return (
    <Card backgroundColor={isRunning ? Colors.PURPLE : Colors.DARK_GRAY}>
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
            bgColor={
              button.name === "play"
                ? isRunning ? Colors.DARK_GRAY : Colors.PURPLE
                : button.name === "pause"
                ? isRunning ? Colors.DARK_GRAY : Colors.GRAY
                : button.name === "stop"
                ? Colors.RED
                : Colors.GRAY
            }
            event={button.name}
            handlePlayPause={handlePlayPause}
            handleStop={handleStop}
          >
            <MaterialCommunityIcons
              name={button.name}
              size={35}
              color={Colors.LIGHT}
            />
          </Buttons>
        ))}
      </View>
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
});
