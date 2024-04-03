// TODO: Don't touch this code. Just add the  buttons
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimePicker from "../shared/timePicker";
import NameInput from "../shared/nameInput";
import Buttons from "../shared/buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SavedTimerModal({
  modalToggler,
  onSelectHour,
  onSelectMinute,
  onSelectSecond,
}) {
  const [countdown, setCountdown] = useState(new Date());
  const inputButtons = [
    {
      name: "save",
      icon: "content-save-outline",
      bgColor: Colors.LIGHT,
      iconColor: Colors.DARK,
    },
    {
      name: "play",
      icon: "play",
      bgColor: Colors.PURPLE,
      iconColor: Colors.LIGHT,
    },
    {
      name: "undo",
      icon: "undo-variant",
      bgColor: Colors.RED,
      iconColor: Colors.LIGHT,
    },
  ];
  const hoursData = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutesSecondsData = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

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
      {/* <DateTimePicker textColor={Colors.LIGHT} mode="countdown" value={countdown} display="spinner" /> */}
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
  buttonContainer:{
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 50,
    paddingBottom: 100
  }
  
});
