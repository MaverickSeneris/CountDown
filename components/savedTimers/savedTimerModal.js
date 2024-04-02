import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";
import DateTimePicker from "@react-native-community/datetimepicker";


export default function SavedTimerModal({
  modalToggler,
  onSelectHour,
  onSelectMinute,
  onSelectSecond,
}) {
  const [countdown, setCountdown] = useState(new Date());

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
      <View style={styles.inputContent}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          placeholderTextColor={Colors.DARK_GRAY}
          pla
        />
      </View>

      {/* <DateTimePicker textColor={Colors.LIGHT} mode="countdown" value={countdown} display="spinner" /> */}
      <View style={styles.container}>
        <FlatList
          data={hoursData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          snapToInterval={50} // Adjust based on item size
          initialScrollIndex={
            hoursData.current ? hoursData.current.length * 50 : 0
          }
        />
        <Text
          style={{
            color: Colors.LIGHT_GRAY,
            fontFamily: "Light",
            fontSize: 64,
          }}
        >
          :
        </Text>
        <FlatList
          data={minutesSecondsData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          snapToInterval={50} // Adjust based on item size
          initialScrollIndex={
            minutesSecondsData.current
              ? minutesSecondsData.current.length * 50
              : 0
          }
        />
        <Text
          style={{
            color: Colors.LIGHT_GRAY,
            fontFamily: "Light",
            fontSize: 64,
          }}
        >
          :
        </Text>
        <FlatList
          data={minutesSecondsData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          snapToInterval={50} // Adjust based on item size
          initialScrollIndex={
            minutesSecondsData.current
              ? minutesSecondsData.current.length * 50
              : 0
          }
        />
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
  inputContent: {
    marginTop: 10,
    marginHorizontal: 20,
    borderBottomColor: Colors.DARK_GRAY,
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  input: {
    fontSize: 36,
    color: Colors.LIGHT,
    fontFamily: "Regular",
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
    borderBottomColor: Colors.DARK_GRAY
  },
  item: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.LIGHT_GRAY,
  },
});
