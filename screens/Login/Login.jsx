import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from '@react-navigation/native';

// image
import LoginScreenImage from "../../assets/LoginScreenImage.png";
import IconEmail from "../../assets/IconEmail.png";
import IconPassword from "../../assets/IconPassword.png";
import ORLoginScreen from "../../assets/ORLoginScreen.png";
import IconLoginPengelolaSampah from "../../assets/IconLoginPengelolaSampah.png";

// component
import ButtonSubmit from "../../components/ButtonSumbit";

export default GetStarted = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="flex-[1]"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "position"} // Menghapus behavior pada Android
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -130} // Mengatur offset berdasarkan platform
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-[#EDF1D6] w-screen h-screen flex justify-center items-center">
            <Image source={LoginScreenImage} />
            <View className="w-[73%]">
              <Text className="text-[#40513B] text-[36px] my-3 leading-[45px] font-Quicksand_Bold">
                Login
              </Text>

              {/* Input Email dan Password */}
              <View className="flex flex-row items-center gap-3 ">
                <Image source={IconEmail} className="bottom-[5px]" />
                <TextInput
                  placeholder="Email ID"
                  className="mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-2 h-12 border-[#9DC08B]"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>
              <View className="flex flex-row items-center gap-3 ">
                <Image source={IconPassword} className="bottom-[5px]" />
                <TextInput
                  placeholder="Password"
                  className="mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-2 h-12 border-[#9DC08B]"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>
            </View>

            {/* Tombol Login pengguna */}
            <View className="w-[80%]">
              <View className="flex flex-row justify-end">
                <Text className="text-[#40513B] text-[10px] mb-4 leading-[12.5px] font-Quicksand_Bold">
                  Forgot Password?
                </Text>
              </View>
              <ButtonSubmit
                linkNavigation={""}
                title={"Login"}
                navigation={navigation}
              />
            </View>
            <Image source={ORLoginScreen} className="my-2" />

            {/* Tombol login pengelola sampah */}
            <View className="w-[80%]">
              <TouchableOpacity
                className="flex items-center justify-center h-[60px] rounded-full font-sans bg-[#FFFFFF]"
                onPress={() => navigation.navigate("GetStartedClick")}
              >
                <View className="flex flex-row items-center justify-evenly w-full">
                    <Image source={IconLoginPengelolaSampah} />
                  <Text className="text-[#40513B] text-[12px] leading-[15.5px] font-Quicksand_Bold">
                    Login Pengelola Sampah
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Tombol Daftar */}
            <View className="w-[80%] mt-2">
              <View className="flex flex-row justify-center">
                <Text className="text-[#40513B] text-[12px] leading-[15.5px] font-Quicksand_Bold">
                  Belum punya akun?
                </Text>
                <Link to="/Register">
                  <Text className="text-[#40513B] text-[12px] leading-[15.5px] font-Quicksand_Bold ml-2">
                    Daftar
                  </Text>
                </Link>
              </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
