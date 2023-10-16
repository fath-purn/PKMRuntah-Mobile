import { Image, TextInput, TouchableOpacity, View } from "react-native";
import IconSearch from "../assets/IconSearch.png";

export default SearchBar = ({ navigation }) => {
  return (
    <View className="flex items-center mt-6">
      <View className="bg-white flex flex-row items-center justify-between px-5 rounded-xl w-[90%]">
        <TextInput
          placeholder="Find Something ...."
          className="font-Quicksand_Medium h-full my-3 w-[90%]"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        >
          <Image source={IconSearch} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
