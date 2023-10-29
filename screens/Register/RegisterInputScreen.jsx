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
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useQuery } from "react-query";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

// image
import LoginScreenImage from "../../assets/LoginScreenImage.png";
import IconEmail from "../../assets/IconEmail.png";
import IconPassword from "../../assets/IconPassword.png";
import ORLoginScreen from "../../assets/ORLoginScreen.png";
import IconLoginPengelolaSampah from "../../assets/IconLoginPengelolaSampah.png";
import ErrorNotification from "../../components/ErrorNotification";

export default RegisterInputScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [securePassword1, setSecurePassword1] = useState(true);
  const [securePassword2, setSecurePassword2] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [messageError, setMessageError] = useState("Register Anda Gagal");
  const [isLoading, setIsLoading] = useState(false);

  // Handler Login
  const handlerRegister = async () => {
    if (email === "" || password === "") {
      setModalVisible(true);
    } else {
      if (password1 !== password2) {
        setMessageError("Password tidak sama");
        setModalVisible(true);
      } else {
        try {
          setIsLoading(true);
          setModalVisible(false);
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const idToken = await user.getIdToken();
          // localStorage.setItem("token", idToken);
          navigation.navigate("HomeScreen");
          setIsLoading(false);
        } catch (error) {
          setModalVisible(true);
          setMessageError(error.message.split(" ").slice(1).join(" "));
          setIsLoading(false);
        }
      }
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
      <ScrollView>
        {/* Notification error login */}
        {modalVisible && <ErrorNotification messageError={messageError} />}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "position"} // Menghapus behavior pada Android
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -200} // Mengatur offset berdasarkan platform
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="bg-[#EDF1D6] pt-10 pb-3 flex justify-center items-center">
              {/* Image Login Screen */}
              <Image source={LoginScreenImage} />
              <View className="w-[73%]">
                <Text className="text-[#40513B] text-[36px] my-3 leading-[45px] font-Quicksand_Bold">
                  Register
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
                    editable={!isLoading}
                  />
                </View>
                {/* Password 1 */}
                <View className="flex flex-row items-center gap-3 ">
                  <Image source={IconPassword} className="bottom-[5px]" />
                  <View
                    className={
                      modalVisible
                        ? "flex flex-row justify-between items-center mb-4  w-[85%] border-b-[1px] h-12 border-[#C62525]"
                        : "flex flex-row justify-between items-center mb-4 w-[85%] border-b-[1px] h-12 border-[#9DC08B]"
                    }
                  >
                    <TextInput
                      placeholder="Password"
                      className="w-[88%]"
                      onChangeText={(text) => setPassword1(text)}
                      value={password1}
                      secureTextEntry={securePassword1}
                      editable={!isLoading}
                    />
                    <TouchableOpacity className="border-none" onPress={() => setSecurePassword1(!securePassword1)}>
                      <Ionicons
                        name={securePassword1 ? "eye-off" : "eye"}
                        size={30}
                        color="#9DC08B"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Password 2 */}
                <View className="flex flex-row items-center gap-3 ">
                  <Image source={IconPassword} className="bottom-[5px]" />
                  <View
                    className={
                      modalVisible
                        ? "flex flex-row justify-between items-center mb-4  w-[85%] border-b-[1px] h-12 border-[#C62525]"
                        : "flex flex-row justify-between items-center mb-4 w-[85%] border-b-[1px] h-12 border-[#9DC08B]"
                    }
                  >
                    <TextInput
                      placeholder="Password"
                      className="w-[88%]"
                      onChangeText={(text) => setPassword2(text)}
                      value={password2}
                      secureTextEntry={securePassword2}
                      editable={!isLoading}
                    />
                    <TouchableOpacity className="border-none" onPress={() => setSecurePassword2(!securePassword2)}>
                      <Ionicons
                        name={securePassword2 ? "eye-off" : "eye"}
                        size={30}
                        color="#9DC08B"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Tombol Register pengguna */}
              <View className="w-[80%]">
                <View className="flex flex-row justify-end">
                  <Text className="text-[#40513B] text-[10px] mb-4 leading-[12.5px] font-Quicksand_Bold">
                    Forgot Password?
                  </Text>
                </View>
                <TouchableOpacity
                  className="flex items-center justify-center h-[50px] rounded-full font-sans bg-[#40513B]"
                  onPress={() => handlerRegister()}
                  disabled={isLoading}
                >
                  <Text className="text-[#EDF1D6] text-[18px] leading-[22.5px] font-Quicksand_Bold">
                    {isLoading ? "Loading..." : "Register"}
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
                  <Link to="/RegisterWithScreen">
                    <Text className="text-[#40513B] text-[12px] leading-[15.5px] font-Quicksand_Bold ml-2">
                      Daftar
                    </Text>
                  </Link>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};