import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// image
import IconQR from '../assets/IconQRCode.png';

export default IconQRCode = () => {
  const navigation = useNavigation();

  const handleScanScreen = () => {
    navigation.navigate('ScanScreen');
  };

  return (
    <TouchableOpacity
      style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#40513B',
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={handleScanScreen}
    >
      <Image source={IconQR} />
    </TouchableOpacity>
  );
}