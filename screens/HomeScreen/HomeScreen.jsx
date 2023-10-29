import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// component
import IconQRCode from "../../components/IconQRCode";

// image
import ArticleCarousel from "../../components/ArticleCarousel";
import IconPromo from "../../assets/IconPromo.png";
import LinePromo from "../../assets/LinePromo.png";

// component
import SearchBar from "../../components/SearchBar";
import HomeTopCard from "../../components/HomeTopCard";
import TitleContent from "../../components/TitleContent";
import ContentPromo from "../../components/ContentPromo";

export default HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
      className="flex-1"
    >
      <ScrollView bounces={false}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "position"} // Menghapus behavior pada Android
          keyboardVerticalOffset={Platform.OS === "ios" ? -300 : -300} // Mengatur offset berdasarkan platform
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-full w-screen bg-[#EDF1D6]">
              {/* Search Bar */}
              <SearchBar />

              {/* Menu utama */}
              <HomeTopCard />

              {/* Artikel terkini */}
              <View className="flex items-center mt-6">
                <TitleContent 
                    title="Artikel Terkini"
                    linkNavigation=""
                />
              </View>

              {/* Content article */}
              <ArticleCarousel />

              {/* Promo */}
              <View className="flex items-center mt-6">
                <TitleContent 
                    title="Promo"
                    linkNavigation=""
                />

                {/* Content promo */}
                <ContentPromo />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* QR Code Mengambang */}
      <IconQRCode />
    </SafeAreaView>
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
