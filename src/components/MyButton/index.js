import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  fontFamily,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/utilities';
import {navigationRef} from '../../routes';

const MyButton = ({title = 'Dummy', customStyles, navigate, onPress}) => {
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : () => {
              navigationRef.current.navigate(navigate);
            }
      }
      style={[styles.buttonStyle, customStyles]}>
      <Text
        style={{
          color: '#fff',
          fontFamily: fontFamily.appTextMedium,
          fontSize: responsiveFontSize(1.4),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#A45F9E',
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1.8),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#A45F9E',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
