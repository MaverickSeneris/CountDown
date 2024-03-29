import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useState} from "react";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import seedData from "../seedData";
import PresetTimers from "../components/savedTimers/presetTimers";
import { useDispatch, useSelector } from 'react-redux';
import { addActiveTimer } from '../redux/actions';

export default function SavedTimers() {
  const dispatch = useDispatch();
  const savedTimers = useSelector((state) => state.rootReducer.savedTimers);

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
 