import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    width: width - 20,
    height: height / 4,
    backgroundColor: 'skyblue',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: 'absolute',
    margin: 10,
    marginTop:width/8,
    left: 5,
    right:width/2.3,
  },
  image: {
    width: width /2,
    height: height / 4,
    borderRadius: 50,
    shadowOpacity:0.5,
    shadowRadius:5
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'black',
    fontSize: 15,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 5,
    elevation: 5,
  },
});

const ProductSliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};


export default ProductSliderItem;
