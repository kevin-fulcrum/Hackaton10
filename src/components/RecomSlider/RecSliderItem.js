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
    width: width / 4,
    height: height / 6,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {},
  image: {
    width: width / 5,
    height: height / 6,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const RecSliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecSliderItem;
