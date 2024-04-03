import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Text
} from "react-native";
import React, { useState } from "react";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import PresetTimers from "../components/savedTimers/presetTimers";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonLarge from "../components/shared/buttonLrg";
import { addToActiveTimer } from "../redux/actions/actions";
import SavedTimerModal from "../components/savedTimers/savedTimerModal";
import EmptyState from "../components/shared/emptyState";


export default function SavedTimers() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const savedTimers = useSelector((state) => state.rootReducer.savedTimers);

  const handleSelectTimer = (timerKey) => {
    const selectedTimer = savedTimers.find((timer) => timer.key === timerKey);
    dispatch(addToActiveTimer(selectedTimer));
    console.log(`${selectedTimer.name} has been added to active sreen:`);
  };

  const modalToggler = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Your Timers"}
        logoName={"content-save-outline"}
        icnBgColor={Colors.LIGHT}
        icnColor={Colors.DARK}
        icon={true}
      />

      <Modal style={styles.modalContent} visible={modal} animationType="slide">
        <SavedTimerModal modalToggler={modalToggler}/>
      </Modal>

      <View style={styles.presetTimerContainer}>
        {savedTimers >= 0 ?  <EmptyState screen={"savedTimers"} screenMessage={"No saved timers"}/> : <FlatList
          data={savedTimers}
          renderItem={({ item }) => (
            <PresetTimers item={item} handleSelectTimer={handleSelectTimer} />
          )}
        />}
      </View>
      <View style={styles.addButtonContainer}>
        <ButtonLarge bgColor={Colors.RED} modalToggler={modalToggler}>
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
  modalContent: {
    flex: 1,
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
