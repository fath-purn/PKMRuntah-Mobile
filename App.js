import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AuthProvider } from "./Authorize/AuthProvider";

const queryClient = new QueryClient();

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
  loadFonts();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <Navigate />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
