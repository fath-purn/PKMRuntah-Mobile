import React, { useEffect, useState, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";

import GetStarted from "../screens/GetStarted/GetStarted";
import GetStartedClick from "../screens/GetStarted/GetStartedClick";
import Login from "../screens/Login/LoginScreen";
import RegisterWithScreen from "../screens/Register/RegisterWithScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CobaCoba from "../screens/CobaCoba";
import ScanScreen from "../screens/Scanner/ScanScreen";
import ScanSuccesScren from "../screens/Scanner/ScanSuccesScren";
import ListTrashScreen from "../screens/ListTrash/ListTrashScreen";
import RegisterInputScreen from "../screens/Register/RegisterInputScreen";

const Stack = createNativeStackNavigator();

// auth
import { AuthContext } from "../Authorize/AuthProvider";

export default Navigate = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  const isFocused = useIsFocused();
  const [showGetStarted, setShowGetStarted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowGetStarted(false);
    }, 1000);
  }, [isFocused]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <>
      {showGetStarted ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
        </Stack.Navigator>
      ) : (
        <>
          {userToken && isFocused ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="ScanScreen" component={ScanScreen} />
              <Stack.Screen name="ScanSuccessScreen" component={ScanSuccesScren} />
              <Stack.Screen name="ListTrashScreen" component={ListTrashScreen} />
              <Stack.Screen name="CobaCoba" component={CobaCoba} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="GetStartedClick" component={GetStartedClick} />
              <Stack.Screen name="LoginScreen" component={Login} />
              <Stack.Screen
                name="RegisterInputScreen"
                component={RegisterInputScreen}
              />
              <Stack.Screen
                name="RegisterWithScreen"
                component={RegisterWithScreen}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </>
  );
};
