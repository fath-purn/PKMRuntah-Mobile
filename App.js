import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import {
//   GoogleAuthProvider,
//   signInWithCredential,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "./firebase/firebaseConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// WebBrowser.maybeCompleteAuthSession();

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

  // const [userInfo, setUserInfo] = useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({});

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
