import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "@react-navigation/native";

// image
import LoginScreenImage from "../../assets/LoginScreenImage.png";
import IconEmail from "../../assets/IconEmail.png";
import IconPassword from "../../assets/IconPassword.png";
import ORLoginScreen from "../../assets/ORLoginScreen.png";
import IconLoginPengelolaSampah from "../../assets/IconLoginPengelolaSampah.png";
import IconError from "../../assets/IconError.png";

export default GetStarted = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Handler Login
  const handlerLogin = () => {
    if (email === "" || password === "") {
      setModalVisible(true);
    } else {
      navigation.navigate("HomeScreen");
    }
  };

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
      {/* Notification error login */}
      {modalVisible && (
        <View className="flex items-center justify-center top-20 relative z-50 ">
          <View className=" h-[60px]  w-[80%] absolute bg-[#FFFFFFCC] rounded-full">
            <View className="flex flex-row justify-evenly items-center w-full h-full">
              <Text className=" text-[#40513B] text-[16px] leading-[20px] font-Quicksand_Bold">
                Login Anda Gagal
              </Text>
              <Image source={IconError} />
            </View>
          </View>
        </View>
      )}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "position"} // Menghapus behavior pada Android
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -130} // Mengatur offset berdasarkan platform
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-[#EDF1D6] w-screen h-screen flex justify-center items-center">
            {/* Image Login Screen */}
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
                  className={
                    modalVisible
                      ? "mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-[1px] h-12 border-[#C62525]"
                      : "mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-[1px] h-12 border-[#9DC08B]"
                  } // Mengubah warna placeholder
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>
              <View className="flex flex-row items-center gap-3 ">
                <Image source={IconPassword} className="bottom-[5px]" />
                <TextInput
                  placeholder="Password"
                  className={
                    modalVisible
                      ? "mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-[1px] h-12 border-[#C62525]"
                      : "mb-4 divide-y-4 w-[85%] divide-slate-400/25 border-b-[1px] h-12 border-[#9DC08B]"
                  }
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
              <TouchableOpacity
                className="flex items-center justify-center h-[50px] rounded-full font-sans bg-[#40513B]"
                onPress={() => handlerLogin()}
              >
                <Text className="text-[#EDF1D6] text-[18px] leading-[22.5px] font-Quicksand_Bold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={ORLoginScreen} className="my-4" />

            {/* Tombol login pengelola sampah */}
            <View className="w-[80%]">
              <TouchableOpacity
                className="flex items-center justify-center h-[50px] rounded-full font-sans bg-[#FFFFFF]"
                onPress={() => setModalVisible(false)}
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
            <View className="w-[80%] mt-4">
              <View className="flex flex-row justify-center gap-1">
                <Text className="text-[#609966] text-[12px] leading-[15.5px] font-Quicksand_Bold">
                  Belum punya akun?
                </Text>
                <Link to="/RegisterScreen">
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
