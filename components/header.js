import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../styles/theme/Colors'
import Icons from './Icons'


export default function Header({title, icnBgColor, icnColor, logoName}) {
  return (
    <View style={styles.header}>
        <Icons logo={logoName} bgColor={icnBgColor} icnColor={icnColor}/>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop: 70,
        marginHorizontal: 20,
        flexDirection: 'row',
        gap: 10
    },
    headerText:{
        color: Colors.LIGHT,
        fontFamily: 'Regular',
        fontSize: 40
    }
})