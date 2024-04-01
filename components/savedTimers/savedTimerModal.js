import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";

export default function SavedTimerModal({ modalToggler }) {
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={modalToggler}>
        <Text style={styles.close}>&#10799;</Text>
      </TouchableOpacity>
      <Header
        title={"New Timers"}
        logoName={"alarm-plus"}
        icnBgColor={Colors.RED}
        icnColor={Colors.LIGHT}
      />
      <View style={styles.inputContent}>
        <TextInput placeholder="Title" style={styles.input} placeholderTextColor={Colors.DARK_GRAY} pla />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
  close: {
    textAlign: "right",
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: -90,
    color: Colors.LIGHT,
    fontSize: 50,
  },
  inputContent:{
    marginTop: 10,
    marginHorizontal: 20,
    borderBottomColor: Colors.DARK_GRAY,
    borderBottomWidth: 2,
    paddingVertical: 10
  },
  input:{
    fontSize: 36,
    color: Colors.LIGHT,
    fontFamily: 'Regular'
  }
});
