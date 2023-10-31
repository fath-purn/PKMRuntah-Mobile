import { View, Text } from "react-native";

export default ListItem = (props) => {
  return (
    <View className="bg-white rounded-md p-6 my-2">
      <Text className="text-[#40513B] text-[20px] leading-[25px] font-Quicksand_Bold ">
        {props.namaItem}
      </Text>
      <View className="flex-row justify-between mt-2 items-center">
        <Text className="text-[#40513B] text-[16px] leading-[20px] font-Quicksand_Bold ">
          250 ml
        </Text>
        <Text className="text-[#609966] text-[16px] leading-[20px] font-Quicksand_Bold ">
          {props.timestamp}
        </Text>
      </View>
    </View>
  );
};