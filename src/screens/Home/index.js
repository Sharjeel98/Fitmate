import {
  FlatList,
  Image,
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

const Home = ({navigation}) => {
  const [list, setList] = useState([
    {
      icon: SvgIcons.ball1,
    },
    {
      icon: SvgIcons.ball2,
    },
    {
      icon: SvgIcons.ball3,
    },
    {
      icon: SvgIcons.ball2,
    },
    {
      icon: SvgIcons.ball3,
    },
  ]);
  const [list2, setList2] = useState([
    {
      icon: SvgIcons.sliderpost1,
    },
    {
      icon: SvgIcons.sliderpost1,
    },
    {
      icon: SvgIcons.sliderpost1,
    },
    {
      icon: SvgIcons.sliderpost1,
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle={'light-content'} />

      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Image source={appImages.topbg2} style={styles.topimg} />
        <View style={styles.cont1}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.7}>
              <SvgIcons.locicon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <SvgIcons.bellicon style={{marginLeft: width * 0.025}} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.uppertxt}>עומר מורז{'\n'}צהרים טובים</Text>
            <Image source={appImages.biguser} style={styles.imgstyle} />
          </View>
        </View>
        <View style={styles.inputview}>
          <TextInput style={styles.inputstyle} />
          <SvgIcons.searchicon marginRight={'5%'} />
        </View>
        <View
          style={{
            marginTop: responsiveHeight(4.5),
          }}>
          <FlatList
            horizontal
            inverted={true}
            data={list}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('Home2');
                  }}
                  style={{marginRight: width * 0.025}}>
                  <View>{<item.icon />}</View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.cont3}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SvgIcons.leftarrow />
            <Text style={styles.innertxt1}>צפה בכל ההזמנות</Text>
          </View>
          <Text style={styles.innertxt2}>מגרשים בסביבתך</Text>
        </View>
        <SvgIcons.bigpost
          style={{alignSelf: 'center', marginTop: responsiveHeight(3)}}
          width={width * 0.9}
        />
        <View style={styles.cont3}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SvgIcons.leftarrow />
            <Text style={styles.innertxt1}>צפה בכל ההזמנות</Text>
          </View>
          <Text style={styles.innertxt2}>מגרשים בסביבתך</Text>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(2),
            marginBottom: responsiveHeight(2),
          }}>
          <FlatList
            horizontal
            inverted={true}
            data={list2}
            renderItem={({item, index}) => {
              return (
                <View style={{marginRight: width * 0.025}}>
                  {<item.icon />}
                </View>
              );
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <Image
        source={appImages.bottomtab}
        style={{
          resizeMode: 'stretch',
          width: width,
          height: width * 0.292,
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    marginTop: responsiveHeight(6),
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
});
