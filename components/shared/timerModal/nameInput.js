import { StyleSheet, View, TextInput } from "react-native";
import React, {useState} from "react";
import { Colors } from "../../../styles/theme/Colors";
import { useSelector } from "react-redux";

export default function NameInput({
  title,
  inputValue,
  handleInputChange,
  savedTimerDetailName
}) {

  return (
    <View style={styles.inputContent}>
      <TextInput
        placeholderTextColor={Colors.DARK_GRAY
        }
        placeholder={title}
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue === '' && savedTimerDetailName }
      />
    </View>
  );
} 

const styles = StyleSheet.create({
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
