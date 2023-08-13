import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  SvgIcons,
  appImages,
  fontFamily,
  height,
  responsiveFontSize,
  responsiveHeight,
  width,
} from '../../assets/utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Image source={appImages.topbg1} style={styles.topimg} />
        {/* <SvgIcons.topbg1 width={'100%'} style={styles.topimg} /> */}
        <SvgIcons.bottombg1 width={'100%'} style={styles.bottomimg} />
        <StatusBar hidden={false} barStyle={'light-content'} />
        <Text style={styles.txt1}>ברוך הבא ל{'\n'}FitMate.</Text>
        <Text style={styles.txt2}>
          הזן את כתובת הדוא"ל והסיסמה שלך לשימוש{'\n'}היישום
        </Text>
        <View style={styles.cont1}>
          <Text style={styles.inputtxt1}>שם משתמש</Text>
          <TextInput style={styles.inputstyle} />
        </View>
        <View style={[styles.cont1, {marginTop: responsiveHeight(3)}]}>
          <Text style={styles.inputtxt1}>סיסמה</Text>
          <View style={styles.innercont}>
            <TextInput style={styles.inputstyle} secureTextEntry={true} />
          </View>
        </View>
        <View style={styles.rowcont}>
          <View style={styles.checkcont}>
            <Text style={styles.checktxt1}>זכור סיסמה</Text>
            <SvgIcons.checkedmark />
          </View>
          <Text style={styles.checktxt2}>שכחת סיסמה?</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.mainbtn}
          onPress={() => {
            navigation.navigate('App');
          }}>
          <Text style={styles.btntxt1}>התחבר</Text>
        </TouchableOpacity>
        <Text style={styles.txt3}>התחבר עם</Text>
        <View style={styles.btnscont}>
          <TouchableOpacity activeOpacity={0.7}>
            <SvgIcons.facebookbutton width={width * 0.38} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <SvgIcons.googlebutton width={width * 0.38} />
          </TouchableOpacity>
        </View>
        <View style={styles.lasttxtview}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.lasttxt1}> הירשם עכשיו</Text>
          </TouchableOpacity>

          <Text style={styles.lasttxt2}>יש לך חשבון?</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  lasttxtview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
    marginBottom: 5,
  },
  lasttxt1: {
    color: '#E1B26E',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.4),
  },
  lasttxt2: {
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.4),
  },
  btnscont: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  txt3: {
    fontFamily: fontFamily.appTextRegular,
    color: '#fff',
    fontSize: responsiveFontSize(1.3),
    alignSelf: 'center',
    marginTop: height * 0.06,
  },
  btntxt1: {
    color: '#fff',
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.3),
  },
  mainbtn: {
    backgroundColor: '#E1B26E',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
  },
  container: {
    backgroundColor: '#242A38',
    flex: 1,
  },
  topimg: {
    position: 'absolute',
    top: 0,
    width: width,
    height: width * 0.76,
    resizeMode: 'stretch',
  },
  bottomimg: {
    position: 'absolute',
    bottom: 0,
  },
  txt1: {
    alignSelf: 'flex-end',
    marginTop: height * 0.11,
    textAlign: 'right',
    marginRight: width * 0.05,
    color: '#FFFFFF',
    fontFamily: fontFamily.appTextSemibold,
    fontSize: responsiveFontSize(2),
  },
  txt2: {
    textAlign: 'right',
    marginRight: width * 0.05,
    marginTop: height * 0.02,
    fontFamily: fontFamily.appTextRegular,
    color: '#fff',
    fontSize: responsiveFontSize(1.179),
  },
  cont1: {
    width: width * 0.8,
    // marginLeft: width * 0.1,
    alignItems: 'flex-end',
    marginTop: height * 0.05,
    alignSelf: 'center',
  },
  inputtxt1: {
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.1),
    marginBottom: height * 0.015,
  },
  inputstyle: {
    paddingVertical: 16,
    width: '100%',
    backgroundColor: '#222232',
    borderRadius: 5,
    paddingHorizontal: 15,
    textAlign: 'right',
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    color: '#fff',
  },
  innercont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowcont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: height * 0.018,
    width: width * 0.8,
    alignSelf: 'center',
  },
  checkcont: {
    flexDirection: 'row',
  },
  checktxt1: {
    marginRight: width * 0.03,
    color: '#FFF',
    fontFamily: fontFamily.appTextRegular,
  },
  checktxt2: {
    color: '#E1B26E',
    fontFamily: fontFamily.appTextRegular,
  },
});
