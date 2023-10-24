import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// image
import IconBack from "../../assets/IconBack.png";
import imageGoogle from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

export default RegisterScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

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
              onPress={() => navigation.navigate("")}
            >
              <View className="w-[20%] mx-2">
                <Image source={imageGoogle} />
              </View>
              <Text className="text-[28px] w-[80%] font-Quicksand_SemiBold text-[#193311] leading-[35px]">
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row items-center my-5 w-[80%]"
              onPress={() => navigation.navigate("")}
            >
              <View className="w-[20%] mx-2">
                <Image source={facebook} />
              </View>
              <Text className="text-[28px] w-[80%] font-Quicksand_SemiBold text-[#193311] leading-[35px]">
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row items-center my-5 w-[80%]"
              onPress={() => navigation.navigate("")}
            >
              <View className="w-[20%] mx-2">
                <Image source={twitter} />
              </View>
              <Text className="text-[28px] w-[80%] font-Quicksand_SemiBold text-[#193311] leading-[35px]">
                Twitter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
