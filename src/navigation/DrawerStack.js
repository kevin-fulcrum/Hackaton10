import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuDrawer from '../components/footer/MenuDrawer';
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return ( 
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName='WelcomeStack'
      drawerContent={(parameters) => <MenuDrawer {...parameters} />
      }>
      <Drawer.Screen
        name="WelcomeStack"
        component={HomeStack}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
