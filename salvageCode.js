import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";

export default function SavedTimerModal({ modalToggler }) {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  const hoursData = Array.from({ length: 25 }, (_, i) => i.toString().padStart(2, "0")); // Generate array ["00", "01", ..., "24"]
  const minutesSecondsData = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")); // Generate array ["00", "01", ..., "59"]

  const hourListRef = useRef();
  const minuteListRef = useRef();
  const secondListRef = useRef();

  const handleHourSelection = (index) => {
    setSelectedHours(index % 24); // Looping behavior
    hourListRef.current.scrollToIndex({ index: index % 24, animated: true }); // Scroll to the selected item
  };

  const handleMinuteSelection = (index) => {
    setSelectedMinutes(index % 60); // Looping behavior
    minuteListRef.current.scrollToIndex({ index: index % 60, animated: true }); // Scroll to the selected item
  };

  const handleSecondSelection = (index) => {
    setSelectedSeconds(index % 60); // Looping behavior
    secondListRef.current.scrollToIndex({ index: index % 60, animated: true }); // Scroll to the selected item
  };

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
      />
      <View style={styles.inputContent}>
        <TextInput placeholder="Title" style={styles.input} placeholderTextColor={Colors.DARK_GRAY} />
      </View>

      <View style={styles.timePickerContainer}>
        <FlatList
          ref={hourListRef}
          data={hoursData}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleHourSelection(index)}>
              <Text style={[styles.timeText, { color: index === selectedHours ? Colors.RED : Colors.LIGHT }]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedHours}
          getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <FlatList
          ref={minuteListRef}
          data={minutesSecondsData}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleMinuteSelection(index)}>
              <Text style={[styles.timeText, { color: index === selectedMinutes ? Colors.RED : Colors.LIGHT }]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedMinutes}
          getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <FlatList
          ref={secondListRef}
          data={minutesSecondsData}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleSecondSelection(index)}>
              <Text style={[styles.timeText, { color: index === selectedSeconds ? Colors.RED : Colors.LIGHT }]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedSeconds}
          getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
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
  timePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  timeText: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  timeSeparator: {
    fontSize: 24,
    color: Colors.LIGHT,
  },
});
