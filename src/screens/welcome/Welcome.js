import React from 'react'
import { View, Text, Image , StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native'
import Button from '../../components/button/Button';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 0.7,
      backgroundColor: '#0e6b72',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerEnd: {
      flex: 0.3,
      backgroundColor: '#0e6b72',
      alignItems: 'center',
    },
    image: {
      width: width/2,
      height: height/4,
    },
});

const Welcome =({navigation})=>{
    return(
        <>
        <View style={styles.container}>
            <Image
            source={{
            uri: 'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0e8.png',
            }}
            style={styles.image}> 
            </Image>
        </View>
        <TouchableOpacity style={styles.containerEnd} onPress={()=>{console.warn(navigation.navigate('Principal'))}}>
            <Button label='INGRESAR'></Button>
        </TouchableOpacity>
        </>
    )
}

export default Welcome;