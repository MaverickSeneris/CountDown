import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons({children, bgColor, size}) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: bgColor}]}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:"center",
        alignItems: "center",
        width:35,
        height:35,
        borderRadius:50,
        margin: 10
    }
})