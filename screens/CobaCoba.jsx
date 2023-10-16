import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from "react-native";

const CobaCoba = () => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Konten lainnya */}
              <Text>Contoh Konten</Text>
              <View className=" bg-white">
                <View className="w-20 h-20 bg-black"></View>
                <View className="w-20 h-20 bg-red-500"></View>
                <View className="w-20 h-20 bg-green-500"></View>
                <View className="w-20 h-20 bg-blue-500"></View>
                <View className="w-20 h-20 bg-black"></View>
                <View className="w-20 h-20 bg-red-500"></View>
                <View className="w-20 h-20 bg-green-500"></View>
                <View className="w-20 h-20 bg-blue-500"></View>
                <View className="w-20 h-20 bg-black"></View>
                <View className="w-20 h-20 bg-red-500"></View>
                <View className="w-20 h-20 bg-green-500"></View>
                <View className="w-20 h-20 bg-blue-500"></View>
                <View className="w-20 h-20 bg-black"></View>
                <View className="w-20 h-20 bg-red-500"></View>
                <View className="w-20 h-20 bg-green-500"></View>
                <View className="w-20 h-20 bg-blue-500"></View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity key={item.key} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(157, 192, 139, 0)",
            "rgba(157, 192, 139, 0.65)",
            "#83AF6C",
          ]}
          locations={[0.1, 0.5, 0.9]}
          style={{ flex: 1, borderRadius: 10 }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            {item.title}
          </Text>
          <Image
            source={{
              uri: item.image,
            }}
            style={{
              width: 180,
              height: 230,
              overflow: "hidden",
              borderRadius: 10,
            }}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CobaCoba;
