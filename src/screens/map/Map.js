import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
//import InputSearchLocation from '../../components/searchLocation/InputSearchLocation'
import GoogleMaps from '../../components/Maps/Android/';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Button from '../../components/button/Button'

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

const Map = ({navigation, route}) => {
    const [latiudRes, setLatiudRes] = useState();
    const [longitudRes, setLongitudRes] = useState();
  return (
    <>
    <View style={{flexDirection: 'row'}}>
        <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = true) => {
                setLatiudRes(details.geometry.location.lat);
                setLongitudRes(details.geometry.location.lng);
                console.warn(details.geometry.location);
                }}
                query={{
                key: 'AIzaSyCwaoZ1oprvpu8Ad6duiv5JJRYq0F3kiqg',
                language: 'en',
                }}
            />
            <Button label={'Actual'} onPress={()=>{setLatiudRes(undefined)}}></Button>
    </View>    
        <SafeAreaView style={styles.containerSafeArea}>
        <GoogleMaps latiudRes={latiudRes} longitudRes={longitudRes}/>
        </SafeAreaView>
    </>
  );
};

export default Map;