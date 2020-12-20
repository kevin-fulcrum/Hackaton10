import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentDrawer: {
    flex: 1,
  },
  userInfo: {
    marginLeft: 20,
  },
  image: {
    width: 36,
    height: 36,
  },
});

const MenuDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentDrawer}>
          <View style={styles.userInfo} />
          <Text>HACKATON 10</Text>
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../resource/static/images/icons/avatar.png')}
              />
            )}
            label="Principal"
            onPress={() => {
              props.navigation.navigate('Principal');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../resource/static/images/icons/avatar.png')}
              />
            )}
            label="Welcome"
            onPress={() => {
                props.navigation.navigate('Welcome');
              }}
          />
          <Text>HACKATON 11</Text>
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../resource/static/images/icons/avatar.png')}
              />
            )}
            label="Map"
            onPress={() => {
                props.navigation.navigate('Map');
              }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../resource/static/images/icons/avatar.png')}
              />
            )}
            label="Gallery"
            onPress={() => {
                props.navigation.navigate('Gallery');
              }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
