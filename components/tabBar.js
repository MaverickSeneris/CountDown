import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
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
              <Text
                style={[
                  styles.tabText,
                  { color: isFocused ? Colors.DARK : Colors.DARK },
                ]}
              >
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
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 50,
    borderWidth: 2,
    marginTop: 0,
    marginBottom: 20,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 80,
    position: "absolute",
    bottom: 7,
  },
  tabIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 6,
    paddingVertical: 7,
    height: 70,
  },
  tabText: {
    fontFamily: "Solid",
    fontSize: Platform.OS === "ios" ? 18 : 14,
    width: 50,
  },
});
