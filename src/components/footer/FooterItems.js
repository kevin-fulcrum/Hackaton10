import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';
import {
  windowWidth,
  windowHeight,
} from '../../resource/functions/Dimensions';

const FooterItems = ({footerData, navigation}) => {
  const styles = StyleSheet.create({
    title: {
      color: '#212121',
      fontSize: 12,
      textAlign: 'center',
    },
    image: {
      height: 28,
      width: 28,
    },
    buttonFooter: {
      width: windowWidth / footerData.length,
      alignItems: 'center',
      paddingHorizontal: 2,
      paddingVertical: 4,
    },
  });

  const onPressFooter = (route) => {
    if (route === 'Principal') {
      DeviceEventEmitter.emit('eventPrincipal', true);
    }
    if (route === 'Welcome') {
      DeviceEventEmitter.emit('eventWelcome', true);
    }
    navigation.navigate(route);
  };

  return (
    <>
      {footerData.map((i) => (
        <View key={i.length} style={styles.buttonFooter}>
          <TouchableOpacity onPress={() => onPressFooter(i.navigation)}>
            <Image style={styles.image} source={i.image} />
            <Text style={styles.title}>{i.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};
export default FooterItems;
