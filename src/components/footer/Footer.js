import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
} from 'react-native';
import {
  windowWidth,
  windowHeight,
} from '../../resource/functions/Dimensions';
import {footerData} from '../../resource/data/FooterData';
import FooterItems from '../footer/FooterItems';

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DADADA',
    backgroundColor: '#F9f9f9',
    paddingBottom: 0,
  },
});
const Footer = ({navigation}) => {
  return (
    <View style={styles.box}>
      <FooterItems
        footerData={footerData}
        navigation={navigation}
      />
    </View>
  );
};

export default Footer;
