import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// image
import IconCheck from "../../assets/IconCheck.png";
import ImageFireworks from "../../assets/ImageFireworks.png";

// component
import ButtonSumbit from "../../components/ButtonSumbit";

export default ScanSuccesScreen = ({ navigation }) => {
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
      className=""
    >
      <View className="bg-[#EDF1D6] h-screen w-screen flex items-center">
        <View className=" flex justify-center items-center h-[87%] w-[80%] ">
          <View className="flex items-center">
            <View className="flex items-center justify-center bg-[#40513B] w-[114px] h-[114px] rounded-full">
              <Image source={IconCheck} />
            </View>
            <View className="w-[50%] mt-4 flex items-center">
              <Text className="text-[#193311] text-[20px] leading-[25px] font-Quicksand_Bold text-center">
                Sampahmu Berhasil Di Scan !
              </Text>
              <Text className="text-[14px] leading-[17.5px] font-Quicksand_Bold text-[#8C8F9D] mt-3">
                Terima Kasih
              </Text>
            </View>
          </View>
        </View>

        <View className="w-[80%] ">
          <ButtonSumbit
            linkNavigation={"ListTrashScreen"}
            title={"Dashboard"}
          />
        </View>

        <Image
          source={ImageFireworks}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </View>
    </SafeAreaView>
  );
};