import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";


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
        className="bg-[#EDF1D6]"
      >

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