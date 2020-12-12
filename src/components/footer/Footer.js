import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#d2d9d3',
      flex: 0.1
    },
    text: {
      color: '#2c5c49',
      fontWeight: 'bold',
    },
});

const Footer =()=>{
    return(
        <>
        <View style={styles.footer}>
            <Text style={styles.text}>Footer</Text>
        </View>
        </>
    )
}

export default Footer;