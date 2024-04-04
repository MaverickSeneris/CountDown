import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../shared/header";
import TimePicker from "../shared/timePicker";
import NameInput from "../shared/nameInput";
import Buttons from "../shared/buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { inputButtons } from "../../configs/ButtonConfigs.js";
import { Colors } from "../../styles/theme/Colors";

export default function SavedTimerModal({
  modalToggler,
  onSelectHour,
  onSelectMinute,
  onSelectSecond,
}) {
  const hoursData = getLoopingData(25);
  const minutesSecondsData = getLoopingData(60);
 
  console.log(hoursData)
  const renderItem = ({ item }) => (
    <Text style={styles.item} onPress={() => onSelectHour(item)}>
      {item}
    </Text>
  );

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={modalToggler}>
        <Text style={styles.close}>&#10799;</Text>
      </TouchableOpacity>
      <Header
        title={"New Timers"}
        logoName={"alarm-plus"}
        icnBgColor={Colors.RED}
        icnColor={Colors.LIGHT}
        icon={true}
      />
      <NameInput title={"Title"} />
      <TimePicker
        hoursData={hoursData}
        renderItem={renderItem}
        minutesSecondsData={minutesSecondsData}
      />
      <View style={styles.buttonContainer}>
        {inputButtons.map((item, index) => {
          return (
            <Buttons bgColor={item.bgColor} key={index} size={50}>
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
    color: Colors.LIGHT_GRAY,
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

function getLoopingData(size) {
  const data = Array.from({ length: size }, (_, i) => {
    const key = Math.random().toString();
    return { key, value: i.toString().padStart(2, "0") };
  });

  const dataArray = [...data.slice(data.length / 2), ...data, ...data.slice(0, data.length / 2)];

  return dataArray.map(item => item.value);
}

