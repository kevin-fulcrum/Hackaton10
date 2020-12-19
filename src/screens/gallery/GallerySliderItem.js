import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: width /4,
    height: height / 4,
    borderRadius: 50,
    shadowOpacity:0.5,
    shadowRadius:5,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    marginTop:10
  },
  image1:{
    width: width-150,
    height: height-200
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center"
  }
});

const GallerySliderItem = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false)
  console.warn(item.image)
  return (
      <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          console.warn('close')
        }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{item.title}</Text>
              <Image
              style={styles.image1}
              source={{
                uri: item.image,
              }}
            />
              <TouchableOpacity 
              onPress={()=>{
                setModalVisible(!modalVisible)
              }} >
                <Text>Hide Modal</Text>
              </TouchableOpacity>
              </View>
              </View>
              </Modal>
              <TouchableOpacity
              onPress={()=>{
                setModalVisible(true)
              }}
              >
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      /></TouchableOpacity>
      </View>
  );
};


export default GallerySliderItem;
