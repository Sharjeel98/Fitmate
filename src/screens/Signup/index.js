import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  SvgIcons,
  appImages,
  fontFamily,
  height,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  width,
} from '../../assets/utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = ({navigation}) => {
  const [list, setList] = useState([
    {
      text: 'כדורסל',
    },
    {
      text: 'כדורגל',
    },
    {
      text: 'טניס',
    },
    {
      text: 'בייסבול',
    },
    {
      text: 'ריצה',
    },
    {
      text: 'רכיבת אופניים',
    },
    {
      text: 'פטנג',
    },
    {
      text: 'אימוני כח',
    },
  ]);
  const Selection = (itemSelected, indexSelected) => {
    const newData = list?.map((item, index) => {
      if (itemSelected === item) {
        if (item?.isSelected) {
          return {
            ...item,
            isSelected: false,
          };
        } else {
          return {
            ...item,
            isSelected: true,
          };
        }
      }
      return {
        ...item,
      };
    });

    setList(newData);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Image source={appImages.topbg1} style={styles.topimg} />
        <View style={styles.upperview}>
          <SvgIcons.changeimg />
          <Text style={styles.uppertxt1}>רותם טל</Text>
          <Text style={styles.uppertxt2}>@Rotemm23</Text>
        </View>
        <SvgIcons.bottombg1 width={'100%'} style={styles.bottomimg} />

        <StatusBar hidden={false} barStyle={'light-content'} />

        <View style={styles.cont1}>
          <Text style={styles.inputtxt1}>שם מלא</Text>
          <TextInput style={styles.inputstyle} />
        </View>
        <View style={[styles.cont1, {marginTop: responsiveHeight(3)}]}>
          <Text style={styles.inputtxt1}>מספר טלפון</Text>
          <TextInput style={styles.inputstyle} />
        </View>
        <View style={[styles.cont1, {marginTop: responsiveHeight(3)}]}>
          <Text style={styles.inputtxt1}>תאריך לידה</Text>
          <TextInput style={styles.inputstyle} />
        </View>
        <Text style={styles.righttxt}>ענפי הספורט שלך</Text>
        <View style={styles.listParent}>
          {list?.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  Selection(item, index);
                }}
                style={[
                  styles.options,
                  {
                    backgroundColor: item?.isSelected ? '#E1B26E' : '#242A38',
                    borderColor: item?.isSelected ? '#E1B26E' : '#fff',
                  },
                ]}>
                <Text style={styles.optionstxt}>{item?.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.rightboxcont}>
          <Text style={styles.checktxt3}>אפשר את המיקום שלי</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.bigcheckbox}></TouchableOpacity>
        </View>
        <SafeAreaView style={{marginBottom: responsiveHeight(3)}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.mainbtn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.btntxt1}>צור כרטיס שחקן</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  optionstxt: {
    color: '#fff',
  },
  options: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 1000,
    borderWidth: responsiveWidth(0.25),

    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listParent: {
    flexDirection: 'row-reverse',
    width: width * 0.95,
    alignSelf: 'center',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  checktxt3: {
    textAlign: 'right',
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.35),
    marginRight: responsiveWidth(4),
  },
  rightboxcont: {
    marginRight: responsiveWidth(6),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  bigcheckbox: {
    width: 25,
    height: 25,
    borderWidth: 0.5,
    borderRadius: 4.5,
    borderColor: '#fff',
  },
  righttxt: {
    textAlign: 'right',
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.65),
  },
  uppertxt1: {
    fontFamily: fontFamily.appTextMedium,
    color: '#fff',
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.4),
  },
  uppertxt2: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.05),
    color: '#767E8C',
  },
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
  upperview: {
    width: width,
    height: width * 0.76,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: responsiveHeight(4),
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
    fontSize: responsiveFontSize(1.25),
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
