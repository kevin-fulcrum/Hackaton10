import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/welcome/Welcome'
import Principal from '../screens/principal/Principal'
import Detalle from '../screens/detalle/Detalle' 
import Map from '../screens/map/Map'
import Gallery from '../screens/gallery/Gallery'

const Stack = createStackNavigator();
const forFade =({current})=>({
    cardStyle:{
        opacity: current.progress
    }
});
const HomeStack = () =>{
    return(
        <Stack.Navigator
        initialRouteName="Welcome" 
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
            options={({route}) => ({
                title: route.params.title,
                headerBackTitle: '',
              })}
            />
            <Stack.Screen
            name="Map"
            component={Map}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{header: () => null}}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;
