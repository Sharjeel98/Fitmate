import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  appImages,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../assets/utilities';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 1800);
  return (
    <View>
      <StatusBar hidden />
      <Image
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
        }}
        source={appImages.splash}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
