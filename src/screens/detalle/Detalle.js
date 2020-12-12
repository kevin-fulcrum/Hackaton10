import React from 'react'
import { View, Text, Image , StyleSheet, Dimensions, ImageBackground, SafeAreaView} from 'react-native'
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea :{
      flex: 1
    },
    container: {
      flex: 0.2,
      backgroundColor: '#0e6b72',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerDos: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: '#0e6b72',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTres: {
      flex: 0.1,
      backgroundColor: '#0e6b72',
      alignItems: 'center',
    },
    containerEnd: {
      flex: 0.2,
      backgroundColor: '#0e6b72',
      alignItems: 'center',
    },
    image: {
      width: width/2,
      height: height/4,
    },
});

const Detalle =({navigation, route})=>{
  console.warn("route: ",route.params)
    return(
        <>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={{color: '#ffffff', fontSize: 20}}>{route.params.title}</Text>
            <Text style={{color: '#c0bb65', fontWeight: 'bold', fontSize: 25, marginTop: 5}}>$15,00</Text>
        </View>
        <View style={styles.containerDos}>
            <View>
                <Button label='S'></Button>
                <Button label='M'></Button>
                <Button label='L'></Button>
            </View>
            <View>
                <Image
                source={{
                uri: route.params.image,
                }}
                style={styles.image}> 
                </Image>
            </View>
        </View>
        <View style={styles.containerTres}>
            <Text style={{color: '#c0bb65', fontWeight: 'bold', fontSize: 20, marginTop: 5}}>3</Text>
        </View>
        <View style={styles.containerEnd}>
            <Button label='Add to cart'></Button>
        </View>
        <Footer></Footer>
        </SafeAreaView>
        </>
    )
}

export default Detalle;