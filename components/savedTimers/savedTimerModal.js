import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../styles/theme/Colors";
import Header from "../shared/header";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SavedTimerModal({ modalToggler }) {
  const [countdown, setCountdown] = useState(new Date());
  
  

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
        icon={true}
      />
      <View style={styles.inputContent}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          placeholderTextColor={Colors.DARK_GRAY}
          pla
        />
      </View>

      <DateTimePicker textColor={Colors.LIGHT} mode="countdown" value={countdown} display="spinner" />
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
  inputContent: {
    marginTop: 10,
    marginHorizontal: 20,
    borderBottomColor: Colors.DARK_GRAY,
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  input: {
    fontSize: 36,
    color: Colors.LIGHT,
    fontFamily: "Regular",
  },
});
