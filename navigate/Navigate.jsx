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
import Login from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CobaCoba from "../screens/CobaCoba";
import ScanScreen from "../screens/Scanner/ScanScreen";
import ScanSuccesScren from "../screens/Scanner/ScanSuccesScren";
import ListTrashScreen from "../screens/ListTrash/ListTrashScreen";


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
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScanScreen" component={ScanScreen} />
          <Stack.Screen name="ScanSuccesScren" component={ScanSuccesScren} />
          <Stack.Screen name="ListTrashScreen" component={ListTrashScreen} />
          <Stack.Screen name="CobaCoba" component={CobaCoba} />
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
