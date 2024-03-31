import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import Card from "../shared/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";
import Buttons from "../shared/buttons";
import { deleteActiveTimer } from "../../redux/actions/actions";
import { useDispatch} from "react-redux";


export default function ActiveTimersCard({ item}) {
  const buttons = [{ name: "play" }, { name: "stop" }];
  const dispatch = useDispatch();

  const handleDeleteActiveTimer = () => {
    dispatch(deleteActiveTimer(item.key));
  };

  return (
    <Card>
      <View style={styles.topContent}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity onPress={()=>handleDeleteActiveTimer(item.key)}>
          <MaterialCommunityIcons
            name="close-circle-outline"
            color={Colors.LIGHT}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.value}>{item.value}</Text>
        {buttons.map((button, index) => (
          <Buttons
            key={index}
            bgColor={button.name === "play" ? Colors.PURPLE : Colors.RED}
          >
            <MaterialCommunityIcons
              name={button.name}
              size={35}
              color={Colors.LIGHT}
            />
          </Buttons>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  topContent: {
    flexDirection: "row",
  },
  bottomContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: "Regular",
    fontSize: 40,
    color: Colors.LIGHT_GRAY,
    marginRight: "auto",
  },
  value: {
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.LIGHT,
    marginRight: "auto",
  },
});
