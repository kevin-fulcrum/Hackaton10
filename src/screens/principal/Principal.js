import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Button from '../../../src/components/button/Button1'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import RecSlider from '../../components/RecomSlider/RecSlider'
import {ProductData} from '../../resource/data/ProductData'
import {RecommendData} from '../../resource/data/RecommendData'

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: { flex: 1, height: windowHeight, alignContent: 'center' , justifyContent: 'center', flexDirection:'column', marginHorizontal:10 },
    header: { height: windowHeight/15, justifyContent: 'flex-end',  flexDirection: 'row'},
    button: { height: windowHeight/10, flexDirection: 'row'},
    cont1: { height: windowHeight/3},
    cont2: { height: windowHeight/4},
    footer: { height: windowHeight/15},
    title: {fontWeight: 'bold'},
    subtitle: { fontSize: 16, fontWeight: 'bold'},
})

const Principal = () =>{
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text>Good Morning, </Text><Text style={styles.title}>Kevin A.</Text>
                
            </View>
            <View style = {styles.button}>
                <Button label='Coffe'></Button>
                <Button label='Cake'></Button>
                <Button label='Snack'></Button>
            </View>
            <View style = {styles.cont1}>
                <Text style = {styles.subtitle}>Promo for you</Text>
                <ProductSlider data={ProductData}></ProductSlider>
            </View>
            <View style = {styles.cont2}>
                <Text style = {styles.subtitle}>Recommendation</Text>
                <RecSlider data={RecommendData}></RecSlider>
            </View>
            <View style = {styles.footer}>
                
            </View>
        </View>
    )
}

export default Principal
