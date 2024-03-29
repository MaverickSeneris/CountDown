import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Icons({logo, bgColor, icnColor}) {
  return (
    <View style={[styles.icon, {backgroundColor: bgColor}]}>
     <MaterialCommunityIcons name={logo} color={icnColor} size={40}/>
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        justifyContent: "center",
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 50       
    }
})