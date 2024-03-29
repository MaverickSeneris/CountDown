import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Card from "../shared/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";


export default function ActiveTimersCard({item}) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
