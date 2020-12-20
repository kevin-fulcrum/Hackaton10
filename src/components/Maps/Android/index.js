import React, {useState, useEffect, useRef} from 'react';
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
  const reference = useRef(null);
  useEffect(() => {
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
        const {latitude, longitude} = position.coords;

        if(latiudRes===undefined) {
        setLocation({
            "latitude" : latitude,
            "longitude" : longitude
          });
          reference.current.animateToRegion({
            latitude : latitude,
            longitude : longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })    
        console.warn('location1', location)  
        }else{
        setLocation({
            "latitude" : latiudRes,
            "longitude" : longitudRes
          });
          reference.current.animateToRegion({
            latitude : latiudRes,
            longitude : longitudRes,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })  
          console.warn('location2', location.latitude)  
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
          ref={reference}
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
