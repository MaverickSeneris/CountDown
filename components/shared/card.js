import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";

export default function Card({
  children,
  backgroundColor,
  modalToggler,
  modal,
}) {
  return (
    <TouchableOpacity
      modal
      onPress={modal && modalToggler}
      style={[styles.card, { backgroundColor: backgroundColor }]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
