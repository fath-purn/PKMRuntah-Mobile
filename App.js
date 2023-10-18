import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Quicksand_Light: require("./assets/fonts/Quicksand-Light.ttf"),
    Quicksand_Medium: require("./assets/fonts/Quicksand-Medium.ttf"),
    Quicksand_Regular: require("./assets/fonts/Quicksand-Regular.ttf"),
    Quicksand_SemiBold: require("./assets/fonts/Quicksand-SemiBold.ttf"),
    Quicksand_Bold: require("./assets/fonts/Quicksand-Bold.ttf"),
  });
};

import Navigate from "./navigate/Navigate";

export default App = () => {
  
  useEffect(() => {
    loadFonts();
  } , []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
