import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/welcome/Welcome'
import Principal from '../screens/principal/Principal'
import Detalle from '../screens/detalle/Detalle' 

const Stack = createStackNavigator();
const forFade =({current})=>({
    cardStyle:{
        opacity: current.progress
    }
});
const HomeStack = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Principal" 
        screenOptions={{cardStyleInterpolator:forFade,}}>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Principal"
            component={Principal}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Detalle"
            component={Detalle}
            options={{header: () => null}}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;
