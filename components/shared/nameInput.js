import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";

export default function NameInput({
  title,
  inputValue,
  handleInputChange,
  savedTimerDetail,
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
        value={inputValue}
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
