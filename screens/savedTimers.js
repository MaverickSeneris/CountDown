import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useState} from "react";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import seedData from "../seedData";
import PresetTimers from "../components/savedTimers/presetTimers";

export default function SavedTimers() {
  const [savedTimers, setSaveTimers] = useState([
    { key: 1, name: "Ravioli Pasta", value: "00:09:00" },
    { key: 2, name: "Egg Timer", value: "00:09:00" },
    { key: 3, name: "Room Cleaning", value: "01:00:00" },
    { key: 4, name: "Morning Meditation", value: "00:10:00" },
    { key: 5, name: "Evening Workout", value: "02:00:00" },
    { key: 6, name: "Make a Coffee", value: "00:15:00" },])
  
  return (
    <View style={styles.container}>
      <Header
        title={"Your Timers"}
        logoName={"content-save-outline"}
        icnBgColor={Colors.LIGHT}
        icnColor={Colors.DARK}
      />
      <View style={styles.presetTimerContainer}>
        <FlatList
          data={savedTimers}
          renderItem={({ item }) => (
           <PresetTimers item={item}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.DARK,
},
presetTimerContainer:{
  flex: 1,
  marginTop: 40,
  marginHorizontal: 20
}
});
 