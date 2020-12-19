import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
})

const InputSearchLocation = () =>{
    return(
        <View style={styles.container}>
           <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                }}
                query={{
                key: 'AIzaSyCwaoZ1oprvpu8Ad6duiv5JJRYq0F3kiqg',
                language: 'en',
            }}
            />
        </View>
    )
}

export default InputSearchLocation;