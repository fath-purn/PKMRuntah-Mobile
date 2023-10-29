import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// image
import IconBack from "../../assets/IconBack.png";
import imageGoogle from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

WebBrowser.maybeCompleteAuthSession();

export default RegisterWithScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

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
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="bg-[#EDF1D6]"
    >
      <View className="h-screen w-screen">
        <View className="flex items-center">
          <View className="mt-[10%] w-[80%]">
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image source={IconBack} />
            </TouchableOpacity>
            <Text className="text-[36px] mt-10 font-Quicksand_Bold leading-[45px] text-[#40513B]">
              Login
            </Text>
            <Text className="text-[36px] font-Quicksand_Bold leading-[45px] text-[#40513B]">
              Menggunakan.
            </Text>
          </View>
        </View>

        <View className="flex items-center">
          <View className="w-[80%] flex items-center rounded-2xl mt-14 bg-white py-5">
            <TouchableOpacity
              className="flex flex-row items-center my-5 w-[80%]"
              onPress={() => promptAsync()}
            >
              <View className="w-[20%] mx-2">
                <Image source={imageGoogle} />
              </View>
              <Text className="text-[28px] w-[80%] font-Quicksand_SemiBold text-[#193311] leading-[35px]">
                Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
