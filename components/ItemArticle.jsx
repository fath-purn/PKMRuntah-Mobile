import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ItemArticle = ({ navigation, item, data, index }) => {
  return (
    <TouchableOpacity
      key={index}
      className={
        index === data - 1
          ? "mx-4 flex-1 rounded-xl relative flex items-center max-w-[180px] max-h-[230px]"
          : "ml-4 flex-1 rounded-xl relative flex items-center max-w-[180px] max-h-[230px]"
      }
    >
      <Image
        source={{
          uri: item.image,
        }}
        className="w-[180px] h-[230px] overflow-hidden rounded-xl z-0"
      />
      <View className="z-10 w-[90%] bottom-11 flex items-start">
        <Text className="text-[#EDF1D6] ml-3 text-[14px] leading-[17.5px] font-Quicksand_Bold ">
          {item.title.length > 30
            ? `${item.title.slice(0, 30)}...`
            : item.title}
        </Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(157, 192, 139, 0)",
          "rgba(157, 192, 139, 0.65)",
          "#83AF6C",
        ]}
        locations={[0.1, 0.8, 0.9]}
        className="absolute bottom-0 w-[180px] h-[230px] rounded-xl"
      ></LinearGradient>
    </TouchableOpacity>
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