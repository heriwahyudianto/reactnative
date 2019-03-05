/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';

const instructions = Platform.select({
 // ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  constructor(props){
    super(props);
    this.state={
      defName:"Su",
    };

  }

  render(){
    if (this.state.defName=='Su'){
      return (
        <Text>Hello {this.state.defName}</Text>
      );
    } else {
      return (
        <Text>Hello {this.props.name}</Text>
      );
    }
  }
}

//type Props = {};
export default class Bananas extends Component {
  render() {
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View>
        <Image source={pic} width={Dimensions.get('window').width} />
        <Greeting name="heri" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
