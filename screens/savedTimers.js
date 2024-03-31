import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import PresetTimers from "../components/savedTimers/presetTimers";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonLarge from "../components/shared/buttonLrg";
import { addToActiveTimer } from "../redux/actions";

export default function SavedTimers() {
  const dispatch = useDispatch();
  const savedTimers = useSelector((state) => state.rootReducer.savedTimers);

  const handleSelectTimer = (timerKey) => {
    const selectedTimer = savedTimers.find((timer) => timer.key === timerKey);
    dispatch(addToActiveTimer(selectedTimer));
    console.log(`${selectedTimer.name} has been added to active sreen:`);
  };

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
            <PresetTimers item={item} handleSelectTimer={handleSelectTimer} />
          )}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <ButtonLarge bgColor={Colors.RED}>
          <MaterialIcons name="add" size={50} color={Colors.LIGHT} />
        </ButtonLarge>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
  presetTimerContainer: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 27,
    right: 18,
  },
});
