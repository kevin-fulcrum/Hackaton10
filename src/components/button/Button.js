import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#d2d9d3',
      borderRadius: 20,
    },
    text: {
      marginHorizontal: 25,
      marginVertical: 15,
      color: '#2c5c49',
      fontWeight: 'bold',
    },
});

const Button =({label})=>{
    return(
        <>
        <View style={styles.button}>
          <Text style={styles.text}>{label}</Text>
        </View>
        </>
    )
}

export default Button;