import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "./styles/theme/Colors";
import RootNavigation from "./routes/rootNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Solid: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    Regular: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    ExtraLight: require("./assets/fonts/RobotoCondensed-ExtraLight.ttf"),
    Light: require("./assets/fonts/RobotoCondensed-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
});
