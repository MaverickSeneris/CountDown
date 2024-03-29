import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useState } from "react";
import Header from "../components/shared/header";
import { Colors } from "../styles/theme/Colors";

export default function ActiveTimers() {
  
  return (
    <View style={styles.container}>
      <Header
        title={"Active Timers"}
        logoName={"timer-outline"}
        icnBgColor={Colors.PURPLE}
        icnColor={Colors.LIGHT}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});
