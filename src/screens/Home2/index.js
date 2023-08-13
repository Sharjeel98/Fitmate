import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
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

const Home2 = ({navigation}) => {
  const [list, setList] = useState([
    {
      text: 'הכל',
    },
    {
      text: 'חינם',
    },
    {
      text: 'בתשלום',
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
      <StatusBar hidden={false} barStyle={'light-content'} />

      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Image source={appImages.topbg2} style={styles.topimg} />
        <SvgIcons.bottombg1 width={'100%'} style={styles.bottomimg} />

        <View style={styles.cont1}>
          <TouchableOpacity activeOpacity={0.7}>
            <SvgIcons.locicon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <SvgIcons.homeicon style={{marginLeft: width * 0.025}} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputview}>
          <TextInput style={styles.inputstyle} />
          <SvgIcons.searchicon marginRight={'5%'} />
        </View>
        <View
          style={{
            marginTop: responsiveHeight(4.5),
            alignItems: 'center',
          }}>
          <SvgIcons.switches />
        </View>
        <SvgIcons.map
          style={{alignSelf: 'center', marginTop: responsiveHeight(2.8)}}
        />
        <Text
          style={{
            textAlign: 'right',
            marginRight: responsiveWidth(6),
            color: '#fff',
            fontFamily: fontFamily.appTextRegular,
            fontSize: responsiveFontSize(1.5),
          }}>
          מיקום
        </Text>
        <SvgIcons.dummyloc
          style={{alignSelf: 'center', marginTop: responsiveHeight(1.5)}}
        />
        <Text
          style={{
            textAlign: 'right',
            marginRight: responsiveWidth(6),
            color: '#fff',
            fontFamily: fontFamily.appTextRegular,
            fontSize: responsiveFontSize(1.5),
            marginTop: responsiveHeight(2.5),
          }}>
          מיקום
        </Text>
        <SvgIcons.dummyfootball
          style={{alignSelf: 'center', marginTop: responsiveHeight(1.5)}}
        />
        <Text
          style={{
            textAlign: 'right',
            marginRight: responsiveWidth(6),
            color: '#fff',
            fontFamily: fontFamily.appTextRegular,
            fontSize: responsiveFontSize(1.5),
            marginTop: responsiveHeight(2.5),
          }}>
          תשלום
        </Text>
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
        <Text
          style={{
            textAlign: 'right',
            marginRight: responsiveWidth(6),
            color: '#fff',
            fontFamily: fontFamily.appTextRegular,
            fontSize: responsiveFontSize(1.5),
            marginTop: responsiveHeight(2.5),
          }}>
          תשלום
        </Text>
        <SvgIcons.dummynumbers
          style={{alignSelf: 'center', marginTop: responsiveHeight(1.5)}}
        />
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width * 0.8,
            alignSelf: 'center',
            marginTop: responsiveHeight(6),
            marginBottom: responsiveHeight(15),
          }}>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn1}>
            <Text style={styles.btn1txt}>איפוס</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn2}>
            <Text style={styles.btn2txt}>חיפוש</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({
  btn1txt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#151D31',
    fontSize: responsiveFontSize(1.5),
  },
  btn2txt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#fff',
    fontSize: responsiveFontSize(1.35),
  },
  btn1: {
    width: width * 0.38,
    paddingVertical: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
  },
  btn2: {
    width: width * 0.38,
    paddingVertical: 15,
    backgroundColor: '#DFB06B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
  },
  cont3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  innertxt1: {
    color: '#DFAD6A',
    marginLeft: width * 0.02,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1),
  },
  innertxt2: {
    color: '#fff',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
  },
  inputview: {
    width: responsiveWidth(90),
    borderRadius: 1000,
    backgroundColor: '#242A38',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(3.5),
  },
  inputstyle: {
    width: '85%',
    paddingVertical: 18,
    // paddingHorizontal: 10,
    color: '#fff',
    textAlign: 'right',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.179),
  },
  uppertxt: {
    textAlign: 'right',
    marginRight: responsiveWidth(5),
    color: '#fff',
    fontSize: responsiveFontSize(1.45),
    fontFamily: fontFamily.appTextMedium,
  },
  imgstyle: {
    width: width * 0.15,
    height: width * 0.35,
    resizeMode: 'contain',
  },
  cont1: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-between',
    marginTop: responsiveHeight(10.5),
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#242A38',
    flex: 1,
  },
  topimg: {
    position: 'absolute',
    top: 0,
    width: width,
    height: width * 0.74,
    resizeMode: 'stretch',
  },
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
  bottomimg: {
    position: 'absolute',
    bottom: 0,
  },
});
