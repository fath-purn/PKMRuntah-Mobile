// Tabs.js
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from "@react-navigation/native";

// import from screens
// Get Started
import GetStarted from "../screens/GetStarted/GetStarted";
import GetStartedClick from "../screens/GetStarted/GetStartedClick";

// Login
import Login from "../screens/Login/Login";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Navigate = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    // Perform any side effects based on the focus change
    // This will only run when the focus changes
    // Add any necessary logic here
  }, [isFocused]);

  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="GetStartedClick" component={GetStartedClick} />
          <Stack.Screen name="LoginScreen" component={Login} />
        </Stack.Navigator>
      {/* {userToken && isFocused ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Logout") {
                iconName = focused
                  ? "account-circle"
                  : "account-circle-outline";
              } else if (route.name === "Shop") {
                iconName = focused ? "store" : "store-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Shop" component={ShopStack} />
          <Tab.Screen name="Logout" component={LogoutScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )} */}
    </>
  );
};
