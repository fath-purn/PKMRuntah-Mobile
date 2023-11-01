import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { A } from '@expo/html-elements';

WebBrowser.maybeCompleteAuthSession();

export default RegisterScreen = ({ navigation }) => {

  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "758433274854-2cnhd8sna5ssvr946iuoapd3rq3bk67o.apps.googleusercontent.com",
    androidClientId:
      "758433274854-qptgd2p2fvjnb9crg26mdau49ofb86qg.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View className="flex items-center w-screen h-screen justify-center">
      <TouchableOpacity onPress={() => promptAsync()}>
        <Text>Connect with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

// import React, { useEffect, useState, useContext } from "react";
// import { View, ActivityIndicator } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useIsFocused } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import GetStarted from "../screens/GetStarted/GetStarted";
// import GetStartedClick from "../screens/GetStarted/GetStartedClick";
// import Login from "../screens/Login/LoginScreen";
// import RegisterWithScreen from "../screens/Register/RegisterWithScreen";
// import HomeScreen from "../screens/HomeScreen/HomeScreen";
// import CobaCoba from "../screens/CobaCoba";
// import ScanScreen from "../screens/Scanner/ScanScreen";
// import ScanSuccesScren from "../screens/Scanner/ScanSuccesScren";
// import ListTrashScreen from "../screens/ListTrash/ListTrashScreen";
// import RegisterInputScreen from "../screens/Register/RegisterInputScreen";

// const Stack = createNativeStackNavigator();

// // auth
// import { AuthProvider } from "../Authorize/AuthProvider";

// export default Navigate = () => {
//   // const { userToken, isLoading } = useContext(AuthProvider);
//   const isFocused = useIsFocused();
//   const [showGetStarted, setShowGetStarted] = useState(true);

//   // console.log(userToken);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowGetStarted(false);
//     }, 1000);
//   }, [isFocused]);

//   // if (isLoading) {
//   //   return (
//   //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   //       <ActivityIndicator size={'large'} />
//   //     </View>
//   //   );
//   // }

//   return (
//     <AuthProvider>
//     <>
//       {showGetStarted ? (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="GetStarted" component={GetStarted} />
//         </Stack.Navigator>
//       ) : (
//         <>
//           {isFocused ? (
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//               <Stack.Screen name="HomeScreen" component={HomeScreen} />
//               <Stack.Screen name="ScanScreen" component={ScanScreen} />
//               <Stack.Screen name="ScanSuccessScreen" component={ScanSuccesScren} />
//               <Stack.Screen name="ListTrashScreen" component={ListTrashScreen} />
//               <Stack.Screen name="CobaCoba" component={CobaCoba} />
//             </Stack.Navigator>
//           ) : (
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//               <Stack.Screen name="GetStartedClick" component={GetStartedClick} />
//               <Stack.Screen name="LoginScreen" component={Login} />
//               <Stack.Screen
//                 name="RegisterInputScreen"
//                 component={RegisterInputScreen}
//               />
//               <Stack.Screen
//                 name="RegisterWithScreen"
//                 component={RegisterWithScreen}
//               />
//             </Stack.Navigator>
//           )}
//         </>
//       )}
//     </>
//     </AuthProvider>
//   );
// };
