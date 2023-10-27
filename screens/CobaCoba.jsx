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

WebBrowser.maybeCompleteAuthSession();

export default RegisterScreen = ({ navigation }) => {
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
    <View>
      <TouchableOpacity onPress={() => promptAsync()}>
        <Text style={styles.connexionText}>Connect with Google</Text>
      </TouchableOpacity>
    </View>
  );
};
