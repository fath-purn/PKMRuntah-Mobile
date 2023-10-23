import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Button = (props) => {

    const navigation = useNavigation();

    const handlerSubmit = (navigate) => {
        navigation.navigate(navigate);
    }

    return (
        <TouchableOpacity className="flex items-center justify-center h-[50px] rounded-full font-sans bg-[#40513B]" onPress={() => handlerSubmit(props.linkNavigation)}>
            <Text className="text-[#EDF1D6] text-[18px] leading-[22.5px] font-Quicksand_Bold">{props.title}</Text>
        </TouchableOpacity>
    )
}