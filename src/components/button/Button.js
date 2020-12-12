import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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

const Button =({label,onPress})=>{
    return(
        <>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{label}</Text>
        </View>
        </TouchableOpacity>
        </>
    )
}

export default Button;