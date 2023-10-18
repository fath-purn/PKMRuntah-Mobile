import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default ScanScreen = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    AsyncStorage.setItem("qrCode", data);

    navigate.navigate("ResultScanScreen");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
      className="flex-1 flex-col justify-center items-center bg-black"
    >
      <Text className="text-white text-2xl leading-[27.5px] text-center font-Quicksand_Bold w-[70%]">
        Scan Disini
      </Text>
      <View className="flex-1 w-screen max-h-[65%] rounded-2xl bg-black my-3">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text className="text-white text-base leading-5 text-center font-Quicksand_Bold w-[70%]">
        Anda bisa melakukan scan pada qr code yang di berikan.
      </Text>
    </SafeAreaView>
  );
}
