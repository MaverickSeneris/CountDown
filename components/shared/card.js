import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";

export default function Card({ children }) {
  return <TouchableOpacity style={styles.card}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
});
