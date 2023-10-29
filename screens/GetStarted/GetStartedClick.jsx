import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect } from "react";

// image
import GetStartedImage from "../../assets/getStartedImage.png";
import ButtonSumbit from "../../components/ButtonSumbit";

export default GetStarted = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const loadFonts = async () => {
    await Font.loadAsync({
        Quicksand_Medium: require('../../assets/fonts/Quicksand-Bold.ttf'),
    });
  };

  useEffect(() => {
    loadFonts(); // Memuat font saat komponen dipasang
  }, []);

  return (
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View className="bg-[#EDF1D6] w-screen h-screen flex justify-center items-center">
        <Image source={GetStartedImage} />
        <Text className="text-[#193311] text-[20px] font-Quicksand_Bold my-10 text-center leading-[25px] w-[80%]">
          Transform waste into change with our app. Scan, deposit, and build a
          cleaner future!
        </Text>
        <View className="w-[80%]">
          <ButtonSumbit 
            linkNavigation={"LoginScreen"}
            title={"let's Start Now"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};