import { View, Image } from "react-native";

// image
import IconQR from "../assets/IconQRCode.png";

export default IconQRCode = ({ navigation }) => {
    return (
        <View
            className="w-[80px] h-[80px] rounded-full bg-[#40513B] flex items-center justify-center"
            style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            }}
        >
            <Image source={IconQR} />
        </View>
    )
}