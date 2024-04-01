import { StyleSheet, View, FlatList } from "react-native";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import { useSelector } from "react-redux";

import ActiveTimersCard from "../components/activeTimers/activeTimersCard";
export default function ActiveTimers() {
  const activeTimers = useSelector((state) => state.rootReducer.activeTimers);

  return (
    <View style={styles.container}>
      <Header
        title={"Active Timers"}
        logoName={"timer-outline"}
        icnBgColor={Colors.PURPLE}
        icnColor={Colors.LIGHT}
        icon={true}
      />
      <View style={styles.activeTimers}>
        <FlatList
          data={activeTimers}
          renderItem={({ item }) => <ActiveTimersCard item={item} />}
        />
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
   
  },
});
