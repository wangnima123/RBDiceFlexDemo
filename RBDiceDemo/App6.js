/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import PropTypes from 'prop-types';

const { screenWidth, screenHeight } = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backView}>
          <View style={styles.diceView}>
            <View style={[styles.diceWrapper, { justifyContent: 'center' }]}>
              <View style={[styles.dicePoint, { marginRight: 40 }]}></View>
              <View style={[styles.dicePoint, { marginLeft: 40 }]}></View>
            </View>
            <View style={[styles.diceWrapper, { justifyContent: 'center' }]}>
              <View style={[styles.dicePoint, { marginRight: 40 }]}></View>
              <View style={[styles.dicePoint, { marginLeft: 40 }]}></View>
            </View>
            <View style={[styles.diceWrapper, { justifyContent: 'center' }]}>
              <View style={[styles.dicePoint, { marginRight: 40 }]}></View>
              <View style={[styles.dicePoint, { marginLeft: 40 }]}></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  //flex布局对于子控件，只有有内容，height 才会生效
  backView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  diceView: {
    width: 180,
    height: 180,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'cyan',
    borderRadius: 12,
  },
  diceWrapper: {
    flex: 1,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  dicePoint: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
  }
});
