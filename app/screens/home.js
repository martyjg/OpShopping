import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class App extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = {
      position: {
        latitude: 51.525501,
        longitude: -0.0435500
      },
      error: null
    };
  }
  
  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.setState({
    //       position: position.coords,
    //       error: null,
    //     });
    //   },
    //   (error) => this.setState({error: error.message}),
    //   { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
    // );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapWrapper}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.state.position.latitude,
          longitude: 	this.state.position.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          coordinate={this.state.position}
        />
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
