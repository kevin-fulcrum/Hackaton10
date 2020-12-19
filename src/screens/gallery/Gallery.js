import React from 'react'
import {Text, View, FlatList, Dimensions, Animated, StyleSheet} from 'react-native'
import GallerySliderItem from './GallerySliderItem'
import {ProductData} from '../../resource/data/ProductData'

const {width} = Dimensions.get('window');
const numColumns = 3
const styles = StyleSheet.create({
    dot: {
      flex: 0.05,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
const Gallery = () =>{
    const scrollX = new Animated.Value(0);
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', flexDirection: 'column', marginTop: 50}}>
            <View style={{flex: 0.05, marginTop: 50}}><Text style={{fontSize: 25}}>Your Gallery</Text></View>
                <FlatList 
                style={{flex: 0.95}}
                vertical
                numColumns = {3}
                data={ProductData}
                style={{flex:0.95}}
                renderItem={(item) => {
                    return <GallerySliderItem item={item.item} />;
                  }}
                keyExtractor={(item, index) => 'key' + index}
                />
        </View>
    );
}

export default Gallery;