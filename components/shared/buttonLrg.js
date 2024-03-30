import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonLarge({children, bgColor}) {
  return (
    <TouchableOpacity style={[styles.buttonLarge, {backgroundColor: bgColor}]}>
        {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonLarge: {
    justifyContent: "center",
    alignItems: "center",
    height: 78,
    width: 78,
    borderRadius: 50,
  },
});
