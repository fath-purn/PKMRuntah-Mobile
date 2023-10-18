import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// image
import IconBack from "../../assets/IconBack.png";
import LogoCircle from "../../assets/LogoCircle.png";

import ListItem from "../../components/ListItem";
import ButtonListTrash from "../../components/ButtonListTrash";

export default ListTrashScreen = ({ navigation }) => {
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
    >
      <View className="bg-[#EDF1D6] h-screen w-screen">
        <View>
          <View className="flex items-center mt-6">
            <View className="flex-row items-center space-x-5 w-[90%] ">
              <TouchableOpacity
                TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Image source={IconBack} />
              </TouchableOpacity>
              <Text className="text-[20px] font-Quicksand_Bold leading-[25px]  text-[#40513B]">
                List Trash
              </Text>
            </View>
          </View>
          {/* List Scroll */}
          <ScrollView className="h-[80%]">
            <View className="flex items-center mt-6">
              <View className="w-[90%]">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Menu point bottom */}
        <View style={{ position: 'absolute', bottom: 30, left: 0, right: 0 }} className="">
          <View className="items-center">
            <Text className="text-[20px] w-[90%] text-[#40513B] leading-[25px] font-Quicksand_Bold">
              Point Terkumpul
            </Text>
          </View>
          <View className="items-center mt-3">
            <LinearGradient
              colors={["#609966", "#374F3F"]}
              start={[0.1, 0.1]}
              className="w-[90%] rounded-2xl flex-row items-center p-6"
            >
              <View className="w-[30%]">
                <Image source={LogoCircle} />
              </View>
              <Text className="text-[#EDF1D6] text-[48px] leading-[60px] font-Quicksand_Bold">
                10000 {""}
                <Text className="text-[#EDF1D6] text-[20px] font-Quicksand_Bold">
                  Point
                </Text>
              </Text>
            </LinearGradient>
          </View>

          {/* Button list */}
          <View className="items-center mt-3">
            <View className="w-[90%] flex-row justify-between">
              <ButtonListTrash title="History" link="HomeScreen" />
              <ButtonListTrash title="Pickup" link="HomeScreen" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
