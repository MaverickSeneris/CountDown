import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/header";
import { Colors } from "../styles/theme/Colors";

export default function SavedTimers() {
  return (
    <View style={styles.container}>
      <Header
        title={"Your Timers"}
        logoName={"content-save-outline"}
        icnBgColor={Colors.LIGHT}
        icnColor={Colors.DARK}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.DARK,
}
});
 