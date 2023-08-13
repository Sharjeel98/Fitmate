// IMAGES (PNG/JPG etc)
import {Dimensions} from 'react-native';
const IMAGE_DIR = '../images/';

// IMAGES

const appImages = {
  splash: require(IMAGE_DIR + 'splash.png'),
  bottombg1: require(IMAGE_DIR + 'bottombg1.png'),
  topbg1: require(IMAGE_DIR + 'topbg1.png'),
  topbg2: require(IMAGE_DIR + 'topbg2.png'),
  biguser: require(IMAGE_DIR + 'biguser.png'),
  bottomtab: require(IMAGE_DIR + 'bottomtab.png'),
};

// SVGS

import ball1 from '../icons/ball1.svg';
import ball2 from '../icons/ball2.svg';
import ball3 from '../icons/ball3.svg';
import bellicon from '../icons/bellicon.svg';
import dummynumbers from '../icons/dummynumbers.svg';

import bigpost from '../icons/bigpost.svg';
import biguser from '../icons/biguser.svg';
import bottomtab from '../icons/bottomtab.svg';
import changeimg from '../icons/changeimg.svg';
import checkedmark from '../icons/checkedmark.svg';
import dummyfootball from '../icons/dummyfootball.svg';
import dummyloc from '../icons/dummyloc.svg';
import eyeclose from '../icons/eyeclose.svg';
import facebookbutton from '../icons/facebookbutton.svg';
import googlebutton from '../icons/googlebutton.svg';
import homeicon from '../icons/homeicon.svg';
import leftarrow from '../icons/leftarrow.svg';
import locicon from '../icons/locicon.svg';
import map from '../icons/map.svg';
import searchicon from '../icons/searchicon.svg';
import switches from '../icons/switches.svg';

import topbg1 from '../icons/topbg1.svg';
import bottombg1 from '../icons/bottombg1.svg';
import sliderpost1 from '../icons/sliderpost1.svg';

const SvgIcons = {
  sliderpost1,
  topbg1,
  bottombg1,
  ball1,
  ball2,
  dummynumbers,
  ball3,
  bellicon,
  bigpost,
  biguser,
  bottomtab,
  changeimg,
  checkedmark,
  dummyfootball,
  dummyloc,
  eyeclose,
  facebookbutton,
  googlebutton,
  homeicon,
  leftarrow,
  locicon,
  map,
  searchicon,
  switches,
};

// FONT FAMILY

const fontFamily = {
  appTextRegular: 'Rubik-Regular',
  appTextSemibold: 'Rubik-SemiBold',
  appTextBold: 'Rubik-Bold',
  appTextExtraBold: 'Rubik-ExtraBold',
  appTextMedium: 'Rubik-Medium',
  appTextLight: 'Rubik-Light',
};

// COLORS

const colors = {
  // appPrimary: '#848489',
  // appBlack: '#25282A',
  // appCyan: '#A1E6E0',
  // appGreen: '#8CD47E',
  // appRed: '#FF6961',
  // appSolidBlack: '#000',
  // appSolidWhite: '#fff',
};

// DIMENSIONS

// ACCORDING TO WINDOW HEIGHT / WIDTH ( NORMAL USAGE )

const responsiveWidth = e => {
  return (Dimensions.get('window').width / 100) * e;
};
const responsiveHeight = e => {
  return (Dimensions.get('window').height / 100) * e;
};
const responsiveFontSize = e => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return ((height + width) / 100) * e;
};
const responsiveAverage = e => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return ((height + width) / 100) * e;
};

// USAGE

// width: responsiveWidth(40)
// height: responsiveHeight(40)
// fontSize: responsiveFontSize(40)

// ACCORDING TO SCREEN HEIGHT / WIDTH ( USE WHEN NEEDED )

const responsiveScreenWidth = e => {
  return (Dimensions.get('screen').width / 100) * e;
};
const responsiveScreenHeight = e => {
  return (Dimensions.get('screen').height / 100) * e;
};
const responsiveScreenFontSize = e => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return ((screenHeight + screenWidth) / 100) * e;
};
const responsiveScreenAverage = e => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  return ((height + width) / 100) * e;
};
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const apiUtility = {
  // baseURL: "http://192.168.18.88:8000/api",  // local
  // imageURL:"http://192.168.18.88:8000/images/" // local
};

export {
  appImages,
  SvgIcons,
  fontFamily,
  colors,
  apiUtility,
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
  responsiveAverage,
  responsiveScreenAverage,
  width,
  height,
  screenWidth,
  screenHeight,
};
