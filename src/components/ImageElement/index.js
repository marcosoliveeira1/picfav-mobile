import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class ImageElement extends Component {
  render() {
    return (<Image source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }} style={styles.image} />);
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});
