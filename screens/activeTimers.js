import { StyleSheet, View, FlatList, Modal } from "react-native";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import { useSelector } from "react-redux";
import ButtonLarge from "../components/shared/buttonLrg";
import { useState } from "react";
import ActiveTimersCard from "../components/activeTimers/activeTimersCard";
import EmptyState from "../components/shared/emptyState";
import { MaterialIcons } from "@expo/vector-icons";
import NewTimerModal from "../components/savedTimers/newTimerModal";

export default function ActiveTimers({navigation}) {
  const activeTimers = useSelector((state) => state.rootReducer.activeTimers);
  const [modal, setModal] = useState(false);
  const modalToggler = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <Header
        title={"Active Timers"}
        logoName={"timer-outline"}
        icnBgColor={Colors.PURPLE}
        icnColor={Colors.LIGHT}
        icon={true}
      />
     {activeTimers >= 0 ? <EmptyState screen={"activeTimers"} screenMessage={"No active timers"} navigation={navigation}/> : <View style={styles.activeTimers}>
        <FlatList
          data={activeTimers}
          renderItem={({ item }) => <ActiveTimersCard item={item} />}
        />
      </View>}
      <Modal style={styles.modalContent} visible={modal} animationType="slide">
        <NewTimerModal modalToggler={modalToggler}/>
      </Modal>
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
  activeTimers: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20, 
    paddingBottom: 105
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 27,
    right: 18,
  },
});
