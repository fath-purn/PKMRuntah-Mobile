import { View, Text, Image } from "react-native";

import IconError from "../assets/IconError.png";

export default ErrorNotification = (props) => {
    return (
        <View className="flex items-center justify-center top-20 relative z-50 ">
          <View className=" h-[60px] w-[80%] absolute bg-[#FFFFFFCC] rounded-full">
            <View className="flex flex-row justify-evenly items-center w-full h-full">
              <Text className=" text-[#40513B] text-[16px] leading-[20px] font-Quicksand_Bold">
                {props.messageError}
              </Text>
              <Image source={IconError} />
            </View>
          </View>
        </View>
    )
}