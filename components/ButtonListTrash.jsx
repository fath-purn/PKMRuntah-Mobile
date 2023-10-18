import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default ButtonListTrash = (props) => {
    const navigation = useNavigation();

    const handlerNavigate = (link) => {
        navigation.navigate(link);
    }
  
    return (
    <TouchableOpacity onPress={() => handlerNavigate(props.link)} className="w-[45%]">
      <LinearGradient
        colors={["#609966", "#374F3F"]}
        start={[0.1, 0.1]}
        className="rounded-2xl py-3"
      >
        <Text className="text-[16px] text-center text-white leading-[24px] font-Quicksand_Bold">
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
