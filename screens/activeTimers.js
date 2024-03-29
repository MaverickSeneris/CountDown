import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/shared/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ActiveTimers() {
  const activeTimers = useSelector((state) => state.rootReducer.activeTimers);

  return (
    <View style={styles.container}>
      <Header
        title={"Active Timers"}
        logoName={"timer-outline"}
        icnBgColor={Colors.PURPLE}
        icnColor={Colors.LIGHT}
      />
      <View style={styles.activeTimers}>
        <FlatList
          data={activeTimers}
          renderItem={({ item }) => (
            <Card>
              <View style={styles.topContent}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    color={Colors.LIGHT}
                    size={22}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.value}>{item.value}</Text>
            </Card>
          )}
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
  topContent: {
    flexDirection: "row",
  },
  name: {
    fontFamily: "Regular",
    fontSize: 40,
    color: Colors.LIGHT_GRAY,
    marginRight: 'auto'
  },
  value: {
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.LIGHT,
  },
});
