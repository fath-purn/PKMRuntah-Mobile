// Tabs.js
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from "@react-navigation/native";

// image
import Logo from "../assets/logo.png";

// import from screens
import GetStartedClick from "../screens/GetStarted/GetStartedClick";

// Login and Register
import Login from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";

// Home
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CobaCoba from "../screens/CobaCoba";

// Scan
import ScanScreen from "../screens/Scan/ScanScreen";
import ScanSuccesScreen from "../screens/Scan/ScanSuccesScreen";
import ListTrashScreen from "../screens/ListTrash/ListTrashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Navigate = () => {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [isFocused]);

  // tampilkan get started selamat 2 detik
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  // if (isLoading) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: "#EDF1D6",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <View className="bg-[#EDF1D6] flex h-screen w-screen items-center justify-center">
  //         <Image source={Logo} />
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStartedClick" component={GetStartedClick} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="ScanSuccesScreen" component={ScanSuccesScreen} />
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
