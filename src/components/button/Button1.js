import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: windowWidth / 3.3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2d9d3',
    marginRight: 10
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black'
  },
});

const Button = ({label}) => {
  return (
    <TouchableOpacity
      style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
