import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";

export default function TimePicker({
  hoursData,
  renderHourItem,
  renderMinuteSecondItem,
  renderSecondItem,
  minutesSecondsData,
  selectedValue,
}) {

  
  return (
    <View style={styles.container}>
      <FlatList
        data={hoursData}
        renderItem={renderHourItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        initialScrollIndex={selectedValue ? parseInt(selectedValue) + 24 : 0}
      />
      <Text style={styles.timeSeperator}>:</Text>
      <FlatList
        data={minutesSecondsData}
        renderItem={renderMinuteSecondItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        initialScrollIndex={selectedValue ? parseInt(selectedValue) + 30 : 0}
      />
      <Text style={styles.timeSeperator}>:</Text>
      <FlatList
        data={minutesSecondsData}
        renderItem={renderSecondItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        initialScrollIndex={selectedValue ? parseInt(selectedValue) + 30 : 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.DARK_GRAY,
  },
  timeSeperator: {
    color: Colors.LIGHT_GRAY,
    fontFamily: "Light",
    fontSize: 64,
  },
});
