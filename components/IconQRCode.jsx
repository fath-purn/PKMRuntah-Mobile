import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

// image
import IconQR from "../assets/IconQRCode.png";

export default IconQRCode = () => {
  const navigation = useNavigation();

  const handleScanScreen = () => {
    navigation.navigate('ScanScreen');
  };

  return (
    <TouchableOpacity
      className="w-[80px] h-[80px] rounded-full bg-[#40513B] flex items-center justify-center"
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
      onPress={handleScanScreen}
    >
      <Image source={IconQR} />
    </TouchableOpacity>
  )
}