import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  PermissionsAndroid,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useQuery } from "react-query";
import * as Location from "expo-location";

export default ScanScreen = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [displayNameLocation, setDisplayNameLocation] = useState(null);

  useEffect(() => {
    // permissions for camera
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();

    // permissions for location
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getLastKnownPositionAsync({});
      console.log("location", location);
      if (location) {
        const response = await axios.get(
          `https://geocode.maps.co/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
        );
        setDisplayNameLocation(response.data.display_name);
      } else {
        setErrorMsg('Something went wrong');
      }
      
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    try {
      const value = await AsyncStorage.getItem("@data/barcode");
      const getDate = new Date().toLocaleString();

      if (value !== null) {
        // Value previously stored
        let newValue = JSON.parse(value);

        if (Array.isArray(newValue)) {
          newValue.push({
            barcode: data,
            date: getDate,
            errLocation: errorMsg,
            location: displayNameLocation,
          }); // Add date to the object
        } else {
          // If the stored value is not an array, create a new array with the value
          newValue = [
            {
              barcode: data,
              date: getDate,
              errLocation: errorMsg,
              location: displayNameLocation,
            },
          ]; // Add date to the object
        }

        await AsyncStorage.setItem("@data/barcode", JSON.stringify(newValue));
      } else {
        // If no value is stored, create a new array with the data
        await AsyncStorage.setItem(
          "@data/barcode",
          JSON.stringify([
            {
              barcode: data,
              date: getDate,
              errLocation: errorMsg,
              location: displayNameLocation,
            },
          ]) // Add date to the object
        );
      }
    } catch (e) {
      console.log(e);
    }
    navigate.navigate("ScanSuccessScreen");
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
};
