import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

// logo
import Logo from '../../assets/logo.png';

export default GetStarted = ({navigation}) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
        style={{
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        className=""
      >
        <View className="bg-[#EDF1D6] flex h-screen w-screen items-center justify-center">
            <Image source={Logo} />
            <TouchableOpacity onPress={() => navigation.navigate("GetStartedClick")} >
                <Text className="text-green-500">Get Started</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadow: {
      elevation: 5, // Intensitas bayangan
      shadowColor: "#000", // Warna bayangan
      shadowOffset: { width: 0, height: 2 }, // Offset bayangan (horizontal, vertical)
      shadowOpacity: 0.2, // Tingkat transparansi bayangan
      shadowRadius: 2, // Lebar atau kabur bayangan
    },
  });