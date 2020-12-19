import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
//import InputSearchLocation from '../../components/searchLocation/InputSearchLocation'
import GoogleMaps from '../../components/Maps/Android/';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 0.5,
    backgroundColor: '#f9f9f9',
  },
});

const Map = ({navigation, route}) => {
  const {title, image, id, price, description, category, collections} =
    route.params || {};
  return (
    <>
        <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = true) => {
                // 'details' is provided when fetchDetails = true
                console.warn(data, details);
                }}
                query={{
                key: 'AIzaSyCwaoZ1oprvpu8Ad6duiv5JJRYq0F3kiqg',
                language: 'en',
            }}
            />
      <SafeAreaView style={styles.containerSafeArea}>
        <GoogleMaps />
      </SafeAreaView>
    </>
  );
};

export default Map;