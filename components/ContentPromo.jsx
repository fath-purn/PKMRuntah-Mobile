import { View, Text, Image } from "react-native";
import IconPromo from "../assets/IconPromo.png";
import LinePromo from "../assets/LinePromo.png";

export default ContentPromo = ({ navigation }) => {
  return (
    <View className="bg-[#9DC08B] w-[90%] my-3 rounded-xl p-6">
      <View
        className="flex-row justify-between"
        style={{ position: "relative" }}
      >
        <View className="flex flex-col" style={{ zIndex: 10 }}>
          <Text className="text-[#EDF1D6] font-Quicksand_Bold leading-[62.5px] text-[62.5px]">
            20%
            <Text className="text-[25px]">Off</Text>
          </Text>
          <Text className="text-[#EDF1D6] font-Quicksand_Bold leading-[20px]">
            on your first Order!
          </Text>
          <View className="bg-[#EDF1D6] w-[135px] h-[30px] rounded-lg mt-4 flex items-center justify-center">
            <Text className="text-[#193311] font-Quicksand_Bold text-[11px] leading-[13.75px]">
              Use Code : AV54GK70
            </Text>
          </View>
        </View>
        <View className="" style={{ zIndex: 5 }}>
          <Image source={IconPromo} />
        </View>
      </View>
      <Image
        source={LinePromo}
        className=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
    </View>
  );
};
