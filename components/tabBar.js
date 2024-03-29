import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../styles/theme/Colors";

export const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              styles.tabIcons,
              { backgroundColor: isFocused ? Colors.LIGHT : null },
            ]}
          >
            {options.tabBarIcon({
              color: isFocused ? Colors.DARK : Colors.LIGHT,
              size: isFocused ? 100 : 40,
            })}
            {isFocused && (
              <Text style={[ styles.tabText,{ color: isFocused ? Colors.DARK : Colors.DARK }]}>
                {route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 50,
    marginTop: 0,
    marginBottom: 20,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 270,
    height: 80,
    position: "absolute",
    bottom: 7
  },
  tabIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 7,
    paddingVertical: 7,
    height: 70
  },
  tabText:{
    fontFamily: 'Solid',
    fontSize: 18,
    width: 50
  }
});
