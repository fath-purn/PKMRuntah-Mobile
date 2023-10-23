import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TitleContent(props) {
    const navigation = useNavigation();

    const handlerSubmit = (navigate) => {
        navigation.navigate(navigate);
    }
    return (
        <View className="flex flex-row justify-between w-[90%]">
            <Text className="text-[20px] font-Quicksand_Bold leading-[25px] text-[#40513B]">
                {props.title}
            </Text>
            <TouchableOpacity onPress={() => handlerSubmit(props.linkNavigation)}>
                <Text className="text-[16px] leading-[20px] font-Quicksand_Bold text-[#9DC08B]">
                    See all
                </Text>
            </TouchableOpacity>
        </View>
    );
};
