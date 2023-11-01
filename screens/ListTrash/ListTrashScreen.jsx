import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import axios from "axios";

// image
import IconBack from "../../assets/IconBack.png";
import LogoCircle from "../../assets/LogoCircle.png";

import ListItem from "../../components/ListItem";
import ButtonListTrash from "../../components/ButtonListTrash";

export default ListTrashScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const points = 1000000; // example points value
  const fontSize = points.toString().length >= 6 ? 32 : 48; // set font size based on points value

  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem("@data/barcode");
      if (value !== null) {
        const barcodeData = JSON.parse(value);
        const results = [];
  
        for (const item of barcodeData) {
          const response = await axios.get(
            `https://runtahepr-backend.fly.dev/api/scan/${item.barcode}`
          );
  
          const { result } = response.data;
          const data = {
            status: result.length === 0 ? false : true,
            timestamp: item.date,
            barcode: item.barcode,
            errLocation: item.errLocation,
            location: item.location,
            result: result.length === 0 ? result : result[0],
          };
  
          results.push(data);
        }
  
        return results;
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const { data: dataBarang, isLoading, isError, error } = useQuery(
    "barangData",
    fetchData
  );
  
  if (isLoading) {
    return (
      <View className="flex items-center justify-center w-screen h-screen">
        <ActivityIndicator size={80} color="#609966" />
      </View>
    );
  }
  
  if (isError) {
    return (
      <View className="flex items-center justify-center w-screen h-screen">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

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
              <Text className="text-[20px] font-Quicksand_Bold leading-[25px] text-[#40513B]">
                List Trash
              </Text>
            </View>
          </View>
          {/* List Scroll */}
          <ScrollView className="h-[59%] top-4">
            <View className="flex items-center">
              <View className="w-[90%]">
                {dataBarang.length > 0 ? (
                  dataBarang.map((item, index) => {
                    return !item.status === false ? (
                      <ListItem
                        key={index}
                        namaItem={item.result.namaItem}
                        timestamp={item.timestamp}
                        status={item.status}
                      />
                    ) : (
                      <ListItem
                        key={index}
                        namaItem={item.barcode}
                        timestamp={item.timestamp}
                        status={item.status}
                      />
                    );
                  })
                ) : (
                  <View className="flex items-center justify-center mt-[10%] w-full">
                    <Text className="text-[18px] font-Quicksand_Bold leading-[25px] text-[#40513B]">
                      Tidak ada sampah ditemukan
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Menu point bottom */}
        <View
          style={{ position: "absolute", bottom: 30, left: 0, right: 0 }}
          className=""
        >
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
              <Text
                style={{ fontSize: fontSize }}
                className="text-[#EDF1D6] leading-[60px] font-Quicksand_Bold"
              >
                {points} {""}
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
