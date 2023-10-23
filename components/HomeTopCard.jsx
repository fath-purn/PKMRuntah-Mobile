import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// image
import IconExchange from "../assets/IconExchange.png";
import IconTicket from "../assets/IconTicket.png";
import RuntahLogo from "../assets/RuntahLogo.png";
import BackMenuUtama from "../assets/BackMenuUtama.png";

export default HomeTopCard = ({}) => {
  const navigation = useNavigation();

  const handlePressTop = () => {
    navigation.navigate("ListTrashScreen");
  };

  const handlePressBottom = () => {
    navigation.navigate("ScanSuccesScreen");
  };
 
  return (
    <View className="flex items-center mt-6">
      <LinearGradient
        colors={["#609966", "#374F3F"]}
        start={[0.1, 0.1]}
        className=" w-[90%] rounded-2xl"
      >
        {/* Atas */}
        <View className="flex flex-row justify-between ml-2 mr-5 my-3 pt-5 items-center">
          <Image source={RuntahLogo} />
          <TouchableOpacity
            className="w-[60px] h-[60px] rounded-2xl z-10 bg-white flex items-center justify-center"
            onPress={handlePressTop}
            style={styles.shadow}
          >
            <Image source={IconExchange} />
          </TouchableOpacity>
        </View>

        {/* Bawah */}
        <View className="flex flex-row justify-between mx-5 my-3 pb-5 items-end">
          <Text className="font-Quicksand_SemiBold text-[#EDF1D6] leading-[60px] text-[48px]">
            1000 <Text className="text-[25px]">Point</Text>
          </Text>
          <TouchableOpacity
            className="w-[60px] h-[60px] rounded-2xl z-10 bg-white flex items-center justify-center"
            onPress={handlePressBottom}
            style={styles.shadow}
          >
            <Image source={IconTicket} />
          </TouchableOpacity>
        </View>

        {/* Background */}
        <Image
          source={BackMenuUtama}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
          }}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5, // Intensitas bayangan
    shadowColor: "#000", // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
});