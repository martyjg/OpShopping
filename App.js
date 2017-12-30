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
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// <MapView
// style={styles.map}
// initialRegion={{
//   latitude: 51.509865,
//   longitude: 	-0.118092,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// }}/>

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapWrapper}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.509865,
          longitude: 	-0.118092,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        </MapView>
        </View>
        <View style={styles.listingWrapper}>
        <Text>Bye</Text>
      </View>
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
    flexDirection: 'column',
  },
  mapWrapper: {
    flex: 1,
    backgroundColor: 'cyan',
    width: '100%',
  },
  listingWrapper: {
    flex: 1,
    backgroundColor: 'coral',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
