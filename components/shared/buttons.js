import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons({ children, bgColor, onAddPress, onDeletePress, event }) {
  const handlePress = () => {
    if (event === "add") return onAddPress();
    if (event === "delete") return onDeletePress();
  };
  
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor: bgColor }]}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 50,
    margin: 10
  }
})
