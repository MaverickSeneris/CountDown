import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../styles/theme/Colors";

export default function TimePicker({
  hoursData,
  renderItem,
  minutesSecondsData,
}) {



  return (
    <View style={styles.container}>
      <FlatList
        data={hoursData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        // initialScrollIndex={
        //   hoursData.current ? hoursData.current.length * 50 : 0
        // }
      />
      <Text
        style={{
          color: Colors.LIGHT_GRAY,
          fontFamily: "Light", 
          fontSize: 64,
        }}
      >
        :
      </Text>
      <FlatList
        data={minutesSecondsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        // initialScrollIndex={
        //   minutesSecondsData.current
        //     ? minutesSecondsData.current.length * 50
        //     : 0
        // }
      />
      <Text
        style={{
          color: Colors.LIGHT_GRAY,
          fontFamily: "Light",
          fontSize: 64,
        }}
      >
        :
      </Text>
      <FlatList
        data={minutesSecondsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={50}
        // initialScrollIndex={
        //   minutesSecondsData.current
        //     ? minutesSecondsData.current.length * 50
        //     : 0
        // }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.DARK_GRAY,
  },
  item: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Light",
    fontSize: 64,
    color: Colors.LIGHT_GRAY,
  },
});
