import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {...StyleSheet.absoluteFillObject},
});

const GoogleMaps = ({latiudRes, longitudRes}) => {
  const [location, setLocation] = useState();
  useEffect(() => {
    console.warn('useEffect');
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
    Geolocation.getCurrentPosition(
      
      (position) => {
        console.warn('position', position);
        console.log('ssss', longitudRes)
        const {latitude, longitude} = position.coords;
        if (latiudRes === '' && longitudRes === ''){
          setLocation({
            "latitude" : latitude,
            "longitude" : longitude
          });
        }
        else{
          setLocation({
            "latitude" : latiudRes,
            "longitude" : longitudRes
          });
        }
      },
      (error) => {
        console.warn(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [latiudRes, longitudRes]);
  return (
    <>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.maps}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(region) => {
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}
          onRegionChangeComplete={(region) => {
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="this is a marker"
            description="this is a marker description"
          />
        </MapView>
      )}
    </>
  );
};

export default GoogleMaps;
